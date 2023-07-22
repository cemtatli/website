"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import AvatarComponent from "@/components/avatar";
import { motion } from "framer-motion";
import { sections } from "@/data";

const About = () => {
  const uniqueYears: string[] = [];
  sections.forEach(section => {
    if (!uniqueYears.includes(section.year)) {
      uniqueYears.push(section.year);
    }
  });

  return (
    <motion.section
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="mb-5 mt-10"
    >
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
          {uniqueYears.map(year => (
            <div key={year}>
              <div className="flex items-center">
                <h2 className="mb-1 text-base font-bold">{year}</h2>
              </div>
              {sections
                .filter(section => section.year === year)
                .map((section, index) => (
                  <div
                    key={index}
                    className={`relative flex pb-8 ${
                      index === sections.length - 1 ? "last:pb-0" : ""
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
                      <div className="flex flex-col gap-y-1.5">
                        <p className="word-break font-semibold">{section.title}</p>
                        <p className="word-break text-sm">{section.content}</p>
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
