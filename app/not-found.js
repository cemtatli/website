import React from "react";
import { Back } from "iconsax-react";
import Link from "next/link";

export default function notFound404() {
  return (
    <div className="w-full h-full flex-col gap-2 flex items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <h3 className="text-6xl font-bold">404 </h3> |<p>Page not found</p>
      </div>
      <Link href={"/"} className="flex items-center text-white gap-2">
        Back to home page
        <Back size="16" color="#d9e3f0" variant="Broken" />
      </Link>
    </div>
  );
}
