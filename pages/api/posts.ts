import { getAllArticles } from "@/src/lib/article";
import { NextApiRequest, NextApiResponse } from "next";

const getSortedArticles = (maxArticles: number): any[] => {
  const articles = getAllArticles();

  return articles
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, maxArticles);
};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const maxArticlesToShow = 10;
  const sortedArticles = getSortedArticles(maxArticlesToShow);

  res.status(200).json({ articles: sortedArticles });
}
