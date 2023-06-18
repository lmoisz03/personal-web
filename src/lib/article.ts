import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Article = {
  image: any;
  description: string;
  date: string;
  title: string;
  tags: string[];
  slug: string;
  content: string;
};

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

const getArticle = (slug: string) => {
  try {
    // Try to read the mdx file
    const article = fs.readFileSync(
      path.join(process.cwd(), "/src/data/posts", slug + ".mdx"),
      "utf-8"
    );

    // Parse the mdx file using the 'gray-matter' package
    const { data: frontMatter, content } = matter(article);

    return {
      frontMatter: {
        description: "", // Add the description property with an empty string value
        ...frontMatter,
      },
      content,
      error: null,
    };
  } catch (error) {
    // If the file doesn't exist or there's an error reading it, return an object with an error property
    return {
      frontMatter: {
        description: "",
      },
      content: "",
      error,
    };
  }
};

const getAllArticles = () => {
  try {
    const articlesDirectory = path.join(process.cwd(), "src/data/posts");
    const articleFiles = fs.readdirSync(articlesDirectory);

    const articles = articleFiles.map((file) => {
      const filePath = path.join(articlesDirectory, file);
      const article = fs.readFileSync(filePath, "utf-8");
      const slug = file.replace(/\.mdx?$/, ""); // Remove the file extension from the filename to get the slug

      const { data: frontMatter, content } = matter(article);

      // Convert tags from a comma-separated string to an array if its an array then don't do anything
      const tags = frontMatter.tags
        ? Array.isArray(frontMatter.tags)
          ? frontMatter.tags
          : frontMatter.tags.split(",").map((tag: string) => tag.trim())
        : []; // If no tags are provided then return an empty array

      return {
        description: "",
        date: "",
        ...frontMatter,
        tags: tags,
        slug,
        content,
      };
    });

    return articles;
  } catch (error) {
    return [];
  }
};

const getRelatedArticles = (
  currentArticle: Article,
  maxRelatedArticles: number
): Promise<Article[]> => {
  const articles = getAllArticles();

  // Calculate the relevance score for each article
  const relatedArticles = articles.map((article: any) => {
    const sharedTags = (currentArticle.tags || []).filter((tag: string) =>
      article.tags.includes(tag)
    );

    return {
      ...article,
      relevanceScore: sharedTags.length,
      title: article.title, // Add the 'title' property
    };
  });

  // Filter out the current article and sort related articles based on relevance score in descending order
  const filteredRelatedArticles = relatedArticles
    .filter((article) => article.slug !== currentArticle.slug)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);

  // Get the top N related articles
  return Promise.resolve(filteredRelatedArticles.slice(0, maxRelatedArticles));
};

export { getArticle, getAllArticles, getSortedArticles, getRelatedArticles };
