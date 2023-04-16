"use client";

import React from "react";
import { Link21, Setting4, User, FolderOpen, Home, Bookmark2 } from "iconsax-react";
import { Tooltip } from "@material-tailwind/react";
import Link from "next/link";
import DarkMode from "../darkmode";

export default function Icons() {
  return (
    <>
      <Link href={"/"}>
        <Tooltip content="Home" placement="right-start" className="text-xs bg-hover text-white">
          <Home size={24} variant="Broken" className="hover:text-white  cursor-pointer text-text" />
        </Tooltip>
      </Link>
      <Link href={"/about"}>
        <Tooltip content="About" placement="right-start" className="text-xs bg-hover text-white">
          <User size={24} variant="Broken" className="hover:text-white  cursor-pointer text-text" />
        </Tooltip>
      </Link>
      <Link href={"https://github.com/cemtatli"} target={"_blank"}>
        <Tooltip content="Project" placement="right-start" className="text-xs bg-hover text-white">
          <FolderOpen
            size={24}
            variant="Broken"
            className="hover:text-white  cursor-pointer text-text"
          />
        </Tooltip>
      </Link>
      <Link href={"/contact"}>
        <Tooltip content="Contact" placement="right-start" className="text-xs bg-hover text-white">
          <Link21
            size={24}
            variant="Broken"
            className="hover:text-white  cursor-pointer text-text"
          />
        </Tooltip>
      </Link>
      <Link href={"/"}>
        <Tooltip
          content="Bookmarks"
          placement="right-start"
          className="text-xs bg-hover text-white"
        >
          <Bookmark2
            size={24}
            variant="Broken"
            className="hover:text-white  cursor-pointer text-text"
          />
        </Tooltip>
      </Link>
      <DarkMode />
    </>
  );
}
