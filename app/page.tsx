import Skills from "@/components/skills";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";




export const metadata = {
  title: "cemtatli.dev",
};

export default function Home() {
  return (
    <section className="mt-10 mb-5 flex-col flex gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-center text-4xl md:text-6xl md:text-left">
          Frontend Developer
        </h1>
        <Separator />
        <p>A frontend developer who is interested in technological developments and always strives to improve himself.</p>
        <Link className={`${buttonVariants({ variant: "outline", })}`} href={'/cv'}>CV Page</Link>
      </div>
      <Skills />
    </section >
  );
}
