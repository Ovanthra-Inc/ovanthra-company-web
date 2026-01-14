interface BlogContentProps {
    intro: string;
    sections: Array<{
        heading?: string;
        paragraphs?: string[];
        quote?: {
            text: string;
            attribution: string;
        };
        list?: Array<{
            icon: string;
            title: string;
            description: string;
        }>;
    }>;
    tags: string[];
}

export function BlogContent({ intro, sections, tags }: BlogContentProps) {
    return (
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pb-16">
            <div className="max-w-[720px] mx-auto serif text-brand-slate text-base lg:text-[1.15rem] leading-[1.8]">
                <p className="mb-10 first-letter:text-5xl first-letter:lg:text-6xl first-letter:font-bold first-letter:text-brand-navy first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px]">
                    {intro}
                </p>

                {sections.map((section, index) => (
                    <div key={index}>
                        {section.heading && (
                            <h2 className="text-2xl lg:text-3xl font-medium text-brand-navy mb-6 mt-12 lg:mt-16 tracking-tight">
                                {section.heading}
                            </h2>
                        )}

                        {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                            <p key={pIndex} className="mb-8">
                                {paragraph}
                            </p>
                        ))}

                        {section.quote && (
                            <figure className="my-12 lg:my-16 border-l-4 border-brand-navy pl-6 lg:pl-8 py-2 bg-slate-50/50 rounded-r-lg">
                                <blockquote className="text-xl lg:text-2xl italic text-brand-navy leading-normal font-medium">
                                    "{section.quote.text}"
                                </blockquote>
                                <figcaption className="mt-4 text-[10px] lg:text-sm font-bold uppercase tracking-widest text-slate-400 not-italic sans-serif">
                                    — {section.quote.attribution}
                                </figcaption>
                            </figure>
                        )}

                        {section.list && (
                            <ul className="mb-12 list-none space-y-6 pl-0 font-sans text-sm lg:text-base">
                                {section.list.map((item, lIndex) => (
                                    <li key={lIndex} className="flex gap-4 items-start">
                                        <span className="text-brand-navy material-symbols-outlined mt-0.5 text-xl">
                                            {item.icon}
                                        </span>
                                        <span>
                                            <strong className="text-brand-navy">{item.title}:</strong>{" "}
                                            {item.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            <div className="max-w-[720px] mx-auto mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex gap-2 flex-wrap justify-center">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-slate-50 text-brand-navy px-4 py-1.5 text-[10px] lg:text-xs font-bold uppercase tracking-wider rounded-full hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <button
                        aria-label="Share article"
                        className="text-brand-slate hover:text-brand-navy transition-colors p-2 hover:bg-slate-50 rounded-full cursor-pointer border border-transparent hover:border-slate-100"
                    >
                        <span className="material-symbols-outlined">share</span>
                    </button>
                    <button
                        aria-label="Bookmark article"
                        className="text-brand-slate hover:text-brand-navy transition-colors p-2 hover:bg-slate-50 rounded-full cursor-pointer border border-transparent hover:border-slate-100"
                    >
                        <span className="material-symbols-outlined">bookmark</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
