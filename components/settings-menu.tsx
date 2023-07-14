import React, { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "./ui/alert-dialog";
import { Separator } from "./ui/separator";
import { CommandItem } from "./ui/command";
import { useTheme } from "next-themes";
import { Settings } from "lucide-react";
import { Switch } from "./ui/switch";
import GitHubInfo from "./github-info";

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
          <p>Settings</p>
        </CommandItem>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-11/12 rounded-md p-3 md:p-5">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base">Settings</AlertDialogTitle>
          <Separator className="my-2" />
          <div className="flex flex-col items-start justify-center gap-4 pt-2">
            <GitHubInfo />
            <Separator />
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm capitalize">{resolvedTheme} Mode</p>
              <Switch checked={resolvedTheme === "dark"} onCheckedChange={handleThemeChange} />
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogCancel>Close</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SettingsMenu;
