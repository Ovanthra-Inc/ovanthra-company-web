export function ExpertServices() {
    return (
        <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                        Expert Services
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy serif leading-tight">
                        Accelerate Your Integration
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    <div className="group flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="size-14 lg:size-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 mb-6 lg:mb-8 group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300 shadow-sm">
                            <span className="material-symbols-outlined text-2xl lg:text-3xl text-brand-navy group-hover:text-white font-light transition-colors">
                                engineering
                            </span>
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 text-brand-navy">
                            Dedicated Solutions Engineers
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light max-w-sm">
                            Embed a senior Ovanthra engineer directly within your team. They
                            provide proactive monitoring, architectural guidance, and code-level
                            support to ensure your specific use cases are optimized for
                            performance and cost.
                        </p>
                    </div>
                    <div className="group flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="size-14 lg:size-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 mb-6 lg:mb-8 group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300 shadow-sm">
                            <span className="material-symbols-outlined text-2xl lg:text-3xl text-brand-navy group-hover:text-white font-light transition-colors">
                                school
                            </span>
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 text-brand-navy">
                            On-site Training
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light max-w-sm">
                            Equip your workforce with the skills to leverage AI effectively. We
                            offer bespoke workshops ranging from executive strategy sessions to
                            deep-dive technical bootcamps for your data science and engineering
                            teams.
                        </p>
                    </div>
                    <div className="group flex flex-col items-center lg:items-start text-center lg:text-left md:col-span-2 lg:col-span-1 border-t md:border-t-0 md:border-l lg:border-l-0 pt-10 md:pt-0 md:pl-0 lg:pl-0 border-transparent">
                        <div className="size-14 lg:size-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 mb-6 lg:mb-8 group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300 shadow-sm">
                            <span className="material-symbols-outlined text-2xl lg:text-3xl text-brand-navy group-hover:text-white font-light transition-colors">
                                integration_instructions
                            </span>
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 text-brand-navy">
                            Custom Integration Services
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light max-w-sm">
                            Navigate complex legacy environments with confidence. Our
                            professional services team builds custom connectors, data pipelines,
                            and security middleware to seamlessly integrate Ovanthra
                            intelligence into your existing stack.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
