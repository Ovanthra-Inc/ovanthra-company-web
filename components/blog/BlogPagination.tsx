export function BlogPagination() {
    return (
        <div className="mt-20 flex justify-center items-center gap-2">
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-brand-slate hover:bg-slate-100 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-brand-navy text-white text-sm font-bold cursor-pointer">
                1
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-brand-slate hover:bg-slate-100 transition-colors text-sm font-bold cursor-pointer">
                2
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-brand-slate hover:bg-slate-100 transition-colors text-sm font-bold cursor-pointer">
                3
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 text-brand-slate hover:bg-slate-100 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    );
}
