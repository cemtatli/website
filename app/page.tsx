'use client'

import Skills from "@/components/skills";
import { Separator } from "@/components/ui/separator";
import { Metadata } from 'next'
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Welcome to portfolio website'
}

export default function Home() {
  return (
    <motion.section initial={{ opacity: 0, translateY: 15 }} animate={{ opacity: 1, translateY: 0 }} className="mt-10 mb-5 flex-col flex gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-center text-4xl md:text-6xl md:text-left">
          Frontend Developer
        </h1>
        <Separator />
        <span>A frontend developer who is interested in technological developments and always strives to improve himself.</span>
      </div>
      <Skills />
    </motion.section >
  );
}
