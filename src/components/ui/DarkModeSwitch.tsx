"use client";

import { Switch } from "@nextui-org/react";
import React, { useEffect } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import Cookie from "js-cookie";

function DarkModeSwitch({
  light,
  setLight,
}: {
  light: boolean;
  setLight: (value: boolean) => void;
}) {
  const lightModeHandler = () => {
    setLight(!light);
    Cookie.set("lightMode", JSON.stringify(!light));
    document.body.classList.toggle("dark");
  };
  return (
    <>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        isSelected={!light}
        onClick={() => lightModeHandler()}
        thumbIcon={({ isSelected, className }) =>
          !isSelected ? (
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
