"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404"
};

const Error404 = () => {
  return (
    <section className="grid h-screen-fit place-content-center place-items-center">
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
      <div className="absolute rotate-12 rounded bg-background text-sm">Page Not Found</div>
      <Link href={"/"} className="mt-5 font-medium hover:underline">
        <Button size={"sm"} variant={"outline"}>
          Go Home
        </Button>
      </Link>
    </section>
  );
};

export default Error404;
