import { ProductHero } from "@/components/products/ProductHero";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { ProductCTA } from "@/components/products/ProductCTA";

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
