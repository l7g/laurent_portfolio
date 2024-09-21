"use client";

import { useTheme } from "./ThemeContextProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="p-2 rounded-md bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark"
      onClick={toggleTheme}
    >
      {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    </button>
  );
};

export default ThemeButton;
