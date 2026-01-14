export function ServiceSupport() {
    return (
        <section className="py-20 lg:py-32 bg-[var(--light-gray)]">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 lg:mb-20">
                    <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                        Service Level Agreements
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy serif leading-tight">
                        Dedicated Support & Services
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
                        <div className="size-12 lg:size-14 rounded-full bg-slate-50 flex items-center justify-center mb-6 lg:mb-8 border border-slate-100">
                            <span className="material-symbols-outlined text-brand-navy text-2xl lg:text-3xl font-light">
                                support_agent
                            </span>
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 text-brand-navy">
                            Premium Account Management
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            Your dedicated Success Manager works as an extension of your team,
                            providing strategic guidance and ensuring you extract maximum value.
                        </p>
                    </div>
                    <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
                        <div className="size-12 lg:size-14 rounded-full bg-slate-50 flex items-center justify-center mb-6 lg:mb-8 border border-slate-100">
                            <span className="material-symbols-outlined text-brand-navy text-2xl lg:text-3xl font-light">
                                timer
                            </span>
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 text-brand-navy">
                            24/7 Uptime SLAs
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            We guarantee 99.99% uptime for mission-critical deployments, backed
                            by financial service credits and round-the-clock monitoring.
                        </p>
                    </div>
                    <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                        <div className="size-12 lg:size-14 rounded-full bg-slate-50 flex items-center justify-center mb-6 lg:mb-8 border border-slate-100">
                            <span className="material-symbols-outlined text-brand-navy text-2xl lg:text-3xl font-light">
                                engineering
                            </span>
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 text-brand-navy">
                            Solution Engineering
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            Access our elite team of AI engineers for custom implementation
                            support, model fine-tuning, and architectural reviews.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
