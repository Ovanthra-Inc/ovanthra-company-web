import Link from "next/link";
import { Product } from "@/lib/products-data";

export function ProductIntegrations({
    integrations,
}: {
    integrations: Product["integrations"];
}) {
    return (
        <section className="py-20 lg:py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="mb-12 lg:mb-16 text-center lg:text-left">
                        <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                            Ecosystem Integrations
                        </h2>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-navy serif leading-tight">
                            Unified Intelligence Layer
                        </h3>
                        <p className="text-lg text-brand-slate leading-relaxed font-light mb-10">
                            {integrations.description}
                        </p>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {integrations.platforms.map((platform, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 py-2 border-b border-slate-100"
                                >
                                    <span className="material-symbols-outlined text-slate-400">
                                        {platform.icon}
                                    </span>
                                    <span className="text-sm font-semibold text-brand-navy">
                                        {platform.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-10">
                            <Link
                                className="text-brand-navy font-semibold text-sm border-b-2 border-slate-200 pb-1 hover:border-brand-navy transition-all"
                                href="#"
                            >
                                View all 40+ integrations
                            </Link>
                        </div>
                    </div>
                    <div className="relative bg-slate-50 p-10 rounded-2xl border border-slate-100">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 bg-brand-navy/5 rounded-full blur-2xl"></div>
                        <div className="relative flex flex-col items-center justify-center h-full min-h-[400px]">
                            <div className="z-10 bg-white p-4 rounded-xl shadow-lg border border-slate-200 flex flex-col items-center w-40">
                                <div className="size-10 bg-brand-navy rounded flex items-center justify-center text-white mb-2">
                                    <span className="material-symbols-outlined">account_tree</span>
                                </div>
                                <span className="text-xs font-bold text-brand-navy">
                                    Ovanthra Core
                                </span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="absolute w-[80%] h-[1px] bg-slate-200 rotate-0"></div>
                                <div className="absolute w-[80%] h-[1px] bg-slate-200 rotate-45"></div>
                                <div className="absolute w-[80%] h-[1px] bg-slate-200 rotate-90"></div>
                                <div className="absolute w-[80%] h-[1px] bg-slate-200 rotate-135"></div>
                            </div>
                            <div className="absolute top-10 left-10 bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-blue-500">
                                    cloud
                                </span>
                                <span className="text-[10px] font-bold text-slate-600">
                                    Cloud Storage
                                </span>
                            </div>
                            <div className="absolute bottom-10 right-10 bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-indigo-500">
                                    database
                                </span>
                                <span className="text-[10px] font-bold text-slate-600">
                                    Data Warehouse
                                </span>
                            </div>
                            <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-teal-500">
                                    api
                                </span>
                                <span className="text-[10px] font-bold text-slate-600">
                                    API Gateway
                                </span>
                            </div>
                            <div className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-orange-500">
                                    analytics
                                </span>
                                <span className="text-[10px] font-bold text-slate-600">
                                    Analytics
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
