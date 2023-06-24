import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Category = {
  title: string;
  description: string;
  slug: string;
  image: string;
  keywords: string[];
  featured: boolean;
  content: string;
  parentCategory?: string;
};

export function getCategoryBySlug(slug: string): Category {
  const filePath = path.join(
    process.cwd(),
    "src/data/categories",
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  const category: Category = {
    title: data.title || "",
    description: data.description || "",
    slug: data.slug || "",
    image: data.image || "",
    keywords: data.keywords
      ? data.keywords.split(",").map((keyword: string) => keyword.trim())
      : [],
    featured: data.featured || false,
    content: data.content || "",
    parentCategory: data.parentCategory || undefined,
  };

  return category;
}

export function getCategoriesByParent(parentCategory: string): Category[] {
  const categories = getAllCategories();
  const parentCategories = categories.filter(
    (category) => category.parentCategory === parentCategory
  );

  return parentCategories;
}

export function getAllCategories(): Category[] {
  const categoriesDirectory = path.join(process.cwd(), "src/data/categories");
  const categoryFiles = fs.readdirSync(categoriesDirectory);

  const categories: Category[] = [];

  categoryFiles.forEach((file) => {
    const filePath = path.join(categoriesDirectory, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const category: Category = {
      title: data.title || "",
      description: data.description || "",
      slug: data.slug || "",
      image: data.image || "",
      keywords: data.keywords
        ? data.keywords.split(",").map((keyword: string) => keyword.trim())
        : [],
      featured: data.featured || false,
      parentCategory: data.parentCategory || undefined,
      content: content || "",
    };

    categories.push(category);
  });

  return categories;
}
