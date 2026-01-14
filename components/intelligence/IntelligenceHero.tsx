export function IntelligenceHero() {
    return (
        <section className="relative py-20 lg:py-36 overflow-hidden bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="flex flex-col gap-8 lg:gap-10 text-center lg:text-left items-center lg:items-start">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-6 lg:w-8 bg-brand-slate/40"></span>
                        <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate">
                            Enterprise Platform
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] lg:leading-[1.05] tracking-tight text-brand-navy serif">
                        Empowering Global Institutions with{" "}
                        <span className="italic font-normal">Sovereign Intelligence.</span>
                    </h1>
                    <p className="text-base lg:text-xl text-brand-slate max-w-[560px] leading-relaxed font-light">
                        The infrastructure for secure, scalable AI. We provide the governance
                        frameworks and neural architecture required to deploy high-fidelity
                        models across regulated industries.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                        <button className="w-full sm:w-auto bg-brand-navy text-white px-10 py-4 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-md cursor-pointer text-sm">
                            Contact Sales
                            <span className="material-symbols-outlined text-lg">
                                arrow_right_alt
                            </span>
                        </button>
                        <button className="w-full sm:w-auto bg-white border border-slate-200 text-brand-navy px-10 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-sm cursor-pointer text-sm">
                            View Security Specs
                        </button>
                    </div>
                </div>
                <div className="relative group max-w-lg mx-auto lg:max-w-none w-full">
                    <div className="absolute -inset-10 bg-slate-200/40 blur-3xl rounded-full opacity-50 -z-10"></div>
                    <div className="relative bg-white border border-slate-200 p-2 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]">
                        <div
                            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwGh2G5ggahhK-fbrBTmLDjvi1D7NVllzZhK5ZJUd0oqcxe7R0oq-fDzvRKC8TUYbEv_oajkxKnhJgv-_cHSFDaT7iXp-9_9QNi_1oyVw6deJKRwIJhVj0wV7zzWYYymbVuZStavsA4cJZzth2nqANGgWWpGCWdNq5Q7e_JzIxLeLiB2OL2UoxyoELttx52WcvtLk3kh8IokgpkxM2DjlnYrSOlKLiRJFf7z9_tSFlYNxtjUig3UJm5s8T9p0fKCiezQd3pMkJun4I")',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
