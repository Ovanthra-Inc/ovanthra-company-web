import { Product } from "@/lib/products-data";

export function ProductDetailHero({ data }: { data: Product }) {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col gap-8 items-center text-center mb-16">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-brand-slate border border-slate-200">
                            Product {data.version}
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-brand-navy serif max-w-4xl">
                        {data.hero.title} <br />
                        <span className="italic font-normal text-slate-500">
                            {data.hero.titleHighlight}
                        </span>
                    </h1>
                    <p className="text-xl text-brand-slate max-w-[680px] leading-relaxed font-light mx-auto">
                        {data.hero.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-5 pt-4">
                        <button className="bg-brand-navy text-white px-8 py-3.5 rounded-lg font-semibold flex items-center gap-3 hover:bg-slate-800 transition-all shadow-md cursor-pointer">
                            Start Free Trial
                            <span className="material-symbols-outlined text-lg">
                                arrow_right_alt
                            </span>
                        </button>
                        <button className="bg-white border border-slate-200 text-brand-navy px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined text-lg">
                                play_circle
                            </span>
                            Watch Demo
                        </button>
                    </div>
                </div>
                <div className="relative group max-w-5xl mx-auto">
                    <div className="absolute -inset-10 bg-indigo-900/10 blur-3xl rounded-full opacity-50 -z-10"></div>
                    <div className="relative bg-brand-navy border border-slate-700 p-2 rounded-xl shadow-2xl overflow-hidden">
                        <div className="bg-slate-900 w-full aspect-[16/10] rounded-lg overflow-hidden relative">
                            <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="ml-4 w-64 h-5 bg-slate-700 rounded text-xs text-slate-400 flex items-center px-2">
                                    {data.slug}.internal.dash
                                </div>
                            </div>
                            <div className="p-6 grid grid-cols-12 gap-6 h-full text-slate-300">
                                <div className="col-span-2 space-y-4 border-r border-slate-700 pr-4">
                                    <div className="h-8 w-8 bg-indigo-500 rounded mb-6"></div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-slate-700 rounded"></div>
                                        <div className="h-2 w-3/4 bg-slate-700 rounded"></div>
                                        <div className="h-2 w-5/6 bg-slate-700 rounded"></div>
                                    </div>
                                    <div className="mt-8 space-y-2 opacity-50">
                                        <div className="h-2 w-full bg-slate-700 rounded"></div>
                                        <div className="h-2 w-full bg-slate-700 rounded"></div>
                                    </div>
                                </div>
                                <div className="col-span-10 flex flex-col gap-6">
                                    <div className="flex justify-between items-end border-b border-slate-700 pb-4">
                                        <div>
                                            <div className="h-6 w-48 bg-slate-700 rounded mb-2"></div>
                                            <div className="h-3 w-32 bg-slate-700/50 rounded"></div>
                                        </div>
                                        <div className="h-8 w-24 bg-indigo-600 rounded"></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="bg-slate-800 p-4 rounded border border-slate-700">
                                            <div className="h-8 w-8 bg-slate-700 rounded-full mb-3"></div>
                                            <div className="h-4 w-16 bg-slate-600 rounded mb-2"></div>
                                            <div className="h-8 w-24 bg-slate-500 rounded"></div>
                                        </div>
                                        <div className="bg-slate-800 p-4 rounded border border-slate-700">
                                            <div className="h-8 w-8 bg-slate-700 rounded-full mb-3"></div>
                                            <div className="h-4 w-16 bg-slate-600 rounded mb-2"></div>
                                            <div className="h-8 w-24 bg-slate-500 rounded"></div>
                                        </div>
                                        <div className="bg-slate-800 p-4 rounded border border-slate-700">
                                            <div className="h-8 w-8 bg-slate-700 rounded-full mb-3"></div>
                                            <div className="h-4 w-16 bg-slate-600 rounded mb-2"></div>
                                            <div className="h-8 w-24 bg-slate-500 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-slate-800 rounded border border-slate-700 relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
                                        <div className="flex items-end justify-between h-full p-6 gap-2">
                                            <div className="w-full bg-slate-700 rounded-t h-[40%]"></div>
                                            <div className="w-full bg-slate-600 rounded-t h-[60%]"></div>
                                            <div className="w-full bg-indigo-600 rounded-t h-[85%]"></div>
                                            <div className="w-full bg-slate-600 rounded-t h-[55%]"></div>
                                            <div className="w-full bg-slate-700 rounded-t h-[45%]"></div>
                                            <div className="w-full bg-indigo-500 rounded-t h-[70%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
