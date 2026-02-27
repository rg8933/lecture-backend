import os
import asyncio
from aiohttp import web
from telethon import TelegramClient
import logging
import re
from dotenv import load_dotenv

# --- Configuration ---
load_dotenv(dotenv_path='.env')

API_ID = os.getenv('TELEGRAM_API_ID', '34553471')
API_HASH = os.getenv('TELEGRAM_API_HASH', '1a5f92c18abc7e3427cd27fa4fc20cc0')
SESSION_NAME = 'media_server_session'
THUMBS_DIR = os.getenv('THUMBS_DIR', 'public/thumbnails')

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

async def stream_video(request):
    client = request.app.get('telegram_client')
    if not client:
        return web.Response(text="Telegram client not initialized", status=500)

    try:
        channel_id = int(request.match_info.get('channel_id'))
        message_id = int(request.match_info.get('message_id'))
        
        if not str(channel_id).startswith('-100'):
            channel_id = int(f"-100{channel_id}")
        
        logger.info(f"Request for {channel_id}/{message_id}")
        
        entity = await client.get_entity(channel_id)
        # Fix: use get_messages instead of get_message
        msgs = await client.get_messages(entity, ids=message_id)
        message = msgs if msgs else None
        
        if not message or not message.media:
            return web.Response(text="No media found", status=404)

        file = message.media.document
        mime_type = file.mime_type or 'video/mp4'
        file_size = file.size

        range_header = request.headers.get('Range')
        start = 0
        end = file_size - 1

        if range_header:
            match = re.search(r'bytes=(\d+)-(\d*)', range_header)
            if match:
                start = int(match.group(1))
                if match.group(2):
                    end = int(match.group(2))
            logger.info(f"Range request: {start}-{end}/{file_size}")

        content_length = end - start + 1
        
        response = web.StreamResponse(
            status=206 if range_header else 200,
            reason='Partial Content' if range_header else 'OK',
            headers={
                'Content-Type': mime_type,
                'Content-Length': str(content_length),
                'Content-Range': f'bytes {start}-{end}/{file_size}',
                'Accept-Ranges': 'bytes',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Range, Content-Type',
                'Access-Control-Expose-Headers': 'Content-Range, Content-Length, Accept-Ranges',
            }
        )

        await response.prepare(request)

        try:
            # Stream the file in chunks
            # Stride should be reasonably large but not too huge
            async for chunk in client.iter_download(file, offset=start, stride=512*1024): 
                if len(chunk) > (end - (start) + 1):
                    chunk = chunk[:(end - start + 1)]
                
                await response.write(chunk)
                start += len(chunk)
                if start > end:
                    break
        except ConnectionResetError:
            logger.info("Client reset connection")
        except Exception as e:
            if "closing transport" in str(e).lower():
                logger.info("Transport closed by client")
            else:
                logger.error(f"Error during stream write: {e}")
        
        await response.write_eof()
        return response

    except Exception as e:
        logger.error(f"Error streaming video outer: {e}")
        return web.Response(text=str(e), status=500)

async def start_telegram(app):
    logger.info("Starting Telegram client...")
    client = TelegramClient(SESSION_NAME, API_ID, API_HASH)
    
    bot_token = os.getenv('TELEGRAM_BOT_TOKEN')
    
    if bot_token:
        logger.info("Bot token found. Starting via bot token...")
        await client.start(bot_token=bot_token)
    else:
        logger.info("No bot token provided. Attempting normal user start...")
        # In cloud environments without interactive terminal, this will crash
        # if the session file isn't pre-populated and valid.
        await client.start()
        
    app['telegram_client'] = client
    logger.info("Telegram client started.")

async def stop_telegram(app):
    logger.info("Stopping Telegram client...")
    if 'telegram_client' in app:
        await app['telegram_client'].disconnect()
    logger.info("Telegram client stopped.")

async def serve_thumbnail(request):
    channel_id = request.match_info.get('channel_id')
    message_id = request.match_info.get('message_id')
    
    thumb_path = f'/Users/raaj/rg8899-app/public/thumbnails/{channel_id}_{message_id}.jpg'
    
    if os.path.exists(thumb_path):
        return web.FileResponse(thumb_path)
    else:
        # Fallback to a placeholder if thumb missing
        return web.Response(text="Thumbnail not found", status=404)

async def save_config(request):
    try:
        data = await request.json()
        config_path = '/Users/raaj/rg8899-app/scripts/sync_config.json'
        
        # Structure the data back for sync_config.json
        platforms_dict = {}
        for p in data.get('platforms', []):
            years_dict = {}
            for y in p.get('years', []):
                subjects_dict = {}
                for s in y.get('subjects', []):
                    # We need the link here.
                    subjects_dict[s['name']] = s.get('link', 'https://t.me/c/3113795597/12')
                
                years_dict[y['name']] = subjects_dict
            
            platforms_dict[p['id']] = {
                "name": p['name'],
                "years": years_dict
            }
        
        with open(config_path, 'w') as f:
            import json
            json.dump({"platforms": platforms_dict}, f, indent=2)
            
        logger.info("Config saved successfully")
        return web.json_response({"status": "success"}, headers={'Access-Control-Allow-Origin': '*'})
    except Exception as e:
        logger.error(f"Error saving config: {e}")
        return web.json_response({"status": "error", "message": str(e)}, status=500, headers={'Access-Control-Allow-Origin': '*'})

def create_app():
    app = web.Application()
    app.on_startup.append(start_telegram)
    app.on_cleanup.append(stop_telegram)
    
    app.router.add_get('/stream/{channel_id}/{message_id}', stream_video)
    app.router.add_get('/thumb/{channel_id}/{message_id}', serve_thumbnail)
    app.router.add_post('/save-config', save_config)
    
    async def trigger_sync(request):
        try:
            # Run the sync script in the background
            import subprocess
            subprocess.Popen(["python3", "telegram_sync_app.py"])
            return web.json_response({"status": "success", "message": "Sync started in background"}, headers={'Access-Control-Allow-Origin': '*'})
        except Exception as e:
            return web.json_response({"status": "error", "message": str(e)}, status=500, headers={'Access-Control-Allow-Origin': '*'})

    app.router.add_post('/sync', trigger_sync)
    
    async def options_handler(request):
        return web.Response(headers={
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Range, Content-Type',
            'Access-Control-Max-Age': '1728000',
        })
    app.router.add_route('OPTIONS', r'/{tail:.*}', options_handler)
    
    return app

if __name__ == '__main__':
    app = create_app()
    port = int(os.environ.get('PORT', 5005))
    web.run_app(app, port=port)
