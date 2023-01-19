import { getBlogPost } from "@/lib/blog-post";
import { getBlogPostPublicIds } from "@/lib/blog-post-public-ids";
import { BlogPostWithAuthor } from "@/models/blog.types";
import { blogPostDateFormat } from "@/utils/blog-post-date-format";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ElementType } from "react";
import { Converter } from 'showdown';

const BlogPost: ElementType<{ post: BlogPostWithAuthor }> = ({ post }) => {

    const converter = new Converter();

    const postMarkdownContent = () => {
        return { __html: converter.makeHtml(post.content) };
    }


    return (
        <main className="max-w-3xl mx-auto px-4">
            <article className="pt-12 pb-24 prose max-w-none prose-a:text-blue-500 prose-headings:text-gray-700 relative">
                <header className="not-prose mb-16">
                    <time className="date secondary-label" dateTime={new Date(post.published_at).toISOString()}>{ blogPostDateFormat(post.published_at) }</time>
                    <h1 className="text-3xl sm:text-6xl mb-3 label">{ post.title }</h1>
                    <h2 className="text-xl sm:text-2xl font-light mb-6 label">{ post.description }</h2>

                    <address className="flex items-center gap-2">
                        <Image src={post.author.image} className="rounded-full" height="38" width="38" alt={`Author image for ${post.author.name}`} />
                        <div>
                            <div className="font-medium not-italic label">{ post.author.name }</div>
                            <div className="font-light secondary-label leading-4">{ post.author.title }</div>
                        </div>
                    </address>
                </header>

                <img className="rounded-3xl w-full" src={post.image} alt={`Image for ${post.title}`}></img>

                <div dangerouslySetInnerHTML={postMarkdownContent()}></div>

            </article>
        </main>
    )

}

export const getStaticProps: GetStaticProps = async (context) => {
    const public_id = Array.isArray(context.params!.public_id) ? context.params!.public_id[0] : context.params!.public_id!;
    const post = await getBlogPost(public_id);

    return {
        props: { post }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const public_ids = await getBlogPostPublicIds();

    return {
        paths: public_ids.map(public_id => {
            return {
                params: { public_id }
            }
        }),
        fallback: true
    }
}

export default BlogPost