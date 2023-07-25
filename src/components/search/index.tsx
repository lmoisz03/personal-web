"use client";
import debounce from "@/src/lib/helpers/debounce";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const SearchBox = () => {
  const router = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useCallback(
    debounce(
      (e: React.ChangeEvent<HTMLInputElement>) =>
        // If the search box is empty, remove the search param
        router.push(`?search=${e.target.value}`),
      500
    ),
    []
  );

  return (
    <form className="w-full">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <IconSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="search"
          onChange={handleChange}
          className="block w-full p-2.5 outline-none pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search tags, categories and articles."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-1 bottom-[0.20rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-[0.5rem] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
