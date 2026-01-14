export function SecurityCompliance() {
    return (
        <section className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24 items-center lg:items-end text-center lg:text-left">
                    <div>
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                            Security & Compliance
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy serif leading-tight">
                            Enterprise-Grade <br className="hidden lg:block" />
                            Security Standards.
                        </h3>
                    </div>
                    <p className="text-base lg:text-lg text-brand-slate leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                        Uncompromising protection for your most sensitive data. Our platform
                        is architected zero-trust from the ground up to meet the rigorous
                        demands of global regulatory bodies.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-slate-200 border border-slate-200 overflow-hidden rounded-2xl shadow-sm">
                    <div className="bg-white p-8 lg:p-12 hover:bg-slate-50 transition-colors flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="material-symbols-outlined text-brand-navy text-4xl mb-6 lg:mb-8">
                            verified_user
                        </span>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-5 text-brand-navy">
                            SOC2 & ISO 27001
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            Fully certified compliance frameworks. We undergo rigorous
                            third-party auditing to ensure our controls meet the highest
                            international standards.
                        </p>
                    </div>
                    <div className="bg-white p-8 lg:p-12 hover:bg-slate-50 transition-colors flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="material-symbols-outlined text-brand-navy text-4xl mb-6 lg:mb-8">
                            dns
                        </span>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-5 text-brand-navy">
                            Data Residency
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            Keep your data within sovereign borders. We offer localized
                            processing and storage options across 30+ jurisdictions globally.
                        </p>
                    </div>
                    <div className="bg-white p-8 lg:p-12 hover:bg-slate-50 transition-colors flex flex-col items-center lg:items-start text-center lg:text-left md:col-span-2 lg:col-span-1 border-t md:border-t-0 md:border-l lg:border-l-0 border-slate-200">
                        <span className="material-symbols-outlined text-brand-navy text-4xl mb-6 lg:mb-8">
                            lock_person
                        </span>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-5 text-brand-navy">
                            Role-Based Access
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            Granular permissioning systems and SSO integration allow you to
                            manage access control at the individual resource level.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
