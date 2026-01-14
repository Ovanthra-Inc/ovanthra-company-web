import { Solution } from "@/lib/solutions-data";

export function SolutionHero({ data }: { data: Solution["hero"] }) {
    return (
        <section className="bg-brand-navy relative py-24 lg:py-32 overflow-hidden text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-brand-navy to-brand-navy opacity-50"></div>
            <div className="max-w-[1280px] mx-auto px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-slate-400/40"></span>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                                {data.subtitle}
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-medium leading-[1.05] tracking-tight serif">
                            {data.title}{" "}
                            <span className="italic font-normal text-slate-300">
                                {data.titleHighlight}
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-[560px] leading-relaxed font-light">
                            {data.description}
                        </p>
                        <div className="flex flex-wrap gap-5 pt-4">
                            <button className="bg-white text-brand-navy px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-slate-100 transition-all shadow-md cursor-pointer">
                                Schedule Demo
                                <span className="material-symbols-outlined text-lg">
                                    arrow_right_alt
                                </span>
                            </button>
                            <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors shadow-sm cursor-pointer">
                                View API Docs
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
                            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                                <div>
                                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                                        {data.stats.items[0].label}
                                    </div>
                                    <div className="text-3xl serif font-light text-white">
                                        {data.stats.items[0].value}
                                    </div>
                                </div>
                                {data.stats.items[1] && (
                                    <div className="text-right">
                                        <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                                            {data.stats.items[1].label}
                                        </div>
                                        <div
                                            className={`text-xl font-medium flex items-center justify-end gap-1 ${data.stats.items[1].color || "text-emerald-400"
                                                }`}
                                        >
                                            {data.stats.items[1].icon && (
                                                <span className="material-symbols-outlined text-sm">
                                                    {data.stats.items[1].icon}
                                                </span>
                                            )}{" "}
                                            {data.stats.items[1].value}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-end justify-between h-48 gap-2">
                                <div className="w-full bg-slate-700/50 rounded-t h-[40%] hover:bg-indigo-500/80 transition-colors duration-500"></div>
                                <div className="w-full bg-slate-700/50 rounded-t h-[55%] hover:bg-indigo-500/80 transition-colors duration-500"></div>
                                <div className="w-full bg-slate-700/50 rounded-t h-[45%] hover:bg-indigo-500/80 transition-colors duration-500"></div>
                                <div className="w-full bg-slate-700/50 rounded-t h-[70%] hover:bg-indigo-500/80 transition-colors duration-500"></div>
                                <div className="w-full bg-slate-700/50 rounded-t h-[65%] hover:bg-indigo-500/80 transition-colors duration-500"></div>
                                <div className="w-full bg-slate-700/50 rounded-t h-[85%] hover:bg-indigo-500/80 transition-colors duration-500"></div>
                                <div className="w-full bg-indigo-500 rounded-t h-[95%] shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                            </div>
                            <div className="mt-6 flex gap-4 text-xs text-slate-400 font-mono">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>{" "}
                                    Ovanthra AI Model
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-slate-700"></span>{" "}
                                    Market Benchmark
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
