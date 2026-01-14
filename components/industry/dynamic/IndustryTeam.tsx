import { IndustryData, IndustryMember } from "@/lib/industry-data";

export function IndustryTeam({ data }: { data: IndustryData }) {
    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-slate-950">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-20 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em] text-brand-slate mb-6">Subject Matter Expertise</h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy dark:text-white serif">{data.team.title}</h3>
                    </div>
                    <p className="text-brand-slate dark:text-slate-400 font-light max-w-sm text-sm lg:text-base">
                        {data.team.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {data.team.members.map((member: IndustryMember, index: number) => (
                        <div key={index} className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 lg:mb-8 relative grayscale hover:grayscale-0 transition-all duration-700 bg-slate-100 dark:bg-slate-900 shadow-sm">
                                {member.image ? (
                                    <img alt={member.name} className="w-full h-full object-cover" src={member.image} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-slate-400 text-6xl font-light">person</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 lg:p-8">
                                    <p className="text-white text-xs lg:text-sm font-light leading-relaxed">{member.description}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg lg:text-xl font-semibold text-brand-navy dark:text-white serif">{member.name}</h4>
                                    <p className="text-[10px] lg:text-xs text-slate-500 font-medium uppercase tracking-[0.2em] mt-1">{member.role}</p>
                                </div>
                                <span className="material-symbols-outlined text-brand-navy dark:text-brand-slate opacity-40 text-lg">north_east</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
