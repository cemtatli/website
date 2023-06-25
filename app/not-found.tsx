import Link from "next/link";
import React from "react";

const Error404 = () => {
  return (
    <section className="grid h-screen-64 place-content-center place-items-center">
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
      <div className="absolute rotate-12 rounded bg-background text-sm">Page Not Found</div>
      <Link href={"/"} className="mt-5 font-medium hover:underline">
        Go Home
      </Link>
    </section>
  );
};

export default Error404;
