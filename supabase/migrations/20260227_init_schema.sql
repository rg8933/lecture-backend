-- Create tables for the new hierarchical structure

-- 1. Platforms
CREATE TABLE IF NOT EXISTS platforms (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Years
CREATE TABLE IF NOT EXISTS years (
    id TEXT PRIMARY KEY,
    platform_id TEXT REFERENCES platforms(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Subjects
CREATE TABLE IF NOT EXISTS subjects (
    id TEXT PRIMARY KEY,
    year_id TEXT REFERENCES years(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    link TEXT, -- Telegram link for sync
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Lectures
CREATE TABLE IF NOT EXISTS lectures (
    id TEXT PRIMARY KEY,
    subject_id TEXT REFERENCES subjects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    duration TEXT,
    url TEXT NOT NULL,
    thumbnail_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add sample data or just leave empty for sync
