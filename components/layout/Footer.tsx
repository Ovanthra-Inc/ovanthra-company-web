import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-16 lg:py-24 border-t border-slate-200 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-20">
                    <div className="sm:col-span-2 lg:col-span-5">
                        <div className="flex items-center gap-3 mb-6 lg:mb-8 justify-center sm:justify-start">
                            <div className="size-7 bg-brand-navy rounded flex items-center justify-center text-white shadow-sm">
                                <span className="material-symbols-outlined text-lg font-light">
                                    account_tree
                                </span>
                            </div>
                            <h2 className="text-lg font-bold tracking-tight text-brand-navy">
                                Ovanthra
                            </h2>
                        </div>
                        <p className="text-brand-slate max-w-sm mb-8 lg:mb-10 leading-relaxed font-light text-center sm:text-left mx-auto sm:mx-0">
                            The intelligence partner for global enterprises. We build the
                            systems that define modern industry.
                        </p>
                        <div className="flex gap-5 justify-center sm:justify-start">
                            <Link
                                className="text-brand-slate hover:text-brand-navy transition-colors p-2 border border-slate-100 rounded-lg hover:border-brand-navy"
                                href="#"
                            >
                                <span className="material-symbols-outlined font-light">
                                    language
                                </span>
                            </Link>
                            <Link
                                className="text-brand-slate hover:text-brand-navy transition-colors p-2 border border-slate-100 rounded-lg hover:border-brand-navy"
                                href="#"
                            >
                                <span className="material-symbols-outlined font-light">share</span>
                            </Link>
                            <Link
                                className="text-brand-slate hover:text-brand-navy transition-colors p-2 border border-slate-100 rounded-lg hover:border-brand-navy"
                                href="#"
                            >
                                <span className="material-symbols-outlined font-light">
                                    corporate_fare
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h4 className="font-bold mb-6 lg:mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400 text-center sm:text-left">
                            Platform
                        </h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium text-brand-slate text-center sm:text-left">
                            <li>
                                <Link
                                    className="hover:text-brand-navy transition-colors"
                                    href="#"
                                >
                                    Intelligence Hub
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-brand-navy transition-colors"
                                    href="#"
                                >
                                    Security & Trust
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-brand-navy transition-colors"
                                    href="#"
                                >
                                    API Reference
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-brand-navy transition-colors"
                                    href="#"
                                >
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2">
                        <h4 className="font-bold mb-6 lg:mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400 text-center sm:text-left">
                            Firm
                        </h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium text-brand-slate text-center sm:text-left">
                            <li>
                                <Link
                                    className="hover:text-brand-navy transition-colors"
                                    href="#"
                                >
                                    About Ovanthra
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-brand-navy transition-colors"
                                    href="#"
                                >
                                    Leadership
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-brand-navy transition-colors"
                                    href="#"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="hover:text-brand-navy transition-colors"
                                    href="#"
                                >
                                    Newsroom
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-3">
                        <h4 className="font-bold mb-6 lg:mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400 text-center sm:text-left">
                            Stay Updated
                        </h4>
                        <p className="text-xs text-brand-slate mb-4 font-light text-center sm:text-left">
                            Insights delivered to your inbox.
                        </p>
                        <div className="flex border-b border-slate-200 pb-2 max-w-sm mx-auto sm:mx-0">
                            <input
                                className="bg-transparent border-none text-sm w-full focus:ring-0 px-0 placeholder:text-slate-300 outline-none"
                                placeholder="Professional Email"
                                type="email"
                            />
                            <button className="material-symbols-outlined text-brand-navy cursor-pointer">
                                arrow_right_alt
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 lg:pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-10 text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                    <p>© 2024 Ovanthra Intelligence Limited. London • New York • Singapore</p>
                    <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                        <Link className="hover:text-brand-navy transition-colors" href="#">
                            Privacy Protocol
                        </Link>
                        <Link className="hover:text-brand-navy transition-colors" href="#">
                            Compliance
                        </Link>
                        <Link className="hover:text-brand-navy transition-colors" href="#">
                            Legal
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
