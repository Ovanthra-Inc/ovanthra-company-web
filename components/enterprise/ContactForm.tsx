"use client";

import { useState } from "react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        interest: "Enterprise Support (Gold/Platinum)",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
    };

    return (
        <section className="py-20 lg:py-24 bg-brand-navy relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-400 to-transparent"></div>
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h2 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
                        Contact Us
                    </h2>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium serif mb-6 leading-tight">
                        Consult with an <br className="hidden sm:block" /> Enterprise Expert
                    </h3>
                    <p className="text-slate-300 font-light text-base lg:text-lg mb-10 lg:mb-12 max-w-md leading-relaxed">
                        Ready to scale? Discuss your specific requirements with our team.
                        We'll help you design a support and services structure that
                        guarantees long-term success.
                    </p>
                    <div className="flex flex-col gap-5 text-sm text-slate-300 w-full max-w-xs lg:max-w-none">
                        <div className="flex items-center gap-4">
                            <div className="size-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-sm">
                                    verified_user
                                </span>
                            </div>
                            <span className="text-sm lg:text-base font-light">SOC2 Type II Compliant Environment</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-sm">lock</span>
                            </div>
                            <span className="text-sm lg:text-base font-light">ISO 27001 Certified Security</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-sm">
                                    support_agent
                                </span>
                            </div>
                            <span className="text-sm lg:text-base font-light">24/7 Global Response Centers</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl w-full">
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-brand-slate">
                                    First Name
                                </label>
                                <input
                                    className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-navy focus:ring-brand-navy outline-none transition-all placeholder:text-slate-300"
                                    placeholder="Jane"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, firstName: e.target.value })
                                    }
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-brand-slate">
                                    Last Name
                                </label>
                                <input
                                    className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-navy focus:ring-brand-navy outline-none transition-all placeholder:text-slate-300"
                                    placeholder="Doe"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, lastName: e.target.value })
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-brand-slate">
                                Work Email
                            </label>
                            <input
                                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-navy focus:ring-brand-navy outline-none transition-all placeholder:text-slate-300"
                                placeholder="jane@company.com"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-brand-slate">
                                Area of Interest
                            </label>
                            <select
                                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-navy focus:ring-brand-navy outline-none transition-all text-brand-navy"
                                value={formData.interest}
                                onChange={(e) =>
                                    setFormData({ ...formData, interest: e.target.value })
                                }
                            >
                                <option>Enterprise Support (Gold/Platinum)</option>
                                <option>Custom Integration Services</option>
                                <option>On-site Training</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] lg:text-[11px] font-bold uppercase tracking-wider text-brand-slate">
                                Message
                            </label>
                            <textarea
                                className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-brand-navy focus:ring-brand-navy outline-none transition-all placeholder:text-slate-300"
                                placeholder="Tell us about your organization's needs..."
                                rows={3}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            ></textarea>
                        </div>
                        <button
                            className="mt-2 bg-brand-navy text-white font-semibold py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 group cursor-pointer text-sm lg:text-base"
                            type="submit"
                        >
                            Request Consultation
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
