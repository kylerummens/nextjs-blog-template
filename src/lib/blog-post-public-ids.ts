import { supabase } from "@/supabase-client";

export const getBlogPostPublicIds = async (): Promise<string[]> => {
    const { data } = await supabase
        .from('blog_posts')
        .select('public_id')
        .match({ active: true, published: true })

    return (data ?? []).map(_ => _.public_id);
}