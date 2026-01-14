interface IntelligenceDetailHeroProps {
    status: string;
    statusColor: string;
    headline: string;
    subheadline: string;
    downloadLabel: string;
    secondaryCta: string;
}

export function IntelligenceDetailHero({
    status,
    statusColor,
    headline,
    subheadline,
    downloadLabel,
    secondaryCta,
}: IntelligenceDetailHeroProps) {
    const colorClasses = {
        emerald: "bg-emerald-500",
        blue: "bg-blue-500",
        purple: "bg-purple-500",
    };

    return (
        <section className="relative py-20 lg:py-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-8">
                        <span
                            className={`size-2 rounded-full ${colorClasses[statusColor as keyof typeof colorClasses]
                                } animate-pulse`}
                        ></span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate">
                            {status}
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-brand-navy serif mb-8">
                        {headline.split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                {i < headline.split("\n").length - 1 && <br />}
                            </span>
                        ))}
                    </h1>
                    <p className="text-xl text-brand-slate max-w-[600px] leading-relaxed font-light">
                        {subheadline}
                    </p>
                    <div className="pt-10 flex flex-wrap gap-4">
                        <button className="w-full sm:w-auto bg-brand-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer">
                            {downloadLabel}
                            <span className="material-symbols-outlined text-lg">download</span>
                        </button>
                        <button className="w-full sm:w-auto bg-white border border-slate-200 text-brand-navy px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors cursor-pointer">
                            {secondaryCta}
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]"></div>
            </div>
        </section>
    );
}
