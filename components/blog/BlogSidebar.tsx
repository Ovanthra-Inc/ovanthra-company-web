"use client";

import { useState } from "react";

export function BlogSidebar() {
    const [email, setEmail] = useState("");

    const categories = [
        { icon: "all_inclusive", label: "All Posts", active: true },
        { icon: "biotech", label: "AI Research", active: false },
        { icon: "insights", label: "Enterprise Strategy", active: false },
        { icon: "update", label: "Product Updates", active: false },
        { icon: "public", label: "Industry Insights", active: false },
    ];

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Subscribe:", email);
    };

    return (
        <aside className="w-full h-full">
            <div className="sticky top-32 flex flex-col gap-10">
                <div>
                    <h3 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6 px-1 lg:px-0">
                        Categories
                    </h3>
                    <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
                        {categories.map((category, index) => (
                            <a
                                key={index}
                                className={`flex items-center gap-3 px-4 py-2.5 text-xs lg:text-sm font-medium rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-brand-navy cursor-pointer whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink ${category.active
                                    ? "bg-slate-100 text-brand-navy"
                                    : "text-brand-slate"
                                    }`}
                                href="#"
                            >
                                <span className="material-symbols-outlined text-lg lg:text-xl">
                                    {category.icon}
                                </span>
                                {category.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="p-6 lg:p-8 bg-brand-navy rounded-2xl text-white shadow-xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                    <div className="relative z-10">
                        <h4 className="text-base font-semibold mb-3 serif">Subscribe to Insights</h4>
                        <p className="text-xs text-slate-300 font-light leading-relaxed mb-6">
                            The latest in AI strategy delivered to your inbox weekly.
                        </p>
                        <form className="space-y-3" onSubmit={handleSubscribe}>
                            <input
                                className="w-full bg-white/5 border border-white/10 rounded-lg text-xs py-3 px-4 focus:bg-white/10 focus:border-white/30 placeholder:text-slate-500 text-white outline-none transition-all"
                                placeholder="Professional Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                className="w-full bg-white text-brand-navy text-xs font-bold py-3 rounded-lg hover:bg-slate-100 transition-all cursor-pointer shadow-lg active:scale-[0.98]"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    );
}
