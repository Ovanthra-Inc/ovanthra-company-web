export function Methodology() {
    return (
        <section className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-24 items-end text-center lg:text-left">
                    <div>
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                            Our Methodology
                        </h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-brand-navy serif leading-tight">
                            Structural Integrity. <br className="hidden sm:block" />
                            Precision Intelligence.
                        </h3>
                    </div>
                    <p className="text-base lg:text-lg text-brand-slate leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                        Our multi-stage approach focuses on the rigorous refinement of
                        enterprise data, ensuring that every AI implementation is robust,
                        ethical, and built for institutional scale.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-2xl">
                    <div className="bg-white p-8 lg:p-12 hover:bg-slate-50 transition-colors">
                        <span className="text-brand-slate/30 text-4xl lg:text-5xl font-light mb-8 lg:mb-10 block serif">
                            01
                        </span>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-5 text-brand-navy">
                            Unified Integration
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            We harmonize disparate data silos into a singular, high-fidelity
                            intelligence stream, maintaining rigorous security protocols at every
                            junction.
                        </p>
                    </div>
                    <div className="bg-white p-8 lg:p-12 hover:bg-slate-50 transition-colors">
                        <span className="text-brand-slate/30 text-4xl lg:text-5xl font-light mb-8 lg:mb-10 block serif">
                            02
                        </span>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-5 text-brand-navy">
                            Neural Processing
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            Using proprietary model architectures, we extract nuanced patterns and
                            predictive vectors with unprecedented accuracy and low-latency
                            execution.
                        </p>
                    </div>
                    <div className="bg-white p-8 lg:p-12 hover:bg-slate-50 transition-colors">
                        <span className="text-brand-slate/30 text-4xl lg:text-5xl font-light mb-8 lg:mb-10 block serif">
                            03
                        </span>
                        <h4 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-5 text-brand-navy">
                            Strategic Synthesis
                        </h4>
                        <p className="text-brand-slate leading-relaxed text-sm font-light">
                            Raw computational output is transformed into actionable executive
                            intelligence, providing the clarity required for high-stakes decision
                            making.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
