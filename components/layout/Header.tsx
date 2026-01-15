"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/solutions", label: "Solutions" },
        // { href: "/industry", label: "Industries" },
        // { href: "/intelligence", label: "Intelligence" },
        // { href: "/enterprise", label: "Enterprise" },
        { href: "/services", label: "Services" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-200">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="size-9 bg-brand-navy rounded flex items-center justify-center text-white shadow-sm">
                        <span className="material-symbols-outlined text-2xl font-light">
                            account_tree
                        </span>
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight text-brand-navy">
                        Ovanthra
                    </h2>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            className="text-sm font-medium text-brand-slate hover:text-brand-navy transition-colors"
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4 lg:gap-6">
                    <button className="hidden sm:block bg-brand-navy text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-charcoal transition-all shadow-sm cursor-pointer">
                        Contact Us
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-brand-navy cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {isOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <div className={`
                lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <nav className="flex flex-col p-8 gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            className="text-2xl font-medium text-brand-navy serif border-b border-slate-100 pb-4"
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button className="bg-brand-navy text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-brand-charcoal transition-all mt-4">
                        Contact Us
                    </button>
                </nav>
            </div>
        </header>
    );
}
