import Link from "next/link";
import { Solution } from "@/lib/solutions-data";

export function SolutionApplications({ data }: { data: Solution["applications"] }) {
    return (
        <section className="py-20 lg:py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="mb-12 lg:mb-16">
                    <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6 px-1 lg:px-0">
                        Applications
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy serif leading-tight">
                        Built for Performance
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {data.items.map((item, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-xl border border-slate-200 bg-white hover:border-brand-navy/30 transition-all hover:shadow-lg"
                        >
                            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">
                                    {item.icon}
                                </span>
                            </div>
                            <h4 className="text-xl font-semibold text-brand-navy mb-3">
                                {item.title}
                            </h4>
                            <p className="text-sm text-brand-slate leading-relaxed mb-6">
                                {item.description}
                            </p>
                            <ul className="space-y-2 mb-6">
                                {item.features.map((feature, fIndex) => (
                                    <li
                                        key={fIndex}
                                        className="flex items-start gap-2 text-xs font-medium text-brand-navy"
                                    >
                                        <span className="material-symbols-outlined text-sm text-emerald-600">
                                            check
                                        </span>{" "}
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                className="text-xs font-bold uppercase tracking-wider text-brand-navy border-b border-brand-navy/20 pb-1 hover:border-brand-navy transition-all inline-flex items-center gap-1"
                                href="#"
                            >
                                Learn More{" "}
                                <span className="material-symbols-outlined text-[14px]">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
