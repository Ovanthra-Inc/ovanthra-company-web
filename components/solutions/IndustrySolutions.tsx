import Link from "next/link";

export function IndustrySolutions() {
    return (
        <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="mb-12 lg:mb-16 text-center lg:text-left">
                    <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-slate mb-4">
                        Our Expertise
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-brand-navy serif">
                        Industry Solutions
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
                        <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBReJKjnU57NUTBPHAd2wbXGYjvtTHErUdKdzwyUwEiRCMOE-PWgScHatVWSL5hgYcRR6YvmruvD761KrB9IJ7TWRD0wqiP8hbFpsAVlM6cE-k5HtxLzKJj_RsXxPZPbj_nRMmui7nvr21dY55zASynwaSu9Yw-z-fqr0Tbi3peYtHDgQZeVgpPRYmoGSakzQKtsT1WdaaNKdA3gT70j7-xFrLWbF6FyfOzlcTLUo2_l-vhPC5v__eEAkWIs9BACi1mWT8uR4S-uhPp")',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-6 lg:p-8 flex flex-col flex-grow">
                            <h4 className="text-xl lg:text-2xl font-bold text-brand-navy serif mb-4 group-hover:text-blue-900 transition-colors">
                                Financial Services
                            </h4>
                            <p className="text-brand-slate text-sm leading-relaxed mb-6 lg:mb-8 font-light flex-grow">
                                Automated risk assessment and high-frequency trading algorithms
                                designed for regulatory compliance and capital efficiency in
                                volatile markets.
                            </p>
                            <Link
                                href="/solutions/financial-services"
                                className="w-full py-3 lg:py-3 px-4 rounded-lg border border-slate-200 text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Explore Solution
                                <span className="material-symbols-outlined text-lg">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
                        <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByJKwsfQd1Xlo61jEWVy4FLr0QkRpg08UEjYQwVo4Mie2s7lv_PpTCUTUFyxaofVSb91KUnOSldFhUVjfAglYBhi6wL2gb_7ozfe3tEx2NzriWoSt1cXgx_aDIclYCkYPRXZJCnjyOh8HBA7y69AlnK_2A4IMI28BZKJby1-zjtDENIH_nP7yt-62A5jJnzMB3YG4MJGRMkwMTXlsg47mNB4To25F8lxdqdE-SmYBd0SY5NzKnS3Knsn_KcP8lpoFxXz21-spAmT-T")',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-6 lg:p-8 flex flex-col flex-grow">
                            <h4 className="text-xl lg:text-2xl font-bold text-brand-navy serif mb-4 group-hover:text-blue-900 transition-colors">
                                Global Healthcare
                            </h4>
                            <p className="text-brand-slate text-sm leading-relaxed mb-6 lg:mb-8 font-light flex-grow">
                                Accelerating diagnostic precision and patient outcome modeling
                                through secure, HIPPA-compliant neural networks and federated
                                learning systems.
                            </p>
                            <Link
                                href="/solutions/global-healthcare"
                                className="w-full py-3 lg:py-3 px-4 rounded-lg border border-slate-200 text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Explore Solution
                                <span className="material-symbols-outlined text-lg">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1">
                        <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9DuWcMWr2nxTgKBeJ7r_NqqdtEXNnGu8wNOInQ709x6sFpEs2PlfQkyR_UxQxkeff5C2QKfarzwZUustmk6iFxZC7LVN6CuEL4Hx4VyqvSJ_BMot5svWBu-3chRyh6R6CCoIJiOejFUJ7fBZH_p7dm_9Fwszjoc62S1w6vB2faMxFT8waigFeQfhoEDpQcfApkAYBfkL0ZL6JqcD8JX6g-PRaWUeMR-WVI524GzrdZEm_zYNrhK82_iaLs9eanv7IQbvCaslHsGh9")',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-6 lg:p-8 flex flex-col flex-grow">
                            <h4 className="text-xl lg:text-2xl font-bold text-brand-navy serif mb-4 group-hover:text-blue-900 transition-colors">
                                Supply Chain Logistics
                            </h4>
                            <p className="text-brand-slate text-sm leading-relaxed mb-6 lg:mb-8 font-light flex-grow">
                                Predictive inventory management and autonomous route optimization
                                that reduces overhead and adapts to disruption in real-time.
                            </p>
                            <Link
                                href="/solutions/supply-chain-logistics"
                                className="w-full py-3 lg:py-3 px-4 rounded-lg border border-slate-200 text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Explore Solution
                                <span className="material-symbols-outlined text-lg">
                                    arrow_forward
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
