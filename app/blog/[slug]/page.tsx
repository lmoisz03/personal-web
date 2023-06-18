import { useMDXComponents } from "@/src/components/mdx/components";
import MdxContent from "./content";
import { getArticle, getRelatedArticles } from "@/src/lib/article";
import Image from "next/image";
import ShareButtons from "@/src/components/partials/shareButtons";
import { Metadata } from "next";
import AnimatedLink from "../partials/animated-link";
// useMDXComponents

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const { slug } = params;
  const article: any = getArticle(slug);

  // If error
  if (article.error) {
    return {
      title: "Error: Article not found",
    };
  }
  // const previousImages = (await parent).openGraph?.images || []
  return {
    title: article.frontMatter.title,
    description: article.frontMatter.description,
    openGraph: {
      title: article.frontMatter.title,
      description: article.frontMatter.description,
      type: "article",
      images: [article.frontMatter.image],
    },
    twitter: {
      title: article.frontMatter.title,
      description: article.frontMatter.description,
      card: "summary_large_image",
      creator: "@lmoisz",
      images: {
        url: article.frontMatter.image,
        alt: article.frontMatter.title,
      },
    },
  };
}
const Article = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params;
  const article: any = getArticle(slug);
  const components = useMDXComponents({
    span: (props) => <span {...props} />,
  });
  if (article.error) {
    return (
      <div className="article">
        <h1>Error: Article not found</h1>
      </div>
    );
  }

  // console.log(source.compiledSource);
  return (
    <article className="article">
      {/* The image */}
      <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200">
        {article.frontMatter.title}
      </h1>
      {/* Description    */}
      {article.frontMatter.description && (
        <div className="my-4">
          <p className="text-gray-500 text-base dark:text-gray-400">
            {article.frontMatter.description}
          </p>
        </div>
      )}
      <div className="flex flex-row flex-wrap justify-between items-center py-1 border-y border-gray-200 dark:border-gray-700 my-2">
        <div className="flex flex-row flex-wrap justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400 mr-1">
            Posted at
          </span>
          <span className="text-gray-400 dark:text-gray-300 py-4">
            {new Date(article.frontMatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        {/* Share icons buttons */}
        <div className="flex flex-row flex-wrap justify-between items-center">
          <ShareButtons
            description={article.frontMatter.description}
            url={`${process.env.NEXT_PUBLIC_URL + "blog/" + slug}`}
          />
        </div>
      </div>
      {article.frontMatter.image && (
        <div className="my-4">
          <Image
            src={article.frontMatter.image}
            alt={article.frontMatter.title}
            width={640}
            height={360}
            className="rounded-lg"
          />
        </div>
      )}
      {/* Date */}

      <div className="text-gray-700 dark:text-gray-200">
        <MdxContent content={article.content} />
      </div>
      <div className="flex flex-row flex-wrap  justify-between items-center py-4 border-t border-gray-200 dark:border-gray-700 my-6">
        <div className="flex flex-col ">
          <p className="text-gray-500 text-base dark:text-gray-400 mr-1">
            Want to see more content like this?
          </p>
          <AnimatedLink href="/blog">Check out our blog</AnimatedLink>
        </div>
      </div>
    </article>
  );
};

export default Article;
