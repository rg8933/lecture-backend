from supabase import create_client
from dotenv import load_dotenv

# --- Configuration ---
load_dotenv(dotenv_path='/Users/raaj/rg8899-app/.env')

API_ID = '34553471'
API_HASH = '1a5f92c18abc7e3427cd27fa4fc20cc0'
SESSION_NAME = 'app_session'
CONFIG_PATH = '/Users/raaj/rg8899-app/scripts/sync_config.json'
THUMBS_DIR = '/Users/raaj/rg8899-app/public/thumbnails'

SUPABASE_URL = os.getenv('EXPO_PUBLIC_SUPABASE_URL')
SUPABASE_KEY = os.getenv('EXPO_PUBLIC_SUPABASE_ANON_KEY')
BASE_URL = os.getenv('CLOUD_RUN_URL', 'http://localhost:5005')

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def parse_link(link):
    match = re.search(r't\.me/c/(\d+)/(\d+)', link)
    if match:
        return int(f"-100{match.group(1)}"), int(match.group(2))
    return None, None

async def main():
    if not os.path.exists(THUMBS_DIR):
        os.makedirs(THUMBS_DIR)

    # Fetch subjects from Supabase to sync
    print("Fetching subjects to sync from Supabase...")
    response = supabase.table('subjects').select('*, years(platform_id)').execute()
    subjects_to_sync = response.data

    async with TelegramClient(SESSION_NAME, API_ID, API_HASH) as client:
        for s in subjects_to_sync:
            cid, mid = parse_link(s['link'])
            if not cid:
                continue
                
            print(f"Syncing Subject: {s['name']} (Topic {mid})...")
            entity = await client.get_entity(cid)
            readable_cid = str(cid).replace('-100', '')

            async for msg in client.iter_messages(entity, limit=500, reply_to=mid):
                if msg.media and hasattr(msg.media, 'document'):
                    title = msg.text or (msg.file.name if msg.file else None) or f"Lecture {msg.id}"
                    title = title.split('\n')[0][:100]
                    
                    # Extract duration
                    duration_sec = 0
                    for attr in msg.media.document.attributes:
                        if hasattr(attr, 'duration'):
                            duration_sec = int(attr.duration)
                            break
                    
                    minutes = duration_sec // 60
                    seconds = duration_sec % 60
                    duration_str = f"{minutes}:{seconds:02d}"

                    # Download thumbnail
                    thumb_path = os.path.join(THUMBS_DIR, f"{readable_cid}_{msg.id}.jpg")
                    thumbnail_url = f"{BASE_URL}/thumb/{readable_cid}/{msg.id}"
                    
                    if not os.path.exists(thumb_path):
                        try:
                            await client.download_media(msg, file=thumb_path, thumb=-1)
                        except Exception as e:
                            print(f"      Warning: Failed to download thumb for {msg.id}: {e}")
                            thumbnail_url = ""

                    # Upsert to Supabase
                    supabase.table('lectures').upsert({
                        "id": f"{s['id']}-{msg.id}",
                        "subject_id": s['id'],
                        "title": title,
                        "duration": duration_str,
                        "url": f"{BASE_URL}/stream/{readable_cid}/{msg.id}",
                        "thumbnail_url": thumbnail_url
                    }).execute()
        
        print("Sync complete. Data pushed to Supabase.")

if __name__ == "__main__":
    asyncio.run(main())

if __name__ == "__main__":
    asyncio.run(main())
