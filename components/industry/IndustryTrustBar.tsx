export function IndustryTrustBar() {
    const certifications = [
        { icon: "verified_user", label: "ISO 27001" },
        { icon: "security", label: "SOC2" },
        { icon: "bolt", label: "99.9% UPTIME" },
        { icon: "public", label: "GLOBAL CLOUD" }
    ];

    return (
        <section className="w-full py-12 lg:py-24 border-t border-slate-100 dark:border-slate-800">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-3 text-brand-navy dark:text-slate-400 font-bold tracking-widest text-[10px] lg:text-xs">
                            <span className="material-symbols-outlined text-brand-slate text-lg lg:text-xl font-light">
                                {cert.icon}
                            </span>
                            {cert.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
