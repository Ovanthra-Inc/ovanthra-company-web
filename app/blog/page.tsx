import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogPagination } from "@/components/blog/BlogPagination";

export default function Blog() {
    return (
        <>
            <main className="pt-24 lg:pt-32 pb-20 lg:pb-24">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        <div className="flex-1 order-1 lg:order-2">
                            <FeaturedArticle />
                            <BlogGrid />
                            <BlogPagination />
                        </div>
                        <div className="lg:w-64 flex-shrink-0 order-2 lg:order-1">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
