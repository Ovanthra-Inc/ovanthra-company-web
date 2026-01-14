import { IntelligenceHero } from "@/components/intelligence/IntelligenceHero";
import { EnterpriseEcosystem } from "@/components/intelligence/EnterpriseEcosystem";
import { SecurityCompliance } from "@/components/intelligence/SecurityCompliance";
import { GlobalDeployment } from "@/components/intelligence/GlobalDeployment";
import { ServiceSupport } from "@/components/intelligence/ServiceSupport";
import { EnterpriseInsights } from "@/components/intelligence/EnterpriseInsights";
import { IntelligenceCTA } from "@/components/intelligence/IntelligenceCTA";

export default function Intelligence() {
    return (
        <>
            <main className="pt-20">
                <IntelligenceHero />
                <EnterpriseEcosystem />
                <SecurityCompliance />
                <GlobalDeployment />
                <ServiceSupport />
                <EnterpriseInsights />
                <IntelligenceCTA />
            </main>
        </>
    );
}
