"use client";

import { Switch } from "@nextui-org/react";
import React, { useEffect } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

function DarkModeSwitch({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (value: boolean) => void;
}) {
  const darkModeHandler = () => {
    setDark(!dark);
    localStorage.setItem("darkMode", JSON.stringify(!dark));
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        isSelected={dark}
        onClick={() => darkModeHandler()}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <IoMdMoon className={className} />
          ) : (
            <IoMdSunny className={className} />
          )
        }
      ></Switch>
    </>
  );
}

export default DarkModeSwitch;
