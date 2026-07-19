import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vexa.ir";

  const products = await fetch("https://api.vexa.ir/products").then((res) =>
    res.json(),
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    ...products.map((product: any) => ({
      url: `${baseUrl}/products/${product.slug}`,
      lastModified: new Date(product.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
