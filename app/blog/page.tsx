import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <section className="flex h-screen-fit items-center justify-center">
      <Button disabled variant={"ghost"}>
        <Loader className="mr-2 h-5 w-5 animate-spin" />
        Not finished yet. Coming soon.
      </Button>
    </section>
  );
};

export default Blog;
