import React from "react";
import { Sun1, Moon } from "iconsax-react";
import Link from "next/link";
import { Tooltip } from "@material-tailwind/react";

export default function DarkMode() {
  return (
    <>
      <Link href={"/"}>
        <Tooltip
          content="Light Mode"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          placement="right-end"
          className="text-xs bg-hover text-white"
        >
          <Sun1 size={24} variant="Broken" className="hover:text-white cursor-pointer text-text" />
        </Tooltip>
      </Link>
      <Link href={"/"}>
        <Tooltip content="Dark Mode" placement="right-end" className="text-xs bg-hover text-white">
          <Moon
            size={24}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            variant="Broken"
            className="hover:text-white -rotate-90 cursor-pointer text-text"
          />
        </Tooltip>
      </Link>
    </>
  );
}
