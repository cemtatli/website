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
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileMenu() {
  return (
    <div className="block sm:hidden">
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
              <CommandGroup>
                <Link href="/">
                  <CommandItem className="cursor-pointer">
                    <SheetClose className="flex">
                      <Inspect className="mr-2 h-4 w-4" />
                      <span>Home</span>
                    </SheetClose>
                  </CommandItem>
                </Link>
                <Link href="/projects">
                  <CommandItem className="cursor-pointer">
                    <SheetClose className="flex">
                      <FolderOpenDot className="mr-2 h-4 w-4" />
                      <span>Projects</span>
                    </SheetClose>
                  </CommandItem>
                </Link>
                <Link href={"/bookmarks"}>
                  <CommandItem className="cursor-pointer">
                    <SheetClose className="flex">
                      <Bookmark className="mr-2 h-4 w-4" />
                      <span>Bookmarks</span>
                    </SheetClose>
                  </CommandItem>
                </Link>
                <Link href="/contact">
                  <CommandItem className="cursor-pointer">
                    <SheetClose className="flex">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      <span>Contact</span>
                    </SheetClose>
                  </CommandItem>
                </Link>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Others">
                <Link href={"/blog"}>
                  <CommandItem className="cursor-pointer">
                    <SheetClose className="flex">
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
