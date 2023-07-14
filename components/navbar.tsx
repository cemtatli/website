import React from "react";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";
import Navtabs from "./tabs";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex flex-1 items-center gap-x-2 font-medium">
      <MobileMenu />
      <div className="flex flex-1 items-center justify-between pr-4">
        <Link href={"/"} className="flex items-center justify-center font-semibold">
          <Sparkles fill="currentColor" className="mr-1.5 h-[18px] w-[18px]" />
          cemtatli.dev
        </Link>
        <Navtabs />
      </div>
    </nav>
  );
};

export default Navbar;
