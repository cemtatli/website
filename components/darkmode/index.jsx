"use client";

import { useEffect, useState } from "react";
import { Sun1, Moon } from "iconsax-react";
import { Tooltip } from "@material-tailwind/react";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
  }

  return (
    <button className="hover:text-white  cursor-pointer text-text" onClick={toggleDarkMode}>
      {isDarkMode ? (
        <Tooltip
          content="Light Mode"
          placement="right-start"
          className="text-xs bg-hover text-white"
        >
          <Sun1 size={24} className="inline-block" />
        </Tooltip>
      ) : (
        <Tooltip
          content="Dark Mode"
          placement="right-start"
          className="text-xs bg-hover text-white"
        >
          <Moon size={24} className="inline-block" />
        </Tooltip>
      )}
    </button>
  );
}
