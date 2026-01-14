interface AccessControlFeature {
    icon: string;
    title: string;
    description: string;
}

interface AccessControlProps {
    title: string;
    subtitle: string;
    description: string;
    features: AccessControlFeature[];
}

export function AccessControl({
    title,
    subtitle,
    description,
    features,
}: AccessControlProps) {
    return (
        <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                            {title}
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy serif mb-6 leading-tight">
                            {subtitle}
                        </h3>
                        <p className="text-brand-slate text-lg font-light leading-relaxed mb-8">
                            {description}
                        </p>
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 text-brand-navy">
                                        <span className="material-symbols-outlined">
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-brand-navy font-semibold mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-brand-slate font-light">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-4 opacity-60">
                            <div className="h-2 w-20 bg-slate-200 rounded mb-4"></div>
                            <div className="flex gap-2 mb-2">
                                <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-2 w-full bg-slate-100 rounded"></div>
                                    <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 relative z-10">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm font-semibold text-brand-navy">
                                    Configure SSO
                                </span>
                                <span className="h-4 w-8 rounded-full bg-green-100 border border-green-200 flex items-center justify-end px-1">
                                    <span className="size-2 rounded-full bg-green-500"></span>
                                </span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                                        Identity Provider URL
                                    </label>
                                    <div className="h-10 bg-slate-50 border border-slate-200 rounded flex items-center px-3 text-sm text-slate-500 font-mono truncate">
                                        https://sso.vertex-systems.com/app/ovanthra
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                                        Certificate
                                    </label>
                                    <div className="h-24 bg-slate-50 border border-slate-200 rounded p-3 text-[10px] text-slate-400 font-mono leading-tight">
                                        -----BEGIN CERTIFICATE-----
                                        <br />
                                        MIIDXTCCAkWgAwIBAgIJAL...
                                        <br />
                                        ...
                                        <br />
                                        -----END CERTIFICATE-----
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button className="w-full bg-brand-navy text-white text-sm font-semibold py-2 rounded cursor-pointer">
                                    Save Configuration
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mt-4 opacity-60">
                            <div className="h-2 w-20 bg-slate-200 rounded mb-4"></div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-slate-100 rounded"></div>
                                <div className="h-2 w-full bg-slate-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
