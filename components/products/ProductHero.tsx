export function ProductHero() {
    return (
        <section className="relative py-16 lg:py-20 bg-white border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="max-w-4xl text-center lg:text-left items-center lg:items-start flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-6 lg:w-8 bg-brand-navy"></span>
                        <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-navy">
                            Catalog
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-brand-navy serif mb-6 leading-tight">
                        Our AI Product Ecosystem
                    </h1>
                    <p className="text-base lg:text-xl text-brand-slate font-light leading-relaxed max-w-2xl">
                        Explore our comprehensive suite of intelligent tools, security
                        frameworks, and infrastructure designed to seamlessly integrate into
                        the modern enterprise.
                    </p>
                </div>
            </div>
        </section>
    );
}
