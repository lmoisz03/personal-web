import { getAllArticles } from "@/src/lib/article";
import { getAllCategories } from "@/src/lib/helpers/getCategories";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
  });

  const articleUrls = articles.map((article) => ({
    url: `${process.env.NEXT_PUBLIC_URL}blog/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  const categories = getAllCategories().map((category) => ({
    url: `${process.env.NEXT_PUBLIC_URL}blog/category/${category.slug}`,
    lastModified: new Date(),
  }));
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
    {
      url: `${process.env.NEXT_PUBLIC_URL}contact`,
      lastModified: new Date(),
    },
    ...categories,
    ...articleUrls,
  ];
}
