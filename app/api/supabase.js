import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://nczpfrrzssnyvpdbdsmx.supabase.co'
const supabaseKey = "sb_secret_DYjFkqD6dFN2__m14ELUcw_-A8HQMkj"
export const supabase = createClient(supabaseUrl, supabaseKey)