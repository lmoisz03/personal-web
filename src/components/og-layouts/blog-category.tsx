import React from "react";
import TemplateIlustration from "./ilustrations/template";
import WebLogoMain from "../icons/logo";

const BlogCategoryLayout = ({
  theme,
  title,
  description,
  slug,
}: {
  theme: {
    gradient: string;
    name: string;
  };
  title: string;
  description: string;
  slug: string;
}) => {
  return (
    <div
      style={{
        background: theme.gradient,
      }}
      tw="h-full relative w-full flex items-start justify-start"
    >
      <div tw="flex relative items-start w-full flex-row justify-start h-full">
        <div tw="flex absolute inset-0 w-full h-full">
          <TemplateIlustration />
        </div>
        <div tw="flex flex-col justify-between w-full h-full p-20">
          {/* Replace with your own logo */}
          <div tw="flex flex-row items-center">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/images/logo.svg`}
              alt="logo"
              tw="w-24 h-24"
            />
            <span tw="text-gray-400 text-2xl ml-4 font-bold">Lmoisz</span>
          </div>{" "}
          <div tw="flex flex-col  w-1/2">
            <h1 tw="text-[2.5rem] text-gray-300 font-bold text-left">
              {title}
            </h1>
            <p tw="text-[1.5rem] text-gray-400 font-bold text-left">
              {description}
            </p>
          </div>
          <div tw="flex flex-col w-full">
            <span tw="text-lg bottom-8 p-6 right-0 absolute text-gray-400 font-bold text-left">
              {`/${slug}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryLayout;
