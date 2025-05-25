"use client"

import HappySun from "@/components/happy-sun"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react"
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  ScrollAnimation,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations"
import { motion } from "framer-motion"

export default function AboutPage() {
  // DIRECTLY EDIT THESE SKILLS - Changes will be reflected when you deploy
  const skills = [
    { name: "Python", level: 55 },
    { name: "C++", level: 10 },
    { name: "JavaScript", level: 50 },
    { name: "React", level: 40 },
    { name: "HTML/CSS", level: 80 },
    { name: "Database Management", level: 0.1 },
    { name: "Robotics", level: 60 },
    { name: "Machine Learning", level: 15 },
  ]

  // DIRECTLY EDIT THESE INTERESTS - Changes will be reflected when you deploy
  const interests = [
    "Robotics",
    "Coding Competitions",
    "Open Source",
    "Catto",
    "Game Development",
    "Cybersecurity",
    "Brainrot",
    "AI/ML",
  ]

  return (
    <div className="container mx-auto px-4 py-28">
      <FadeIn>
        {/* EDIT THIS TEXT DIRECTLY */}
        <h1 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl glitch">
          About <span className="text-teal-400">Me</span>
        </h1>
      </FadeIn>

      <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-2">
        <SlideInLeft className="flex flex-col justify-center">
          <div className="h-full flex flex-col">
            {/* EDIT THIS TEXT DIRECTLY */}
            <h2 className="mb-8 text-2xl md:text-3xl font-semibold neon-highlight inline-block text-center md:text-left w-full">
              What's my lore again?
            </h2>
            <div className="code-block flex-grow">
              {/* EDIT THIS TEXT DIRECTLY */}
              <p className="mb-6 text-xl leading-relaxed text-gray-300">
                I'm an enthusiastic (occasionally) <span className="neon-highlight">IT student</span> with a passion for
                technology and innovation. My journey in the tech world started with simple coding projects and the
                thirst for <span className="neon-highlight">money</span>, and has evolved into a deep exploration of
                various tech domains.
              </p>
              {/* EDIT THIS TEXT DIRECTLY */}
              <p className="mb-6 text-xl leading-relaxed text-gray-300">
                Currently pursuing my O Levels in Sciences at LGS OPF, I'm constantly{" "}
                <span className="neon-highlight">learning</span> and experimenting with new technologies to expand my
                skill set and desperately try to outrun this turbo-charged hamster wheel of progress before it leaves
                you coding in ancient Greek.
              </p>
              {/* EDIT THIS TEXT DIRECTLY */}
              <p className="text-xl leading-relaxed text-gray-300">
                My goal is to become a versatile <span className="neon-highlight">Rich IT professional</span> who can
                bridge the gap between theoretical knowledge and practical applications, creating solutions that make a
                difference in my <span className="neon-highlight">bank account</span>.
              </p>
            </div>
          </div>
        </SlideInLeft>

        <SlideInRight className="relative flex items-center justify-center">
          <div className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 blur-3xl" />
          <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border border-teal-500/30 bg-gray-900/50 p-8 flex flex-col">
            {/* Happy Sun display - HIDDEN ON MOBILE */}
            <div className="flex-grow flex items-center justify-center">
              <div className="hidden md:block md:w-[220px] md:h-[220px]">
                <HappySun className="w-full h-full" />
              </div>
              <div className="block md:hidden text-center">
                <h3 className="text-xl font-medium text-teal-400 mb-2">Future Plans</h3>
                <p className="text-gray-300 text-sm">Aiming for top universities in the U.S. or Canada</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              {/* EDIT THIS TEXT DIRECTLY */}
              <h3 className="text-2xl font-medium text-white terminal-text hidden md:block">Here comes the Sun</h3>
              {/* EDIT THIS TEXT DIRECTLY */}
              <p className="mt-4 text-lg text-gray-400">
                I plan to shoot my shot at top universities in the U.S. or Canada — you know, casual names like MIT, the
                University of Toronto, or Waterloo — all while hoping my SAT scores look less like my screen brightness
                at 2 a.m. The goal? Expand my knowledge, cry through some academic challenges, and maybe walk out with a
                future that's not held together by caffeine and prayer.
              </p>
            </div>
          </div>
        </SlideInRight>
      </div>

      {/* CV Content */}
      <ScrollAnimation className="mb-16">
        {/* Header without download button */}
        <div className="mb-12">
          {/* EDIT THIS TEXT DIRECTLY */}
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Curriculum <span className="text-teal-400">Vitae</span>
          </h2>
        </div>

        {/* Personal Info Card */}
        <Card className="mb-12 border-gray-800 bg-gray-900/50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="col-span-2 md:flex md:gap-6 md:items-center">
                {/* Profile Image for Desktop only - centered horizontally */}
                <div className="hidden md:flex md:justify-center">
                  <div className="w-48 h-48 rounded-full border-4 border-teal-500/50 overflow-hidden">
                    {/* REPLACE THIS URL WITH YOUR PROFILE PICTURE URL */}
                    <img
                      src="https://i.ibb.co/gLxvB64M/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  {/* EDIT THIS TEXT DIRECTLY */}
                  <h3 className="text-3xl font-bold text-white">Hiba Waheed Chaudhry</h3>
                  <h4 className="mb-6 text-2xl text-teal-400">IT Student & Developer</h4>
                  <p className="mb-6 text-xl leading-relaxed text-gray-300 terminal-text">
                    Passionate IT student with a strong foundation in programming, web development, and problem-solving.
                    Seeking opportunities to apply my technical skills in real-world projects and continue growing as a
                    developer.
                  </p>
                  <div className="flex flex-wrap gap-4 md:gap-6">
                    <div className="flex items-center text-sm md:text-lg text-gray-300 w-full md:w-auto">
                      <Mail className="mr-2 h-5 w-5 text-teal-400 flex-shrink-0" />
                      <span className="truncate">hiba.waheed.pk@gmail.com</span>
                    </div>
                    <div className="flex items-center text-sm md:text-lg text-gray-300 w-full md:w-auto">
                      <Phone className="mr-2 h-5 w-5 text-teal-400 flex-shrink-0" />
                      <span>+92 336 7325078</span>
                    </div>
                    <div className="flex items-center text-sm md:text-lg text-gray-300 w-full md:w-auto">
                      <MapPin className="mr-2 h-5 w-5 text-teal-400 flex-shrink-0" />
                      <span>Lahore, PK</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                {/* GITHUB BUTTON - Replace the URL in the onClick handler with your actual GitHub URL */}
                <div
                  className="flex items-center gap-2 border border-gray-700 rounded-md p-3 cursor-pointer hover:bg-gray-800/50 transition-colors"
                  onClick={() => window.open("https://github.com/hibawaheed", "_blank")}
                >
                  <Github className="h-5 w-5 flex-shrink-0 text-teal-400" />
                  <span className="truncate text-gray-300">github.com/hibawaheed</span>
                </div>

                {/* LINKEDIN BUTTON */}
                <div
                  className="flex items-center gap-2 border border-gray-700 rounded-md p-3 cursor-pointer hover:bg-gray-800/50 transition-colors"
                  onClick={() => window.open("https://www.linkedin.com/in/hiba-w-b72978343", "_blank")}
                >
                  <Linkedin className="h-5 w-5 flex-shrink-0 text-teal-400" />
                  <span className="truncate text-gray-300">linkedin.com/in/hibawaheed</span>
                </div>

                {/* WEBSITE BUTTON */}
                <div
                  className="flex items-center gap-2 border border-gray-700 rounded-md p-3 cursor-pointer hover:bg-gray-800/50 transition-colors"
                  onClick={() => window.open("https://www.hibaw.dev/", "_blank")}
                >
                  <Globe className="h-5 w-5 flex-shrink-0 text-teal-400" />
                  <span className="truncate text-gray-300">hibaw.dev</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollAnimation>

      {/* Education */}
      <ScrollAnimation className="mb-16">
        <section>
          {/* EDIT THIS TEXT DIRECTLY */}
          <h3 className="mb-8 text-2xl font-bold text-white terminal-text">Education</h3>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardContent className="p-0">
              <div className="border-b border-gray-800 p-8">
                <div className="mb-4 flex items-center justify-between">
                  {/* EDIT THIS TEXT DIRECTLY */}
                  <h4 className="text-xl font-medium text-white">O levels in Sciences</h4>
                  <Badge className="bg-teal-600/30 px-4 py-2 text-lg text-teal-400">2023 - Present</Badge>
                </div>
                {/* EDIT THIS TEXT DIRECTLY */}
                <div className="mb-4 text-lg text-teal-400">Lahore Grammar School, Senior Girls Campus, OPF</div>
                {/* EDIT THIS TEXT DIRECTLY */}
                <p className="text-base text-gray-300 code-text">
                  Focusing on my IGCSEs while actively participating in co-curricular activities and serving as the Vice
                  President of the IT Society
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </ScrollAnimation>

      {/* Experience */}
      <ScrollAnimation className="mb-16">
        <section>
          {/* EDIT THIS TEXT DIRECTLY */}
          <h3 className="mb-8 text-2xl font-bold text-white terminal-text">Experience</h3>
          <Card className="border-gray-800 bg-gray-900/50">
            <CardContent className="p-0">
              <div className="border-b border-gray-800 p-8">
                <div className="mb-4 flex items-center justify-between">
                  {/* EDIT THIS TEXT DIRECTLY */}
                  <h4 className="text-xl font-medium text-white">Director IT - Grammafest24</h4>
                  <Badge className="bg-teal-600/30 px-4 py-2 text-lg text-teal-400">October 2024</Badge>
                </div>
                {/* EDIT THIS TEXT DIRECTLY */}
                <div className="mb-4 text-lg text-teal-400">LGS OPF</div>
                <ul className="ml-6 list-disc space-y-2 text-base text-gray-300">
                  {/* EDIT THESE ITEMS DIRECTLY */}
                  <li className="code-text">Built and maintained the official Grammafest website</li>
                  <li className="code-text">Managed delegate communication through the website forum</li>
                  <li className="code-text">Contributed to event graphics and visual design</li>
                </ul>
              </div>

              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  {/* EDIT THIS TEXT DIRECTLY */}
                  <h4 className="text-xl font-medium text-white">Category Head - Appventure </h4>
                  <Badge className="bg-teal-600/30 px-4 py-2 text-lg text-teal-400">January 2025</Badge>
                </div>
                {/* EDIT THIS TEXT DIRECTLY */}
                <div className="mb-4 text-lg text-teal-400">PYCST-PYIMS</div>
                <ul className="ml-6 list-disc space-y-2 text-base text-gray-300">
                  {/* EDIT THESE ITEMS DIRECTLY */}
                  <li className="code-text">Led the Appventure category planning and execution at PYCST</li>
                  <li className="code-text">Coordinated with event requirements to design app-based challenges</li>
                  <li className="code-text">Oversaw participant queries and ensured smooth event flow</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </ScrollAnimation>

      {/* Skills Section - DIRECTLY EDIT THE SKILLS ARRAY AT THE TOP */}
      <ScrollAnimation className="mb-24">
        <section>
          {/* EDIT THIS TEXT DIRECTLY */}
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Technical <span className="text-teal-400">Skills</span>
          </h2>
          <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-2" delayStep={0.1}>
            {skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-teal-500/30 transition-all duration-300">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xl font-medium text-white terminal-text">{skill.name}</span>
                    <span className="text-lg text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-gray-700">
                    <motion.div
                      className="h-full bg-teal-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>
      </ScrollAnimation>

      {/* Interests Section - DIRECTLY EDIT THE INTERESTS ARRAY AT THE TOP */}
      <ScrollAnimation className="mb-16">
        <section>
          {/* EDIT THIS TEXT DIRECTLY */}
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            <span className="text-teal-400">Interests</span> & Hobbies
          </h2>
          <StaggerChildren className="flex flex-wrap justify-center gap-4" delayStep={0.05}>
            {interests.map((interest) => (
              <StaggerItem key={interest} direction="x">
                <div className="rounded-full bg-teal-600/30 px-6 py-3 text-lg text-teal-400 hover:bg-teal-600/50 transition-all duration-300">
                  {interest}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>
      </ScrollAnimation>
    </div>
  )
}
