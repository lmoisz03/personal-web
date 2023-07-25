import { getAllArticles } from "@/src/lib/article";
import { Metadata } from "next";

// This is the tags page
export const metadata: Metadata = {
  title: "Tags",
  description: "Tags page",
  keywords: "tags",
};

const findTags = async () => {
  const posts = await getAllArticles();
  const tags = posts.map((post) => post.tags).flat();
  return tags;
};
const TagsPage = async () => {
  const tags = await findTags();
  const lowercaseTags = tags.map((tag) => tag.toLowerCase());

  const uniqueTagsWithMentionedTimes = new Map();
  lowercaseTags.forEach((tag) => {
    const count = uniqueTagsWithMentionedTimes.get(tag) || 0;
    uniqueTagsWithMentionedTimes.set(tag, count + 1);
  });

  // Convert the unique tags with mentioned times into an array of objects for sorting
  const sortedTagsByMentionedTimes = Array.from(
    uniqueTagsWithMentionedTimes,
    ([tag, count]) => ({
      tag,
      count,
    })
  ).sort((a, b) => b.count - a.count);

  return (
    <div className="flex flex-col gap-2  my-auto divide-y divide-gray-200 dark:divide-gray-700  items-center ">
      <h1 className="text-2xl text-gray-600 dark:text-gray-200">Tags</h1>

      <ul
        className="
      flex flex-row gap-2 flex-wrap pt-2"
      >
        {sortedTagsByMentionedTimes.map((tag, index) => (
          <li key={index}>
            <a
              // We need to encode the tag to url format
              href={`/blog/tags/${encodeURIComponent(tag.tag)}`}
              className="flex flex-row gap-1 items-center"
            >
              <span className="text-blue-500 text-base uppercase font-medium hover:text-blue-600">
                {tag.tag}
              </span>
              <span className="text-gray-500 dark:text-gray-300 text-base">
                ({tag.count})
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsPage;
