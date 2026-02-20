-- CasaFresh Leads Table
-- Run this in your Supabase SQL editor to create the leads table

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_address TEXT NOT NULL,
  service_type TEXT NOT NULL,
  frequency TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new'
);

-- Index for common queries
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);

-- Row-level security (optional but recommended)
-- ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow service role to insert (this is handled via service role key in API)
-- No public read access needed

COMMENT ON TABLE leads IS 'CasaFresh lead registrations from website contact form';
COMMENT ON COLUMN leads.status IS 'Lead status: new, contacted, quoted, converted, lost';
