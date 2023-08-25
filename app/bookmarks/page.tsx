"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import getRaindropBookmarks from "@/utils/getRaindropBookmarks";
import { formatCreationDate } from "@/utils";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Separator } from "@/components/ui/separator";
import Description from "@/components/description";

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
      <Description label="Bookmarks" desc="I share technologies, tools or articles that interest me." />
      <div className="columns-1 gap-4 sm:columns-2 sm:gap-6 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {loading
          ? Array.from({ length: 12 }, (_, index) => (
            <Skeleton
              key={index}
              className="mt-4 flex flex-col overflow-hidden rounded-lg border p-2 first:mt-0 last:mt-0 md:first:mt-4"
            >
              <Skeleton className="h-36 w-full" />
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
                  <LazyLoadImage
                    className="w-full cursor-pointer rounded-lg object-cover"
                    src={bookmark.cover}
                    alt={bookmark.title}
                    effect="blur"
                  />
                  <Badge className="absolute bottom-2 right-2 shrink-0 self-start rounded-full border bg-blue-200 text-blue-700 font-semibold hover:bg-blue-200">
                    {formatCreationDate(bookmark.creationDate)}
                  </Badge>
                </Link>
              ) : (
                <div className="h-36 w-full rounded" />
              )}
              <section className="flex flex-col items-start justify-center gap-2 p-2">
                <h2 className="self-start text-base font-semibold">{bookmark.title}</h2>
                <div className="flex items-center gap-2.5">
                  {bookmark?.tags.map((tag: string, key: string) => (
                    <Badge variant={"outline"} key={key}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Separator />
                <span className="hidden text-sm md:block">{bookmark?.description}</span>
              </section>
            </div>
          ))}
      </div>
    </motion.section>
  );
};

export default Bookmarks;
