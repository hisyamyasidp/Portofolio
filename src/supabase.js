import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const isConfigured = Boolean(supabaseUrl && supabaseKey);

export const supabase = isConfigured ? createClient(supabaseUrl, supabaseKey) : null;
export const isSupabaseConfigured = isConfigured;

if (!isConfigured) {
  console.warn('Supabase is not configured. Running in demo mode without dashboard/database features.');
}