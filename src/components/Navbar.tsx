"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import DarkModeSwitch from "./ui/DarkModeSwitch";
import Link from "next/link";

function Navbar() {
  const darkMode: boolean = localStorage.getItem("darkMode")
    ? JSON.parse(localStorage.getItem("darkMode") || "")
    : false;

  const [dark, setDark] = React.useState<boolean>(darkMode);

  useEffect(() => {
    setDark(darkMode);
  }, [darkMode]);

  return (
    <div className="px-4 md:px-24 w-full py-4 dark:border-none border-b border-gray-200 flex justify-between items-center">
      <Link href="/">
        <div className="relative w-[200px] h-[20px] md:w-[240px] md:h-[27px]">
          {dark ? (
            <Image src="/logo-no-background-white.png" alt="Logo" fill></Image>
          ) : (
            <Image src="/logo-no-background.png" alt="Logo" fill></Image>
          )}
        </div>
      </Link>

      <DarkModeSwitch dark={dark} setDark={setDark}></DarkModeSwitch>
    </div>
  );
}

export default Navbar;
