import { Project } from "@/components/project";
import { projectsData } from "@/helpers/projects-data";
import { ReactElement } from "react";

export default function Projects(): ReactElement {
  return (
    <main className="w-[800px] leading-relaxed">
      <h1 className="text-4xl font-sans font-extrabold mt-8 mb-2 text-black text-center">
        Projects
      </h1>
      <p className="mb-6 text-center italic ">Projects created by me.</p>
      {projectsData.map((projectData, index) => (
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
      ))}
    </main>
  );
}
