import { ProductHero } from "@/components/services/ProductHero";
import { ProductCatalog } from "@/components/services/ProductCatalog";
import { ProductCTA } from "@/components/services/ProductCTA";

export default function Products() {
    return (
        <>
            <main className="pt-20">
                <ProductHero />
                <ProductCatalog />
                <ProductCTA />
            </main>
        </>
    );
}
