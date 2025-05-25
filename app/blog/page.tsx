import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock } from "lucide-react"
import MinecraftCharacterModel from "@/components/minecraft-character"
import { FadeIn, ScrollAnimation, StaggerChildren, StaggerItem } from "@/components/animations"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Just a CAIE and Council Dump",
      excerpt: "I don't like this bro Icl ts Pmo 💔💔",
      date: "May 17, 2025",
      readTime: "3.3 min read",
      tags: ["Suffering", "Acceptance", "Naur"],
      type: "blog",
      // Using a placeholder image URL that should work anywhere
      image: "https://placehold.co/600x400/333/teal?text=CAIE+Council+Dump",
    },
    {
      id: 2,
      title: "Building a Smart Home System with Raspberry Pi",
      excerpt: "I've been working on a DIY smart home system using Raspberry Pi. Here's my progress so far...",
      date: "April 28, 2025",
      readTime: "8 min read",
      tags: ["IoT", "Raspberry Pi", "Project"],
      type: "blog",
      // Using a placeholder image URL that should work anywhere
      image: "https://placehold.co/600x400/333/teal?text=Raspberry+Pi+Project",
    },
    {
      id: 3,
      title: "My Favorite Programming Languages in 2025",
      excerpt: "As a student, I've experimented with various programming languages. Here are my top picks and why...",
      date: "April 15, 2025",
      readTime: "6 min read",
      tags: ["Programming", "Languages", "Opinion"],
      type: "blog",
      // Using a placeholder image URL that should work anywhere
      image: "https://placehold.co/600x400/333/teal?text=Programming+Languages",
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development...",
      date: "April 5, 2025",
      readTime: "7 min read",
      tags: ["Web Dev", "Future", "Trends"],
      type: "blog",
      // Using a placeholder image URL that should work anywhere
      image: "https://placehold.co/600x400/333/teal?text=Web+Development+Future",
    },
    {
      id: 5,
      title: "Getting Started with Machine Learning",
      excerpt: "A beginner's guide to understanding and implementing basic machine learning concepts...",
      date: "March 22, 2025",
      readTime: "10 min read",
      tags: ["ML", "AI", "Tutorial"],
      type: "blog",
      // Using a placeholder image URL that should work anywhere
      image: "https://placehold.co/600x400/333/teal?text=Machine+Learning",
    },
    {
      id: 6,
      title: "My Journey Learning React",
      excerpt: "The challenges, breakthroughs, and resources that helped me master React...",
      date: "March 10, 2025",
      readTime: "6 min read",
      tags: ["React", "JavaScript", "Learning"],
      type: "blog",
      // Using a placeholder image URL that should work anywhere
      image: "https://placehold.co/600x400/333/teal?text=Learning+React",
    },
  ]

  const photos = [
    {
      id: 1,
      title: "Campus Robotics Lab",
      description: "Working on our semester project in the robotics lab",
      date: "May 5, 2025",
      type: "photo",
      // Using a placeholder image URL that should work anywhere
      image: "https://placehold.co/600x400/333/teal?text=Robotics+Lab",
    },
    {
      id: 2,
      title: "Coding Competition",
      description: "Our team at the regional coding competition",
      date: "April 20, 2025",
      type: "photo",
      // Using a placeholder image URL that should work anywhere
      image: "https://placehold.co/600x400/333/teal?text=Coding+Competition",
    },
    {
      id: 3,
      title: "New Tech Setup",
      description: "Finally upgraded my development environment",
      date: "April 2, 2025",
      type: "photo",
      // Using a placeholder image URL that should work anywhere
      image: "https://placehold.co/600x400/333/teal?text=Tech+Setup",
    },
  ]

  const randomThoughts = [
    {
      id: 1,
      content: "Just discovered a cool new VS Code extension that's changing my workflow completely!",
      date: "May 12, 2025",
      type: "thought",
    },
    {
      id: 2,
      content:
        "Hot take: Python is still the best language for beginners, but TypeScript should be their second language.",
      date: "May 8, 2025",
      type: "thought",
    },
    {
      id: 3,
      content: "Spent the whole night debugging what turned out to be a missing semicolon. Classic programmer moment.",
      date: "April 30, 2025",
      type: "thought",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-28">
      <FadeIn>
        <h1 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl glitch">
          My <span className="text-teal-400">Blog</span>
        </h1>
        <p className="mb-16 text-center text-xl text-gray-400 code-text">
          A collection of articles, thoughts, photos, and more
        </p>
      </FadeIn>

      <ScrollAnimation>
        <Tabs defaultValue="blog" className="mb-16">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-4 bg-transparent p-1">
            <TabsTrigger value="all" className="rounded-lg py-3 text-lg">
              All
            </TabsTrigger>
            <TabsTrigger value="blog" className="rounded-lg py-3 text-lg">
              Blog
            </TabsTrigger>
            <TabsTrigger value="photos" className="rounded-lg py-3 text-lg">
              Photos
            </TabsTrigger>
            <TabsTrigger value="thoughts" className="rounded-lg py-3 text-lg">
              Thoughts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {[...blogPosts, ...photos, ...randomThoughts]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((item) => (
                  <StaggerItem key={item.id}>{renderCard(item)}</StaggerItem>
                ))}
            </StaggerChildren>
          </TabsContent>

          <TabsContent value="blog" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {blogPosts.map((post) => (
                <StaggerItem key={post.id}>{renderCard(post)}</StaggerItem>
              ))}
            </StaggerChildren>
          </TabsContent>

          <TabsContent value="photos" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {photos.map((photo) => (
                <StaggerItem key={photo.id}>{renderCard(photo)}</StaggerItem>
              ))}
            </StaggerChildren>
          </TabsContent>

          <TabsContent value="thoughts" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {randomThoughts.map((thought) => (
                <StaggerItem key={thought.id}>{renderCard(thought)}</StaggerItem>
              ))}
            </StaggerChildren>
          </TabsContent>
        </Tabs>
      </ScrollAnimation>

      <FadeIn className="mx-auto my-24 max-w-lg rounded-xl border border-teal-500/30 bg-gray-900/50 p-8 text-center">
        <MinecraftCharacterModel className="h-64 w-full" />
        <h3 className="mb-4 text-2xl font-medium text-white terminal-text">More content coming soon!</h3>
        <p className="text-lg text-gray-400">
          I'm constantly adding new content to this section. Check back later for more updates!
        </p>
      </FadeIn>
    </div>
  )
}

