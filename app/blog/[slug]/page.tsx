import { notFound } from "next/navigation";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { BlogDetailHero } from "@/components/blog/dynamic/BlogDetailHero";
import { BlogContent } from "@/components/blog/dynamic/BlogContent";
import { RelatedArticles } from "@/components/blog/dynamic/RelatedArticles";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = getRelatedPosts(slug, post.relatedPosts);

    return (
        <main className="pt-20">
            <BlogDetailHero
                category={post.category}
                title={post.title}
                author={post.author}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
            />
            <BlogContent
                intro={post.content.intro}
                sections={post.content.sections}
                tags={post.tags}
            />
            <RelatedArticles articles={relatedPosts} />
        </main>
    );
}
