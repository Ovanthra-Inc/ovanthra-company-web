export function PlatformCapabilities() {
    return (
        <section className="py-20 lg:py-32 bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-8 text-center lg:text-left items-center lg:items-start">
                    <div className="max-w-xl">
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                            Core Infrastructure
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white serif">
                            Platform Capabilities
                        </h3>
                    </div>
                    <p className="text-slate-300 max-w-md font-light leading-relaxed text-base lg:text-lg">
                        Built on a foundation of rigorous engineering, our platform ensures
                        your intelligence ecosystem is robust, compliant, and integrated.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 lg:gap-y-16">
                    <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                        <div className="size-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 shadow-sm">
                            <span className="material-symbols-outlined text-3xl font-light text-white">
                                integration_instructions
                            </span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-semibold text-white">
                            Cross-Platform Integration
                        </h4>
                        <p className="text-slate-300 leading-relaxed font-light text-sm lg:text-base">
                            Seamlessly connect with existing enterprise ERPs, cloud data lakes,
                            and legacy systems via our universal API layer, eliminating data
                            silos without disrupting operations.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
                        <div className="size-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 shadow-sm">
                            <span className="material-symbols-outlined text-3xl font-light text-white">
                                gavel
                            </span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-semibold text-white">
                            Regulatory Compliance
                        </h4>
                        <p className="text-slate-300 leading-relaxed font-light text-sm lg:text-base">
                            Automated governance protocols ensure all AI outputs adhere to GDPR,
                            CCPA, and industry-specific regulations, providing audit trails for
                            every decision.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left md:col-span-2 lg:col-span-1 max-w-md md:mx-auto lg:mx-0">
                        <div className="size-14 rounded-full bg-white/10 flex items-center justify-center border border-white/10 shadow-sm">
                            <span className="material-symbols-outlined text-3xl font-light text-white">
                                model_training
                            </span>
                        </div>
                        <h4 className="text-xl lg:text-2xl font-semibold text-white">
                            Predictive Modeling
                        </h4>
                        <p className="text-slate-300 leading-relaxed font-light text-sm lg:text-base">
                            Utilize advanced time-series forecasting and behavioral analysis to
                            anticipate market shifts, optimizing resource allocation before needs
                            arise.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
