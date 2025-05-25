import { ArrowRight, Code, Cpu, Database, Server } from "lucide-react"
import TridentWeaponModel from "@/components/trident-weapon-model"
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  ScrollAnimation,
  TextReveal,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations"

export default function HomePage() {
  // DIRECTLY EDIT THESE SKILLS - Changes will be reflected when you deploy
  const skills = [
    {
      icon: <Code className="h-12 w-12 text-teal-400" />,
      title: "Programming",
      description: "Proficient in Python, JavaScript, and exploring new languages.",
    },
    {
      icon: <Server className="h-12 w-12 text-emerald-400" />,
      title: "Web Development",
      description: "Building responsive websites with modern frameworks like React and Next.js or Hostinger",
    },
    {
      icon: <Database className="h-12 w-12 text-green-400" />,
      title: "Databases",
      description: "Working with SQL and NoSQL databases, however I am currently suffering though.",
    },
    {
      icon: <Cpu className="h-12 w-12 text-teal-300" />,
      title: "Robotics",
      description:
        "Experimenting with different microchips such as Arduino and Raspberry pi, with the main goal being to replicate WALL-E",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - DIRECTLY EDIT TEXT HERE */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-teal-950/20 to-black opacity-80" />
          <div className="absolute inset-0 bg-gradient-radial" />
          <div className="absolute inset-0 bg-grid" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-28">
          <div className="flex flex-col-reverse items-center md:items-start justify-between md:flex-row">
            <SlideInLeft className="max-w-xl text-center md:text-left md:pr-4 md:flex-1">
              <TextReveal delay={0.3}>
                <h2 className="mb-8 text-4xl font-bold tracking-tight text-white md:text-6xl">
                  {/* EDIT THIS TEXT DIRECTLY */}
                  <span className="block mb-2 cursor-blink">Hi, I'm </span>
                  <span className="text-gradient">Hiba Waheed</span>
                </h2>
              </TextReveal>
              <FadeIn delay={0.6}>
                <p className="mb-10 text-lg leading-relaxed text-gray-300 code-text">
                  {/* EDIT THIS TEXT DIRECTLY */}
                  Welcome to my digital corner of the internet. I'm an IT student who's into coding, tech, and building
                  things that (hopefully) work. Always exploring new tools, solving problems, and learning as I go.
                </p>
              </FadeIn>
              <FadeIn delay={0.9}>
                <div className="flex flex-wrap justify-center gap-6 md:justify-start">
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700 h-11 px-8 text-base rounded-md"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-md border border-gray-700 bg-transparent px-4 py-2 text-sm font-medium text-teal-400 transition-colors hover:bg-gray-800 h-11 px-8 text-base rounded-md"
                  >
                    View My Work
                  </a>
                </div>
              </FadeIn>
            </SlideInLeft>

            <SlideInRight className="mb-8 md:mb-0 md:flex-1 flex justify-center md:justify-end">
              <TridentWeaponModel className="h-[350px] w-[350px] md:h-[450px] md:w-[450px]" />
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Skills Preview - DIRECTLY EDIT CONTENT ABOVE IN THE SKILLS ARRAY */}
      <section className="bg-gray-950 py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            {/* EDIT THIS TEXT DIRECTLY */}
            <h2 className="mb-16 text-center text-3xl font-bold text-white terminal-text">My Technical Toolkit</h2>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <StaggerItem key={index}>
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 transition-all hover:border-teal-500/50 hover:bg-gray-800/50">
                  <div className="mb-6">{skill.icon}</div>
                  <h3 className="mb-4 text-2xl font-medium text-white">{skill.title}</h3>
                  <p className="text-lg text-gray-400">{skill.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  )
}
