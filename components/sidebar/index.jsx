"use client";

import React from "react";

import Icons from "../icons";
import MobileMenu from "../mobile-menu";

export default function Sidebar() {
  return (
    <>
      <aside
        id="sidebar"
        className="sm:w-15 w-12 shrink-0 h-full sm:flex items-center justify-center flex-col hidden py-8 gap-6 text-white border-r border-text border-opacity-20"
      >
        <Icons />
      </aside>
      <MobileMenu />
    </>
  );
}
