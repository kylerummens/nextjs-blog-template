import { BlogPostWithAuthor } from "@/models/blog.types";
import { supabase } from "@/supabase-client";

export const getBlogPosts = async (): Promise<BlogPostWithAuthor[]> => {
    const { data } = await supabase
        .from('blog_posts')
        .select('*, author:blog_authors(*)')
        .match({ active: true, published: true })
        .order('published_at', { ascending: false });

    return data ?? [];
}