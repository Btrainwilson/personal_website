import * as React from "react"
import ProjectCard from "@/components/projects/card";


export function ProjectCardList({ projects }: any) {
  return (
    <>
      {
        projects.map((proj: any, index: number) => (
          <div className="w-full">
            <ProjectCard name={proj.name} description={proj.description} tags={proj.tags} />
          </div>
        ))
      }
    </>
  );
}
