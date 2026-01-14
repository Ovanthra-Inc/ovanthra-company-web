export function SupportTiers() {
    return (
        <section className="py-20 lg:py-24 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 text-center md:text-left items-center md:items-end">
                    <div>
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                            Support Tiers
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy serif leading-tight">
                            Enterprise Support Packages
                        </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs lg:text-sm text-brand-slate font-medium">
                        <span className="material-symbols-outlined text-brand-navy text-lg">
                            info
                        </span>
                        <span>All plans include core API access</span>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto scrollbar-hide">
                        <table className="w-full text-left border-collapse min-w-[900px]">
                            <thead>
                                <tr className="bg-white border-b border-slate-200">
                                    <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-brand-slate w-1/4">
                                        Feature Specification
                                    </th>
                                    <th className="p-6 text-center text-xs lg:text-sm font-bold text-brand-slate w-1/6 tracking-tight">
                                        BRONZE
                                    </th>
                                    <th className="p-6 text-center text-xs lg:text-sm font-bold text-brand-slate w-1/6 tracking-tight">
                                        SILVER
                                    </th>
                                    <th className="p-6 text-center text-xs lg:text-sm font-bold text-brand-navy w-1/6 tracking-tight bg-slate-50">
                                        GOLD
                                    </th>
                                    <th className="p-6 text-center text-xs lg:text-sm font-bold text-white w-1/6 tracking-tight bg-brand-navy">
                                        PLATINUM
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm text-brand-slate">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-medium text-brand-navy">
                                        Support Channels
                                    </td>
                                    <td className="p-6 text-center">Web Portal</td>
                                    <td className="p-6 text-center">Web & Email</td>
                                    <td className="p-6 text-center bg-slate-50 font-medium text-brand-navy">
                                        24/7 Phone & Email
                                    </td>
                                    <td className="p-6 text-center font-medium text-brand-navy bg-slate-50/50">
                                        Dedicated Slack Channel
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-medium text-brand-navy">
                                        Initial Response Time (SLA)
                                    </td>
                                    <td className="p-6 text-center">24 Hours</td>
                                    <td className="p-6 text-center">8 Hours</td>
                                    <td className="p-6 text-center bg-slate-50 font-medium text-brand-navy">
                                        1 Hour
                                    </td>
                                    <td className="p-6 text-center font-medium text-brand-navy bg-slate-50/50">
                                        15 Minutes
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-medium text-brand-navy">
                                        Designated Success Manager
                                    </td>
                                    <td className="p-6 text-center text-slate-300">—</td>
                                    <td className="p-6 text-center text-slate-300">—</td>
                                    <td className="p-6 text-center bg-slate-50">
                                        <span className="material-symbols-outlined text-brand-navy text-lg">
                                            check_circle
                                        </span>
                                    </td>
                                    <td className="p-6 text-center bg-slate-50/50">
                                        <span className="material-symbols-outlined text-brand-navy text-lg">
                                            check_circle
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-medium text-brand-navy">
                                        Architecture Reviews
                                    </td>
                                    <td className="p-6 text-center text-slate-300">—</td>
                                    <td className="p-6 text-center">Annual</td>
                                    <td className="p-6 text-center bg-slate-50">Quarterly</td>
                                    <td className="p-6 text-center font-medium text-brand-navy bg-slate-50/50">
                                        Monthly
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-medium text-brand-navy">
                                        Custom Model Fine-tuning
                                    </td>
                                    <td className="p-6 text-center text-slate-300">—</td>
                                    <td className="p-6 text-center text-slate-300">—</td>
                                    <td className="p-6 text-center bg-slate-50">Limited</td>
                                    <td className="p-6 text-center font-medium text-brand-navy bg-slate-50/50">
                                        Unlimited
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-medium text-brand-navy">
                                        Uptime Guarantee
                                    </td>
                                    <td className="p-6 text-center">99.0%</td>
                                    <td className="p-6 text-center">99.5%</td>
                                    <td className="p-6 text-center bg-slate-50 font-medium text-brand-navy">
                                        99.9%
                                    </td>
                                    <td className="p-6 text-center font-medium text-brand-navy bg-slate-50/50">
                                        99.99%
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
