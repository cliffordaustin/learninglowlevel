import Navbar from "@/components/Navbar";
import Post from "@/components/Post";
import { serverClient } from "../_trpc/serverClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Explore low-level programming concepts like memory management and data structures with practical guides and projects, mastering the core of computer science.",
  title: "Mastering the Fundamentals: Low-Level Programming Concepts",
  openGraph: {
    title: "Mastering the Fundamentals: Low-Level Programming Concepts",
    description:
      "Explore low-level programming concepts like memory management and data structures with practical guides and projects, mastering the core of computer science.",
    url: "https://learninglowlevel.com",
    images: "/logo-background-white.png",
  },
};

export default async function Home() {
  const posts = await serverClient.getPosts();

  return (
    <main className="">
      <div className="sticky top-0 left-0 right-0 w-full z-10 bg-white dark:bg-[#242423]">
        <Navbar></Navbar>
      </div>
      <div className="dark:text-white flex w-full dark:bg-[#333533] h-full min-h-screen py-8 px-6 md:px-12">
        <div className="w-full lg:max-w-[1200px] mx-auto">
          <div className="w-full lg:w-[70%]">
            <span className="font-serif text-3xl md:text-4xl font-bold">
              Posts
            </span>

            <div className="md:mt-6 flex flex-col">
              {posts.map((post) => (
                <Post key={post.id} post={post}></Post>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
