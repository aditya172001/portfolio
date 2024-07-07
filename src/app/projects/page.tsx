import { AnimatedEnterDiv } from "@/components/animated-enter-div";
import { Project } from "@/components/project";
import { projectsData } from "@/helpers/projects-data";
import { ReactElement } from "react";

export default function Projects(): ReactElement {
  return (
    <main className="lg:w-[800px] leading-relaxed">
      <h1 className="text-4xl font-sans font-extrabold my-8 text-black text-center dark:text-white">
        Projects
      </h1>
      {projectsData.map((projectData, index) => (
        <AnimatedEnterDiv key={projectData.title} stagger={index}>
          <Project
            key={projectData.title}
            srNo={index + 1}
            title={projectData.title}
            description={projectData.description}
            toolsUsed={projectData.toolsUsed}
            githubLink={projectData.githubLink}
            liveLink={projectData.liveLink}
            demoVid={projectData.demoVid}
          />
        </AnimatedEnterDiv>
      ))}
    </main>
  );
}
