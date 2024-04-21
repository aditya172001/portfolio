import { Tool } from "@/components/tool";
import { toolsData } from "@/helpers";
import Link from "next/link";

export default function Home() {
  return (
    <article className="w-[660px] leading-relaxed ">
      <section>
        <h1 className="text-4xl font-sans font-extrabold py-8 text-black">
          Aditya Kumar
        </h1>
        <p className="pb-6">
          Hey there, I'm Aditya Kumar, A full stack developer.
        </p>
        <p className="pb-6">
          I excel in crafting exceptional digital experiences across frontend
          and backend technologies, including ReactJS, NextJS, NodeJS, and AWS.
          Driven by solving complex challenges, I thrive on building scalable
          solutions that leave a lasting impact.{" "}
          <Link
            href="/projects"
            className="text-gray-900 border-b-[1px] hover:border-gray-900 cursor-pointer transition-all duration-500"
          >
            Explore my projects{" "}
          </Link>
          to witness my work firsthand.
        </p>
      </section>
      <section>
        <span className="">
          Here are a few technologies I’ve been working with recently:
        </span>
        <ul className="pb-6">
          {Array.from(toolsData.entries()).map(([category, tools]) => (
            <li key={category} className="flex items-center">
              {category}:
              <ul className="flex my-[2px]">
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
      </section>
      <section className="pb-6">
        <h2 className="pb-1">Experience:</h2>
        <p>
          Interning at Deloitte India, where I contribute to the Unified Cloud
          Integrator, an advanced tool which streamlines integration development
          with automated processes and enhanced project performance metrics.
          Currently, I'm also focused on mastering Workday integrations as part
          of my learning journey.
        </p>
      </section>
    </article>
  );
}
