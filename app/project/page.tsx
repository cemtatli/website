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
    title: "lugat",
    openSource: "true",
    desc: "The open-source dictionary project that includes the terms frontend developers need to know, along with their Turkish meanings and code examples.",
    tech: ["React", "Tailwind CSS", "Context API"],
    link: "https://lugat.website",
  },
  {
    title: "Coinim",
    openSource: "false",
    desc: "It offers real-time and historical market data for 100+ cryptocurrencies, allowing users to register, track their favorite coins, and manage their portfolio.",
    tech: ["React", "REST API", "Axios", "Tailwind CSS", "Firebase"],
    link: "https://coinim.vercel.app/",
  },
  {
    title: "Meridian",
    openSource: "true",
    desc: "A Twitter-like social media application with a user-friendly interface, where people can share their ideas, thoughts, and interests.",
    tech: ["React", "RTK", "Formik & Yup", "Firebase", "Tailwind CSS"],
    link: "https://coinim.vercel.app/",
  },
  {
    title: "Shopla",
    openSource: "false",
    desc: "This website teaches Redux Toolkit and Baklava Design in e-commerce.",
    tech: ["React", "RTK", "Trendyol Baklava Design"],
    link: "https://coinim.vercel.app/",
  },
  {
    title: "Secim Sayacı",
    openSource: "false",
    desc: "It is a countdown application prepared for the Presidential and Local Elections of Turkey.",
    tech: ["React", "TypeScript", "Headless UI", "Context API"],
    link: "https://coinim.vercel.app/",
  },
];

const Project = () => {
  return (
    <section className="mb-5 mt-10">
      <Table className="table-auto">
        <TableCaption>A list of your recent projects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] lg:w-[140px]">Project</TableHead>
            <TableHead className="hidden text-center xl:table-cell">Open Source</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="hidden md:table-cell">Technologies</TableHead>
            <TableHead className="text-right">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((p) => (
            <TableRow key={p.title} className="cursor-pointer">
              <TableCell className="font-medium">{p.title}</TableCell>
              <TableCell className="hidden xl:block">
                {p.openSource === "true" ? "🟢" : ""}
              </TableCell>
              <TableCell className="max-w-prose truncate font-medium lg:max-w-prose-lg xl:max-w-prose-xl">
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
              <TableCell className="text-right">
                <Link
                  target={"_blank"}
                  className="hover:underline dark:hover:text-[#b0f652]"
                  href={p.link}
                >
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
