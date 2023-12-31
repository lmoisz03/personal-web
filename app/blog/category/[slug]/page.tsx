import ArticleCard from "@/src/components/partials/ArticleCard";
import SearchBox from "@/src/components/search";
import { getSortedArticles } from "@/src/lib/article";
import { getAllCategories } from "@/src/lib/helpers/getCategories";
import getFilteredArticles from "@/src/lib/helpers/getFilteredArticles";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const categories = getAllCategories();

  // Check if the category exists
  if (!categories.some((category) => category.slug === params.slug)) {
    return {
      title: "Error 404 - Page not found",
    };
  }
  // Get the category data
  const category: any = categories.find(
    (category) => category.slug === params.slug
  );
  return {
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
    title: category.title,
    description: category.description,
    keywords: category.keywords,
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_URL}/blog/category/${category.slug}`,
      title: category.title,
      description: category.description,
      images: [
        // process.env.NEXT_PUBLIC_URL+ 'api/og?slug='+category.slug}&title=${category.title}&description=${category.description},
        process.env.NEXT_PUBLIC_URL +
          "api/og?slug=" +
          category.slug +
          "&title=" +
          category.title +
          "&description=" +
          category.description,
      ],
    },
    twitter: {
      title: category.title,
      description: category.description,
      card: "summary_large_image",
      creator: "@lmoisz",
      images: {
        url:
          process.env.NEXT_PUBLIC_URL +
          "api/og?slug=" +
          category.slug +
          "&title=" +
          category.title +
          "&description=" +
          category.description,
        alt: category.title,
      },
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}blog/category/${category.slug}`,
    },
  };
}

export default async function Home({
  params,
  searchParams,
}: {
  params: {
    slug: string;
  };
  searchParams: {
    search: string;
  };
}) {
  const data = await getFilteredArticles({
    search: searchParams.search,
  });
  // console.log(posts);
  const { articles } = data;
  const categories = getAllCategories();

  // Check if the category exists
  if (!categories.some((category) => category.slug === params.slug)) {
    return notFound();
  }
  // Get the category data
  const category: any = categories.find(
    (category) => category.slug === params.slug
  );
  const filteredArticles = articles.filter(
    (post: { category: string }) => post.category === params.slug
  );

  return (
    <>
      <div className="flex flex-col gap-2 py-4 mb-4">
        <div className="mb-2 space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
            {category.title}
          </h2>
          <p className="text-gray-600 text-base dark:text-gray-300">
            {category.content}
          </p>
          <div className="flex  gap-2 max-w-xl w-full">
            <SearchBox />
          </div>
        </div>
        {/* <div className="flex flex-wrap gap-2 flex-row">
          {categories
            .filter((category) => category.featured) // Filter only the featured categories
            .map((category) => (
              <Link
                href={`/blog/category/${category.slug}`}
                key={category.slug}
                className="rounded-full p-2 text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <span className="text-gray-900 dark:text-gray-200">
                  {category.title}
                </span>
              </Link>
            ))}
        </div> */}
      </div>
      <div className="flex flex-col gap-4">
        {filteredArticles.length === 0 ? (
          <div className=" text-gray-500 dark:text-gray-400">
            <p className="text-gray-500 dark:text-gray-400">
              There are no articles in this category yet.
            </p>
          </div>
        ) : (
          filteredArticles.map((post) => (
            <ArticleCard post={post} key={post.slug} />
          ))
        )}
      </div>
    </>
  );
}
