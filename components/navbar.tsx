import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MobileMenu } from "./mobile-menu";

const Navbar = () => {
  return (
    <nav className="flex flex-1 items-center gap-x-2  font-semibold">
      <MobileMenu />
      <h3 className="text-base font-semibold md:text-lg">💠 cemtatli.dev</h3>
    </nav>
  );
};

export default Navbar;
