import { createClient } from '@supabase/supabase-js';

const URL = 'https://wvyhrkajjkrjuammdemg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2eWhya2FqamtyanVhbW1kZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5NDM3ODgsImV4cCI6MjAzNDUxOTc4OH0.0V9EsK5xsRKa8iq2H8HhMl7VHgWIqvjmHqQ8GD9Y36M';

export const supabase = createClient(URL, API_KEY);