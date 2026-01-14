import Link from "next/link";

export function IndustryGrid() {
    const industries = [
        {
            title: "Financial Services",
            description: "Transform risk management and fraud detection with real-time AI compliance and automated financial modeling.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXAZdCyjGq1T80NZoTlgJ9AutJg5Wb5UN-lqo6JNl-faxk2y4b-WuKZJjb3lUneZnq9L98CSWj-bHx3UqyEyDSQHw2LRmFzj2PZ-XMxulTJJQwj20ofwJvHgOxZbw1JDQB-mHRrXUP4nJQE0hQV3Dpg-hjUKIa0QLWIAHeQPU43586xLtiiA9wUhzK5Pft1X-Eri1R_SYNxrb2OGth5Ph9QGLguv_NEDJGeH_xY2FYTxxkLnFS2DnrQBFKt0Y4Bl1VCQ-7nFzYs8qO",
            slug: "financial-services"
        },
        {
            title: "Healthcare",
            description: "Accelerate precision diagnostics and optimize patient outcomes using predictive health data and AI-driven clinical insights.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrE_rdLeIso9aHhlLEPOOaQOfW2USkWniYtKL78AFdjVZe591tcWOD49C7mH2CIU5uL9Psfvjphn0RHNqurSLvztFpKRQ2wKUHYENHawbO927d86X_iQQAmiT0xefuLCPkR4frY5ByFwFEAe8h4wkjzwQ0hpjEdoa0qADWc-bETf2H5aGWNFYLhRq0Zfm8jL-CJOJ5EDkPacbN8qAxbOVeOdLoWjSSKYzFXox6NWti49co-ZkbOQ6y_ULMcFyTuriW3xOIh1AT7Huh",
            slug: "healthcare"
        },
        {
            title: "Energy & Utilities",
            description: "Enhancing grid intelligence and predictive maintenance schedules to ensure sustainable energy distribution across global networks.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCktZmtGe20wh6xv_cYyssiU-QETvAdCM3nJEIkiJDj04SgIAJ8qNM-bBwIdV8SAvwd9HCLvWRHIgbJl3l5nmxTvjpSouB__JFcrJyvcHAjD8Vb6uAxebyIzWDY60-bt27nMs_FowgPQqbzb4nc61MA5VlAvMcD1Ya4HL_v0h1f8JKe6KWQYk-GjBFI5cBmb3rG-GrR3nowW_UeN1xUlfak-6wJO7mJ2M4PRotZ_5vyNTt90_4UVdoQ15c_7PnR21vvx1OSy_zeru7k",
            slug: "energy-utilities"
        },
        {
            title: "Retail",
            description: "Deliver hyper-personalized customer journeys and resilient supply chain logistics powered by Ovanthra's retail AI engine.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhdAk_maYvbB14UbuQpN1NlkvKX3KRLP2JjYs-TWWb06cZjpcdVHUTRcKXE2pHnlKCNwkao4d8y0HxFL6c6HkLJ_wFHBZX8STQGAc7ZrIRBZmd_0TdI84YxboofmkQ5zU9roos1EtCdG5KA30lYyOjjB8ZDx6whb45PxAQuCp12s5F91FyNocmtp6xkLmtvALXt_8G2mISsxo2bxWBIoAgIHnm9qrAyeg0PhoJ0vOLCsN63wUQ6IVbGu85rWtVDhNv8wlRF0CmxzGi",
            slug: "retail"
        }
    ];

    return (
        <section className="w-full max-w-[1280px] mx-auto px-6 lg:px-8 pb-32">
            <div className="flex items-center gap-2 border-l-4 border-brand-navy pl-4 mb-10 lg:mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-medium leading-[1.1] lg:leading-[1.05] tracking-tight text-brand-navy serif">
                    Global Industry Verticals
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {industries.map((industry, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[16/10] sm:aspect-auto sm:h-[400px] lg:h-[450px] bg-slate-900 shadow-xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{
                                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.9)), url("${industry.image}")`
                            }}
                        ></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10 text-white">
                            <h3 className="text-2xl lg:text-3xl font-medium mb-2 lg:mb-3 serif">{industry.title}</h3>
                            <p className="text-slate-300 text-sm lg:text-base font-light leading-relaxed mb-6 lg:mb-8 max-w-md">
                                {industry.description}
                            </p>
                            <Link
                                href={`/industry/${industry.slug}`}
                                className="flex w-fit items-center justify-center overflow-hidden rounded-full h-11 lg:h-12 px-6 lg:px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs lg:text-sm font-bold transition-all hover:bg-white hover:text-brand-navy group-hover:shadow-lg cursor-pointer"
                            >
                                <span className="truncate">View Details</span>
                                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
