import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { SupportTiers } from "@/components/enterprise/SupportTiers";
import { ExpertServices } from "@/components/enterprise/ExpertServices";
import { ContactForm } from "@/components/enterprise/ContactForm";

export default function Enterprise() {
    return (
        <>
            <main className="pt-20">
                <EnterpriseHero />
                <SupportTiers />
                <ExpertServices />
                <ContactForm />
            </main>
        </>
    );
}
