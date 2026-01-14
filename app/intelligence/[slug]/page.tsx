import { notFound } from "next/navigation";
import { getIntelligenceInsightBySlug } from "@/lib/intelligence-data";
import { IntelligenceDetailHero } from "@/components/intelligence/dynamic/IntelligenceDetailHero";
import { ComplianceCertifications } from "@/components/intelligence/dynamic/ComplianceCertifications";
import { DataProtection } from "@/components/intelligence/dynamic/DataProtection";
import { AccessControl } from "@/components/intelligence/dynamic/AccessControl";
import { TechnicalDueDiligence } from "@/components/intelligence/dynamic/TechnicalDueDiligence";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function IntelligenceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const insight = getIntelligenceInsightBySlug(slug);

    if (!insight) {
        notFound();
    }

    return (
        <>
            <main className="pt-20">
                <IntelligenceDetailHero
                    status={insight.hero.status}
                    statusColor={insight.hero.statusColor}
                    headline={insight.hero.headline}
                    subheadline={insight.hero.subheadline}
                    downloadLabel={insight.hero.downloadLabel}
                    secondaryCta={insight.hero.secondaryCta}
                />
                <ComplianceCertifications
                    title={insight.compliance.title}
                    subtitle={insight.compliance.subtitle}
                    description={insight.compliance.description}
                    certifications={insight.compliance.certifications}
                />
                <DataProtection
                    title={insight.dataProtection.title}
                    subtitle={insight.dataProtection.subtitle}
                    atRest={insight.dataProtection.atRest}
                    inTransit={insight.dataProtection.inTransit}
                />
                <AccessControl
                    title={insight.accessControl.title}
                    subtitle={insight.accessControl.subtitle}
                    description={insight.accessControl.description}
                    features={insight.accessControl.features}
                />
                <TechnicalDueDiligence
                    title={insight.technicalDueDiligence.title}
                    description={insight.technicalDueDiligence.description}
                    downloadLabel={insight.technicalDueDiligence.downloadLabel}
                    secondaryCta={insight.technicalDueDiligence.secondaryCta}
                />
            </main>
        </>
    );
}
