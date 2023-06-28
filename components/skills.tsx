import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";


const Skills = () => {
  const techs = [
    {
      title: "Development",
      technologies: [
        { title: "HTML5", icon: "https://img.icons8.com/color/48/html-5.png" },
        { title: "CSS", icon: "https://img.icons8.com/color/48/css3.png" },
        { title: "SCSS", icon: "https://img.icons8.com/color/48/sass.png" },
        { title: "JavaScript", icon: "https://img.icons8.com/color/48/javascript.png" },
        { title: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
        { title: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwindcss.png" },
        { title: "Next.js", icon: "https://img.icons8.com/color/48/nextjs.png" },
        { title: "TypeScript", icon: "https://img.icons8.com/color/48/typescript.png" },
      ],
    },
    {
      title: "Tools",
      technologies: [
        { title: "Git", icon: "https://img.icons8.com/color/48/git.png" },
        { title: "Figma", icon: "https://img.icons8.com/color/48/figma--v1.png" },
        { title: "Firebase", icon: "https://img.icons8.com/color/48/firebase.png" },
        { title: "Redux Toolkit", icon: "https://img.icons8.com/color/48/redux.png" },
        { title: "Styled Components", icon: "https://img.icons8.com/color/48/styled-components.png" },
        { title: "Bootstrap", icon: "https://img.icons8.com/color/48/bootstrap.png" },
      ],
    },
  ];

  return (
    <div className="mt-5 flex flex-col items-start gap-4">
      <h2 className="uppercase text-base font-semibold">Techs</h2>
      {techs.map((category, index) => (
        <div key={index}>
          <h3 className="uppercase font-medium text-start text-sm">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 gap-4 my-2 md:flex md:flex-wrap">
            {category.technologies.map((tech, techIndex) => (
              <Button variant="outline" key={techIndex} className="shrink-0">
                <Image src={tech.icon} aria-label={tech.title} alt={tech.title} width={20} height={20} className="mr-2.5" /> {tech.title}
              </Button>
            ))}
          </div>
        </div>

      ))}
    </div>
  );
};

export default Skills;
