"use client";
import { useState } from "react";

const NewsletterCard = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(email);
    // Reset email input field
    setEmail("");
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Stay updated with the latest news, articles, and promotions.(Coming
        soon)
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg:gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          disabled
        />
        <button
          type="submit"
          className="bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-blue-800 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
          disabled
        >
          Subscribe
        </button>
      </form>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        We respect your privacy and won&apos;t share your email address.
      </p>
    </div>
  );
};

export default NewsletterCard;
