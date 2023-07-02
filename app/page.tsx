import Footer from "@/src/components/footer";
import HeroBannerHome from "@/src/components/hero";
import Navbar from "@/src/components/navbar";
import ArticleCard from "@/src/components/partials/ArticleCard";
import AboutMeCard from "@/src/components/partials/about-me-card";
import NewsletterCard from "@/src/components/partials/newslatter-card";
import { strings } from "@/src/data/strings";
import { getSortedArticles } from "@/src/lib/article";

export const metadata = {
  title: "Lmoisz | Full stack web developer and blogger",
  description: strings.description,
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
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-800">
        <HeroBannerHome />
        <div className="flex flex-col md:flex-row gap-2 p-4 md:p-8 lg:p-12">
          <main className="w-full md:w-[70%]  flex-col">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
              Lastest articles
            </h1>
            <div className="flex flex-col gap-4">
              {articles.map((post) => (
                <ArticleCard post={post} key={post.slug} />
              ))}
            </div>
          </main>
          <aside className="md:w-[30%] w-full  flex-col gap-2 sticky top-0 h-full md:pt-16  flex">
            <AboutMeCard />
            <NewsletterCard />
            {/* Ads */}
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
