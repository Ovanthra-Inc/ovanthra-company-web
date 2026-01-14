import { IntelligenceInsight, intelligenceInsights } from "@/lib/intelligence-data";
import Link from "next/link";

export function EnterpriseInsights() {
    return (
        <section className="py-20 lg:py-32 bg-white border-b border-slate-100">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 lg:mb-16 gap-6 text-center sm:text-left">
                    <div>
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                            Thought Leadership
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy serif">
                            Enterprise Insights
                        </h3>
                    </div>
                    <Link
                        className="flex sm:flex items-center justify-center sm:justify-start gap-2 text-xs lg:text-sm font-semibold text-brand-navy hover:text-brand-slate transition-colors pb-1 border-b border-transparent hover:border-brand-slate w-max mx-auto sm:mx-0"
                        href="#"
                    >
                        View all articles{" "}
                        <span className="material-symbols-outlined text-lg">
                            arrow_right_alt
                        </span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {intelligenceInsights.map((article: IntelligenceInsight) => (
                        <Link
                            key={article.slug}
                            href={`/intelligence/${article.slug}`}
                            className="group cursor-pointer flex flex-col"
                        >
                            <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-slate-100 relative shadow-sm">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url("${article.image}")` }}
                                ></div>
                                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-brand-slate">
                                    {article.category}
                                </span>
                                <h4 className="text-xl lg:text-2xl font-medium text-brand-navy serif leading-tight group-hover:text-blue-900 transition-colors">
                                    {article.title}
                                </h4>
                                <p className="text-sm text-brand-slate font-light leading-relaxed line-clamp-2">
                                    {article.description}
                                </p>
                                <div className="pt-2">
                                    <span className="text-xs font-semibold text-brand-navy border-b border-slate-200 pb-0.5 group-hover:border-brand-navy transition-all inline-flex items-center gap-1">
                                        Read Analysis{" "}
                                        <span className="material-symbols-outlined text-[14px]">
                                            arrow_forward
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
