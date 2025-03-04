import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
      <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ProjectCard title="title" description="description" links={{"github": "https://github.com/bean-frog", "url": "https://beanfrog.xyz"}} languages={["Javascript", "Typescript", "Python"]} />
      </div>
  )
}
