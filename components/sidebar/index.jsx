import React from "react";

import Icons from "../icons";

export default function Sidebar() {
  return (
    <aside className="w-15 shrink-0 h-full sm:flex items-center justify-center flex-col hidden bg-bg px-2 py-8 gap-6 text-white border-r border-text border-opacity-20">
      <Icons />
    </aside>
  );
}
