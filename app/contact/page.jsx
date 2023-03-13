import React from "react";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";

export default function Contact() {
  return (
    <>
      <div className="flex gap-2 flex-col">
        <h3 className="text-base text-white">Contact</h3>
        <p className="text-sm leading-normal">You can contact me via the following channels.</p>
        <div className="flex gap-2 flex-col">
          <Link
            href="https://www.linkedin.com/in/cemtatli/"
            target="_blank"
            className="text-sm leading-normal text-blue-500 group flex items-center"
          >
            LinkedIn
            <ArrowRight color="#d9e3f0" size={14} className="-rotate-45 ml-1" />
          </Link>
          <Link
            href="https://github.com/cemtatli"
            target="_blank"
            className="text-sm leading-normal text-blue-500 group flex items-center"
          >
            GitHub
            <ArrowRight color="#d9e3f0" size={14} className="-rotate-45 ml-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
