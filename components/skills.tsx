'use client'

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
  ];

  return (
    <div className="mt-5 flex flex-col items-start gap-2.5">
      <h3 className="font-semibold text-start">Techs & Tools</h3>
      <div className="flex items-center justify-start gap-2.5 flex-wrap">
        {techs.map((tech, index) => (
          <Button key={index} className="rounded-lg" variant={'secondary'} size={'icon'}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {React.createElement(tech.icon, { className: "w-5 h-5 shrink-0" })}
                </TooltipTrigger>
                <TooltipContent>{tech.title}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Button>
        ))}
      </div>
    </div >
  );
};

export default Skills;
