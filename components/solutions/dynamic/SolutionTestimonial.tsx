import { Solution } from "@/lib/solutions-data";

export function SolutionTestimonial({ data }: { data: Solution["testimonial"] }) {
    return (
        <section className="py-20 lg:py-24 bg-white border-y border-slate-100">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                            <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url("${data.image}")` }}
                            ></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-brand-navy to-transparent">
                                <div className="text-white">
                                    <div className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
                                        {data.company}
                                    </div>
                                    <div className="text-sm font-light opacity-90">London, UK</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <span className="material-symbols-outlined text-4xl lg:text-5xl text-slate-200 mb-8 lg:mb-10">
                            format_quote
                        </span>
                        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-brand-navy serif italic leading-relaxed mb-10 lg:mb-12">
                            "{data.quote}"
                        </blockquote>
                        <div>
                            <h4 className="text-lg font-bold text-brand-navy">
                                {data.author}
                            </h4>
                            <p className="text-brand-slate text-sm">
                                {data.role}, {data.company}
                            </p>
                            <div className="mt-10 pt-10 border-t border-slate-100 flex gap-12">
                                {data.stats.map((stat, index) => (
                                    <div key={index}>
                                        <div className="text-2xl lg:text-3xl font-bold text-brand-navy serif">
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-wider text-brand-slate mt-1 font-bold">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
