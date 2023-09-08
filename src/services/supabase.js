import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zhdlwpftokkcqdgkvcjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoZGx3cGZ0b2trY3FkZ2t2Y2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwMzUyNjgsImV4cCI6MjAwOTYxMTI2OH0.ObRO5De8fm3I-G9PxNWo4iiWNtz_anMwfoh6YzgSoUM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
