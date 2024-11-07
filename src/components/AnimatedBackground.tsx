"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Navbar from "./Navbar";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import Enquiries from "./Enquiries";

const open_sans = Open_Sans({
  weight: ["300", "400", "700", "800", "500"],
  subsets: ["latin"],
});

function AnimatedBackground() {
  return (
    <div className="w-full h-full relative bg-[#f4f4f4] overflow-hidden">
      {/* <motion.div
        animate={{
          backgroundImage: [
            "linear-gradient(90deg, rgba(243,114,44,0.4318321078431373) 11%, rgba(243,114,44,0.3430365896358543) 27%, rgba(72,149,239,0.4590029761904762) 43%, rgba(181,23,158,0.3937368697478992) 61%, rgba(181,23,158,0.6534007352941176) 74%, rgba(181,23,158,0.5486388305322129) 86%)",
            "linear-gradient(90deg, rgba(255, 0, 0,0.3486388305322129) 11%, rgba(255, 0, 0,0.4534007352941176) 27%, rgba(181,23,158,0.3937368697478992) 43%, rgba(243,114,44,0.4514399509803921) 61%, rgba(243,114,44,0.3892550770308123) 74%, rgba(63,55,201,0.5318321078431373) 86%)",
            "linear-gradient(180deg, rgba(63,55,201,0.5318321078431373) 11%, rgba(72,149,239,0.7430365896358543) 27%, rgba(72,149,239,0.4590029761904762) 43%, rgba(181,23,158,0.4514399509803921) 61%, rgba(181,23,158,0.3892550770308123) 74%, rgba(181,23,158,0.6534007352941176) 86%)",
          ],
          // opacity: [0.7, 0.7, 0.7],
        }}
        style={{
          overflow: "visible",
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="relative w-full h-full element"
      ></motion.div> */}

      <canvas id="gradient-canvas" data-transition-in />

      <div className="w-full z-10 top-0 absolute">
        <Navbar></Navbar>
      </div>

      <div className="absolute flex flex-col gap-1 w-full lg:w-[60%] px-3 md:px-8 top-[calc(35%-40px)] lg:top-[calc(30%-40px)]">
        <div className="w-fit px-4 text-sm py-2 flex items-center gap-2 rounded-md bg-black/40">
          {/* <div className="w-[8px] h-[8px] rounded-full bg-purple-600 animate-ping"></div> */}
          <div>
            <p className="text-white font-medium font-mono">
              For ages 13 - 19 years
            </p>
          </div>
        </div>
        <div className="w-full mix-blend-color-burn">
          <h1
            className={
              "text-[30px] md:text-[50px] xl:text-[60px] font-semibold font-mono text-[#3a3a3a] relative -z-10 " +
              open_sans.className
            }
            style={{
              lineHeight: 1.1,
            }}
          >
            Programming For The Next Generation
          </h1>
        </div>

        <p className="mt-4 md:text-lg isolate text-black">
          <span className="font-bold">LearningLowLevel</span> offers hands-on
          coding classes for teens aged 13-19, teaching them to create websites,
          apps, and solve real-world problems using AI/Machine Learning. Whether
          you&apos;re a beginner or already have some coding experience,
          students gain practical skills and foundational knowledge to shape the
          future of tech. Start building tomorrow, today!
        </p>

        <div className="mt-6 flex items-center gap-4">
          <Link href="https://forms.gle/AAWH64uLB6Dmf9Ur8" target="_blank">
            <Button
              radius="none"
              size="lg"
              className="bg-[#8338ec] text-white px-6"
            >
              Apply
            </Button>
          </Link>
          <Enquiries>
            {(onOpen) => (
              <Button
                radius="none"
                size="lg"
                className="p-[2px] btn-gradient w-[140px]"
                onClick={onOpen}
              >
                Make Enquiry
              </Button>
            )}
          </Enquiries>
        </div>
      </div>

      <div className="absolute hidden lg:block right-[10px] top-[80px]">
        <Image
          src="/students.png"
          alt="programmer"
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default AnimatedBackground;
