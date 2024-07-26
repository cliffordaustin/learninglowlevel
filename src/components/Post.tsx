import { Post as PostType } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { formatDistance } from "date-fns";
import Link from "next/link";

function Post({ post }: { post: PostType }) {
  return (
    <Link
      href={`/posts/${post.id}`}
      className="flex sm:flex-row flex-col gap-5 py-8 border-b border-gray-200 dark:border-[#bfc0c0]"
    >
      <div className="relative w-full sm:w-[600px] md:w-[400px] h-[200px] sm:h-[150px]">
        <Image
          src={post.thumbnail}
          alt={post.title}
          className="object-cover"
          fill
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {post.tags.map((tag) => (
            <span key={tag} className="text-sm text-white p-1 bg-gray-500">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-xl font-serif">{post.title}</h3>
        <p className="">{post.description}</p>

        <div className="mt-2 dark:text-white text-gray-600">
          {formatDistance(post.createdAt, new Date(), { addSuffix: true })}
        </div>
      </div>
    </Link>
  );
}

export default Post;
