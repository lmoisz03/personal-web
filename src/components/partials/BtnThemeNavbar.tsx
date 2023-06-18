"use client";
import { useThemeMode } from "@/src/hooks/useThemeMode";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const BtnThemeNavbar = () => {
  const [mounted, setMounted] = useState(false);

  const { themeMode, setTheme } = useThemeMode();
  const [isDark, setIsDark] = useState(themeMode === "dark");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className="rounded-lg hover:bg-gray-100 p-2 dark:hover:bg-gray-800"
      onClick={(e) => {
        e.preventDefault();
        setTheme(isDark ? "light" : "dark");
        setIsDark(!isDark);
      }}
      aria-label="theme"
    >
      <span className="sr-only">Theme switch</span>
      {isDark ? (
        <IconMoon className="h-6 w-6 dark:text-gray-300 text-gray-700" />
      ) : (
        <IconSun className="h-6 w-6 dark:text-gray-300 text-gray-700" />
      )}
    </button>
  );
};

export default BtnThemeNavbar;
