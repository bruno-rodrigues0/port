import { PROJECTS } from "@/constants";
import { Separator } from "../ui/separator";
import ProjectCollapsible from "./projectCollapsible";

export default function Projects() {
  return (
    <section className="border-x border-line pt-8 p-4" id="projects">
      <h2 className="text-4xl font-medium text-balance">Projects<span className="text-base text-muted-foreground align-text-top">({PROJECTS.length})</span> </h2>
      <Separator className="absolute left-0"/>

      <div>
        {PROJECTS.map((project, index) => (
          <ProjectCollapsible key={project.key} project={project} defaultOpen={index == 0 ? true : false}/>
        ))}
      </div>

    </section>
  )
}

