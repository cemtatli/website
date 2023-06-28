import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Separator } from './ui/separator'
import { Eye, Star, GitFork } from "lucide-react";

const GitHubInfo = () => {
  const [starCount, setStarCount] = useState(0);
  const [forkCount, setForkCount] = useState(0);
  const [watcherCount, setWatcherCount] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/cemtatli/cemtatli.dev');
        const data = await response.json();
        setStarCount(data.stargazers_count);
        setForkCount(data.forks_count);
        setWatcherCount(data.watchers_count);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col justify-center w-full md:justify-start gap-2">
      <Link href={'https://github.com/cemtatli/cemtatli.dev'} className="font-semibold hover:underline">Contribute to the project</Link>
      <div className="flex items-center justify-center md:justify-start gap-5 mt-2">
        <span className="text-sm flex items-center gap-1.5">{` Starred  ${starCount}`} <Star className='w-4' /> </span>
        <Separator orientation="vertical" />
        <span className="text-sm flex items-center gap-1.5">{` Fork  ${forkCount}`} <GitFork className='w-4' /> </span>
        <Separator orientation="vertical" />
        <span className="text-sm flex items-center gap-1.5">{` Watchers  ${watcherCount}`} <Eye className='w-4' /> </span>
      </div>
    </section>
  )
}

export default GitHubInfo