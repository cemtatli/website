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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileMenu() {
  return (
    <div className="block md:hidden">
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
                    <Inspect className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </CommandItem>
                </Link>
                {/*           <Link href="/about">
                  <CommandItem className="cursor-pointer">
                    <User2 className="mr-2 h-4 w-4" />
                    <span>About</span>
                  </CommandItem>
                </Link> */}
                <Link href="/projects">
                  <CommandItem className="cursor-pointer">
                    <FolderOpenDot className="mr-2 h-4 w-4" />
                    <span>Projects</span>
                  </CommandItem>
                </Link>
                <Link href={"/bookmarks"}>
                  <CommandItem className="cursor-pointer">
                    <Bookmark className="mr-2 h-4 w-4" />
                    <span>Bookmarks</span>
                  </CommandItem>
                </Link>
                <Link href="/contact">
                  <CommandItem className="cursor-pointer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    <span>Contact</span>
                  </CommandItem>
                </Link>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Others">
                <Link href={"/blog"}>
                  <CommandItem className="cursor-pointer">
                    <PenTool className="mr-2 h-4 w-4" />
                    <span>Blog</span>
                  </CommandItem>
                </Link>
                <Link href={"/cv"}>
                  <CommandItem className="cursor-pointer">
                    <ScrollText className="mr-2 h-4 w-4" />
                    <span>CV</span>
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
