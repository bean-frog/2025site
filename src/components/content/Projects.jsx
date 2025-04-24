import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
      <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <ProjectCard title="Pi-Neopixel 2" description="Control Neopixel LEDs over HTTP with a Raspberry Pi" links={{"github": "https://github.com/bean-frog/pi-neopixel-2"}} languages={["Javascript"]} />
        <ProjectCard title="Text Adventure" description="Choose-your-own-adventure game creator" links={{"github": "https://github.com/bean-frog/text-adventure"}} languages={["Rust", "Javascript"]} />
        <ProjectCard title="Lambda Client" description="Game client for Deadshot.io adding several vanity and social features" links={{"github": "https://github.com/lambda-deadshot/lambda-client"}} languages={["Javascript"]} />
        <ProjectCard title="Rust Utils" description="Collection of small utility programs written in Rust" links={{"github": "https://github.com/bean-frog/rust-utils"}} languages={["Rust"]} />
        <ProjectCard title="Mimir" description="Search for papers across a few different journals" links={{"github": "https://github.com/bean-frog/mimir", "url": "https://mimir.beanfrog.xyz"}} languages={["Javascript"]} />
        <ProjectCard title="Arduino DMX" description="Monorepo of DMX-related Arduino sketches" links={{"github": "https://github.com/bean-frog/arduino-dmx"}} languages={["C++"]} />
      </div>
  )
}
