import { supabase } from "./supabase/supabaseClient";

export async function createBooking(bookingData) {
  const { error } = await supabase
    .from("bookings")
    .insert([bookingData]);

  if (error) throw error;

  return true;
}