"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error404 = () => {
  return (
    <section className="grid h-screen-fit items-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
      </div>
    </section>
  );
};

export default Error404;
