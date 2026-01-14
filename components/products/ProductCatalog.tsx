import Link from "next/link";

export function ProductCatalog() {
    return (
        <section className="py-12 lg:py-16 bg-[var(--off-white)] min-h-[60vh]">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-slate-200 pb-8">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        <button className="bg-brand-navy text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg text-xs lg:text-sm font-medium shadow-sm transition-all hover:bg-slate-800 cursor-pointer">
                            View All
                        </button>
                        <button className="bg-white text-brand-slate border border-slate-200 px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg text-xs lg:text-sm font-medium hover:text-brand-navy hover:border-brand-navy transition-all cursor-pointer">
                            Intelligence
                        </button>
                        <button className="bg-white text-brand-slate border border-slate-200 px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg text-xs lg:text-sm font-medium hover:text-brand-navy hover:border-brand-navy transition-all cursor-pointer">
                            Security
                        </button>
                        <button className="bg-white text-brand-slate border border-slate-200 px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg text-xs lg:text-sm font-medium hover:text-brand-navy hover:border-brand-navy transition-all cursor-pointer">
                            Infrastructure
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-brand-slate text-xs lg:text-sm font-medium">
                        <span className="material-symbols-outlined text-lg">grid_view</span>
                        <span>Showing 6 products</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="group bg-white rounded-xl border border-slate-200 p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm">
                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                            <div className="size-12 lg:size-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl font-light">
                                    hub
                                </span>
                            </div>
                            <span className="px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full bg-slate-50 text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-100">
                                Infrastructure
                            </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-medium text-brand-navy serif mb-3">
                            Ovanthra Core
                        </h3>
                        <p className="text-brand-slate text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8 font-light flex-grow">
                            The central nervous system for your enterprise AI. Manage, deploy,
                            and scale models with a unified control plane.
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-brand-navy border-b border-transparent hover:border-brand-navy pb-0.5 transition-all w-max"
                            href="/products/ovanthra-core"
                        >
                            Learn More{" "}
                            <span className="material-symbols-outlined text-base lg:text-lg">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                    {/* Card 2 */}
                    <div className="group bg-white rounded-xl border border-slate-200 p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm">
                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                            <div className="size-12 lg:size-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl font-light">
                                    insights
                                </span>
                            </div>
                            <span className="px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full bg-slate-50 text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-100">
                                Intelligence
                            </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-medium text-brand-navy serif mb-3">
                            Nexus Analytics
                        </h3>
                        <p className="text-brand-slate text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8 font-light flex-grow">
                            Turn complex datasets into predictive clarity. Nexus utilizes deep
                            learning to forecast market trends and internal efficiency.
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-brand-navy border-b border-transparent hover:border-brand-navy pb-0.5 transition-all w-max"
                            href="/products/nexus-analytics"
                        >
                            Learn More{" "}
                            <span className="material-symbols-outlined text-base lg:text-lg">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                    {/* Card 3 */}
                    <div className="group bg-white rounded-xl border border-slate-200 p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm">
                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                            <div className="size-12 lg:size-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl font-light">
                                    shield_lock
                                </span>
                            </div>
                            <span className="px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full bg-slate-50 text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-100">
                                Security
                            </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-medium text-brand-navy serif mb-3">
                            Sentinel Security
                        </h3>
                        <p className="text-brand-slate text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8 font-light flex-grow">
                            Real-time threat detection and ethical guardrails. Sentinel ensures
                            your AI operations remain secure and compliant.
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-brand-navy border-b border-transparent hover:border-brand-navy pb-0.5 transition-all w-max"
                            href="/products/sentinel-security"
                        >
                            Learn More{" "}
                            <span className="material-symbols-outlined text-base lg:text-lg">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                    {/* Card 4 */}
                    <div className="group bg-white rounded-xl border border-slate-200 p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm">
                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                            <div className="size-12 lg:size-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl font-light">
                                    hub
                                </span>
                            </div>
                            <span className="px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full bg-slate-50 text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-100">
                                Intelligence
                            </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-medium text-brand-navy serif mb-3">
                            Cognitive Mesh
                        </h3>
                        <p className="text-brand-slate text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8 font-light flex-grow">
                            Natural Language Processing that understands context, tone, and
                            intent, enabling human-like interaction at scale.
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-brand-navy border-b border-transparent hover:border-brand-navy pb-0.5 transition-all w-max"
                            href="/products/cognitive-mesh"
                        >
                            Learn More{" "}
                            <span className="material-symbols-outlined text-base lg:text-lg">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                    {/* Card 5 */}
                    <div className="group bg-white rounded-xl border border-slate-200 p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm">
                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                            <div className="size-12 lg:size-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl font-light">
                                    fingerprint
                                </span>
                            </div>
                            <span className="px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full bg-slate-50 text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-100">
                                Security
                            </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-medium text-brand-navy serif mb-3">
                            Aegis Vault
                        </h3>
                        <p className="text-brand-slate text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8 font-light flex-grow">
                            Immutable data sovereignty protocols. Protect your most sensitive
                            intellectual property with military-grade encryption.
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-brand-navy border-b border-transparent hover:border-brand-navy pb-0.5 transition-all w-max"
                            href="/products/aegis-vault"
                        >
                            Learn More{" "}
                            <span className="material-symbols-outlined text-base lg:text-lg">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                    {/* Card 6 */}
                    <div className="group bg-white rounded-xl border border-slate-200 p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm">
                        <div className="flex justify-between items-start mb-6 lg:mb-8">
                            <div className="size-12 lg:size-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined text-2xl lg:text-3xl font-light">
                                    speed
                                </span>
                            </div>
                            <span className="px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full bg-slate-50 text-[9px] lg:text-[10px] font-bold uppercase tracking-wider text-slate-500 border border-slate-100">
                                Infrastructure
                            </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-medium text-brand-navy serif mb-3">
                            Quantum Bridge
                        </h3>
                        <p className="text-brand-slate text-xs lg:text-sm leading-relaxed mb-6 lg:mb-8 font-light flex-grow">
                            Low-latency data pipelines optimized for high-frequency trading and
                            real-time industrial IoT communication.
                        </p>
                        <Link
                            className="inline-flex items-center gap-2 text-xs lg:text-sm font-semibold text-brand-navy border-b border-transparent hover:border-brand-navy pb-0.5 transition-all w-max"
                            href="/products/quantum-bridge"
                        >
                            Learn More{" "}
                            <span className="material-symbols-outlined text-base lg:text-lg">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
