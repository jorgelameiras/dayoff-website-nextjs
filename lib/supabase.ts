import { createClient, SupabaseClient } from '@supabase/supabase-js'

let _client: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient | null {
  if (_client) return _client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (
    !url ||
    !key ||
    url === 'YOUR_SUPABASE_URL' ||
    key === 'YOUR_SERVICE_ROLE_KEY'
  ) {
    return null
  }

  try {
    _client = createClient(url, key)
    return _client
  } catch {
    return null
  }
}
