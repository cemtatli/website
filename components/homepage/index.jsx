import React from "react";
import { Fragment } from "react";
import { ArrowRight, DirectSend } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8 py-4 px-2">
      {/* Avatar & Title */}
      <section className="flex items-start xs:items-center justify-center xs:justify-start gap-2 xs:gap-0 w-full flex-col xs:flex-row">
        <div className=" w-16 h-16 sm:w-24 sm:h-24 relative ">
          <Image src="/avatar.png" alt="cemtatli" fill />
        </div>
        <div className="xs:ml-4 ">
          <h2 className="text-lg font-medium text-white">Cem Tatlı </h2>
          <p className="text-text text-sm">Frontend Developer in Izmir, Turkey </p>
        </div>
      </section>
      {/* Skills */}
      <section className="flex flex-col items-start justify-center gap-2">
        <h2 className="text-sm font-medium text-white">Skills</h2>
        <p className="text-text text-sm">
          I have experience in the following technologies. I am always learning new technologies.
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            React
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            Next.js
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            Tailwind CSS
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            JavaScript
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            Module CSS
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            HTML5
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            CSS3
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            SCSS
          </span>
          <span className="text-xs text-white bg-gray-700 px-2 py-1 rounded-full hover:bg-skills hover:text-bg font-medium cursor-pointer">
            Git
          </span>
        </div>
      </section>
      {/* About  */}
      <section className="flex flex-col items-start justify-center gap-2">
        <Link href="/about" className="text-white text-sm hover:underline flex items-center group ">
          About
          <ArrowRight
            size={14}
            variant="bold"
            className="-rotate-45 ml-1 block sm:hidden group-hover:block text-white sm:text-[#d9e3f0]"
          />
        </Link>
        <p className="text-text text-sm">
          A frontend developer who is interested in technological developments and always strives to
          improve himself.
        </p>
      </section>
      {/* Contact */}
      <section className="flex flex-col items-start justify-center gap-2">
        <Link
          href="/contact"
          className="text-white text-sm hover:underline flex items-center group "
        >
          Contact
          <ArrowRight
            size={14}
            variant="bold"
            className="-rotate-45 ml-1 block sm:hidden group-hover:block text-white sm:text-link"
          />
        </Link>
        <p className="text-text text-sm">
          You can contact me for any questions or suggestions. I will be happy to help you.
        </p>
      </section>
      {/* Projects */}
      <section className="flex flex-col items-start justify-center gap-2">
        <Link
          href="https://github.com/cemtatli"
          className="text-white text-sm hover:underline flex items-center group "
        >
          Projects
          <ArrowRight
            size={14}
            variant="bold"
            className="-rotate-45 ml-1 block sm:hidden group-hover:block text-white sm:text-link"
          />
        </Link>
        <p className="text-text text-sm">You can see my projects.</p>
      </section>
    </div>
  );
}
