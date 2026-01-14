interface DataProtectionProps {
    title: string;
    subtitle: string;
    atRest: {
        icon: string;
        title: string;
        features: string[];
    };
    inTransit: {
        icon: string;
        title: string;
        features: string[];
    };
}

export function DataProtection({
    title,
    subtitle,
    atRest,
    inTransit,
}: DataProtectionProps) {
    const getColorClass = (icon: string) => {
        if (icon === "hard_drive" || icon === "encrypted") return "blue";
        if (icon === "swap_calls" || icon === "shield_locked") return "indigo";
        return "blue";
    };

    const atRestColor = getColorClass(atRest.icon);
    const inTransitColor = getColorClass(inTransit.icon);

    return (
        <section className="py-20 lg:py-24 bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                        {title}
                    </h2>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-medium serif leading-tight">{subtitle}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    <div className="bg-slate-800/50 p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div
                            className={`size-12 rounded-full bg-${atRestColor}-500/20 flex items-center justify-center mb-8 text-${atRestColor}-300`}
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {atRest.icon}
                            </span>
                        </div>
                        <h4 className="text-2xl font-medium mb-4">{atRest.title}</h4>
                        <ul className="space-y-4 text-slate-300 font-light">
                            {atRest.features.map((feature, index) => (
                                <li key={index} className="flex gap-3">
                                    <span
                                        className={`material-symbols-outlined text-${atRestColor}-400 text-lg mt-0.5`}
                                    >
                                        check_circle
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-800/50 p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div
                            className={`size-12 rounded-full bg-${inTransitColor}-500/20 flex items-center justify-center mb-8 text-${inTransitColor}-300`}
                        >
                            <span className="material-symbols-outlined text-2xl">
                                {inTransit.icon}
                            </span>
                        </div>
                        <h4 className="text-2xl font-medium mb-4">{inTransit.title}</h4>
                        <ul className="space-y-4 text-slate-300 font-light">
                            {inTransit.features.map((feature, index) => (
                                <li key={index} className="flex gap-3">
                                    <span
                                        className={`material-symbols-outlined text-${inTransitColor}-400 text-lg mt-0.5`}
                                    >
                                        check_circle
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
