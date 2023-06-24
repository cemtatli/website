import { Button } from "@/components/ui/button";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiSass,
  SiGit,
  SiCssmodules,
  SiBootstrap,
  SiRedux,
  SiFirebase,
  SiStyledcomponents,
  SiFigma,
} from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import React from "react";

const Skills: React.FC = () => {
  const techs = [
    { title: "HTML5", icon: SiHtml5 },
    { title: "CSS", icon: SiCss3 },
    { title: "SCSS", icon: SiSass },
    { title: "Bootstrap", icon: SiBootstrap },
    { title: "Tailwind CSS", icon: SiTailwindcss },
    { title: "JavaScript", icon: SiJavascript },
    { title: "React", icon: SiReact },
    { title: "Next.js", icon: SiNextdotjs },
    { title: "TypeScript", icon: SiTypescript },
    { title: "Module CSS", icon: SiCssmodules },
    { title: "Styled Components", icon: SiStyledcomponents },
    { title: "Firebase", icon: SiFirebase },
    { title: "Redux Toolkit", icon: SiRedux },
    { title: "Git", icon: SiGit },
    { title: "Figma", icon: SiFigma },
  ];

  return (
    <div className="mt-5 grid grid-cols-5 gap-3 md:flex ">
      {techs.map((tech, index) => (
        <Button key={index} variant="outline" size="icon">
          {tech.icon ? (
            <span className="flex items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {React.createElement(tech.icon, { className: "w-5 h-5 shrink-0" })}
                  </TooltipTrigger>
                  <TooltipContent>{tech.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          ) : (
            tech.title
          )}
        </Button>
      ))}
    </div>
  );
};

export default Skills;
