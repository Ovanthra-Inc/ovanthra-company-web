import { notFound } from "next/navigation";
import { productsData } from "@/lib/products-data";
import { ProductDetailHero } from "@/components/products/dynamic/ProductDetailHero";
import { ProductCapabilities } from "@/components/products/dynamic/ProductCapabilities";
import { ProductIntegrations } from "@/components/products/dynamic/ProductIntegrations";
import { ProductSpecs } from "@/components/products/dynamic/ProductSpecs";
import { ProductDetailCTA } from "@/components/products/dynamic/ProductDetailCTA";

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
