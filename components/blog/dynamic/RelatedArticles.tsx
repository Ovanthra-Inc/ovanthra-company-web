import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";

interface RelatedArticlesProps {
    articles: BlogPost[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
    return (
        <section className="py-20 lg:py-32 bg-[var(--light-gray)] border-t border-slate-200">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between mb-10 lg:mb-12 border-b border-slate-200 pb-6">
                    <h3 className="text-xl lg:text-2xl font-medium text-brand-navy serif">
                        Related Insights
                    </h3>
                    <Link
                        className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-brand-navy flex items-center gap-2 hover:opacity-70 transition-opacity"
                        href="/blog"
                    >
                        View all{" "}
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            className="group block flex flex-col"
                            href={`/blog/${article.slug}`}
                        >
                            <div className="aspect-[16/10] bg-white rounded-xl overflow-hidden mb-6 shadow-sm border border-slate-200 relative">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                                    style={{ backgroundImage: `url("${article.image}")` }}
                                ></div>
                                <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-brand-slate/70 mb-3">
                                {article.category}
                            </p>
                            <h4 className="text-lg lg:text-xl font-medium text-brand-navy serif mb-3 group-hover:text-blue-900 transition-colors leading-tight">
                                {article.title}
                            </h4>
                            <p className="text-sm text-brand-slate font-light leading-relaxed line-clamp-2">
                                {article.excerpt}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
