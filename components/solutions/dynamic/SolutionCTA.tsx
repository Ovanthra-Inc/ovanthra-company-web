import { Solution } from "@/lib/solutions-data";

export function SolutionCTA({ data }: { data: Solution["cta"] }) {
    return (
        <section className="py-20 lg:py-32">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="bg-brand-navy rounded-[2rem] p-16 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-400 to-transparent"></div>
                    <div className="bg-slate-50 rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-20 text-center border border-slate-200">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy serif mb-6 leading-tight">
                            Ready to transform your operations?
                        </h2>
                        <p className="text-brand-slate text-base lg:text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                            {data.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center">
                            <button className="w-full sm:w-auto bg-brand-navy text-white px-10 lg:px-12 py-4 lg:py-5 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg cursor-pointer text-sm lg:text-base">
                                Request a Demo
                            </button>
                            <button className="w-full sm:w-auto bg-transparent border border-slate-200 text-brand-navy px-10 lg:px-12 py-4 lg:py-5 rounded-lg font-bold hover:bg-slate-50 transition-colors cursor-pointer text-sm lg:text-base">
                                Speak to Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
