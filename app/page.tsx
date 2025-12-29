"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { socialLinks, profile } from "@/data";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

export default function Home() {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto min-h-screen max-w-xl px-6 py-20"
    >
      {/* Profile Section */}
      <motion.section variants={item} className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={profile.avatar} alt={profile.name} />
          <AvatarFallback>
            {profile.name
              .split(" ")
              .map(n => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-base font-medium tracking-tight">{profile.name}</h1>
          <p className="text-sm text-muted-foreground">{profile.title}</p>
        </div>
      </motion.section>

      {/* Description */}
      <motion.section variants={item} className="mt-8">
        <p className="text-lg leading-relaxed tracking-tight text-foreground/90">
          <em className="font-serif italic">Crafting interfaces.</em> Building polished software and
          web experiences. Experimenting with magical details in user interfaces. Frontend Developer
          at{" "}
          <span className="relative inline-block">
            <Link
              href="https://e12.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              E12
            </Link>
          </span>
          .
        </p>
      </motion.section>

      {/* Social Links */}
      <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm transition-all duration-200 hover:scale-105 hover:bg-muted"
            >
              {link.name}
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.footer variants={item} className="mt-24">
        <Separator className="mb-6" />
        <div className="flex items-center justify-between">
          <Link
            href="mailto:hello@cemtatli.dev"
            className="text-sm underline underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            Say Hi!
          </Link>
          <ThemeToggle />
        </div>
      </motion.footer>
    </motion.main>
  );
}
