"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { DISPLAY_TEXT, getRandomIndex } from "@/components/ui/helpers";
import { Github, RefreshCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(getRandomIndex);
  }, []);

  const refreshIndex = () => {
    setCurrentIndex(getRandomIndex);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <Card className="m-auto w-[50%] text-center shadow-2xl">
        <CardContent className="mt-5 text-lg font-bold">
          <Image
            className="mx-auto justify-center mb-3"
            src="/cat.png"
            alt="cat image"
            width={100}
            height={100}
          />
          <div className="inline-flex">
            <span className="mx-auto w-[50%] animate-pulse whitespace-pre-line bg-gradient-to-r from-fuchsia-600 to-indigo-700 bg-clip-text text-transparent text-3xl">
              {DISPLAY_TEXT[currentIndex]}
            </span>
            <RefreshCcw
              className="h-6 w- text-fuchsia-600 ml-2 my-auto cursor-pointer rounded-md duration-300 ease-in-out hover:rotate-12 hover:scale-105 hover:text-slate-500 dark:text-neutral-300 dark:hover:text-neutral-100"
              onClick={refreshIndex}
            />
          </div>
        </CardContent>
        <CardFooter className="space-x-2 justify-center items-center border bg-rose-300 text-white rounded-lg">
          <div className="m-auto inline-flex pt-4">
            <Github className="rounded-lg border p-1 bg-white text-black border-slate-300" />
            <Link
              className="text-xs font-mono font-bold my-auto ml-2 underline outline-none"
              href="https://github.com/jermsinarocket/containers-assignment"
              target="_blank"
            >
              https://github.com/jermsinarocket/workshop01
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;
