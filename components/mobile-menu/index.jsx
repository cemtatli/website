import React from "react";
import { HambergerMenu } from "iconsax-react";

export default function MobileMenu() {
  return (
    <button
      onClick={() => {
        document.getElementById("sidebar").classList.toggle("hidden");
        document.getElementById("sidebar").classList.toggle(`flex`);
      }}
      className="w-10 h-10 z-10 bg-bg rounded-full flex items-center justify-center transition duration-75 delay-75 text-white  shadow-lg sm:hidden absolute bottom-8 right-4 border border-text border-opacity-10"
    >
      <HambergerMenu
        size={24}
        variant="Broken"
        className="hover:text-white  cursor-pointer text-text"
      />
    </button>
  );
}
