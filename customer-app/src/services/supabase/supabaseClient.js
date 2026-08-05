import { createClient } from "@supabase/supabase-js";

<<<<<<< HEAD
=======

>>>>>>> d4c958934818b09f034c20d1b8e8d424865d16bb

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

