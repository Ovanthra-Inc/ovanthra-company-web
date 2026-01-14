import { IndustryData } from "@/lib/industry-data";

export function IndustryQuote({ data }: { data: IndustryData }) {
    return (
        <section className="min-h-[50vh] lg:h-[70vh] relative overflow-hidden flex items-center">
            <img
                alt="Institutional Leadership"
                className="absolute inset-0 w-full h-full object-cover grayscale"
                src={data.heroImage}
            />
            <div className="absolute inset-0 bg-brand-navy/60"></div>
            <div className="relative z-10 w-full flex items-center justify-center text-center p-6 lg:p-8">
                <div className="max-w-4xl">
                    <blockquote className="text-2xl sm:text-4xl lg:text-5xl text-white serif italic font-light leading-tight mb-8">
                        "{data.quote.text}"
                    </blockquote>
                    <cite className="text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.3em] lg:tracking-[0.4em] text-white/70 not-italic">
                        {data.quote.attribution}
                    </cite>
                </div>
            </div>
        </section>
    );
}
