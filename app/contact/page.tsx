import { Separator } from "@/components/ui/separator";
import React from "react";
import { Github, LinkedinIcon, Codepen, TwitterIcon, BookOpen } from "lucide-react";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

const Contact = () => {
  interface Link {
    title: string;
    icon: React.ReactNode;
    href: string;
  }

  const links: Link[] = [
    {
      title: "Twitter",
      icon: <TwitterIcon width={20} />,
      href: "https://www.twitter.com/vaycem",
    },
    {
      title: "GitHub",
      icon: <Github width={20} />,
      href: "https://www.github.com/cemtatli",
    },
    {
      title: "LinkedIn",
      icon: <LinkedinIcon width={20} />,
      href: "https://www.linkedin.com/in/cemtatli/",
    },
    {
      title: "Codepen",
      icon: <Codepen width={20} />,
      href: "https://codepen.io/cemtatli",
    },
    {
      title: "Medium",
      icon: <BookOpen width={20} />,
      href: "https://medium.com/@cemtatli",
    },
  ];

  return (
    <section className="mb-5 mt-10">
      <div className="space-y-1.5">
        <h4 className="text-base font-semibold leading-none"> Contact me?</h4>
        <p className="text-sm text-muted-foreground">
          My social media addresses that I actively use, you can reach me here.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center text-sm">
        <div className="flex flex-col gap-4 md:flex-row">
          {links.map((link, index) => (
            <Link
              className={badgeVariants({ variant: "outline" })}
              target="_blank"
              key={index}
              href={link.href}
            >
              <span role="img" aria-label={link.title} className="mr-2">
                {link.icon}
              </span>
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
