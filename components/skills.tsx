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
      ],
    },
  ];

  return (
    <div className="mt-5 flex flex-col items-start gap-4">
      {techs.map((category, index) => (
        <div key={index}>
          <h3 className="uppercase font-medium text-start text-sm">
            {category.title}
          </h3>
          <div className="grid grid-cols-5 gap-4 my-2 md:flex md:flex-wrap">
            {category.technologies.map((tech, techIndex) => (
              <HoverCard key={techIndex}>
                <HoverCardTrigger>
                  <Button variant="outline" size={'default'}>
                    <Image src={tech.icon} aria-label={tech.title} alt={tech.title} width={24} height={24} />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="!w-fit py-1.5 text-sm">
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
