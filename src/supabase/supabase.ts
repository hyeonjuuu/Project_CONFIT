// import { createClient } from '@supabase/supabase-js'
// export const supabaseUrl = import.meta.env.supabaseUrl
// export const supabaseKey = import.meta.env.supabaseKey
// export const supabase = createClient(supabaseUrl, supabaseKey)

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
