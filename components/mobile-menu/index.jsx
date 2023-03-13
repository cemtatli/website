"use client ";

import React from "react";
import Icons from "../icons";
import { HambergerMenu } from "iconsax-react";
import { Tooltip } from "@material-tailwind/react";

export default function MobileMenu() {
  return (
    <button
      onClick={() => {
        document.querySelector("#sidebar").classList.toggle("hidden");
        document.querySelector("#sidebar").classList.toggle("flex", "!w-30");
      }}
      className="w-10 h-10 rounded-full flex items-center justify-center transition duration-75 delay-75 text-white  shadow-lg sm:hidden absolute top-6 right-4 border border-text border-opacity-10"
    >
      <Tooltip
        content="Menu"
        placement="bottom"
        animate={{
          mount: {
            animation: "scale",
            duration: 200,
          },
          unmount: {
            animation: "scale",
            duration: 200,
          },
        }}
        className="text-xs bg-hover text-white"
      >
        <HambergerMenu
          size={24}
          variant="Broken"
          className="hover:text-white  cursor-pointer text-text"
        />
      </Tooltip>
    </button>
  );
}
