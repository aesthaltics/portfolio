import { createFileRoute } from "@tanstack/react-router"
import { ProjectCard } from "@/components/project-card"
import projects from "@/data/projects.json" with { type: "json" }

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-dvh w-dvw flex-col items-center overflow-x-clip overflow-y-scroll pt-16">
      <h1 className="text-5xl">Projects</h1>
      <div className="flex w-dvw flex-row flex-wrap px-24 pt-16">
        {projects.map((project) => {
          return (
            <ProjectCard
              image={project.image}
              description={project.about}
              url={project.url}
              name={project.name}
            />
          )
        })}
      </div>
    </div>
  )
}
