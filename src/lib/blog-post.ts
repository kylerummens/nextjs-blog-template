import { BlogPostWithAuthor } from "@/models/blog.types";
import { supabase } from "@/supabase-client";

export const getBlogPost = async (public_id: string): Promise<BlogPostWithAuthor | null> => {

    const { data } = await supabase
        .from('blog_posts')
        .select('*, author:blog_authors(*)')
        .match({ active: true, published: true, public_id })
        .maybeSingle();

    return data ?? null;
}