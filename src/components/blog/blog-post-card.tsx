import { BlogPostWithAuthor } from "@/models/blog.types";
import { blogPostDateFormat } from "@/utils/blog-post-date-format";
import Image from "next/image";
import Link from "next/link";
import { ElementType } from "react";

const BlogPostCard: ElementType<{ post: BlogPostWithAuthor }> = ({ post }) => {

    return (
        <Link href={`/blog/${post.public_id}`}>
            <div className="bg-gray-50 w-full h-96 rounded-3xl shadow overflow-hidden hover:bg-blue-500/10 transition-all group">
                <div className="overflow-hidden rounded-3xl relative h-48 w-full">
                    <Image className="object-cover transition-transform group-hover:scale-105" fill src={ post.image } alt={'Image for ' + post.title} />
                </div>
                <div className="px-4 py-6">
                    <div className="mb-2">
                        <div className="date secondary-label">{ blogPostDateFormat(post.published_at) }</div>
                    </div>
                    <div className=" text-2xl mb-2 line-clamp-2 label">{ post.title }</div>
                    <div className="line-clamp-2 secondary-label">{ post.description }</div>
                </div>
            </div>
        </Link>
    )
}

export default BlogPostCard;