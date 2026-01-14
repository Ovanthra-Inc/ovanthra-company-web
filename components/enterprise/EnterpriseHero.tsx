export function EnterpriseHero() {
    return (
        <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-8 text-center">
                <div className="flex justify-center items-center gap-3 mb-8">
                    <span className="h-px w-8 bg-brand-slate/40"></span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate">
                        Enterprise Services
                    </span>
                    <span className="h-px w-8 bg-brand-slate/40"></span>
                </div>
                <h1 className="text-4xl md:text-6xl font-medium text-brand-navy serif mb-8 leading-tight">
                    Premium Support & <br className="hidden md:block" /> Professional
                    Services
                </h1>
                <p className="text-xl text-brand-slate font-light max-w-3xl mx-auto leading-relaxed">
                    Ensure mission-critical stability with our tiered support packages and
                    dedicated engineering resources. We provide the expertise your
                    infrastructure needs to operate at global scale.
                </p>
            </div>
        </section>
    );
}
