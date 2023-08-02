"use client";

import { AlignJustify as MenuIcon } from "lucide-react";
import {
  ExternalLink as LinkIcon,
  User2,
  Bookmark,
  Inspect,
  FolderOpenDot,
  PenTool,
  ScrollText
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command";
import Link from "next/link";
import React from "react";
import SettingsMenu from "@/components/settings-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileMenu() {
  return (
    <div className="block md:hidden ">
      <Sheet>
        <SheetTrigger asChild>
          <Button aria-label="mobile-menu" size={"icon"} variant="ghost">
            <MenuIcon strokeWidth={1.5} className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup >
                <Link href="/">
                  <CommandItem className="p-0">
                    <SheetClose className="flex-1 flex items-center px-2 py-1.5 ">
                      <Inspect className="mr-2 h-4 w-4" />
                      <span>Home</span>
                    </SheetClose>
                  </CommandItem>
                </Link>
                <Link href="/projects">
                  <CommandItem className="p-0">
                    <SheetClose className="flex-1 flex items-center px-2 py-1.5 ">
                      <FolderOpenDot className="mr-2 h-4 w-4" />
                      <span>Projects</span>
                    </SheetClose>
                  </CommandItem>
                </Link>
                <Link href={"/bookmarks"}>
                  <CommandItem className="p-0">
                    <SheetClose className="flex-1 flex items-center px-2 py-1.5 ">
                      <Bookmark className="mr-2 h-4 w-4" />
                      <span>Bookmarks</span>
                    </SheetClose>
                  </CommandItem>
                </Link>
                <Link href="/contact">
                  <CommandItem className="p-0">
                    <SheetClose className="flex-1 flex items-center px-2 py-1.5 ">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      <span>Contact</span>
                    </SheetClose>
                  </CommandItem>
                </Link>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Others">
                <Link href={"/blog"}>
                  <CommandItem className="p-0">
                    <SheetClose className="flex-1 flex items-center px-2 py-1.5 ">
                      <PenTool className="mr-2 h-4 w-4" />
                      <span>Blog</span>
                    </SheetClose>
                  </CommandItem>
                </Link>
                <SettingsMenu />
              </CommandGroup>
            </CommandList>
          </Command>
        </SheetContent>
      </Sheet>
    </div>
  );
}
