import React from "react";
import TemplateIlustration from "./ilustrations/template";
import WebLogoMain from "../icons/logo";
import { IconBrandNextjs } from "@tabler/icons-react";

const BlogArticleLayout = ({
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
        // URL Gradient /images/gradinet/conic-gradient-dark.jpg
        backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}images/gradients/conic-gradient-dark.jpg)`,
      }}
      tw="h-screen relative w-full flex items-start justify-start"
    >
      <div tw="flex relative items-start m-auto w-full flex-row justify-start h-full">
        {/* <div tw="flex absolute inset-0 w-full h-full">
          <TemplateIlustration />
        </div> */}
        <div tw="flex flex-col  w-full h-full p-20">
          <div tw="flex flex-row w-full items-center">
            <div
              tw="border border-indigo-700 p-2  rounded flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(to right, rgb(59, 130, 246), rgb(37, 99, 235))",
              }}
            >
              <span tw="text-white font-bold">LZ</span>
            </div>
            <span tw=" ml-2 text-gray-100">Blog</span>
          </div>
          <div tw="flex flex-col my-auto h-screen  justify-center w-[44rem]">
            <h1 tw="text-[3rem] text-gray-200 font-semibold text-left">
              {title}
            </h1>
            <p tw="text-[1.5rem] text-gray-300 font-normal text-left">
              {description}
            </p>
            {/* Fake author data */}

            <p tw="bottom-0 text-left text-[1.4rem] text-gray-300 ">{`/${slug}`}</p>
          </div>

          {/* <span tw="text-lg bottom-8 p-6 right-0 absolute text-gray-400 font-bold text-left">
              {`/${slug}`}
            </span> */}
        </div>
      </div>
    </div>
  );
};

export default BlogArticleLayout;
