'use client'

import React from "react";
import { Separator } from "@/components/ui/separator";
import AvatarComponent from "@/components/avatar";
import { motion } from "framer-motion";


type Section = {
  title: string;
  emoji: string;
  year: string;
  content: string;
};

const sections: Section[] = [
  {
    title: "Career",
    emoji: "🎯",
    year: "",
    content:
      "As a Jr. Frontend Developer, my career goal is to level up, stay tech-savvy, and rock complex projects. I want to create user-friendly and jaw-dropping interfaces by keeping up with the latest web trends. I'm all about adapting to shiny new tech and staying in the loop.",
  },
  {
    title: "Joined the mentee system - Sıfırdanbire",
    emoji: "📍",
    year: "2023",
    content:
      "I am happy to have joined and been selected for a program created by experienced individuals in the frontend field. It is an organization that provides guidance services by giving personalized programs and roadmaps.",
  },
  {
    title: "My journey of self-development",
    emoji: "👨🏻‍💻",
    year: "2023",
    content:
      "I can say that 80% of my development process was on youtube. Since I am a person who learns by watching, I can say that I developed most of the time by watching the live broadcasts of Prototürk, Beta Yazılım Günlüğü, Adem İlter, Teknasyon and Frontendship. I also attended Patika.dev courses.",
  },
  {
    title: "Introduction to software",
    emoji: "🖥️",
    year: "2023",
    content:
      "Since about January, I have been focusing on interface development and creating mobile-first projects. I try to develop projects that prioritize responsive design using technologies such as React, Next.js, TypeScript, and Tailwind CSS. I can say that I love to use new technologies all the time.",
  },
  {
    title: "Graduated from university",
    emoji: "🧑🏻‍🎓",
    year: "2022",
    content:
      "I graduated from the Management Information Systems department. During my university years, I worked on projects in various programming languages such as Python, PHP (Joomla), Flutter, and Kotlin.",
  },
  {
    title: "Introduction to the Crypto World",
    emoji: "🪙",
    year: "2020",
    content:
      "I introduced myself to the world of cryptocurrencies. Initially, I was just tracking coins, but later on, I found myself actively trading and generating income. As I delved deeper into this world, I also discovered the realm of blockchain technology and completed my university thesis by developing a project based on blockchain.",
  },
  {
    title: "Hello World",
    emoji: "🍼",
    year: "1999",
    content: "On the 24th of June.",
  },
];


const About = () => {
  const uniqueYears: string[] = [];
  sections.forEach((section) => {
    if (!uniqueYears.includes(section.year)) {
      uniqueYears.push(section.year);
    }
  });

  return (
    <motion.section initial={{ opacity: 0, translateY: 15 }} animate={{ opacity: 1, translateY: 0 }} className="mb-5 mt-10">
      <div className="flex gap-2.5">
        <AvatarComponent />
        <div className="flex flex-col space-y-1.5">
          <h4 className="text-base font-semibold leading-none">Who am I?</h4>
          <p className="text-sm text-muted-foreground">
            Briefly frontend developer but if you want the long version
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center text-sm">
        <div className="flex flex-col items-start space-y-2">
          {uniqueYears.map((year) => (
            <div key={year}>
              <div className="flex items-center">
                <h2 className="mb-1 text-base font-bold">{year}</h2>
              </div>
              {sections
                .filter((section) => section.year === year)
                .map((section, index) => (
                  <div
                    key={index}
                    className={`relative flex pb-8 ${index === sections.length - 1 ? "last:pb-0" : ""
                      }`}
                  >
                    <div className="absolute inset-x-0 inset-y-2.5 mt-10 flex w-10 items-center justify-center">
                      <Separator orientation="vertical" className="w-[2px]" />
                    </div>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-50 align-middle">
                      <span role="img" aria-label={section.title}>
                        {section.emoji}
                      </span>
                    </div>
                    <div className="flex-grow pl-4">
                      <div className="flex flex-col gap-y-1">
                        <p className="word-break m-0 font-semibold">{section.title}</p>
                        <p className="word-break m-0 text-sm">{section.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
