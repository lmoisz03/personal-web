"use client";
import { useState } from "react";

/**
 * Theme mode hook
 * This hook is used to change the theme mode
 * returns:
 * - themeMode: string
 * - setThemeMode: function
 * - isDark: boolean
 */
export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      }
    }
  });
  const setTheme = (theme: string) => {
    if (theme === "dark") {
      setThemeMode(theme);
      localStorage.setItem("theme", "dark");
      document.querySelector("html")?.classList.add("dark");
    } else {
      setThemeMode(theme);
      localStorage.setItem("theme", "Light");
      document.querySelector("html")?.classList.remove("dark");
    }
  };
  return { themeMode, setTheme, isDark: themeMode === "dark" };
};
