import { IndustryHero } from "@/components/industry/IndustryHero";
import { IndustryGrid } from "@/components/industry/IndustryGrid";
import { IndustryTrustBar } from "@/components/industry/IndustryTrustBar";

export const metadata = {
    title: "Industries | Ovanthra Intelligence",
    description: "Industry-specific AI solutions for Financial Services, Healthcare, Energy, and Retail.",
};

export default function IndustryPage() {
    return (
        <>
            <main className="pt-20">
                <IndustryHero />
                <IndustryGrid />
                <IndustryTrustBar />
            </main>
        </>
    );
}
