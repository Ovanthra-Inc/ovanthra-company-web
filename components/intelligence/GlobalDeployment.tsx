import Link from "next/link";

export function GlobalDeployment() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1 relative w-full h-full">
                        <div className="bg-brand-navy aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[length:40px_40px]">
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
                            {/* Map dots */}
                            <div
                                className="absolute w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                style={{ top: "30%", left: "25%" }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 lg:w-4 h-3 lg:h-4 border border-white/30 rounded-full animate-ping"></div>
                            </div>
                            <div
                                className="absolute w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                style={{ top: "35%", left: "32%" }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 lg:w-4 h-3 lg:h-4 border border-white/30 rounded-full animate-ping"></div>
                            </div>
                            <div
                                className="absolute w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                style={{ top: "25%", left: "48%" }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 lg:w-4 h-3 lg:h-4 border border-white/30 rounded-full animate-ping"></div>
                            </div>
                            <div
                                className="absolute w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                style={{ top: "28%", left: "52%" }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 lg:w-4 h-3 lg:h-4 border border-white/30 rounded-full animate-ping"></div>
                            </div>
                            <div
                                className="absolute w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                style={{ top: "45%", left: "75%" }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 lg:w-4 h-3 lg:h-4 border border-white/30 rounded-full animate-ping"></div>
                            </div>
                            <div
                                className="absolute w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                style={{ top: "55%", left: "82%" }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 lg:w-4 h-3 lg:h-4 border border-white/30 rounded-full animate-ping"></div>
                            </div>
                            <div
                                className="absolute w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                style={{ top: "65%", left: "30%" }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 lg:w-4 h-3 lg:h-4 border border-white/30 rounded-full animate-ping"></div>
                            </div>
                            <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 right-6 lg:right-8 bg-white/10 backdrop-blur-md p-4 lg:p-6 rounded-xl border border-white/10">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[9px] lg:text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">
                                            Network Status
                                        </p>
                                        <p className="text-white text-base lg:text-lg font-medium">
                                            All Systems Operational
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="block size-1.5 lg:size-2 rounded-full bg-green-400 animate-pulse"></span>
                                        <span className="text-green-400 text-[10px] lg:text-[11px] font-bold uppercase">
                                            Live
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex flex-col gap-6 lg:gap-8 text-center lg:text-left items-center lg:items-start">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy serif leading-tight">
                            Global Scale & <br className="hidden lg:block" />
                            Deployment.
                        </h2>
                        <p className="text-base lg:text-lg text-brand-slate leading-relaxed font-light max-w-xl">
                            Deploy your models where your users are. Ovanthra's edge network
                            spans 24 regions, ensuring low-latency inference and
                            high-availability regardless of geography.
                        </p>
                        <div className="grid grid-cols-2 gap-8 lg:gap-10 pt-4 lg:pt-6 w-full max-w-sm">
                            <div>
                                <p className="text-3xl lg:text-4xl font-medium text-brand-navy serif mb-1 lg:mb-2">
                                    24
                                </p>
                                <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                    Global Regions
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl lg:text-4xl font-medium text-brand-navy serif mb-1 lg:mb-2">
                                    &lt;15ms
                                </p>
                                <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                    Average Latency
                                </p>
                            </div>
                        </div>
                        <div className="pt-4 lg:pt-6">
                            <Link
                                className="inline-flex items-center gap-2 text-brand-navy font-semibold border-b-2 border-slate-200 pb-1 hover:border-brand-navy transition-all text-sm lg:text-base"
                                href="#"
                            >
                                View deployment map
                                <span className="material-symbols-outlined text-lg">public</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
