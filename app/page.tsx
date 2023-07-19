"use client";

import Skills from "@/components/skills";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: 15 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="mb-5 mt-10 flex flex-col gap-8"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-4xl font-semibold md:text-left md:text-6xl">
          Frontend Developer
        </h1>
        <Separator />
        <span>
          A frontend developer who is interested in technological developments and always strives to
          improve himself.
        </span>
      </div>
      <Skills />
    </motion.section>
  );
}
