export function IndustryHero() {
    return (
        <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-32">
            <div className="flex flex-col gap-8 items-center justify-center p-6 sm:p-10 lg:p-20 text-center bg-slate-50/50 rounded-2xl lg:rounded-3xl border border-slate-100">
                <div className="flex flex-col gap-4 max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-[1.1] lg:leading-[1.05] tracking-tight text-brand-navy serif">
                        Industry-Specific Intelligence at Scale
                    </h1>
                    <p className="text-brand-slate serif dark:text-gray-400 text-base lg:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-2 lg:mt-4">
                        Harnessing the power of AI-first solutions to solve the most complex challenges in global industry verticals.
                    </p>
                </div>
                <button className="flex min-w-[160px] lg:min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 lg:h-14 px-8 bg-brand-navy text-white text-base lg:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-slate-800 transition-all hover:scale-[1.02] shadow-lg shadow-navy-blue/10">
                    <span className="truncate">Get Started</span>
                </button>
            </div>
        </section>
    );
}
