import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Bookmarks = () => {
  return (
    <section className="flex h-screen-64 items-center justify-center">
      <Button disabled variant={"ghost"}>
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        Not finished yet. Coming soon.
      </Button>
    </section>
  );
};

export default Bookmarks;
