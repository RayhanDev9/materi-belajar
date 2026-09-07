import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://sazybtxhdagoetezxmtm.supabase.co";
const supabaseKey = "sb_publishable_dYekqqo8l0x9Vgf8LgGC7w_K__mNeKS"; // Salin seluruh kunci dari dashboard Anda
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
