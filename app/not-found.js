import React from "react";
import { Back } from "iconsax-react";
import Link from "next/link";

export default function notFound404() {
  return (
    <div>
      <h3 className="text-5xl font-bold">404</h3>
      <p>Page not found</p>
      <Link href={"/"}>
        <Back size="32" color="#d9e3f0" variant="Broken" />
        Back to home page
      </Link>
    </div>
  );
}
