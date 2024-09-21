"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeContextProvider";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="p-4 rounded-md bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark"
      onClick={toggleTheme}
    >
      {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeButton;
