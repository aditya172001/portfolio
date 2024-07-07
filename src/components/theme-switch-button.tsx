"use client";

import { ReactNode, useContext } from "react";
import { ThemeContext } from "./theme-wrapper";
import { SunIcon } from "./sun-icon";
import { MoonIcon } from "./moon-con";

export function ThemeSwitchButton(): ReactNode {
  const { isDarkModeOn, setIsDarkModeOn } = useContext(ThemeContext);
  return (
    <button
      className="focus:outline-none text-lg"
      onClick={() => setIsDarkModeOn((dark) => !dark)}
    >
      {isDarkModeOn ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
