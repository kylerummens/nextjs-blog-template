import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    'https://kfotqgkwsxphtpkiublq.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtmb3RxZ2t3c3hwaHRwa2l1YmxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTAzMjI4NzgsImV4cCI6MTk2NTg5ODg3OH0.HPdHmKVjueNgRe3ZkGm4Oppcs2TCLfUtN6OMVQP14B4'
);