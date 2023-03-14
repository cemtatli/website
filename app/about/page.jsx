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
            I graduated from Izmir Democracy University Management Information Systems department in
            2022. During my university life, I took part in projects in multiple languages (Python,
            MySQL, PHP (Joomla), Flutter, Kotlin). My university graduation project was Web3 virtual
            wallet integrated NFT marketplace interface. <br /> <br /> I develop projects with a
            mobile-first approach based on technologies such as JavaScript, React, NextJS, Tailwind
            CSS, SASS, which focus on responsive design. I am someone who is interested in
            technological developments and always strives to improve myself. The frontend
            development world is changing rapidly and I am constantly trying to improve myself to be
            aware of these changes.
            <br /> <br /> I constantly strive to learn new technologies, follow best practices and
            the latest trends. I also feel confident in teamwork, fast learning and strategy
            development based on my previous projects.
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
            href={"https://verified.sertifier.com/tr/verify/14416973231229?ref"}
            target="_blank"
          >
            Dijital Okuryazarlık
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
