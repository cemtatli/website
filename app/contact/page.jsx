import React from "react";
import Link from "next/link";
import { ArrowRight } from "iconsax-react";

export default function Contact() {
  return (
    <>
      <div className="flex gap-2 flex-col">
        <h3 className="text-base text-white">Contact</h3>
        <p className="text-sm leading-normal mb-2">
          You can contact me via the following channels.
        </p>
        <div className="flex gap-2 flex-col">
          <Link
            href="https://www.linkedin.com/in/cemtatli/"
            target="_blank"
            className="text-sm leading-normal hover:text-white hover:underline group flex items-center"
          >
            LinkedIn
            <ArrowRight color="#fff" size={14} variant="Outline" className="-rotate-45 ml-0.5" />
          </Link>
          <Link
            href="https://github.com/cemtatli"
            target="_blank"
            className="text-sm leading-normal hover:text-white hover:underline group flex items-center"
          >
            GitHub
            <ArrowRight color="#fff" size={14} variant="Outline" className="-rotate-45 ml-0.5" />
          </Link>
          <Link
            href="https://twitter.com/vaycem"
            target="_blank"
            className="text-sm leading-normal hover:text-white hover:underline group flex items-center"
          >
            Twitter
            <ArrowRight color="#fff" size={14} variant="Outline" className="-rotate-45 ml-0.5" />
          </Link>
          <Link
            href="https://bento.me/cem"
            target="_blank"
            className="text-sm leading-normal hover:text-white hover:underline group flex items-center"
          >
            Bento
            <ArrowRight color="#fff" size={14} variant="Outline" className="-rotate-45 ml-0.5" />
          </Link>
          <Link
            href="https://codepen.io/cemtatli"
            target="_blank"
            className="text-sm leading-normal hover:text-white hover:underline group flex items-center"
          >
            CodePen
            <ArrowRight color="#fff" size={14} variant="Outline" className="-rotate-45 ml-0.5" />
          </Link>

          <Link
            href=""
            target="_blank"
            className="text-sm leading-normal hover:text-white hover:underline group flex items-center"
          >
            Spotify
            <ArrowRight color="#fff" size={14} variant="Outline" className="-rotate-45 ml-0.5" />
          </Link>
          <Link
            href="mailto:cemtatli@protonmail.com"
            target="_blank"
            className="text-sm leading-normal hover:text-white hover:underline group flex items-center"
          >
            E-mail
            <ArrowRight color="#fff" size={14} variant="Outline" className="-rotate-45 ml-0.5" />
          </Link>
        </div>
      </div>
    </>
  );
}
