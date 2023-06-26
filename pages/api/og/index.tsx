import BlogArticleLayout from "@/src/components/og-layouts/blog-article";
import BlogCategoryLayout from "@/src/components/og-layouts/blog-category";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};
const interSemiBold = fetch(
  new URL("/public/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interBold = fetch(
  new URL("/public/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // dynamic params
  const title = searchParams.has("title")
    ? searchParams.get("title")?.slice(0, 100)
    : "My default title";

  const description = searchParams.has("description")
    ? searchParams.get("description")?.slice(0, 200)
    : "My default description";

  const slug = searchParams.has("slug") ? searchParams.get("slug") : "my-slug";
  const theme = searchParams.has("theme") ? searchParams.get("theme") : "light";
  const layout = searchParams.has("layout")
    ? searchParams.get("layout")
    : "blog-category";

  const themeGradient =
    theme === "light"
      ? "linear-gradient(to right, #667eea, #764ba2)"
      : "conic-gradient(at right top, rgb(29, 78, 216), rgb(49, 46, 129), rgb(0, 0, 0))";

  return new ImageResponse(
    (
      <>
        {layout === "blog-category" && (
          <BlogCategoryLayout
            title={String(title)}
            description={String(description)}
            theme={{
              gradient: themeGradient,
              name: String(theme),
            }}
            slug={String(slug)}
          />
        )}
        {layout === "blog-article" && (
          <BlogArticleLayout
            title={String(title)}
            description={String(description)}
            theme={{
              gradient: themeGradient,
              name: String(theme),
            }}
            slug={String(slug)}
          />
        )}
      </>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          style: "normal",
          weight: 400,
          data: await interSemiBold,
        },
        {
          name: "Inter",
          style: "bold" as any,
          weight: 800,
          data: await interBold,
        },
      ],
    }
  );
}
