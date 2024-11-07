import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCheckmarkDone } from "react-icons/io5";
import { Open_Sans } from "next/font/google";
import Enquiries from "./Enquiries";

const open_sans = Open_Sans({
  weight: ["300", "400", "700", "800", "500"],
  subsets: ["latin"],
});

function Learn() {
  const webDev = [
    "Introduction to HTML, CSS, and JavaScript",
    "Responsive design and accessibility",
    "Frontend frameworks (React, Vue)",
    "Backend development with Node.js and Express",
    "Database integration (SQL, NoSQL)",
    "Deployment and hosting fundamentals",
  ];

  const mobileDev = [
    "Mobile app development with React Native",
    "Cross-platform best practices",
    "State management and navigation",
    "Backend integration with REST APIs",
    "Testing and debugging mobile applications",
    "Publishing apps on App Store and Google Play",
  ];

  const dataScience = [
    "Introduction to machine learning and AI concepts",
    "Data preprocessing and feature engineering",
    "Model training with Python and popular libraries (TensorFlow, PyTorch)",
    "Deep learning and neural networks",
    "Building AI-driven applications (chatbots, image recognition)",
  ];

  const applyUrl = "https://forms.gle/AAWH64uLB6Dmf9Ur8";
  return (
    <div className="p-4 h-full w-full lg:p-0 bg-gray-100 md:bg-transparent relative border-y-1 gap-12 flex flex-col justify-center border-gray-200">
      <div className="lg:h-[95%] md:h-full top-[50%] -translate-y-1/2 w-full absolute overflow-hidden inset-0 p-4">
        <div className="hidden w-full h-auto overflow-hidden bg-white absolute inset-0 p-4 md:grid grid-cols-[repeat(60,1fr)] md:grid-rows-[repeat(60,1fr)] lg:grid-rows-[repeat(20,1fr)] gap-4">
          {Array.from({ length: 3580 }).map((_, index) => (
            <div
              key={index}
              className="w-[2.5px] h-[2.5px] bg-gray-200 rounded-full"
            ></div>
          ))}
        </div>
      </div>

      <div className="h-full top-[50%] -translate-y-1/2 w-full absolute overflow-hidden inset-0 p-4">
        <div className="w-full h-full bg-white absolute inset-0 p-4 md:hidden grid grid-cols-[repeat(18,1fr)] grid-rows-[repeat(60,1fr)] gap-4">
          {Array.from({ length: 1200 }).map((_, index) => (
            <div
              key={index}
              className="w-[2.5px] h-[2.5px] bg-gray-200 rounded-full"
            ></div>
          ))}
        </div>
      </div>

      <div className="flex md:ml-10 flex-col w-fit gap-1">
        <h1 className="font-bold z-10 text-xl md:text-xl text-gray-700">
          What you will learn
        </h1>

        <div className="header-gradient-line z-10"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center w-full z-10 justify-center gap-6 md:gap-5">
        <div className="bg-blue-500 bg-opacity-20 relative w-full md:w-[80%] lg:w-[400px] h-[450px] md:h-[420px] lg:h-[500px] xl:h-[420px] flex flex-col gap-6 p-6 items-center justify-center">
          {/* <div className="w-[150px] p-8 flex items-center justify-center overflow-hidden h-[150px] rounded-full bg-slate-500 relative">
            <div className="w-[80%] h-[80%] relative">
              <Image
                className="object-cover"
                src="/website.png"
                fill
                alt="image"
              />
            </div>
          </div> */}

          {/* <Image
            // className="absolute"
            src="/website.png"
            width={350}
            height={350}
            alt="image"
          /> */}

          <h1 className={open_sans.className + " text-2xl font-bold"}>
            Web Development
          </h1>

          <div className="flex flex-col gap-1">
            {webDev.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <IoCheckmarkDone className="text-blue-600 text-lg"></IoCheckmarkDone>
                <p className="text-black">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2 w-full">
            <Link href={applyUrl} className="!w-[50%]" target="_blank">
              <Button
                radius="none"
                size="lg"
                className="bg-[#8338ec] text-white px-6 w-full"
              >
                Apply
              </Button>
            </Link>

            <Enquiries>
              {(onOpen) => (
                <Button
                  radius="none"
                  size="lg"
                  variant="bordered"
                  onClick={onOpen}
                  className="px-6 !w-[50%] text-black border-purple-600"
                >
                  Make Enquiry
                </Button>
              )}
            </Enquiries>
          </div>
        </div>
        <div className="bg-red-500 bg-opacity-20 relative w-full md:w-[80%] lg:w-[400px] h-[450px] md:h-[420px] lg:h-[500px] xl:h-[420px] flex flex-col gap-6 p-6 items-center justify-center">
          {/* <Image
            className="absolute -top-16"
            src="/phone.png"
            width={200}
            height={200}
            alt="image"
          /> */}

          <h1 className={open_sans.className + " text-2xl font-bold"}>
            Mobile App Development
          </h1>

          <div className="flex flex-col gap-1">
            {mobileDev.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <IoCheckmarkDone className="text-red-500 text-lg"></IoCheckmarkDone>
                <p className="text-black">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2 w-full">
            <Link href={applyUrl} className="!w-[50%]" target="_blank">
              <Button
                radius="none"
                size="lg"
                className="bg-[#8338ec] text-white px-6 w-full"
              >
                Apply
              </Button>
            </Link>

            <Enquiries>
              {(onOpen) => (
                <Button
                  radius="none"
                  size="lg"
                  variant="bordered"
                  onClick={onOpen}
                  className="px-6 !w-[50%] text-black border-purple-600"
                >
                  Make Enquiry
                </Button>
              )}
            </Enquiries>
          </div>
        </div>
        <div className="bg-purple-500 bg-opacity-20 relative w-full md:w-[80%] lg:w-[400px] h-[450px] md:h-[420px] lg:h-[500px] xl:h-[420px] flex flex-col gap-6 p-6 items-center justify-center">
          {/* <Image
            className="absolute -top-16"
            src="/ai.png"
            width={100}
            height={100}
            alt="image"
          /> */}

          <h1 className={open_sans.className + " text-2xl font-bold"}>
            AI/Machine Learning
          </h1>

          <div className="flex flex-col gap-1">
            {dataScience.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <IoCheckmarkDone className="text-[#8338ec] text-lg"></IoCheckmarkDone>
                <p className="text-black">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mt-2 w-full">
            <Link href={applyUrl} className="!w-[50%]" target="_blank">
              <Button
                radius="none"
                size="lg"
                className="bg-[#8338ec] text-white px-6 w-full"
              >
                Apply
              </Button>
            </Link>

            <Enquiries>
              {(onOpen) => (
                <Button
                  radius="none"
                  size="lg"
                  variant="bordered"
                  onClick={onOpen}
                  className="px-6 !w-[50%] text-black border-purple-600"
                >
                  Make Enquiry
                </Button>
              )}
            </Enquiries>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learn;
