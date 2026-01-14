import Link from "next/link";

export function Insights() {
    return (
        <section className="py-32 bg-white border-b border-slate-100">
            <div className="max-w-[1280px] mx-auto px-8">
                <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-6">
                            Thought Leadership
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-brand-navy serif">
                            Latest Insights
                        </h3>
                    </div>
                    <Link
                        className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-slate transition-colors pb-1"
                        href="#"
                    >
                        View all articles{" "}
                        <span className="material-symbols-outlined text-lg">
                            arrow_right_alt
                        </span>
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    <article className="group cursor-pointer">
                        <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-slate-100 relative">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBReJKjnU57NUTBPHAd2wbXGYjvtTHErUdKdzwyUwEiRCMOE-PWgScHatVWSL5hgYcRR6YvmruvD761KrB9IJ7TWRD0wqiP8hbFpsAVlM6cE-k5HtxLzKJj_RsXxPZPbj_nRMmui7nvr21dY55zASynwaSu9Yw-z-fqr0Tbi3peYtHDgQZeVgpPRYmoGSakzQKtsT1WdaaNKdA3gT70j7-xFrLWbF6FyfOzlcTLUo2_l-vhPC5v__eEAkWIs9BACi1mWT8uR4S-uhPp")',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-slate">
                                Industry Report
                            </span>
                            <h4 className="text-xl font-medium text-brand-navy serif leading-tight group-hover:text-brand-slate transition-colors">
                                The Architecture of Enterprise Trust in Generative AI
                            </h4>
                            <p className="text-sm text-brand-slate font-light leading-relaxed line-clamp-2">
                                Examining the critical security frameworks required to deploy LLMs
                                within regulated industries without compromising data sovereignty.
                            </p>
                            <div className="pt-2">
                                <span className="text-xs font-semibold text-brand-navy border-b border-slate-200 pb-0.5 group-hover:border-brand-navy transition-all inline-flex items-center gap-1">
                                    Read Analysis{" "}
                                    <span className="material-symbols-outlined text-[14px]">
                                        arrow_forward
                                    </span>
                                </span>
                            </div>
                        </div>
                    </article>
                    <article className="group cursor-pointer">
                        <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-slate-100 relative">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByJKwsfQd1Xlo61jEWVy4FLr0QkRpg08UEjYQwVo4Mie2s7lv_PpTCUTUFyxaofVSb91KUnOSldFhUVjfAglYBhi6wL2gb_7ozfe3tEx2NzriWoSt1cXgx_aDIclYCkYPRXZJCnjyOh8HBA7y69AlnK_2A4IMI28BZKJby1-zjtDENIH_nP7yt-62A5jJnzMB3YG4MJGRMkwMTXlsg47mNB4To25F8lxdqdE-SmYBd0SY5NzKnS3Knsn_KcP8lpoFxXz21-spAmT-T")',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-slate">
                                AI Ethics
                            </span>
                            <h4 className="text-xl font-medium text-brand-navy serif leading-tight group-hover:text-brand-slate transition-colors">
                                Beyond Compliance: Ethical Alignment in Neural Networks
                            </h4>
                            <p className="text-sm text-brand-slate font-light leading-relaxed line-clamp-2">
                                How organizations can embed core values directly into model weights
                                to ensure alignment with corporate governance standards.
                            </p>
                            <div className="pt-2">
                                <span className="text-xs font-semibold text-brand-navy border-b border-slate-200 pb-0.5 group-hover:border-brand-navy transition-all inline-flex items-center gap-1">
                                    Read Article{" "}
                                    <span className="material-symbols-outlined text-[14px]">
                                        arrow_forward
                                    </span>
                                </span>
                            </div>
                        </div>
                    </article>
                    <article className="group cursor-pointer">
                        <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-slate-100 relative">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9DuWcMWr2nxTgKBeJ7r_NqqdtEXNnGu8wNOInQ709x6sFpEs2PlfQkyR_UxQxkeff5C2QKfarzwZUustmk6iFxZC7LVN6CuEL4Hx4VyqvSJ_BMot5svWBu-3chRyh6R6CCoIJiOejFUJ7fBZH_p7dm_9Fwszjoc62S1w6vB2faMxFT8waigFeQfhoEDpQcfApkAYBfkL0ZL6JqcD8JX6g-PRaWUeMR-WVI524GzrdZEm_zYNrhK82_iaLs9eanv7IQbvCaslHsGh9")',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-slate">
                                Strategic Forecast
                            </span>
                            <h4 className="text-xl font-medium text-brand-navy serif leading-tight group-hover:text-brand-slate transition-colors">
                                Scaling Intelligence: The 2025 Enterprise Roadmap
                            </h4>
                            <p className="text-sm text-brand-slate font-light leading-relaxed line-clamp-2">
                                A forward-looking analysis of hardware constraints, model
                                distillation, and the next wave of industrial automation.
                            </p>
                            <div className="pt-2">
                                <span className="text-xs font-semibold text-brand-navy border-b border-slate-200 pb-0.5 group-hover:border-brand-navy transition-all inline-flex items-center gap-1">
                                    Read Forecast{" "}
                                    <span className="material-symbols-outlined text-[14px]">
                                        arrow_forward
                                    </span>
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
