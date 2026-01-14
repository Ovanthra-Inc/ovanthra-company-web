interface BlogDetailHeroProps {
    category: string;
    title: string;
    author: {
        name: string;
        initials: string;
        role: string;
        avatar?: string;
    };
    date: string;
    readTime: string;
    image: string;
}

export function BlogDetailHero({
    category,
    title,
    author,
    date,
    readTime,
    image,
}: BlogDetailHeroProps) {
    return (
        <article className="relative bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
                <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
                    <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
                        <span className="h-px w-6 lg:w-8 bg-brand-slate/40"></span>
                        <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate">
                            {category}
                        </span>
                        <span className="h-px w-6 lg:w-8 bg-brand-slate/40"></span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-brand-navy serif mb-8">
                        {title}
                    </h1>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs lg:text-sm text-brand-slate font-medium">
                        <div className="flex items-center gap-2">
                            {author.avatar ? (
                                <div className="size-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                                    <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                                </div>
                            ) : (
                                <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-brand-navy shrink-0">
                                    {author.initials}
                                </div>
                            )}
                            <span className="whitespace-nowrap">
                                {author.name}, {author.role}
                            </span>
                        </div>
                        <span className="hidden sm:block size-1 bg-slate-300 rounded-full"></span>
                        <span className="opacity-70">{date}</span>
                        <span className="hidden sm:block size-1 bg-slate-300 rounded-full"></span>
                        <span className="opacity-70">{readTime}</span>
                    </div>
                </div>
                <div className="w-full aspect-[16/9] lg:aspect-[21/9] rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl mb-16 lg:mb-20 bg-slate-100 relative group">
                    <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply transition-opacity group-hover:opacity-0 duration-700"></div>
                    <div
                        className="w-full h-full bg-center bg-cover transition-transform duration-1000 scale-100 group-hover:scale-105"
                        style={{ backgroundImage: `url("${image}")` }}
                    ></div>
                </div>
            </div>
        </article>
    );
}
