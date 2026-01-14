export function Vision() {
    return (
        <section className="py-20 lg:py-32 bg-[var(--light-gray)]">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                        The Road Ahead
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-brand-navy serif">
                        Our Vision
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
                        <div className="size-14 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                            <span className="material-symbols-outlined text-brand-navy text-3xl font-light">
                                shield_with_heart
                            </span>
                        </div>
                        <h4 className="text-xl font-semibold mb-4 text-brand-navy">
                            Innovation with Integrity
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            We prioritize ethical architectures, ensuring that every advancement
                            in AI is anchored by transparency and rigorous safety standards.
                        </p>
                    </div>
                    <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
                        <div className="size-14 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                            <span className="material-symbols-outlined text-brand-navy text-3xl font-light">
                                public
                            </span>
                        </div>
                        <h4 className="text-xl font-semibold mb-4 text-brand-navy">
                            Global Scalability
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            Designing intelligence systems that operate across borders,
                            cultures, and industries with consistent excellence and local
                            relevance.
                        </p>
                    </div>
                    <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                        <div className="size-14 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                            <span className="material-symbols-outlined text-brand-navy text-3xl font-light">
                                hub
                            </span>
                        </div>
                        <h4 className="text-xl font-semibold mb-4 text-brand-navy">
                            Human-Centric Intelligence
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            Our goal is to augment the human experience, building tools that
                            empower specialists to reach new heights of creative and strategic
                            output.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
