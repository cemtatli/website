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
      <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {loading
          ? Array.from({ length: 16 }, (_, index) => (
              <Skeleton
                key={index}
                className="mt-4 flex flex-col overflow-hidden rounded-lg border p-2 first:mt-0 last:mt-0 md:first:mt-4"
              >
                <Skeleton className="h-48 w-full" />
                <Skeleton className="mt-4" />
                <Skeleton className="text-right" />
              </Skeleton>
            ))
          : bookmarks.map((bookmark, key) => (
              <div
                key={key}
                className="mt-4 flex flex-col overflow-hidden rounded-lg border p-2 first:mt-0"
              >
                {bookmark.cover ? (
                  <Link target="_blank" className="relative" href={bookmark.url}>
                    <motion.img
                      className="w-full cursor-pointer rounded-lg object-cover"
                      src={bookmark.cover}
                      alt={bookmark.title}
                    />
                    <Badge className="absolute bottom-2 right-2 shrink-0 self-start">
                      {formatCreationDate(bookmark.creationDate)}
                    </Badge>
                  </Link>
                ) : (
                  <div className="h-48 w-full rounded" />
                )}
                <section className="flex flex-col items-start justify-center gap-2 p-2">
                  <h2 className="self-start text-base font-semibold">{bookmark.title}</h2>
                  <div className="flex items-center gap-2.5">
                    {bookmark?.tags.map((tag: string, key: string) => (
                      <Badge variant={"secondary"} key={key}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="hidden text-sm md:block">{bookmark?.description}</span>
                </section>
              </div>
            ))}
      </div>
    </motion.section>
  );
};

export default Bookmarks;
