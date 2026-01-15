import { Product } from "@/lib/products-data";

export function ProductSpecs({ specs }: { specs: Product["specs"] }) {
    return (
        <section className="py-20 lg:py-24 bg-brand-navy text-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h3 className="text-2xl font-medium serif mb-6">
                            Technical Specifications
                        </h3>
                        <p className="text-slate-400 font-light text-sm leading-relaxed mb-8">
                            Detailed performance metrics and architectural standards for
                            engineering leadership review.
                        </p>
                        <button className="text-white border border-white/20 px-6 py-3 rounded text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer">
                            Download Technical Whitepaper
                        </button>
                    </div>
                    <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-12">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                                Deployment
                            </h4>
                            <ul className="space-y-4">
                                {specs.deployment.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between border-b border-slate-800 pb-2"
                                    >
                                        <span className="text-sm text-slate-300">{item.label}</span>
                                        <span className="text-sm font-semibold">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                                Latency & Throughput
                            </h4>
                            <ul className="space-y-4">
                                {specs.performance.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between border-b border-slate-800 pb-2"
                                    >
                                        <span className="text-sm text-slate-300">{item.label}</span>
                                        <span className="text-sm font-semibold">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                                Compliance
                            </h4>
                            <ul className="space-y-4">
                                {specs.compliance.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between border-b border-slate-800 pb-2"
                                    >
                                        <span className="text-sm text-slate-300">{item.label}</span>
                                        <span className="text-sm font-semibold">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                                Support
                            </h4>
                            <ul className="space-y-4">
                                {specs.support.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between border-b border-slate-800 pb-2"
                                    >
                                        <span className="text-sm text-slate-300">{item.label}</span>
                                        <span className="text-sm font-semibold">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
