import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock } from "lucide-react"
import MinecraftCharacterModel from "@/components/minecraft-character"

export default function StuffPage() {
  const blogPosts = [
    {
      id: 1,
      title: "My First Hackathon Experience",
      excerpt: "Last weekend, I participated in my first-ever hackathon. Here's what I learned and built...",
      date: "May 10, 2025",
      readTime: "5 min read",
      tags: ["Hackathon", "Coding", "Experience"],
      type: "blog",
    },
    {
      id: 2,
      title: "Building a Smart Home System with Raspberry Pi",
      excerpt: "I've been working on a DIY smart home system using Raspberry Pi. Here's my progress so far...",
      date: "April 28, 2025",
      readTime: "8 min read",
      tags: ["IoT", "Raspberry Pi", "Project"],
      type: "blog",
    },
    {
      id: 3,
      title: "My Favorite Programming Languages in 2025",
      excerpt: "As a student, I've experimented with various programming languages. Here are my top picks and why...",
      date: "April 15, 2025",
      readTime: "6 min read",
      tags: ["Programming", "Languages", "Opinion"],
      type: "blog",
    },
  ]

  const photos = [
    {
      id: 1,
      title: "Campus Robotics Lab",
      description: "Working on our semester project in the robotics lab",
      date: "May 5, 2025",
      type: "photo",
      // Added image path in the correct format
      image: "/images/blog/robotics-lab.jpg",
    },
    {
      id: 2,
      title: "Coding Competition",
      description: "Our team at the regional coding competition",
      date: "April 20, 2025",
      type: "photo",
      // Added image path in the correct format
      image: "/images/blog/coding-competition.jpg",
    },
    {
      id: 3,
      title: "New Tech Setup",
      description: "Finally upgraded my development environment",
      date: "April 2, 2025",
      type: "photo",
      // Added image path in the correct format
      image: "/images/blog/tech-setup.jpg",
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
      <h1 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
        My <span className="text-teal-400">Stuff</span>
      </h1>
      <p className="mb-16 text-center text-xl text-gray-400">
        A collection of random thoughts, blog posts, photos, and more
      </p>

      <Tabs defaultValue="all" className="mb-16">
        <TabsList className="mx-auto grid w-full max-w-md grid-cols-4 bg-gray-900 p-1">
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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[...blogPosts, ...photos, ...randomThoughts]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((item) => renderCard(item))}
          </div>
        </TabsContent>

        <TabsContent value="blog" className="mt-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => renderCard(post))}
          </div>
        </TabsContent>

        <TabsContent value="photos" className="mt-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => renderCard(photo))}
          </div>
        </TabsContent>

        <TabsContent value="thoughts" className="mt-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {randomThoughts.map((thought) => renderCard(thought))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mx-auto my-24 max-w-lg rounded-xl border border-teal-500/30 bg-gray-900/50 p-8 text-center">
        <MinecraftCharacterModel className="h-64 w-full" />
        <h3 className="mb-4 text-2xl font-medium text-white">More content coming soon!</h3>
        <p className="text-lg text-gray-400">
          I'm constantly adding new content to this section. Check back later for more updates!
        </p>
      </div>
    </div>
  )
}

function renderCard(item: any) {
  if (item.type === "blog") {
    return (
      <Card key={item.id} className="border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50">
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
          <p className="text-lg text-gray-300">{item.excerpt}</p>
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
        className="overflow-hidden border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50"
      >
        <div className="relative h-56 w-full">
          {/* Using regular HTML img tag for photo thumbnail */}
          <img
            src={item.image || "/placeholder.svg?height=400&width=600&text=Photo"}
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
          <p className="text-lg text-gray-300">{item.description}</p>
        </CardContent>
      </Card>
    )
  }

  if (item.type === "thought") {
    return (
      <Card key={item.id} className="border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50">
        <CardHeader className="p-6">
          <div className="flex items-center text-base text-gray-400">
            <Calendar className="mr-2 h-4 w-4" />
            {item.date}
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <p className="text-xl text-gray-300">"{item.content}"</p>
        </CardContent>
      </Card>
    )
  }

  return null
}
