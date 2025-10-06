import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iemgpccgdlwpsrsjuumo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbWdwY2NnZGx3cHNyc2p1dW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NTM4MzAsImV4cCI6MjA2MzEyOTgzMH0.RS7zpLxVdkLkt6OnjdIdQ0ME_7HQDnLRCGGdapt-7RA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);