import { createClient } from
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL =
'https://sacoisjvkrjtpsjbwtbb.supabase.co';

const SUPABASE_PUBLISHABLE_KEY =
'sb_publishable_KlX1gq8CVEoo8pay_awFnw_ui23DUtn';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log('Nwachukwu Election Watch Supabase initialized.');
