"use client";
import AboutSelf from "@/components/AboutSelf";
import AnimatedBackground from "@/components/AnimatedBackground";
import Learn from "@/components/Learn";
import Apply from "./Apply";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Gradient } from "./../utils/Gradient";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const sections = [
    {
      element: <AnimatedBackground></AnimatedBackground>,
      mobileSize: "h-[600px]",
      md: "md:h-[700px]",
    },
    {
      element: <Learn></Learn>,
      mobileSize: "h-auto",
      md: "lg:h-[650px]",
    },
    {
      element: <AboutSelf></AboutSelf>,
      mobileSize: "h-auto",
      md: "lg:h-[580px]",
    },
    {
      element: <Apply></Apply>,
      mobileSize: "h-[100vh]",
      md: "md:h-[700px]",
    },
  ];

  const gradient = new Gradient();

  useEffect(() => {
    // @ts-ignore
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="w-full">
        {sections.map((section, index) => (
          <section
            key={index}
            className={`w-full flex items-center justify-center ${section.mobileSize} ${section.md}`}
          >
            {section.element}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Main;
