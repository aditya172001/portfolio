import { Tool } from "@/components/tool";
import { toolsData } from "@/helpers";
import Link from "next/link";
import { AnimatedEnterDiv } from "@/components/animated-enter-div";

export default function Home() {
  return (
    <article className="w-96 sm:w-[600px] md:w-[660px] leading-relaxed px-4">
      <h1 className="text-4xl font-sans font-extrabold py-6 sm:py-8 text-black dark:text-white">
        Aditya Kumar
      </h1>
      <AnimatedEnterDiv stagger={0}>
        <p className="pb-6">
          Hey there, I&apos;m Aditya Kumar, A full stack developer.
        </p>
      </AnimatedEnterDiv>
      <AnimatedEnterDiv stagger={1}>
        <p className="pb-6">
          I excel in crafting exceptional digital experiences across frontend
          and backend technologies, including ReactJS, NextJS, NodeJS, and AWS.
          Driven by solving complex challenges, I thrive on building scalable
          solutions that leave a lasting impact.{" "}
          <Link
            href="/projects"
            className="text-neutral-900 dark:text-neutral-200 border-b-[1px] border-neutral-200 hover:border-neutral-700 dark:border-neutral-700 dark:hover:border-neutral-200 cursor-pointer transition-all duration-0 hover:duration-500"
          >
            Explore my projects{" "}
          </Link>
          to witness my work firsthand.
        </p>
      </AnimatedEnterDiv>
      <AnimatedEnterDiv stagger={2}>
        <span className="">
          Here are a few technologies I’ve been working with recently:
        </span>
        <ul className="pb-6">
          {Array.from(toolsData.entries()).map(([category, tools]) => (
            <li key={category}>
              <ul className="flex items-center flex-wrap">
                <span>{category}:</span>
                {tools.map((tool) => (
                  <Tool
                    key={tool.toolName}
                    toolName={tool.toolName}
                    toolImg={tool.toolImg}
                    altText={tool.altText}
                    hyperlink={tool.hyperlink}
                  />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </AnimatedEnterDiv>
      <AnimatedEnterDiv stagger={3} className="pb-6">
        <h2 className="pb-1">Experience:</h2>
        <p>
          Interning at Deloitte India, where I contribute to the Unified Cloud
          Integrator, an advanced tool which streamlines integration development
          with automated processes and enhanced project performance metrics.
          Currently, I&apos;m also focused on mastering Workday integrations as
          part of my learning journey.
        </p>
      </AnimatedEnterDiv>
    </article>
  );
}
