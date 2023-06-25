import React, { useEffect, useState } from "react";
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
import { Settings, Eye, Star, GitFork   } from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import Link from "next/link";

const SettingsMenu = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [starCount, setStarCount] = useState(0);
  const [forkCount, setForkCount] = useState(0);
  const [watcherCount, setWatcherCount] = useState(0);

  const handleThemeChange = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/cemtatli/cemtatli.dev');
        const data = await response.json();
        setStarCount(data.stargazers_count);
        setForkCount(data.forks_count);
        setWatcherCount(data.watchers_count);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full">
        <CommandItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </CommandItem>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-11/12 rounded-md p-4">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base">Settings</AlertDialogTitle>
          <Separator className="my-2" />
          <AlertDialogDescription className="flex flex-col items-start justify-center gap-4 pt-2 ">
            <span className="flex flex-col justify-start gap-2">
              <Link href={'https://github.com/cemtatli/cemtatli.dev'} className="font-semibold hover:underline">Contribute to the project</Link>
              <span className="flex items-center gap-5 mt-2">
                <span className="text-sm flex items-center gap-1.5">{` Starred  ${starCount}`} <Star className='w-4' /> </span>
                <Separator orientation="vertical" />
                <span className="text-sm flex items-center gap-1.5">{` Fork  ${forkCount}`} <GitFork className='w-4' /> </span>
                <Separator orientation="vertical" />
                <span className="text-sm flex items-center gap-1.5">{` Watchers  ${watcherCount}`} <Eye className='w-4'/> </span>
            </span>
            </span>
            <Separator />
            <div className="flex items-center justify-center gap-2">
              <Label className="capitalize">{resolvedTheme} Mode </Label>
              <Switch checked={resolvedTheme === "dark"} onCheckedChange={handleThemeChange} />
            </div>
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
