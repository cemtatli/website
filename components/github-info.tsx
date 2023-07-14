import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import { Eye, Star, GitFork } from "lucide-react";

const GitHubInfo = () => {
  const [starCount, setStarCount] = useState(0);
  const [forkCount, setForkCount] = useState(0);
  const [watcherCount, setWatcherCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/cemtatli/cemtatli.dev");
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
    <div className="flex w-full flex-col justify-center gap-2 px-0 md:justify-start">
      <span className="mt-2 flex items-center justify-center gap-2.5 sm:gap-5 md:justify-start">
        <span className="flex items-center gap-1.5 text-sm">
          {` Starred  ${starCount}`} <Star className="hidden w-4 xxs:block" />{" "}
        </span>
        <span
          data-orientation="vertical"
          role="none"
          className="h-full w-[1px] shrink-0 bg-border"
        ></span>
        <span className="flex items-center gap-1.5 text-sm">
          {` Fork  ${forkCount}`} <GitFork className="hidden w-4 xxs:block" />{" "}
        </span>
        <span
          data-orientation="vertical"
          role="none"
          className="h-full w-[1px] shrink-0 bg-border"
        ></span>
        <span className="flex items-center gap-1.5 text-sm">
          {` Watchers  ${watcherCount}`} <Eye className="hidden w-4 xxs:block" />{" "}
        </span>
      </span>
    </div>
  );
};

export default GitHubInfo;
