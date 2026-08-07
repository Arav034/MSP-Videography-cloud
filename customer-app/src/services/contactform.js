import { supabase } from "./supabase/supabaseClient";

export async function createContact(contactData) {
  const { error } = await supabase
    .from("contacts")
    .insert([contactData]);

  if (error) {
    throw error;
  }

  return true;
}