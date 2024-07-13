"use client";

import { ReactNode, useEffect, useState } from "react";
import { SunIcon } from "./sun-icon";
import { MoonIcon } from "./moon-con";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

export function ThemeSwitchButton(): ReactNode {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-[28px] w-[18px]" />;
  return (
    <div className="focus:outline-none text-lg">
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            key={"moon icon"}
          >
            <MoonIcon />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            key={"sun icon"}
          >
            <SunIcon />
          </motion.div>
        )}
      </button>
    </div>
  );
}
