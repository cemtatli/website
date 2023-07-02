import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


const Skills = () => {
  const techs = [
    {
      title: "Development",
      technologies: [
        { title: "HTML5", icon: "https://img.icons8.com/color/128/html-5.png" },
        { title: "CSS", icon: "https://img.icons8.com/color/128/css3.png" },
        { title: "SCSS", icon: "https://img.icons8.com/color/128/sass.png" },
        { title: "JavaScript", icon: "https://img.icons8.com/color/128/javascript.png" },
        { title: "React", icon: "https://img.icons8.com/color/128/react-native.png" },
        { title: "Tailwind CSS", icon: "https://img.icons8.com/color/128/tailwindcss.png" },
        { title: "Next.js", icon: "https://img.icons8.com/color/128/nextjs.png" },
        { title: "TypeScript", icon: "https://img.icons8.com/color/128/typescript.png" },
      ],
    },
    {
      title: "Tools",
      technologies: [
        { title: "Git", icon: "https://img.icons8.com/color/128/git.png" },
        { title: "Figma", icon: "https://img.icons8.com/color/128/figma--v1.png" },
        { title: "Firebase", icon: "https://img.icons8.com/color/128/firebase.png" },
        { title: "Redux Toolkit", icon: "https://img.icons8.com/color/128/redux.png" },
        { title: "Styled Components", icon: "https://img.icons8.com/color/128/styled-components.png" },
        { title: "Bootstrap", icon: "https://img.icons8.com/color/128/bootstrap.png" },
        { title: "Vite", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png" },
      ],
    },
  ];

  return (
    <div className="mt-5 flex flex-col items-start gap-4">
      {techs.map((category, index) => (
        <div key={index}>
          <span className="uppercase font-medium text-start text-sm">
            {category.title}
          </span>
          <div className="grid grid-cols-5 gap-4 my-2 md:flex md:flex-wrap">
            {category.technologies.map((tech, techIndex) => (
              <HoverCard key={techIndex}>
                <HoverCardTrigger>
                  <Button aria-label={tech.title} variant="outline">
                    <Image src={tech.icon} aria-label={tech.title} alt={tech.title} className="shrink-0" width={24} height={24} />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="!w-fit py-1.5 px-3 text-sm">
                  {tech.title}
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      ))
      }
    </div >
  );
};

export default Skills;
