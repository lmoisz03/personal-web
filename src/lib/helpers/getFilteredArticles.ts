import { getSortedArticles } from "../article";

const getFilteredArticles = async ({ search }: { search: string }) => {
  const maxArticlesToShow = 10;
  const sortedArticles = getSortedArticles(maxArticlesToShow);

  const newArticles = sortedArticles.filter((post) => {
    // Check if the search query matches any tags, titles, descriptions, or categories
    const lowerCaseTags = post.tags.map((t: string) => t.toLowerCase());
    const lowerCaseTitle = post.title.toLowerCase();
    const lowerCaseDescription = post.description.toLowerCase();
    const lowerCaseCategories = post.category.toLowerCase();

    const decodedSearch = decodeURIComponent(search);
    const searchLowerCase = decodedSearch.toLowerCase();
    // If there is a search query, filter the articles by it. Otherwise, return all articles.
    if (!search || search.length === 0) {
      return true;
    }
    return (
      lowerCaseTags.includes(searchLowerCase) ||
      lowerCaseTitle.includes(searchLowerCase) ||
      lowerCaseDescription.includes(searchLowerCase) ||
      lowerCaseCategories.includes(searchLowerCase)
    );
  });

  return {
    articles: newArticles,
  };
};

export default getFilteredArticles;
