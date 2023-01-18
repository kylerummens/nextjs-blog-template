import { supabase } from "@/supabase-client";
import Head from "next/head";

export interface BlogPost {
  id: string;
  created_at: Date;
  public_id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  active: boolean;
  published: boolean;
  published_at?: Date;
  author_id: string;
  views: number;
  seo_image: string;
}

export interface Author {
  id: string;
  name: string;
  title: string;
  image: string;
}

export interface BlogPostWithAuthor extends BlogPost {
  author: Author;
}

export default function Blog({ blog_posts }: { blog_posts: BlogPostWithAuthor[] }) {
    return (
        <>
            <Head>
                <title>Users - just some stuff</title>
            </Head>
            <ul>
                {blog_posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
}

export async function getStaticProps() {

    const { data } = await supabase
        .from('blog_posts')
        .select('*, author:blog_authors(*)')
        .match({ active: true, published: true })
        .order('published_at', { ascending: false });

    return {
        props: {
            blog_posts: data
        }
    }
}