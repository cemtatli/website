import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
}
const Blog = () => {
  return (
    <section className="flex h-screen-64 items-center justify-center">
      <Button disabled variant={"ghost"}>
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        Not finished yet. Coming soon.
      </Button>
    </section>
  );
};

export default Blog;
