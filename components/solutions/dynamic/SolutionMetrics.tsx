import { Solution } from "@/lib/solutions-data";

export function SolutionMetrics({ data }: { data: Solution["metrics"] }) {
    return (
        <section className="py-20 lg:py-24 bg-brand-navy text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center text-white/90">
                    {data.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <span className="text-3xl sm:text-4xl lg:text-5xl font-medium serif">{stat.value}</span>
                            <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-slate-400">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row gap-16 items-center mt-16 lg:mt-24">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                            {data.subtitle}
                        </h2>
                        <h3 className="text-4xl font-medium tracking-tight serif mb-6">
                            {data.title}
                        </h3>
                        <p className="text-slate-300 font-light leading-relaxed mb-10">
                            {data.description}
                        </p>
                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            {data.stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-4xl font-light mb-2">{stat.value}</div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                            <div className="flex justify-between items-center mb-8">
                                <h4 className="font-semibold">Model Accuracy Over Time</h4>
                                <div className="flex gap-4 text-xs">
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>{" "}
                                        Ovanthra v2.0
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-slate-500"></span>{" "}
                                        Legacy Systems
                                    </span>
                                </div>
                            </div>
                            <div className="relative h-64 w-full border-l border-b border-white/20">
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    <div className="w-full h-px bg-white/5"></div>
                                    <div className="w-full h-px bg-white/5"></div>
                                    <div className="w-full h-px bg-white/5"></div>
                                    <div className="w-full h-px bg-white/5"></div>
                                </div>
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 100 100"
                                >
                                    <path
                                        d="M0,70 Q25,65 50,60 T100,55"
                                        fill="none"
                                        stroke="#64748b"
                                        strokeDasharray="4"
                                        strokeWidth="2"
                                    ></path>
                                </svg>
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 100 100"
                                >
                                    <path
                                        d="M0,70 Q20,50 40,40 T100,10"
                                        fill="none"
                                        stroke="#34d399"
                                        strokeWidth="3"
                                    ></path>
                                    <path
                                        d="M0,70 Q20,50 40,40 T100,10 V100 H0 Z"
                                        fill="url(#gradient)"
                                        opacity="0.2"
                                    ></path>
                                    <defs>
                                        <linearGradient
                                            id="gradient"
                                            x1="0%"
                                            x2="0%"
                                            y1="0%"
                                            y2="100%"
                                        >
                                            <stop
                                                offset="0%"
                                                style={{ stopColor: "#34d399", stopOpacity: 1 }}
                                            ></stop>
                                            <stop
                                                offset="100%"
                                                style={{ stopColor: "#34d399", stopOpacity: 0 }}
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="flex justify-between mt-4 text-xs text-slate-400 font-mono">
                                <span>Q1</span>
                                <span>Q2</span>
                                <span>Q3</span>
                                <span>Q4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
