"use client";

import React from "react";
import Icons from "../icons";
import MobileMenu from "../mobile-menu";

export default function Sidebar() {
  return (
    <>
      <aside
        id="sidebar"
        className="w-12 sm:w-16 shrink-0 h-full overflow-hidden sm:flex items-center transition-all delay-100 duration-100 justify-center flex-col hidden py-8 gap-6 text-white border-r border-text border-opacity-20"
      >
        <Icons />
      </aside>
      <MobileMenu />
    </>
  );
}
