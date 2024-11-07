import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import PageTracker from "@/components/PageTracker";

function Homepage() {
  return (
    <main className="relative">
      <PageTracker text="Homepage view" />
      <div className="sticky top-0 left-0 right-0 w-full z-20 h-[45px] bg-[#001219] contrast-75 flex gap-2 items-center justify-center">
        <p className="text-gray-100 text-sm md:text-base">
          🎉 Apply today and get one month{" "}
          <span className="font-bold">free</span>
        </p>
        <Link href="https://forms.gle/AAWH64uLB6Dmf9Ur8" target="_blank">
          <Button
            className="bg-[#8338ec] flex items-center gap-1 text-white px-2 md:px-4"
            size="sm"
            radius="full"
          >
            <p>Apply today</p>
            <FaLongArrowAltRight className="text-white text-lg hidden md:block" />
          </Button>
        </Link>
      </div>
      <Main></Main>
    </main>
  );
}

export default Homepage;
