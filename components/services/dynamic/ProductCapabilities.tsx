import { Product } from "@/lib/products-data";

export function ProductCapabilities({
    capabilities,
}: {
    capabilities: Product["capabilities"];
}) {
    return (
        <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-4">
                        Core Capabilities
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy serif leading-tight">
                        Engineered for Complexity
                    </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {capabilities.map((capability, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <div className="size-12 bg-slate-50 rounded-lg flex items-center justify-center text-brand-navy mb-6 border border-slate-100">
                                <span className="material-symbols-outlined text-2xl">
                                    {capability.icon}
                                </span>
                            </div>
                            <h4 className="text-lg font-semibold text-brand-navy mb-3">
                                {capability.title}
                            </h4>
                            <p className="text-brand-slate text-sm leading-relaxed font-light">
                                {capability.description}
                            </p>
                            <ul className="mt-6 space-y-2">
                                {capability.features.map((feature, fIndex) => (
                                    <li
                                        key={fIndex}
                                        className="flex items-center gap-2 text-xs font-medium text-slate-600"
                                    >
                                        <span className="material-symbols-outlined text-green-600 text-sm">
                                            check_circle
                                        </span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
