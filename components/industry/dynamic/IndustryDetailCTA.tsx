import { IndustryData } from "@/lib/industry-data";

export function IndustryDetailCTA({ data }: { data: IndustryData }) {
    return (
        <section className="py-20 lg:py-32 bg-brand-navy dark:bg-brand-deep">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="bg-brand-deep dark:bg-slate-950 rounded-2xl lg:rounded-3xl p-10 sm:p-16 lg:p-24 relative overflow-hidden text-center border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_#475569_0%,_transparent_50%)]"></div>
                    </div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-white serif mb-8 lg:mb-10 leading-tight">
                            Elevate your institutional <span className="italic">perspective.</span>
                        </h2>
                        <p className="text-slate-400 text-base lg:text-lg font-light mb-10 lg:mb-12">
                            Join the world's leading {data.sector.toLowerCase()} institutions in the era of sovereign intelligence.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6">
                            <button className="w-full sm:w-auto bg-white text-brand-navy px-10 lg:px-12 py-4 lg:py-5 rounded-lg font-bold hover:bg-slate-100 transition-all cursor-pointer shadow-lg text-sm lg:text-base">
                                Schedule Private Briefing
                            </button>
                            <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-10 lg:px-12 py-4 lg:py-5 rounded-lg font-bold hover:bg-white/10 transition-colors cursor-pointer text-sm lg:text-base">
                                Technical Whitepaper
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
