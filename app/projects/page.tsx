"use client"
import { Calendar, Github } from "lucide-react"
import CatFace from "@/components/cat-face"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations"

export default function ProjectsPage() {
  // DIRECTLY EDIT THESE PROJECTS - Changes will be reflected when you deploy
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "Designed and developed a personal portfolio website using Next.js, Tailwind CSS, and Three.js for 3D elements.",
      // Using a placeholder image URL that should work anywhere
      image: "https://i.ibb.co/wZCCcG7G/image.png",
      date: "May 2025",
      tags: ["Next.js", "Tailwind CSS", "Three.js"],
      links: {
        github: "https://github.com/hibawaheed/",
      },
    },
    {
      id: 2,
      title: "LUMS PSIFI - Godot",
      description: "An overnight project made for the final round of Techwars at LUMSPSIFI 2024",
      // Using a placeholder image URL that should work anywhere
      image: "https://i.ibb.co/twKxg8Zf/game.png",
      date: "December 2024",
      tags: ["Godot", "2D"],
      links: {
        github: "https://github.com/hibawaheed/godot-lumspsifi",
      },
    },
  ]

  // DIRECTLY EDIT THESE SECTION TITLES - Changes will be reflected when you deploy
  const hero = {
    title: "My Projects",
    subtitle: "A collection of my best work.",
  }

  // DIRECTLY EDIT THIS CAT SECTION - Changes will be reflected when you deploy
  const catSection = {
    title: "Greedy Rocky",
    description: "A 3D Mouse tracking model, that rocky does not approve of.",
  }

  return (
    <div className="container mx-auto px-4 py-28">
      {/* Hero Section with Heading - Added back as requested */}
      <FadeIn>
        <h1 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl glitch">
          My <span className="text-teal-400">Projects</span>
        </h1>
        <p className="mb-16 text-center text-xl text-gray-400 code-text">{hero.subtitle}</p>
      </FadeIn>

      {/* Cat Face Section */}
      <FadeIn className="mb-16 rounded-2xl border border-teal-500/30 bg-gray-900/50 p-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">{catSection.title}</h2>
        <p className="mb-8 text-center text-lg text-gray-400 terminal-text">{catSection.description}</p>
        <CatFace />
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3" delayStep={0.1}>
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50 hover:-translate-y-2 duration-300">
              <div className="relative h-48 w-full">
                {/* Using regular HTML img tag for project thumbnail */}
                <img
                  src={project.image || "https://placehold.co/600x400/333/teal?text=Project+Image"}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center text-gray-400">
                  <Calendar className="mr-2 h-4 w-4" />
                  {project.date}
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mb-6 text-gray-300 terminal-text">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-teal-500/50 px-3 py-1 text-sm text-teal-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="inline-flex items-center text-teal-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-1 h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  )
}
