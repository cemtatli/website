'use client'

import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "./ui/skeleton";

const AvatarComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    },1000);


    return () => clearTimeout(timer);
  }, []);

  return (
    <Avatar>
      {isLoading ? (
        <Skeleton className="h-14 w-14 rounded-full bg-zinc-200" />
      ) : (
        <AvatarImage alt="cemtatli" src="https://github.com/cemtatli.png" />
      )}
    </Avatar>
  );
};

export default AvatarComponent;
