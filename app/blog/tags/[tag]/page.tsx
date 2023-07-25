import ArticleCard from "@/src/components/partials/ArticleCard";
import SearchBox from "@/src/components/search";
import { getAllArticles, getSortedArticles } from "@/src/lib/article";

import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: {
    tag: string;
  };
}): Promise<Metadata> {
  const articles = await getAllArticles();
  const tag = decodeURIComponent(params.tag);
  const filteredArticles = articles.filter((post: { tags: string[] }) =>
    post.tags.includes(tag)
  );

  if (filteredArticles.length === 0) {
    // If the tag doesn't exist, return metadata for the non-existent tag
    return {
      title: "Tag Not Found",
      keywords: ["Tag", "Not Found"],
      description: "Sorry, the tag you are looking for does not exist.",
      robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  // If the tag exists, return metadata for the existing tag
  const tagTitle = `${decodeURIComponent(tag)} - Tag`;

  return {
    title: tagTitle,
    keywords: [tag, "Tag", "Articles", "Blog"], // Add more relevant keywords if necessary
    description: `Explore articles related to ${tag} and discover more interesting content.`,
  };
}

const getPosts = async ({ tag }: { tag: string }) => {
  const maxArticlesToShow = 10;
  const sortedArticles = getSortedArticles(maxArticlesToShow);

  const decodedTag = decodeURIComponent(tag);
  const searchQuery = decodedTag.toLowerCase(); // Convert the search query to lowercase for case-insensitive search

  const newArticles = sortedArticles.filter((post) => {
    // Check if the search query matches any tags, titles, descriptions, or categories
    const lowerCaseTags = post.tags.map((t: string) => t.toLowerCase());
    const lowerCaseTitle = post.title.toLowerCase();
    const lowerCaseDescription = post.description.toLowerCase();
    const lowerCaseCategories = post.category.toLowerCase();

    return (
      lowerCaseTags.includes(searchQuery) ||
      lowerCaseTitle.includes(searchQuery) ||
      lowerCaseDescription.includes(searchQuery) ||
      lowerCaseCategories.includes(searchQuery)
    );
  });

  return {
    articles: newArticles,
  };
};

export default async function TagPage({
  params,
  searchParams,
}: {
  params: {
    tag: string;
  };
  searchParams: {
    search: string;
  };
}) {
  const decodedTag = decodeURIComponent(params.tag);
  const data = await getPosts({ tag: decodedTag });
  // console.log(posts);
  const { articles } = data;
  const filteredArticles = articles.filter((post) => {
    // Check if the search query matches any tags, titles, descriptions, or categories
    // We need to decode the search query from URI if it has
    const decodedSearch = decodeURIComponent(searchParams.search);
    const searchLowerCase = decodedSearch.toLowerCase();
    // If there is a search query, filter the articles by it. Otherwise, return all articles.
    if (!searchParams.search || searchParams.search.length === 0) {
      return true;
    }
    return (
      post.tags.includes(searchLowerCase) ||
      post.title.toLowerCase().includes(searchLowerCase) ||
      post.description.toLowerCase().includes(searchLowerCase) ||
      post.category.toLowerCase().includes(searchLowerCase)
    );
  });

  return (
    <>
      <div className="flex flex-col gap-2 py-4 mb-4">
        <div className="mb-2 space-y-2">
          <h2 className="text-4xl capitalize font-semibold text-gray-900 dark:text-gray-200">
            {decodedTag}
          </h2>
          <p className="text-gray-600 text-base dark:text-gray-300">
            Explore articles related to {decodedTag} and discover more
            interesting content.
          </p>
          <div className="flex  gap-2 max-w-xl w-full">
            <SearchBox />
          </div>
        </div>
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
