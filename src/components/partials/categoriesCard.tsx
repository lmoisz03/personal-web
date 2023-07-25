import { getAllCategories } from "@/src/lib/helpers/getCategories";

const CategoriesCard = async () => {
  const categories = getAllCategories();

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
      <div className="flex items-center mb-4">
        <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-xl mr-2">
          Categories
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Choose from a wide range of options to suit your interests and
        preferences.
      </p>
      <div className="flex flex-wrap mb-4">
        {/* Add your category items here */}
        {categories.map((category, index) => {
          return (
            <a
              key={index}
              href={`/blog/category/${category.slug}`}
              className="mr-2 mb-2 bg-blue-100 text-blue-800 text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {category.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesCard;
