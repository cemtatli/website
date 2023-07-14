"use client";

import React from "react";
import {
  Github,
  LinkedinIcon,
  Codepen,
  Mail,
  TwitterIcon,
  Mic,
  Headphones,
  BookOpen,
  Cloudy
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AvatarComponent from "@/components/avatar";
import { motion } from "framer-motion";
import { Link as LinkTypes } from "@/types";

const links: LinkTypes[] = [
  {
    title: "Mail",
    icon: <Mail width={20} />,
    href: "mailto:cemtatli@protonmail.com"
  },
  {
    title: "Twitter",
    icon: <TwitterIcon width={20} />,
    href: "https://www.twitter.com/vaycem"
  },
  {
    title: "GitHub",
    icon: <Github width={20} />,
    href: "https://www.github.com/cemtatli"
  },
  {
    title: "LinkedIn",
    icon: <LinkedinIcon width={20} />,
    href: "https://www.linkedin.com/in/cemtatli/"
  },
  {
    title: "Codepen",
    icon: <Codepen width={20} />,
    href: "https://codepen.io/cemtatli"
  },
  {
    title: "Medium",
    icon: <BookOpen width={20} />,
    href: "https://medium.com/@cemtatli"
  },
  {
    title: "Bluesky",
    icon: <Cloudy width={20} />,
    href: "https://staging.bsky.app/profile/tatli.bsky.social"
  },
  {
    title: "Discord",
    icon: <Mic width={20} />,
    href: "https://discord.com/users/vaycem"
  },
  {
    title: "Spotify",
    icon: <Headphones width={20} />,
    href: "https://open.spotify.com/user/di1kgdass5is7rhxmu7mqzelc"
  }
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="mb-5 mt-10"
    >
      <div className="flex gap-2.5">
        <AvatarComponent />
        <div className="flex flex-col space-y-1.5">
          <h4 className="text-base font-semibold leading-none"> Contact me</h4>
          <p className="text-sm">
            My social media addresses that I actively use, you can reach me here.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="col-span-2 grid text-sm">
        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          {links.map((link, index) => (
            <Link
              className={buttonVariants({ variant: "outline" })}
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
    </motion.section>
  );
};

export default Contact;
