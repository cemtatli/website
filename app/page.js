import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowRight } from "iconsax-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex items-start xs:items-center justify-center xs:justify-start gap-2 xs:gap-0 w-full flex-col xs:flex-row">
        <div className="w-24 h-24 relative ">
          <Image src="/avatar.png" alt="cemtatli" fill />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-medium text-white">Cem Tatlı </h2>
          <p className="text-text text-sm">Frontend Developer in Izmir, Turkey </p>
        </div>
      </section>
      <section className="flex flex-col items-start justify-center gap-2 ">
        <Link href="/about" className="text-white text-sm hover:underline flex items-center group">
          About
          <ArrowRight
            color="#d9e3f0"
            size={14}
            variant="Outline"
            className="-rotate-45 ml-0.5 hidden group-hover:block"
          />
        </Link>
        <p className="text-text text-sm">
          A frontend developer who is interested in technological developments and always strives to
          improve himself.
        </p>
      </section>
    </div>
  );
}
