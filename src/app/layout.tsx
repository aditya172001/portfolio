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
        <div className="relative font-sans text-gray-500 h-screen px-2 sm:px-0">
          <MyCanvas />
          <header className="flex items-center justify-between sm:px-8 py-4 sm:py-6">
            <EyeAnimation />
            <nav className="flex backdrop-blur-sm space-x-4 px-4 py-2 rounded-full shadow-lg">
              <Link href="/" className="hover:text-black cursor-pointer">
                About
              </Link>
              <Link
                href="/projects"
                className="hover:text-black cursor-pointer"
              >
                Projects
              </Link>
              <Link
                href="https://drive.google.com/file/d/1MWbXqg0t65I5xn-KBFCx8sArszJ02T9m/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black cursor-pointer"
              >
                Resume
              </Link>
            </nav>
          </header>
          <div
            className="hidden lg:flex justify-between backdrop-blur-sm shadow-lg rotate-90 fixed -left-28 bottom-[150px] rounded-l-full py-2 pl-3 w-[340px]"
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
              <hr className="border-t-2 border-gray-500 w-full" />
            </div>
          </div>
          <div
            className="hidden lg:flex justify-between backdrop-blur-sm shadow-lg rotate-90 fixed -right-28 bottom-[150px] rounded-l-full py-2 pl-3 w-[340px]"
            aria-hidden="true"
          >
            <Link
              href="mailto:adityakumar172001@gmail.com"
              className="text-gray-500 hover:text-gray-700 trasition-all duration-100"
            >
              adityakumar172001@gmail.com
            </Link>
            <div className="flex items-center w-20">
              <hr className="border-t-2 border-gray-500 w-full" />
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
              className="flex justify-center w-40 text-gray-500 hover:text-gray-700 trasition-all duration-100"
            >
              adityakumar172001@gmail.com
            </Link>
          </nav>
          <div className="grid justify-center pb-4">
            <footer className="text-gray-400">
              <Link
                href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-[1px] hover:border-gray-700 transition-all duration-500"
              >
                CC BY-NC-SA 4.0
              </Link>{" "}
              2024-PRESENT © Aditya Kumar
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
