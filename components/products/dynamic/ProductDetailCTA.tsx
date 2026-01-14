import { Product } from "@/lib/products-data";

export function ProductDetailCTA({ cta }: { cta: Product["cta"] }) {
    return (
        <section className="py-20 lg:py-32 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="bg-white rounded-2xl lg:rounded-[2rem] p-8 sm:p-16 lg:p-24 text-center border border-slate-200 relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-100 to-transparent"></div>
                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight serif leading-tight text-brand-navy">
                            {cta.title}
                        </h2>
                        <p className="text-brand-slate text-base lg:text-lg font-light leading-relaxed">
                            {cta.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
                            <button className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg w-full sm:w-auto cursor-pointer">
                                Request a Demo
                            </button>
                            <button className="bg-white border border-slate-200 text-brand-navy px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors w-full sm:w-auto cursor-pointer">
                                Contact Sales
                            </button>
                        </div>
                        <p className="text-xs text-slate-400 mt-4">
                            No credit card required. 14-day free trial available for qualified
                            enterprises.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
