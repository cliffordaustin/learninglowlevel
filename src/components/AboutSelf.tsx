"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function AboutSelf() {
  return (
    <div className="h-full flex flex-col justify-center items-center relative bg-white w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[200px] h-[200px] rounded-full bg-[#f3722c] absolute -top-24 -right-24"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[200px] h-[200px] rounded-full bg-[#f3722c] absolute -bottom-24 -left-24"
      ></motion.div>

      <div className="w-full mt-6 md:mt-0">
        <div className="flex flex-col w-fit gap-1 ml-8">
          <h1 className="font-bold z-10 text-xl md:text-xl text-gray-700">
            About me
          </h1>

          <div className="header-gradient-line z-10"></div>
        </div>
      </div>

      <Image
        src="/dev.svg"
        alt="Developer Illustration"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0 opacity-10"
        width={500}
        height={300}
      />

      <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-16 w-[80%] lg:w-[80%] justify-between mt-10 mb-16 ">
        <div className="relative flex justify-center w-full lg:w-[380px]">
          <div className="p-[5px] bg-white h-[200px] w-[200px] md:h-[300px] z-10 md:w-[300px] rounded-full">
            <div className="relative w-full h-full z-10 rounded-full before:inset-0 before:z-20 before:rounded-full before:bg-opacity-15 before:w-[200px] before:h-[200px] before:absolute">
              <Image
                src="/self.jpg"
                alt="profile"
                className="object-cover rounded-full contrast-[0.6]"
                fill
              />
            </div>
          </div>
          <motion.div
            initial={{
              bottom: "-10px",
            }}
            whileInView={{
              bottom: "-40px",
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-[#f3722c] absolute right-20 md:right-24 lg:-right-10"
          ></motion.div>
        </div>

        <div className="w-full z-10 flex flex-col gap-3 text-gray-600">
          <p>
            Hello!👋🏽 I&apos;m <span className="font-bold">Clifford Ofili</span>,
            a passionate software engineer with years of experience in software
            development. Through my career, I’ve worked on projects across
            various industries, from healthcare technology to travel systems,
            and have gained deep expertise in building scalable applications
            that solve real-world problems.
          </p>

          <p>
            I founded this platform specifically for teens, offering hands-on
            courses in web development, app development with React Native, and
            AI. My goal is to break down complex topics into practical, engaging
            lessons that inspire confidence and creativity. Join me as we dive
            into the world of coding, empowering you with the skills to build
            and innovate!
          </p>

          <p>Join me, and let’s unlock the potential of technology together!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSelf;
