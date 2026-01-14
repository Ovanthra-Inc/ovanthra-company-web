import Link from "next/link";

export function Expertise() {
    return (
        <section className="py-20 lg:py-32 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
                                <div
                                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                                    data-alt="Modern collaborative workspace"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjLO_MNPzYKmUyJaLkXEF-1ahTluoHl4YQ6pl67gyqUmg-ULlMFB0kd9QsPzZ75MlPoYMk0mU-TjpXuLrr-gNiBxPe98QGZ8vdx9Y9YUj9YJIM2BeJtjrrCMkRLGc5kEgv4KZtnKbArLNSTibevPmYN0ZWbJPHBDu75br8PeMntMMM0i-LuS06IvQ8mV-qoFfchEsN-1dkYO1m6mzElntoGFPmAULUWHmldZi0ngT-yzeVPUF8MBiM--duujXXp3nm29hIw8VXyrQB")',
                                    }}
                                ></div>
                            </div>
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8 lg:mt-12 shadow-sm">
                                <div
                                    className="w-full h-full bg-center bg-no-repeat bg-cover"
                                    data-alt="Professional consultation"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_0sybnD7bhf_bvLPLz5vPSxzw6f10ErdcihW-Nulbd76dLBOo3V_jzvhOgINdb6wyABVTsnu7kXKKVB4IZIQPR9vs6l_P2yvuDfF_Y-fqGkvR43WFX6YxW4ihWOkBBrcMLggGoEr1nKL5fNDKVrRsibXFNzV6kDvpKj8wHo2VPI29Jq20WxSEcny_9Fzg1NHr3l9cMFlUd0LN2dK4WMXx3pC9M6Ch4BVsOfI5by4XdVduIfe0mekmRH_0xVVBZgHvM23GDWmuDrQu")',
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-brand-navy serif leading-tight">
                            Human Expertise, <br className="hidden sm:block" />
                            Machine Velocity.
                        </h2>
                        <p className="text-base lg:text-lg text-brand-slate leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
                            We believe AI is a multiplier for human potential. Ovanthra provides
                            the infrastructure that allows your teams to operate at the frontier
                            of what's possible.
                        </p>
                        <div className="grid grid-cols-2 gap-8 lg:gap-10 pt-4 lg:pt-6">
                            <div>
                                <p className="text-3xl lg:text-4xl font-medium text-brand-navy serif mb-2">
                                    40%
                                </p>
                                <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                    Operational Efficiency
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl lg:text-4xl font-medium text-brand-navy serif mb-2">
                                    12M+
                                </p>
                                <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                    Data Points Synthesized
                                </p>
                            </div>
                        </div>
                        <div className="pt-4 lg:pt-6">
                            <Link
                                className="inline-flex items-center gap-2 text-brand-navy font-semibold border-b-2 border-slate-200 pb-1 hover:border-brand-navy transition-all text-sm lg:text-base"
                                href="#"
                            >
                                Learn about our safety standards
                                <span className="material-symbols-outlined text-lg">
                                    north_east
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
