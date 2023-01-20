import BlogPostCard from "@/components/blog/blog-post-card";
import { getBlogPosts } from "@/lib/blog-posts";
import { BlogPostWithAuthor } from "@/models/blog.types";
import Head from "next/head";

export default function Blog({ blog_posts }: { blog_posts: BlogPostWithAuthor[] }) {
    return (
        <>
            <Head>
                <title>Blog - BroadbandHub</title>
            </Head>

            <div id="recent-blog-posts" className="max-w-7xl mx-auto">
                <div className="text-2xl label mb-8">Recent blog posts</div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {blog_posts.map(post => (
                        <BlogPostCard post={post} key={post.id}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {

    const blog_posts = await getBlogPosts();

    return {
        props: { blog_posts }
    }
}