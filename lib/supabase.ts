import { createClient as createSupabaseClient } from "@supabase/supabase-js"

// Read credentials from environment variables available in Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase URL or Anon Key environment variables.")
}

/**
 * Returns a freshly-instantiated Supabase client.
 * Use this inside server actions or route handlers to avoid
 * sharing auth context between requests.
 */
export function createClient() {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}

/**
 * Convenience singleton for simple, stateless queries.
 * Prefer `createClient()` when you need per-request isolation.
 */
export const supabase = createClient()
