import { MyCanvas } from "@/components/canvas";
import { Icon } from "@/components/icon";
import { Tool } from "@/components/tool";
import { toolsInfo } from "@/helpers";
import { SocialLink } from "@/components/social-link";
import { GithubIcon } from "@/components/githubIcon";
import { TwitterIcon } from "@/components/twitterIcon";
import { LinkedInIcon } from "@/components/linkedin";

export default function Home() {
  return (
    <div className="relative font-sans text-gray-600 h-screen">
      <MyCanvas />
      <header className="flex items-center justify-between px-2 py-4 text-white">
        <Icon />
        <nav className="flex backdrop-blur-sm space-x-4 px-4 py-2 rounded-full text-gray-600 shadow-lg">
          <div className="hover:text-black cursor-pointer">About</div>
          <div className="hover:text-black cursor-pointer">Projects</div>
          <div className="hover:text-black cursor-pointer">Resume</div>
        </nav>
      </header>
      <div className="hidden lg:flex justify-between backdrop-blur-sm shadow-lg rotate-90 fixed -left-28 bottom-[150px] rounded-l-full py-2 pl-3 w-[340px]">
        <div className="flex w-40 justify-between">
          <div className=" -rotate-90">
            <SocialLink hyperlink="https://github.com/aditya172001">
              <GithubIcon />
            </SocialLink>
          </div>
          <div className=" -rotate-90">
            <SocialLink hyperlink="https://twitter.com/aditya172001">
              <TwitterIcon />
            </SocialLink>
          </div>
          <div className=" -rotate-90">
            <SocialLink hyperlink="https://www.linkedin.com/in/aditya-kumar-67b789214/">
              <LinkedInIcon />
            </SocialLink>
          </div>
        </div>
        <div className="flex items-center w-20">
          <hr className="border-t-2 border-gray-500 w-full" />
        </div>
      </div>
      <div className="hidden lg:flex justify-between backdrop-blur-sm shadow-lg rotate-90 fixed -right-28 bottom-[150px] rounded-l-full py-2 pl-3 w-[340px]">
        <a
          href="mailto:adityakumar172001@gmail.com"
          className="text-gray-500 hover:text-gray-700 trasition-all duration-100"
        >
          adityakumar172001@gmail.com
        </a>
        <div className="flex items-center w-20">
          <hr className="border-t-2 border-gray-500 w-full" />
        </div>
      </div>
      <div className="grid justify-center p-4">
        <article className="w-[660px] leading-relaxed ">
          <section>
            <h1 className="text-4xl font-sans font-extrabold py-8 text-black">
              Aditya Kumar
            </h1>
            <p className="pb-6">
              Hey there, I'm Aditya Kumar, A full stack developer.
            </p>
            <p className="pb-6">
              I excel in crafting exceptional digital experiences across
              frontend and backend technologies, including ReactJS, NextJS,
              NodeJS, and AWS. Driven by solving complex challenges, I thrive on
              building scalable solutions that leave a lasting impact.{" "}
              <span className="text-gray-900 border-b-[1px] hover:border-gray-900 cursor-pointer transition-all duration-500">
                Explore my projects{" "}
              </span>
              to witness my work firsthand.
            </p>
          </section>
          <section>
            <span className="">
              Here are a few technologies I’ve been working with recently:
            </span>
            <ul className="pb-6">
              {Object.keys(toolsInfo).map((category) => (
                <li key={category} className="flex items-center ">
                  {category} :
                  <ul className="flex my-[2px]">
                    {toolsInfo[category].map(
                      (tool: {
                        toolName: string;
                        toolImg: string;
                        altText: string;
                        hyperlink: string;
                      }) => (
                        <Tool
                          key={tool.toolName}
                          toolName={tool.toolName}
                          toolImg={tool.toolImg}
                          altText={tool.altText}
                          hyperlink={tool.hyperlink}
                        />
                      )
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
          <section className="pb-6">
            <h2 className="pb-1">Experience:</h2>
            <p>
              Interning at Deloitte India, where I contribute to the Unified
              Cloud Integrator project, an auto-documentation generator for the
              Workday integration system. Currently, I'm also focused on
              mastering Workday integrations as part of my learning journey.
            </p>
          </section>
          <nav className="grid lg:hidden pb-6 justify-center">
            <div className="flex justify-between w-40">
              <SocialLink hyperlink="https://github.com/aditya172001">
                <GithubIcon />
              </SocialLink>
              <SocialLink hyperlink="https://twitter.com/aditya172001">
                <TwitterIcon />
              </SocialLink>
              <SocialLink hyperlink="https://www.linkedin.com/in/aditya-kumar-67b789214/">
                <LinkedInIcon />
              </SocialLink>
            </div>
            <a
              href="mailto:adityakumar172001@gmail.com"
              className="flex justify-center w-40"
            >
              adityakumar172001@gmail.com
            </a>
          </nav>
        </article>
        <footer className="text-gray-400">
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            className="border-b-[1px] hover:border-gray-700 transition-all duration-500"
          >
            CC BY-NC-SA 4.0
          </a>{" "}
          2021-PRESENT © Aditya Kumar
        </footer>
      </div>
    </div>
  );
}
