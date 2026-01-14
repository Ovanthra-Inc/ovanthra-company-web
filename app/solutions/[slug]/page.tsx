import { notFound } from "next/navigation";
import { solutionsData } from "@/lib/solutions-data";
import { SolutionHero } from "@/components/solutions/dynamic/SolutionHero";
import { SolutionApplications } from "@/components/solutions/dynamic/SolutionApplications";
import { SolutionMetrics } from "@/components/solutions/dynamic/SolutionMetrics";
import { SolutionSecurity } from "@/components/solutions/dynamic/SolutionSecurity";
import { SolutionTestimonial } from "@/components/solutions/dynamic/SolutionTestimonial";
import { SolutionCTA } from "@/components/solutions/dynamic/SolutionCTA";

export async function generateStaticParams() {
    return solutionsData.map((solution) => ({
        slug: solution.slug,
    }));
}

export default async function SolutionPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const solution = solutionsData.find((s) => s.slug === slug);

    if (!solution) {
        notFound();
    }

    return (
        <>
            <main className="pt-20">
                <SolutionHero data={solution.hero} />
                <SolutionApplications data={solution.applications} />
                <SolutionMetrics data={solution.metrics} />
                <SolutionSecurity data={solution.security} />
                <SolutionTestimonial data={solution.testimonial} />
                <SolutionCTA data={solution.cta} />
            </main>
        </>
    );
}
