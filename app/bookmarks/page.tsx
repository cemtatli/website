
'use client';

import { useEffect, useState } from 'react';
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import getRaindropBookmarks from '@/utils/getRaindropBookmarks';
import { formatCreationDate } from '@/utils/date';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookmarks',
}

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = process.env.RAINDROP_API_KEY || '';
    getRaindropBookmarks(API_KEY)
      .then((data) => {
        console.log(data);
        const sortedBookmarks = data.sort((a, b) => {
          const dateA = new Date(a.creationDate).getTime();
          const dateB = new Date(b.creationDate).getTime();
          return dateB - dateA;
        });
        setBookmarks(sortedBookmarks);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error retrieving bookmarks:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="mb-5 mt-10">
      <Table className="table-auto">
        <TableCaption>A list of your recent bookmarks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className='hidden md:table-cell'>Description</TableHead>
            <TableHead className='text-right'>Creation Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            Array.from({ length: 12 }, (_, index) => (
              <TableRow key={index}>
                <TableCell className='w-full md:w-[20%]'>
                  <Skeleton className='h-8' />
                </TableCell>
                <TableCell className='hidden md:table-cell w-[80%]'>
                  <Skeleton className='h-8' />
                </TableCell>
                <TableCell>
                  <Skeleton className='h-8 w-20  ml-auto' />
                </TableCell>
              </TableRow>
            ))
          ) : (
            bookmarks.map((bookmark, index) => (
              <TableRow key={index}>
                <TableCell className='max-w-prose truncate'>
                  <Link target={"_blank"} className="hover:underline" href={bookmark.url}>
                    {bookmark.title}
                  </Link>
                </TableCell>
                <TableCell className="hidden pb-0 cursor-pointer max-w-prose-lg truncate md:block lg:max-w-prose-xl">
                  <HoverCard>
                    <HoverCardTrigger>{bookmark.description}</HoverCardTrigger>
                    <HoverCardContent className="hidden w-full md:block">{bookmark.description}</HoverCardContent>
                  </HoverCard>
                </TableCell>
                <TableCell className='text-right'>{formatCreationDate(bookmark.creationDate)}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default Bookmarks;
