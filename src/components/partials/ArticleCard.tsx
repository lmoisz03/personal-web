import React, { Key } from "react";
import Link from "next/link";
import { Spline_Sans_Mono } from "next/font/google";
import Image from "next/image";

const ArticleCard = ({
  post,
}: {
  post: {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
    image: string;
    category: string;
  };
}) => {
  return (
    <div
      className="flex gap-2 flex-col-reverse sm:flex-row items-center py-4 border-b border-gray-200 dark:border-gray-700"
      style={{ maxWidth: "800px", width: "100%" }}
      key={post.title}
    >
      <div className="flex-grow flex flex-col sm:w-[40rem]">
        <Link
          href={`/blog/category/${post.category}`}
          className={`bg-blue-100 my-2 dark:bg-blue-900 text-emerald-800 dark:text-blue-300 text-xs font-medium w-fit mr-2 px-2.5 py-0.5 rounded `}
        >
          {post?.category}
        </Link>
        <Link href={`/blog/${post.slug}`} passHref>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 hover:text-gray-300 dark:hover:text-gray-200 my-1">
            {post.title}
          </h2>
        </Link>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          {/* Transform date to string */}
          Posted on{" "}
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
          {post.description}
        </p>
        {/* Tags */}
        <div className="flex flex-row gap-2 mt-4 flex-wrap flex-grow">
          {post.tags.map((tag: string, index: number) => (
            <Link
              href={`/blog/tags/${tag}`}
              key={index}
              className="rounded-full flex items-center justify-center p-1.5 min-w-[64px] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {tag}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-grow cursor-pointer h-44 w-full sm:w-[25rem]">
        {/* <img
          src="https://placehold.co/600x400"
          className="rounded max-h-[200px] max-w-[600px] w-full h-full object-cover"
          alt=""
          width={600}
        /> */}
        <Image
          src={
            post.image ??
            `/api/og?layout=blog-article&theme=dark&title=${post.title}&description=${post.description}&slug=${post.slug}`
          }
          alt={post.title}
          width={600}
          height={400}
          className="rounded sm:max-h-[200px] sm:max-w-[600px] w-full h-full object-cover hover:scale-105 transition-all duration-300"
          // objectFit="cover"
          quality={100}
          priority
        />
      </div>
    </div>
  );
};

export default ArticleCard;
