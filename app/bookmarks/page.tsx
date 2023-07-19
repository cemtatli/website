/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import getRaindropBookmarks from "@/utils/getRaindropBookmarks";
import { formatCreationDate } from "@/utils";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = process.env.RAINDROP_API_KEY || "";
    getRaindropBookmarks(API_KEY)
      .then(data => {
        const sortedBookmarks = data.sort((a, b) => {
          const dateA = new Date(a.creationDate).getTime();
          const dateB = new Date(b.creationDate).getTime();
          return dateB - dateA;
        });
        setBookmarks(sortedBookmarks);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error retrieving bookmarks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="mb-5 mt-10"
    >
      <div className="grid grid-flow-dense grid-cols-1 grid-rows-[masonry] gap-8 leading-4 sm:grid-cols-2 xl:grid-cols-4">
        {loading
          ? Array.from({ length: 15 }, (_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg odd:sm:col-span-2 first:xl:col-start-2"
              >
                <Skeleton className="h-48 w-full" />
                <Skeleton className="mt-4" />
                <Skeleton className="text-right" />
              </div>
            ))
          : bookmarks.map((bookmark, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border dark:border-none odd:sm:col-span-2 first:xl:col-start-2"
              >
                {bookmark.cover ? (
                  <Link target="_blank" href={bookmark.url}>
                    <img
                      className="h-48 w-full cursor-pointer rounded-lg object-cover"
                      src={bookmark.cover}
                      alt={bookmark.title}
                    />
                  </Link>
                ) : (
                  <div className="h-48 w-full rounded" />
                )}
                <div className="flex flex-col items-start justify-center gap-4 p-2">
                  <div className="mt-2 inline-flex w-full flex-col items-center justify-between gap-2.5 md:flex-row">
                    <h2 className="self-start text-base font-semibold">{bookmark.title}</h2>
                    <Badge variant={"outline"} className="shrink-0 self-start">
                      {formatCreationDate(bookmark.creationDate)}
                    </Badge>
                  </div>
                  <span className="text-sm">{bookmark?.description}</span>
                </div>
              </div>
            ))}
      </div>
    </motion.section>
  );
};

export default Bookmarks;
