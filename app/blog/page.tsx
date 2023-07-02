import ArticleCard from "@/src/components/partials/ArticleCard";
import { getSortedArticles } from "@/src/lib/article";
import { getAllCategories } from "@/src/lib/helpers/getCategories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web development, technology, design and more",
  description:
    "Check the latest articles about web development, design, crypto and more in our blog for free now!",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}blog`,
  },
};

const getPosts = async () => {
  const maxArticlesToShow = 10;
  const sortedArticles = getSortedArticles(maxArticlesToShow);
  return {
    articles: sortedArticles,
  };
};

export default async function Home() {
  const data = await getPosts();
  // console.log(posts);
  const { articles } = data;
  const categories = getAllCategories();
  return (
    <>
      <div className="flex flex-col gap-2 py-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
          Latest articles
        </h1>
        <div className="flex flex-wrap gap-2 flex-row">
          {categories
            .filter((category) => category.featured) // Filter only the featured categories
            .map((category) => (
              <a
                href={`/blog/category/${category.slug}`}
                key={category.slug}
                className="rounded-full p-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <span className="text-gray-900 dark:text-gray-200">
                  {category.title}
                </span>
              </a>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {articles.map((post) => (
          <ArticleCard post={post} key={post.slug} />
        ))}
      </div>
    </>
  );
}
