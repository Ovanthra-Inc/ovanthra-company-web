"use client";

import { useState } from "react";
import Link from "next/link";
import { getRecentPosts } from "@/lib/blog-data";

export function BlogGrid() {
    const [sortBy, setSortBy] = useState("Most Recent");
    const articles = getRecentPosts();

    return (
        <section>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                <h2 className="text-2xl font-medium serif text-brand-navy">
                    Latest Articles
                </h2>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Sort By:
                    </span>
                    <select
                        className="bg-transparent border-none text-xs font-bold text-brand-navy focus:ring-0 cursor-pointer"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option>Most Recent</option>
                        <option>Popular</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-y-16">
                {articles.map((article) => (
                    <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex flex-col">
                        <div className="aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden mb-6 border border-slate-100 shadow-sm relative">
                            <img
                                alt="Article Thumbnail"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={article.image}
                            />
                            <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-brand-slate">
                                {article.category}
                            </span>
                            <span className="size-1 bg-slate-200 rounded-full"></span>
                            <span className="text-[9px] lg:text-[10px] font-medium text-slate-400">
                                {article.date}
                            </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-medium serif text-brand-navy group-hover:text-blue-900 transition-colors mb-4 leading-tight">
                            {article.title}
                        </h3>
                        <p className="text-brand-slate text-sm font-light leading-relaxed mb-6 line-clamp-3">
                            {article.excerpt}
                        </p>
                        <div className="mt-auto">
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy border-b-2 border-slate-100 pb-1 group-hover:border-brand-navy transition-all">
                                Read Article{" "}
                                <span className="material-symbols-outlined text-sm">
                                    arrow_forward
                                </span>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
