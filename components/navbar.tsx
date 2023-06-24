import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-1 items-center gap-x-2 font-semibold">
      <MobileMenu />
      <Link href={"/"} className="text-base font-semibold md:text-lg">
        cemtatli.dev
      </Link>
    </nav>
  );
};

export default Navbar;
