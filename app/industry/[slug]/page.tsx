import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/lib/industry-data";
import { IndustryDetailHero } from "@/components/industry/dynamic/IndustryDetailHero";
import { IndustryImpact } from "@/components/industry/dynamic/IndustryImpact";
import { IndustryQuote } from "@/components/industry/dynamic/IndustryQuote";
import { IndustryRoadmap } from "@/components/industry/dynamic/IndustryRoadmap";
import { IndustryTeam } from "@/components/industry/dynamic/IndustryTeam";
import { IndustryDetailCTA } from "@/components/industry/dynamic/IndustryDetailCTA";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function IndustryDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        notFound();
    }

    return (
        <main>
            <IndustryDetailHero data={industry} />
            <IndustryImpact data={industry} />
            <IndustryQuote data={industry} />
            <IndustryRoadmap data={industry} />
            <IndustryTeam data={industry} />
            <IndustryDetailCTA data={industry} />
        </main>
    );
}
