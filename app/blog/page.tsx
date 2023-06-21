import Footer from "@/src/components/footer";
import HeroBannerHome from "@/src/components/hero";
import Navbar from "@/src/components/navbar";
import ArticleCard from "@/src/components/partials/ArticleCard";
import AboutMeCard from "@/src/components/partials/about-me-card";
import NewsletterCard from "@/src/components/partials/newslatter-card";
import { strings } from "@/src/data/strings";
import { getSortedArticles } from "@/src/lib/article";

export const metadata = {
  title: "Blog | Web development, design and more",
  description:
    "Check the latest articles about web development, design, crypto and more in our blog for free now!",
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
  const categories = [
    {
      name: "Web development",
      slug: "web-development",
      description: "Web development articles",
    },
    {
      name: "Design",
      slug: "design",
      description: "Design articles",
    },
    {
      name: "Tutorials",
      slug: "tutorials",
      description: "Tutorials articles",
    },
    {
      name: "Financial and crypto",
      slug: "financial-and-crypto",
      description: "Financial and crypto articles",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-2 py-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
          Latest articles
        </h1>
        <div className="flex flex-wrap gap-2 flex-row">
          {categories.map((category) => (
            <a
              href={`/category/${category.slug}`}
              key={category.slug}
              className="rounded-full p-2 text-sm  bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <span className="text-gray-900 dark:text-gray-200">
                {category.name}
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
