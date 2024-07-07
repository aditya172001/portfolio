import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SocialLink } from "@/components/social-link";
import { GithubIcon } from "@/components/github-icon";
import { TwitterIcon } from "@/components/twitter-icon";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { MyCanvas } from "@/components/canvas";
import { EyeAnimation } from "@/components/eye-animation";
import Link from "next/link";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { ThemeSwitchButton } from "@/components/theme-switch-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Kumar",
  description: "A Portfolio website of Aditya Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <body className={inter.className}>
        <ThemeWrapper>
          <div className="relative font-sans text-neutral-500 dark:text-neutral-400 h-screen px-2 sm:px-0">
            <MyCanvas />
            <header className="flex items-center justify-between sm:px-8 py-4 sm:py-6">
              <EyeAnimation />
              <nav className="flex backdrop-blur-sm space-x-4 px-4 py-2 rounded-full shadow-lg dark:shadow-neutral-900 text-neutral-500">
                <Link
                  href="/"
                  className="hover:text-black dark:hover:text-neutral-200 cursor-pointer focus:outline-none"
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-black dark:hover:text-neutral-200 cursor-pointer focus:outline-none"
                >
                  Projects
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1MWbXqg0t65I5xn-KBFCx8sArszJ02T9m/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-neutral-200 cursor-pointer focus:outline-none"
                >
                  Resume
                </Link>
                <ThemeSwitchButton />
              </nav>
            </header>
            <div
              className="hidden lg:flex justify-between backdrop-blur-sm shadow-lg dark:shadow-neutral-900 rotate-90 fixed -left-28 bottom-[150px] rounded-l-full py-2 pl-3 w-[340px]"
              aria-hidden="true"
            >
              <div className="flex w-40 justify-between">
                <SocialLink hyperlink="https://github.com/aditya172001">
                  <GithubIcon className="h-6 w-6 -rotate-90" />
                </SocialLink>
                <SocialLink hyperlink="https://twitter.com/aditya172001">
                  <TwitterIcon className="h-6 w-6 -rotate-90" />
                </SocialLink>
                <SocialLink hyperlink="https://www.linkedin.com/in/aditya-kumar-67b789214/">
                  <LinkedInIcon className="h-6 w-6 -rotate-90" />
                </SocialLink>
              </div>
              <div className="flex items-center w-20">
                <hr className="border-t-2 border-neutral-500 w-full" />
              </div>
            </div>
            <div
              className="hidden lg:flex justify-between backdrop-blur-sm shadow-lg dark:shadow-neutral-900 rotate-90 fixed -right-28 bottom-[150px] rounded-l-full py-2 pl-3 w-[340px]"
              aria-hidden="true"
            >
              <Link
                href="mailto:adityakumar172001@gmail.com"
                className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 trasition-all duration-100"
              >
                adityakumar172001@gmail.com
              </Link>
              <div className="flex items-center w-20">
                <hr className="border-t-2 border-neutral-500 w-full" />
              </div>
            </div>
            <div className="grid justify-center">{children}</div>
            <nav className="grid lg:hidden pb-4 justify-center">
              <div className="flex justify-between w-40 pb-2">
                <SocialLink hyperlink="https://github.com/aditya172001">
                  <GithubIcon className="h-6 w-6" />
                </SocialLink>
                <SocialLink hyperlink="https://twitter.com/aditya172001">
                  <TwitterIcon className="h-6 w-6" />
                </SocialLink>
                <SocialLink hyperlink="https://www.linkedin.com/in/aditya-kumar-67b789214/">
                  <LinkedInIcon className="h-6 w-6" />
                </SocialLink>
              </div>
              <Link
                href="mailto:adityakumar172001@gmail.com"
                className="flex justify-center w-40 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200 trasition-all duration-100"
              >
                adityakumar172001@gmail.com
              </Link>
            </nav>
            <div className="grid justify-center pb-4">
              <footer className="text-neutral-400">
                <Link
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-[1px] border-neutral-200 hover:border-neutral-700 dark:border-neutral-700 dark:hover:border-neutral-200 transition-all hover:duration-500"
                >
                  CC BY-NC-SA 4.0
                </Link>{" "}
                2024-PRESENT © Aditya Kumar
              </footer>
            </div>
          </div>
        </ThemeWrapper>
      </body>
    </html>
  );
}
