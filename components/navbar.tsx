import React from "react";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";
import Navtabs from "./tabs";

const Navbar = () => {
  return (
    <nav className="flex flex-1 items-center gap-x-2 font-semibold">
      <MobileMenu />
      <div className="flex items-center justify-between flex-1 pr-8">
        <Link href={"/"} className="text-base font-semibold md:text-lg">
          cemtatli.dev
        </Link>
        <Navtabs />
      </div>
    </nav>
  );
};

export default Navbar;