function renderCard(item: any) {
  if (item.type === "blog") {
    return (
      <Card
        key={item.id}
        className="border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50 hover:-translate-y-2 duration-300"
      >
        {item.image && (
          <div className="relative h-56 w-full">
            {/* Using regular HTML img tag for blog thumbnail */}
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader className="p-6">
          <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
          <div className="flex flex-wrap gap-3 text-base text-gray-400">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {item.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {item.readTime}
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-4">
          <p className="text-lg text-gray-300 terminal-text">{item.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="border-teal-500/50 text-teal-400">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6">
          <Button variant="link" className="px-0 text-teal-400">
            Read more
          </Button>
        </CardFooter>
      </Card>
    )
  }

  if (item.type === "photo") {
    return (
      <Card
        key={item.id}
        className="overflow-hidden border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50 hover:-translate-y-2 duration-300"
      >
        <div className="relative h-56 w-full">
          {/* Using regular HTML img tag for photo thumbnail */}
          <img
            src={item.image || "https://placehold.co/600x400/333/teal?text=Photo"}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <CardHeader className="p-6">
          <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
          <div className="flex items-center text-base text-gray-400">
            <Calendar className="mr-2 h-4 w-4" />
            {item.date}
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <p className="text-lg text-gray-300 terminal-text">{item.description}</p>
        </CardContent>
      </Card>
    )
  }

  if (item.type === "thought") {
    return (
      <Card
        key={item.id}
        className="border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50 hover:-translate-y-2 duration-300"
      >
        <CardHeader className="p-6">
          <div className="flex items-center text-base text-gray-400">
            <Calendar className="mr-2 h-4 w-4" />
            {item.date}
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <p className="text-xl text-gray-300 code-text">"{item.content}"</p>
        </CardContent>
      </Card>
    )
  }

  return null
}
