import os
import json
from supabase import create_client
from dotenv import load_dotenv

# Load environment variables
load_dotenv(dotenv_path='/Users/raaj/rg8899-app/.env')

SUPABASE_URL = os.getenv('EXPO_PUBLIC_SUPABASE_URL')
SUPABASE_KEY = os.getenv('EXPO_PUBLIC_SUPABASE_ANON_KEY')
CONFIG_PATH = '/Users/raaj/rg8899-app/scripts/sync_config.json'

if not SUPABASE_URL or not SUPABASE_KEY:
    print("Error: Supabase environment variables missing.")
    exit(1)

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def migrate():
    if not os.path.exists(CONFIG_PATH):
        print(f"Config not found at {CONFIG_PATH}")
        return

    with open(CONFIG_PATH, 'r') as f:
        config = json.load(f)
        platforms = config.get('platforms', {})

    for p_id, p_info in platforms.items():
        print(f"Migrating Platform: {p_info['name']}...")
        
        # Upsert Platform
        supabase.table('platforms').upsert({
            'id': p_id,
            'name': p_info['name']
        }).execute()
        
        years = p_info.get('years', {})
        for y_name, subjects in years.items():
            y_id = f"{p_id}-{y_name.lower().replace(' ', '-')}"
            print(f"  Migrating Year: {y_name} ({y_id})...")
            
            # Upsert Year
            supabase.table('years').upsert({
                'id': y_id,
                'platform_id': p_id,
                'name': y_name
            }).execute()
            
            for s_name, link in subjects.items():
                s_id = f"{y_id}-{s_name.lower().replace(' ', '-')}"
                print(f"    Migrating Subject: {s_name} ({s_id})...")
                
                # Upsert Subject
                supabase.table('subjects').upsert({
                    'id': s_id,
                    'year_id': y_id,
                    'name': s_name,
                    'link': link
                }).execute()

    print("Migration complete!")

if __name__ == "__main__":
    migrate()
