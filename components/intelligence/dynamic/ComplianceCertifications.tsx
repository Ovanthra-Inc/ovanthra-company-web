interface Certification {
    icon: string;
    name: string;
    description: string;
}

interface ComplianceCertificationsProps {
    title: string;
    subtitle: string;
    description: string;
    certifications: Certification[];
}

export function ComplianceCertifications({
    title,
    subtitle,
    description,
    certifications,
}: ComplianceCertificationsProps) {
    return (
        <section className="py-20 lg:py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                            {title}
                        </h2>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-brand-navy serif mb-6 leading-tight">
                            {subtitle}
                        </h3>
                        <p className="text-brand-slate leading-relaxed font-light mb-8">
                            {description}
                        </p>
                        <a
                            className="inline-flex items-center gap-2 text-brand-navy font-semibold border-b border-slate-200 pb-1 hover:border-brand-navy transition-all"
                            href="#"
                        >
                            Request Audit Report{" "}
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </a>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="p-8 border border-slate-100 rounded-xl bg-slate-50 hover:shadow-md transition-shadow"
                                >
                                    <span className="material-symbols-outlined text-3xl text-brand-navy mb-4">
                                        {cert.icon}
                                    </span>
                                    <h4 className="text-lg font-bold text-brand-navy mb-2">
                                        {cert.name}
                                    </h4>
                                    <p className="text-xs text-brand-slate">{cert.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
