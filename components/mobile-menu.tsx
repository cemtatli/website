"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify as MenuIcon } from "lucide-react";
import { MenuContent } from "./menu-content";

const SHEET_SIDES = ["left"] as const;

type MobileMenu = (typeof SHEET_SIDES)[number];

export function MobileMenu() {
  return (
    <div className="md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button aria-label="mobile-menu" size={"icon"} variant="ghost">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-r" side={side}>
            <MenuContent />
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
