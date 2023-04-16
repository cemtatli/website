import React from "react";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="flex items-center flex-col gap-10">
        <div className="flex gap-2 flex-col w-full">
          <h3 className="text-base font-medium text-white">About</h3>
          <p className="text-sm leading-normal">
            I graduated from the Management Information Systems department at Izmir Democracy
            University in 2022. During my university years, I worked on projects in various
            programming languages such as Python, PHP (Joomla), Flutter, and Kotlin. Currently, I am
            focused on interface development, creating mobile-first projects that prioritize
            responsive design using technologies such as JavaScript, React, Next.js, and Tailwind
            CSS. I have a strong interest in keeping up with technological advancements and
            constantly improving myself. Based on my previous projects, I am confident in my ability
            to work well in a team, learn quickly, and develop effective strategies.
          </p>
        </div>
        <div className="flex gap-2 flex-col w-full">
          <h3 className="text-sm font-medium text-white">Education</h3>
          <p className="text-sm leading-normal">
            {" "}
            <span className="font-semibold italic"> Management Information Systems,</span> Izmir
            Demokrasi University <br />
            <span className="text-sm">2018 – 2022</span>
          </p>
        </div>
        <div className="flex gap-2 flex-col w-full">
          <h3 className="text-sm font-medium text-white">Certificates</h3>
          <Link
            href={
              "https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjA5MzE0Y2lkNTcxcWlkMTExZW5k"
            }
            target="_blank"
            className="text-sm leading-normal group flex items-center hover:underline cursor-pointer hover:text-white transition-colors"
          >
            Turkcell Web Development
            <ArrowRight
              color="#d9e3f0"
              size={14}
              variant="Outline"
              className="-rotate-45 ml-0.5 hidden group-hover:block"
            />
          </Link>
          <Link
            className="text-sm leading-normal group flex items-center hover:underline cursor-pointer hover:text-white transition-colors"
            href={
              "https://gelecegiyazanlar.turkcell.com.tr/certificate/dWlkMjA5MzE0Y2lkNDcxOTZxaWQxNTRlbmQ"
            }
            target="_blank"
          >
            Turkcell React
            <ArrowRight
              color="#d9e3f0"
              size={14}
              variant="Outline"
              className="-rotate-45 ml-0.5 hidden group-hover:block"
            />
          </Link>
          <Link
            className="text-sm leading-normal group flex items-center hover:underline cursor-pointer hover:text-white transition-colors"
            href={"https://app.patika.dev/certificates/036259d1"}
            target="_blank"
          >
            {" "}
            Frontend Web Development Patikası{" "}
            <ArrowRight
              color="#d9e3f0"
              size={14}
              variant="Outline"
              className="-rotate-45 ml-0.5 hidden group-hover:block"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
