import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
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
import { Loader2, Settings } from "lucide-react";

const DialogMenu = () => {
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
          <AlertDialogDescription className="flex items-center justify-start gap-x-2 pt-2">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Not finished yet. Coming soon.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogMenu;
