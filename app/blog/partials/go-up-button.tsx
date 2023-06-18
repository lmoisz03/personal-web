"use client";
import { useState, useEffect } from "react";
import { IconArrowUp } from "@tabler/icons-react";

const GoUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const threshold = 500; // Adjust this value as per your requirement

      setShowButton(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${
        showButton ? "fadeIn" : "fadeOut"
      } bg-gray-200 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-opacity duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-100 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 rounded-full p-2 text-gray-500 dark:text-gray-300`}
      onClick={scrollToTop}
      aria-label="Go up"
      title="Go up"
      type="button"
      data-testid="go-up"
      data-cy="go-up"
    >
      <IconArrowUp size={24} strokeWidth={1.5} />
      <style jsx>{`
        .fadeIn {
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }

        .fadeOut {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>
    </button>
  );
};

export default GoUpButton;
