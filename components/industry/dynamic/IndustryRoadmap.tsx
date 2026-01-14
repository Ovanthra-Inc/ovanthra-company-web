import { IndustryData, RoadmapPhase } from "@/lib/industry-data";

export function IndustryRoadmap({ data }: { data: IndustryData }) {
    return (
        <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/30">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-24">
                    <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-brand-slate mb-6">Execution Path</h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy dark:text-white serif">Strategic Roadmap</h3>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line - Left align on mobile, center on desktop */}
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-slate-200 via-brand-navy to-slate-200 dark:via-slate-700"></div>

                    <div className="space-y-16 lg:space-y-32">
                        {data.roadmap.map((step: RoadmapPhase, index: number) => (
                            <div key={index} className={`relative flex flex-col lg:flex-row items-start lg:items-center justify-between ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div className={`w-full lg:w-[42%] pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                                    <span className="text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">{step.phase}</span>
                                    <h4 className="text-xl lg:text-2xl font-semibold text-brand-navy dark:text-white mb-3 lg:mb-4 serif">{step.title}</h4>
                                    <p className="text-brand-slate dark:text-slate-400 font-light leading-relaxed text-sm lg:text-base">{step.description}</p>
                                </div>
                                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 size-3 lg:size-4 rounded-full bg-brand-navy border-2 lg:border-4 border-white dark:border-slate-900 shadow-lg z-10 top-2 lg:top-auto"></div>
                                <div className="hidden lg:block w-[42%]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
