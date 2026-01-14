import { IndustryData } from "@/lib/industry-data";

export function IndustryDetailHero({ data }: { data: IndustryData }) {
    return (
        <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center pt-24 lg:pt-20 bg-brand-navy dark:bg-brand-deep text-white overflow-hidden">
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-10"></div>
                <img
                    alt={data.title}
                    className="w-full h-full object-cover grayscale"
                    src={data.heroImage}
                />
            </div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-20 w-full">
                <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                        <span className="text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-slate-400">Industry Sector</span>
                        <span className="h-px w-8 lg:w-12 bg-slate-600"></span>
                        <span className="text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-slate-400">{data.id} / {data.sector}</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-medium leading-[1.1] lg:leading-[1.05] tracking-tight serif mb-8 lg:mb-12">
                        {data.title.split(' ').map((word: string, i: number) => (
                            word.toLowerCase() === 'capital' || word.toLowerCase() === 'intelligence' || word.toLowerCase() === 'perspective' || word.toLowerCase() === 'sovereign' ?
                                <span key={i} className="italic font-light"> {word} </span> : ` ${word} `
                        ))}
                    </h1>
                    <p className="text-lg lg:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mb-8 lg:mb-12">
                        {data.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
                        <button className="w-full sm:w-auto bg-white text-brand-navy px-10 lg:px-12 py-4 lg:py-5 rounded-lg font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-3 cursor-pointer shadow-lg">
                            Request Strategy Brief
                            <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
                        </button>
                        <div className="flex items-center gap-3 group cursor-pointer w-full sm:w-auto justify-center sm:justify-start">
                            <div className="size-10 lg:size-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined font-light">play_arrow</span>
                            </div>
                            <span className="text-xs lg:text-sm font-semibold tracking-widest uppercase">The Perspective</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Stats - Move to inline for mobile if needed, but here sticking to absolute with responsive positioning */}
            <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex flex-row lg:flex-col gap-6 lg:gap-6 items-end pointer-events-none">
                {data.stats.slice(0, 2).map((stat: { label: string; value: string }, index: number) => (
                    <div key={index} className="flex flex-col items-end">
                        <span className="text-[8px] lg:text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</span>
                        <span className="text-lg lg:text-2xl font-light serif italic">{stat.value}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
