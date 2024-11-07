"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import DarkModeSwitch from "./ui/DarkModeSwitch";
import Link from "next/link";
import Cookies from "js-cookie";
import { Button } from "@nextui-org/react";

function Navbar() {
  const lightMode = Cookies.get("lightMode") === "true" ? true : false;

  const [light, setLight] = React.useState<boolean>(lightMode);

  // useEffect(() => {
  //   setLight(lightMode);
  // }, [lightMode]);

  return (
    <div className="px-6 md:px-16 w-full py-4 md:py-6 dark:border-none flex justify-between items-center">
      <Link href="/">
        <div className="hidden sm:block relative w-[200px] h-[20px] md:w-[240px] md:h-[27px]">
          {/* {!light ? (
            <Image src="/logo-no-background-white.png" alt="Logo" fill></Image>
          ) : (
            <Image src="/logo-no-background.png" alt="Logo" fill></Image>
          )} */}

          <Image src="/logo-no-background.png" alt="Logo" fill></Image>
        </div>

        <div className="relative md:hidden w-[40px] h-[40px] md:w-[240px] md:h-[27px]">
          <Image src="/logo-no-bg.png" alt="Logo" fill></Image>
        </div>
      </Link>

      <div className="flex items-center gap-1 sm:gap-4">
        <Link className="link" href="/blogs">
          Posts
        </Link>

        <Link href="https://forms.gle/AAWH64uLB6Dmf9Ur8" target="_blank">
          <Button
            className="bg-[#8338ec] text-white px-2 sm:px-6"
            radius="full"
          >
            Apply
          </Button>
        </Link>
      </div>

      {/* <DarkModeSwitch light={light} setLight={setLight}></DarkModeSwitch> */}
    </div>
  );
}

export default Navbar;
