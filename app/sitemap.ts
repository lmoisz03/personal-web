import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}blog`,
      lastModified: new Date(),
    },
  ];
}
