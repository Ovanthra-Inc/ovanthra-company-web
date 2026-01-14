import { IndustryData, IndustryImpactItem } from "@/lib/industry-data";

export function IndustryImpact({ data }: { data: IndustryData }) {
    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden border-b border-slate-100 dark:border-slate-800">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="relative max-w-sm mx-auto lg:max-w-none w-full">
                        <div className="absolute inset-0 bg-brand-slate/20 blur-3xl opacity-20"></div>
                        <div className="relative aspect-square flex items-center justify-center">
                            <div className="w-full h-full border border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center">
                                <div className="w-3/4 h-3/4 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center animate-pulse">
                                    <div className="w-1/2 h-1/2 bg-brand-slate/10 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-brand-slate text-7xl lg:text-9xl font-extralight">architecture</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/4 right-1/4 size-2 lg:size-3 bg-brand-navy rounded-full shadow-2xl shadow-brand-navy/50"></div>
                            <div className="absolute bottom-1/3 left-1/4 size-1 lg:size-2 bg-brand-slate rounded-full"></div>
                            <div className="absolute top-1/2 left-8 lg:left-10 size-3 lg:size-4 border border-brand-navy rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 lg:gap-10 text-center lg:text-left">
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-brand-slate">Institutional Impact</h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy dark:text-white serif leading-tight">
                            {data.impact.title}
                        </h3>
                        <div className="space-y-6 lg:space-y-8 text-left max-w-xl mx-auto lg:mx-0">
                            {data.impact.items.map((item: IndustryImpactItem, index: number) => (
                                <div key={index} className="group border-l-2 border-slate-100 dark:border-slate-800 pl-6 lg:pl-8 hover:border-brand-navy transition-colors">
                                    <h4 className="text-lg lg:text-xl font-semibold text-brand-navy dark:text-white mb-2">{item.title}</h4>
                                    <p className="text-sm lg:text-base text-brand-slate dark:text-slate-400 font-light leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
