import React from "react";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <section className="mb-5 mt-10">
      <div className="space-y-1.5">
        <h4 className="text-base font-semibold leading-none">💠 Who am I?</h4>
        <p className="text-sm text-muted-foreground">
          Briefly frontend developer but if you want the long version
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center text-sm">
        <div className="flex flex-col items-start space-y-2">
          {/*  */}
          <div className="relative flex pb-8 last:pb-0">
            <div className="absolute inset-x-0 inset-y-2.5 mt-10 flex w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-px border-l-2 border-dotted"></div>
            </div>
            <div className="z-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 align-middle">
              <span role="img" aria-label="Career">
                🎯
              </span>
            </div>
            <div className="flex-grow pl-4">
              <div className="flex flex-col gap-y-1">
                <p className="word-break m-0 font-semibold">Career</p>
                <p className="word-break m-0 text-sm ">
                  As a Jr. Frontend Developer, my career goal is to level up, stay tech-savvy, and
                  rock complex projects. I want to create user-friendly and jaw-dropping interfaces
                  by keeping up with the latest web trends. I&#39;m all about adapting to shiny new
                  tech and staying in the loop.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center">
            <h2 className="text-lg font-bold">2023</h2>
          </div>
          <div className="relative flex pb-8 last:pb-0">
            <div className="absolute inset-x-0 inset-y-2.5 mt-10 flex w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-px border-l-2 border-dotted"></div>
            </div>
            <div className="z-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 align-middle">
              <span role="img" aria-label="My journey of self-development">
                👨🏻‍💻
              </span>
            </div>
            <div className="flex-grow pl-4">
              <div className="flex flex-col gap-y-1">
                <p className="word-break m-0 font-semibold">My journey of self-development</p>
                <p className="word-break m-0 text-sm ">
                  I can say that 80 per cent of my development process was on youtube. Since I am a
                  person who learns by watching, I can say that I developed most of the time by
                  watching the live broadcasts of Prototürk, Beta Software Diary, Adem İlter,
                  Teknasyon and Frontendship. I also attended patika.dev courses.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex pb-8 last:pb-0">
            <div className="absolute inset-x-0 inset-y-2.5 mt-10 flex w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-px border-l-2 border-dotted"></div>
            </div>
            <div className="z-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 align-middle">
              <span role="img" aria-label="Introduction to software">
                🖥️
              </span>
            </div>
            <div className="flex-grow pl-4">
              <div className="flex flex-col gap-y-1">
                <p className="word-break m-0 font-semibold">Introduction to software</p>
                <p className="word-break m-0 text-sm ">
                  Since about January, I have been focusing on interface development and creating
                  mobile-first projects. I try to develop projects that priorities responsive design
                  using technologies such as <b>React</b>, <b>Next.js</b>, <b>TypeScript</b> and
                  <b> Tailwind CSS</b>. I can say that I love to use new technologies all the time.
                </p>
              </div>
            </div>
          </div>
          {/* University  */}
          <div className="flex items-center">
            <h2 className="text-lg font-bold">2022</h2>
          </div>
          <div className="relative flex pb-8 last:pb-0">
            <div className="absolute inset-x-0 inset-y-2.5 mt-10 flex w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-px border-l-2 border-dotted"></div>
            </div>
            <div className="z-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 align-middle">
              <span role="img" aria-label="Graduated from university">
                🎒
              </span>
            </div>
            <div className="flex-grow pl-4">
              <div className="flex flex-col gap-y-1">
                <p className="word-break m-0 font-semibold">Graduated from university</p>
                <p className="word-break m-0 text-sm ">
                  I graduated from the Management Information Systems department. During my
                  university years, I worked on projects in various programming languages such as{" "}
                  <b>Python,</b> <b>PHP (Joomla),</b> <b> Flutter,</b> and <b>Kotlin.</b>
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center">
            <h2 className="text-lg font-bold">2020</h2>
          </div>
          <div className="relative flex pb-8 last:pb-0">
            <div className="absolute inset-x-0 inset-y-2.5 mt-10 flex w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-px border-l-2 border-dotted"></div>
            </div>
            <div className="z-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 align-middle">
              <span role="img" aria-label="Introduction to the Crypto World">
                🪙
              </span>
            </div>
            <div className="flex-grow pl-4">
              <div className="flex flex-col gap-y-1">
                <p className="word-break m-0 font-semibold">Introduction to the Crypto World</p>
                <p className="word-break m-0 text-sm ">
                  I introduced myself to the world of cryptocurrencies. Initially, I was just
                  tracking coins, but later on, I found myself actively trading and generating
                  income. As I delved deeper into this world, I also discovered the realm of
                  blockchain technology and completed my university thesis by developing a project
                  based on blockchain.
                </p>
              </div>
            </div>
          </div>
          {/* Born */}
          <div className="flex items-center">
            <h2 className="text-lg font-bold">1999</h2>
          </div>
          <div className="relative flex pb-8 last:pb-0">
            <div className="absolute inset-x-0 inset-y-2.5 mt-10 flex w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-px border-l-2 border-dotted"></div>
            </div>
            <div className="z-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 align-middle">
              <span role="img" aria-label="Born">
                🍼
              </span>
            </div>
            <div className="flex-grow pl-4">
              <div className="flex flex-col gap-y-1">
                <p className="word-break m-0 font-semibold">Born</p>
                <p className="word-break m-0 text-sm ">On the 24th of June.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
