import { Hero } from "@/components/home/Hero";
import { Partners } from "@/components/home/Partners";
import { Methodology } from "@/components/home/Methodology";
import { Expertise } from "@/components/home/Expertise";
import { Vision } from "@/components/home/Vision";
import { Insights } from "@/components/home/Insights";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <main className="pt-20">
        <Hero />
        <Partners />
        <Methodology />
        <Expertise />
        <Vision />
        <Insights />
        <CTA />
      </main>
    </>
  );
}
