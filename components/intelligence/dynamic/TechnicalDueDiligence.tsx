interface TechnicalDueDiligenceProps {
    title: string;
    description: string;
    downloadLabel: string;
    secondaryCta: string;
}

export function TechnicalDueDiligence({
    title,
    description,
    downloadLabel,
    secondaryCta,
}: TechnicalDueDiligenceProps) {
    return (
        <section className="py-20 lg:py-24 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="bg-white border border-slate-200 rounded-2xl p-12 lg:p-20 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-slate-100/50 skew-y-3 scale-150 origin-bottom-right pointer-events-none"></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-brand-navy serif mb-6 leading-tight">
                                {title}
                            </h2>
                            <p className="text-brand-slate text-lg font-light leading-relaxed mb-8">
                                {description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="w-full sm:w-auto bg-brand-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer">
                                    <span className="material-symbols-outlined">description</span>
                                    {downloadLabel}
                                </button>
                                <button className="w-full sm:w-auto text-brand-navy font-semibold px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors border border-slate-200 cursor-pointer">
                                    {secondaryCta}
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative w-64 aspect-[3/4] bg-white shadow-2xl border border-slate-200 rounded-sm rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group">
                                <div className="absolute inset-0 bg-slate-50 flex flex-col p-6 items-center text-center">
                                    <div className="size-12 bg-brand-navy rounded-full mb-8 flex items-center justify-center text-white">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <div className="w-full h-px bg-slate-200 mb-8"></div>
                                    <h4 className="text-xl font-serif text-brand-navy mb-2">
                                        Ovanthra
                                    </h4>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-12">
                                        Security Architecture <br />
                                        2024 Report
                                    </p>
                                    <div className="space-y-2 w-full px-4">
                                        <div className="h-1 bg-slate-200 w-full rounded-full"></div>
                                        <div className="h-1 bg-slate-200 w-2/3 mx-auto rounded-full"></div>
                                        <div className="h-1 bg-slate-200 w-3/4 mx-auto rounded-full"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-slate-300 to-white shadow-lg rounded-tl-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
