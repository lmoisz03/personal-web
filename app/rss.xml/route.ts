import Rss from "rss";
import { getSortedArticles } from "@/src/lib/article";

const generateRssFeed = async () => {
  try {
    const maxArticlesToShow = 10;
    const sortedArticles = await getSortedArticles(maxArticlesToShow);

    const feed = new Rss({
      title: "Lmoisz's Web Development Blog - Insights, Tutorials, and Tips",
      description:
        "Explore the world of web development with Lmoisz - articles, tutorials, and insights to help you become a skilled full stack web developer",
      site_url: `${process.env.NEXT_PUBLIC_URL}`,
      feed_url: `${process.env.NEXT_PUBLIC_URL}rss.xml`,
    });

    sortedArticles.forEach((article) => {
      feed.item({
        title: article.title,
        description: article.description,
        url: `${process.env.NEXT_PUBLIC_URL}/blog/${article.slug}`,
        date: article.date,
      });
    });

    return feed.xml();
  } catch (error) {
    // Handle error appropriately (e.g., log, return an error message, etc.)
    console.error("Error generating RSS feed:", error);
    return null;
  }
};

export async function GET() {
  const feedXml = await generateRssFeed();

  if (feedXml) {
    return new Response(feedXml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } else {
    return new Response("Error generating RSS feed.", { status: 500 });
  }
}
