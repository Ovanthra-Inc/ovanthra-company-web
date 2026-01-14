export function SolutionsHero() {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left items-center lg:items-start">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-6 lg:w-8 bg-brand-slate/40"></span>
                        <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate">
                            Enterprise Architecture
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] lg:leading-[1.05] tracking-tight text-brand-navy serif">
                        Intelligent Solutions for Institutional{" "}
                        <span className="italic font-normal">Scale.</span>
                    </h1>
                    <p className="text-base lg:text-xl text-brand-slate max-w-[560px] leading-relaxed font-light">
                        Deploying sovereign AI infrastructure that adapts to the rigorous
                        demands of global industries. From predictive logistics to
                        high-frequency financial modeling.
                    </p>
                </div>
                <div className="relative group max-w-lg mx-auto lg:max-w-none w-full">
                    <div className="absolute -inset-10 bg-slate-200/40 blur-3xl rounded-full opacity-50 -z-10"></div>
                    <div className="relative bg-white border border-slate-200 p-2 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]">
                        <div
                            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl grayscale-[10%] transition-all duration-700"
                            data-alt="Minimalist architectural space showing structure and scale"
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
