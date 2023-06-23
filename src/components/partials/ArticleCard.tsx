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
  };
}) => {
  return (
    <div
      className="flex gap-2 flex-row items-center py-2 border-b border-gray-200 dark:border-gray-700"
      style={{ maxWidth: "800px", width: "100%" }}
      key={post.title}
    >
      <div>
        <Link href={`/blog/${post.slug}`} passHref>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {post.title}
          </h2>
        </Link>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          {/* Transform date to string */}
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
      <div className="flex-grow cursor-pointer h-44 w-[25rem]">
        {/* <img
          src="https://placehold.co/600x400"
          className="rounded max-h-[200px] max-w-[600px] w-full h-full object-cover"
          alt=""
          width={600}
        /> */}
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            className="rounded max-h-[200px] max-w-[600px] w-full h-full object-cover"
            // objectFit="cover"
          />
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
