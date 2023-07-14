"use client";

import { AlignJustify as MenuIcon } from "lucide-react";
import { MenuContent } from "@/components/menu-content";
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
          <MenuContent />
        </SheetContent>
      </Sheet>
    </div>
  );
}
