import React from "react";
import { Sun1, Moon } from "iconsax-react";
import Link from "next/link";

export default function DarkMode() {
  return (
    <>
      <Link href={"/"}>
        <Sun1
          size={24}
          variant="Broken"
          className="hover:text-white cursor-pointer text-text block dark:hidden"
        />
      </Link>
      <Link href={"/"} className=" hidden dark:block">
        <Moon
          size={24}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          variant="Broken"
          className="hover:text-white -rotate-90 cursor-pointer text-text"
        />
      </Link>
    </>
  );
}
