import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "Lugat",
    openSource: "true",
    desc: "The open-source dictionary project that includes the terms frontend developers need to know, along with their Turkish meanings and code examples.",
    tech: ["React", "Tailwind CSS", "Context API", "React-Highlighter"],
    link: "https://lugat.website",
  },
  {
    title: "Coinim",
    openSource: "false",
    desc: "It offers real-time and historical market data for 100+ cryptocurrencies, allowing users to register, track their favorite coins, and manage their portfolio.",
    tech: ["React", "REST API", "Axios", "Tailwind CSS", "Firebase", "i18n", "Context API"],
    link: "https://coinim.vercel.app/",
  },
  {
    title: "Meridian",
    openSource: "true",
    desc: "A Twitter-like social media application with a user-friendly interface, where people can share their ideas, thoughts, and interests.",
    tech: ["React", "RTK", "Formik & Yup", "Firebase", "Tailwind CSS"],
    link: "https://meridian-social.vercel.app/",
  },
  {
    title: "Portfolio",
    openSource: "true",
    desc: "Cumulative work experience, projects, blog posts, and bookmarks that I have shared constitute my personal website.",
    tech: ["Next.js", "TypeScript", "shadcn/ui"],
    link: "https://cemtatli.dev",
  },
  {
    title: "Shopla",
    openSource: "false",
    desc: "Developed an e-commerce website using Trendyol Baklava design, REST API, Tailwind, React, and Redux Toolkit.",
    tech: ["React", "RTK", "Trendyol Baklava Design"],
    link: "https://shopla.vercel.app/",
  },
  {
    title: "Secim Sayacı",
    openSource: "true",
    desc: "It is a countdown application prepared for the Presidential and Local Elections of Turkey.",
    tech: ["React", "TypeScript", "Headless UI", "Context API"],
    link: "https://secimsayaci.vercel.app/",
  },
  {
    title: "Frontendvideos",
    openSource: "true",
    desc: "Provides Junior Frontend developers with useful and instructive YouTube videos that can help them break into the industry.",
    tech: ["React", "Headless UI", "Tailwind CSS"],
    link: "https://frontendvideos.vercel.app/",
  },
  {
    title: "Pomodoro",
    openSource: "true",
    desc: "The Pomodoro method is an effective productivity technique. By working for 25 minutes and taking a 5-minute break, you can enhance your efficiency.",
    tech: ["React", "Tailwind CSS"],
    link: "https://reactjs-pomodoro.vercel.app/",
  },
  {
    title: "Nextwind Blog",
    openSource: "false",
    desc: "Nextwind is a website built using Next.js and Tailwind CSS. It retrieves blog content from DummyJSON.",
    tech: ["Next.js", "Tailwind CSS", "REST API"],
    link: "https://nextwind-blog.vercel.app/",
  },
  {
    title: "Getir",
    openSource: "false",
    desc: "I used only HTML, TailwindCSS and JavaScript technologies in this clone project.",
    tech: ["HTML5", "JavaScript", "CSS"],
    link: "https://getir-app.vercel.app/",
  },
  {
    title: "Youtube Music",
    openSource: "false",
    desc: "I used only HTML, TailwindCSS and JavaScript technologies in this clone project.",
    tech: ["HTML5", "JavaScript", "CSS"],
    link: "https://youtubemusic-clone.netlify.app/",
  },
];

export const metadata = {
  title: "Project",
};

const Project = () => {
  return (
    <section className="mb-5 mt-10">
      <Table className="table-auto">
        <TableCaption>A list of your recent projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Project</TableHead>
            <TableHead className="text-center">Open Source</TableHead>
            <TableHead className="hidden xs:table-cell">Description</TableHead>
            <TableHead className="px-2 text-right">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((p) => (
            <TableRow key={p.title}>
              <TableCell className="font-medium">{p.title}</TableCell>
              <TableCell className="text-center ">{p.openSource === "true" ? "🟢" : ""}</TableCell>
              <TableCell className="hidden max-w-prose pb-0 cursor-pointer truncate font-medium xs:block md:max-w-prose-xl">
                <HoverCard>
                  <HoverCardTrigger>{p.desc}</HoverCardTrigger>
                  <HoverCardContent className="hidden w-full lg:block">{p.desc}</HoverCardContent>
                </HoverCard>
              </TableCell>
              <TableCell className="hidden flex-1 gap-1 md:flex">
                {p.tech.map((tech) => (
                  <Badge className="mr-1 shrink-0 last:mr-0" variant={"outline"} key={tech}>
                    {tech}
                  </Badge>
                ))}
              </TableCell>
              <TableCell className="px-2 text-right">
                <Link target={"_blank"} className="hover:underline " href={p.link}>
                  Live
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Project;
