"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const ThemeContext = createContext<{
  isDarkModeOn: boolean;
  setIsDarkModeOn: Dispatch<SetStateAction<boolean>>;
}>({ isDarkModeOn: false, setIsDarkModeOn: () => null });

export function ThemeWrapper({ children }: { children: ReactNode }): ReactNode {
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(false);

  return (
    <div className={isDarkModeOn ? "dark" : ""}>
      <ThemeContext.Provider value={{ isDarkModeOn, setIsDarkModeOn }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
