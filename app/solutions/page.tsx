import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { IndustrySolutions } from "@/components/solutions/IndustrySolutions";
import { PlatformCapabilities } from "@/components/solutions/PlatformCapabilities";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";

export default function Solutions() {
    return (
        <>
            <main className="pt-20">
                <SolutionsHero />
                <IndustrySolutions />
                <PlatformCapabilities />
                <SolutionsCTA />
            </main>
        </>
    );
}
