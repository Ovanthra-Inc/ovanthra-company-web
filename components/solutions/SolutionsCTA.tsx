export function SolutionsCTA() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="bg-slate-50 rounded-2xl lg:rounded-[2rem] p-8 sm:p-16 lg:p-24 text-center border border-slate-200 relative overflow-hidden shadow-sm">
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8 lg:gap-10">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy serif leading-tight">
                            Ready to deploy enterprise intelligence?
                        </h2>
                        <p className="text-brand-slate text-base lg:text-lg font-light leading-relaxed">
                            Schedule a technical deep-dive with our solutions architects to
                            discuss your specific infrastructure needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-brand-navy text-white px-10 lg:px-12 py-4 lg:py-5 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg cursor-pointer text-sm lg:text-base">
                                Schedule Consultation
                            </button>
                            <button className="w-full sm:w-auto bg-transparent border border-brand-slate/20 text-brand-navy px-10 lg:px-12 py-4 lg:py-5 rounded-lg font-bold hover:bg-white hover:border-brand-slate/40 transition-colors cursor-pointer text-sm lg:text-base">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
