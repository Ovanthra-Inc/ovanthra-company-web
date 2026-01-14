import Link from "next/link";
import { getFeaturedPost } from "@/lib/blog-data";

export function FeaturedArticle() {
    const featured = getFeaturedPost();

    if (!featured) return null;

    return (
        <section className="mb-16 lg:mb-20">
            <Link
                href={`/blog/${featured.slug}`}
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all block"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto overflow-hidden bg-slate-100 relative">
                        <img
                            alt={featured.title}
                            className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                            src={featured.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-navy/30 to-transparent"></div>
                    </div>
                    <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-2.5 py-1 bg-slate-100 rounded text-[10px] font-bold uppercase tracking-wider text-brand-slate">
                                {featured.category}
                            </span>
                            <span className="text-xs text-slate-400 font-medium">
                                {featured.readTime}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium serif text-brand-navy mb-6 leading-tight group-hover:text-blue-900 transition-colors">
                            {featured.title}
                        </h1>
                        <p className="text-brand-slate text-base lg:text-lg font-light leading-relaxed mb-8 line-clamp-3">
                            {featured.excerpt}
                        </p>
                        <div className="flex items-center gap-4">
                            {featured.author.avatar ? (
                                <div className="size-10 lg:size-12 rounded-full bg-slate-200 overflow-hidden">
                                    <img alt={featured.author.name} src={featured.author.avatar} />
                                </div>
                            ) : (
                                <div className="size-10 lg:size-12 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-brand-navy">
                                    {featured.author.initials}
                                </div>
                            )}
                            <div>
                                <p className="text-sm lg:text-base font-bold text-brand-navy leading-none">
                                    {featured.author.name}
                                </p>
                                <p className="text-[9px] lg:text-[10px] uppercase tracking-widest text-slate-400 mt-1.5 font-bold">
                                    {featured.author.role}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}
