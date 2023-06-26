import { useMDXComponents } from "@/src/components/mdx/components";
import MdxContent from "./content";
import { getArticle, getRelatedArticles } from "@/src/lib/article";
import Image from "next/image";
import ShareButtons from "@/src/components/partials/shareButtons";
import { Metadata } from "next";
import AnimatedLink from "../partials/animated-link";
import Link from "next/link";
import { IconBrandBlogger } from "@tabler/icons-react";
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
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
    title: article.frontMatter.title,
    description: article.frontMatter.description,
    keywords: article.frontMatter.keywords,
    openGraph: {
      title: article.frontMatter.title,
      description: article.frontMatter.description,
      type: "article",
      images: [
        article.frontMatter.image ??
          `${process.env.NEXT_PUBLIC_URL}api/og?layout=blog-article&theme=dark&title=${article.frontMatter.title}&description=${article.frontMatter.description}&slug=${slug}`,
      ],
    },
    twitter: {
      title: article.frontMatter.title,
      description: article.frontMatter.description,
      card: "summary_large_image",
      creator: "@lmoisz",
      images: {
        url:
          article.frontMatter.image ??
          `${process.env.NEXT_PUBLIC_URL}api/og?layout=blog-article&theme=dark&title=${article.frontMatter.title}&description=${article.frontMatter.description}&slug=${slug}`,
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
    <>
      <nav className="flex mb-2" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href={"/blog"}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <IconBrandBlogger className="w-4 h-4 mr-2" />
              Blog
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Link
                href={`/blog/category/${article.frontMatter.category}`}
                className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                {article.frontMatter.category}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 text-ellipsis overflow-hidden">
                {slug}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <article className="flex flex-col w-full">
        {/* The image */}
        <Link
          href={`/blog/category/${article.frontMatter.category}`}
          className={`bg-blue-100 my-4 dark:bg-blue-900 text-emerald-800 dark:text-blue-300 text-xs font-medium w-fit mr-2 px-2.5 py-0.5 rounded `}
        >
          {article.frontMatter?.category}
        </Link>
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
            {/* http://localhost:5000/api/og?layout=blog-article&theme=dark&title=How%20to%20Create%20a%20Newsletter%20in%20Next.js&description=Learn%20how%20to%20create%20a%20newsletter%20feature%20in%20your%20Next.js%20application%20to%20engage%20with%20your%20audience%20and%20boost%20your%20email%20marketing%20efforts.%20Follow%20this%20step-by-step%20guide%20to%20implement%20an%20newsletter. */}
            <Image
              src={
                article.frontMatter.image ??
                `/api/og?layout=blog-article&theme=dark&title=${article.frontMatter.title}&description=${article.frontMatter.description}&slug=${slug}`
              }
              alt={article.frontMatter.title}
              width={640}
              height={360}
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              unoptimized={true}
            />
          </div>
        )}

        {/* Date */}

        <div className="text-gray-700 dark:text-gray-200 format dark:format-invert">
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
    </>
  );
};

export default Article;
