export function CTA() {
    return (
        <section className="py-20 lg:py-32">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="bg-brand-navy rounded-2xl lg:rounded-[2rem] p-8 sm:p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-400 to-transparent"></div>
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8 lg:gap-10">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight serif leading-tight">
                            Elevate your enterprise <br className="hidden sm:block" />
                            intelligence today.
                        </h2>
                        <p className="text-slate-300 text-base lg:text-lg font-light leading-relaxed">
                            Join an elite cohort of organizations defining the next era of
                            industrial innovation. Request a private demonstration of the
                            Ovanthra platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 w-full sm:w-auto">
                            <button className="bg-white text-brand-navy px-8 lg:px-12 py-4 lg:py-5 rounded-lg font-bold hover:bg-slate-100 transition-all shadow-lg cursor-pointer text-sm lg:text-base">
                                Schedule a Consultation
                            </button>
                            <button className="bg-transparent border border-white/20 text-white px-8 lg:px-12 py-4 lg:py-5 rounded-lg font-bold hover:bg-white/10 transition-colors cursor-pointer text-sm lg:text-base">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
