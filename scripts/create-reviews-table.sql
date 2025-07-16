CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  district_slug TEXT NOT NULL,
  name TEXT,
  stars INTEGER NOT NULL CHECK (stars >= 1 AND stars <= 5),
  comment TEXT NOT NULL
);

-- Optional: Add RLS (Row Level Security) for production
-- For now, we'll rely on server actions for writes, and public reads.
-- Enable RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to read reviews
CREATE POLICY "Allow public read access" ON reviews FOR SELECT USING (true);

-- Allow authenticated users (or specific roles) to insert reviews via server actions
-- This policy assumes you'll handle authentication in your server action.
-- For simplicity, we'll allow anonymous inserts via server action for this example.
-- In a real app, you'd want to restrict this to authenticated users.
CREATE POLICY "Allow authenticated insert" ON reviews FOR INSERT WITH CHECK (true);
