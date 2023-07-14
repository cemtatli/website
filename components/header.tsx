import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Navbar from "@/components/navbar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-12 w-full items-center border-b backdrop-blur">
      <div className="container flex items-center justify-between">
        <Navbar />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
