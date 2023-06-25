"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Separator } from "./ui/separator";
import { CommandItem } from "./ui/command";
import { useTheme } from "next-themes";
import { Settings } from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const SettingsMenu = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full">
        <CommandItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </CommandItem>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-11/12 rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base">Settings</AlertDialogTitle>
          <Separator className="my-2" />
          <AlertDialogDescription className="flex items-center justify-start gap-2 pt-2">
            <Label className="capitalize">{resolvedTheme} Mod </Label>
            <Switch checked={resolvedTheme === "dark"} onCheckedChange={handleThemeChange} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SettingsMenu;
