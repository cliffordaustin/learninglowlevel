"use client";

import { trpc } from "@/app/_trpc/client";
import Link from "next/link";
import React from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

function PostNavigate({
  prevId,
  nextId,
}: {
  prevId: string | null | undefined;
  nextId: string | null | undefined;
}) {
  const nextPost = nextId ? trpc.getPostById.useQuery(nextId) : null;
  const prevPost = prevId ? trpc.getPostById.useQuery(prevId) : null;

  return (
    <div className="mt-8 text-white sm:text-blue-500 flex flex-wrap items-center justify-between">
      {prevId ? (
        <Link href={`/posts/${prevId}`}>
          <div className="flex items-center cursor-pointer bg-gray-400 dark:bg-[#242423] sm:bg-transparent p-4 sm:p-0 gap-2">
            <MdOutlineArrowBackIosNew size={16} />
            <span className="hidden sm:block">{prevPost?.data?.title}</span>
          </div>
        </Link>
      ) : (
        <div></div>
      )}

      {nextId ? (
        <Link href={`/posts/${nextId}`}>
          <div className="flex items-center gap-2 cursor-pointer bg-gray-400 dark:bg-[#242423] sm:bg-transparent p-4 sm:p-0">
            <span className="hidden sm:block">{nextPost?.data?.title}</span>
            <MdOutlineArrowForwardIos size={16}></MdOutlineArrowForwardIos>
          </div>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default PostNavigate;
