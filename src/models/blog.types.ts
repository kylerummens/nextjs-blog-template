export interface BlogPost {
    id: string;
    created_at: string;
    public_id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    active: boolean;
    published: boolean;
    published_at: string;
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