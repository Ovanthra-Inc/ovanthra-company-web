import { Solution } from "@/lib/solutions-data";

export function SolutionSecurity({ data }: { data: Solution["security"] }) {
    return (
        <section className="py-20 lg:py-24 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
                    <div>
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                            Security & Compliance
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy serif mb-6 leading-tight">
                            Fortified Intelligence
                        </h3>
                        <p className="mt-4 text-brand-slate font-light">{data.description}</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
                        >
                            <span className="material-symbols-outlined text-4xl text-brand-navy mb-4">
                                {item.icon}
                            </span>
                            <h4 className="font-semibold text-brand-navy mb-2">
                                {item.title}
                            </h4>
                            <p className="text-xs text-brand-slate leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
