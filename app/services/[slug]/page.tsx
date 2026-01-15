import { notFound } from "next/navigation";
import { productsData } from "@/lib/products-data";
import { ProductDetailHero } from "@/components/services/dynamic/ProductDetailHero";
import { ProductCapabilities } from "@/components/services/dynamic/ProductCapabilities";
import { ProductIntegrations } from "@/components/services/dynamic/ProductIntegrations";
import { ProductSpecs } from "@/components/services/dynamic/ProductSpecs";
import { ProductDetailCTA } from "@/components/services/dynamic/ProductDetailCTA";

export async function generateStaticParams() {
    return productsData.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = productsData.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <main className="pt-20">
                <ProductDetailHero data={product} />
                <ProductCapabilities capabilities={product.capabilities} />
                <ProductIntegrations integrations={product.integrations} />
                <ProductSpecs specs={product.specs} />
                <ProductDetailCTA cta={product.cta} />
            </main>
        </>
    );
}
