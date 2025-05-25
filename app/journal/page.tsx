"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { FadeIn, ScrollAnimation, StaggerChildren, StaggerItem } from "@/components/animations"
import { motion, AnimatePresence } from "framer-motion"
import TridentWeaponModel from "@/components/trident-weapon-model"

export default function JournalPage() {
  const [selectedItem, setSelectedItem] = useState(null)

  // DIRECTLY EDIT THESE BLOG POSTS - Changes will be reflected when you deploy
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
      image: "https://i.ibb.co/cKpj0gBM/council.jpg",
      content: `
      <h2>Just a CAIE and Council Dump</h2>
      <p>Okay so it's not that bad. But here's the thing — I wasn't stressed about the exams, and because of that, I got stressed. Make it make sense. My friends were having breakdowns, losing sleep, skipping meals, meanwhile I was living like a Victorian child post-plague: 12 hours of sleep, three fat meals, and zero regrets. Food is my only hobby atp (and I think it's visibly obvious).</p>
      
      <h3>Study Plan? Nah</h3>
      <p>Did I study? Not really for the mocks but I locked in for CAIES though. Especially not for History because Rocky got injured the day before my mocks and obviously I had to turn into a vet-slash-emotional support provider. Geo was good though because it's actually fun. Past papers go meow. Islamiyat? Mid. I don't hate it, I don't love it, I just coexist with it. Paper 1 is fine. Been there, done that. But Paper 2? It's terrifying. I don't even know why. The battles scare me and I don't want to talk about it.</p>
      
      <p>If there's one thing this syllabus taught me, it's that Sir Abdullah is the GOAT. The rest? Meh. Sir Muzammil just didn't hit this time. Sir Usman is vibing. Sir Jalil's cool too. Now I'm just praying for results because I'd really prefer not to vanish off the face of the academic earth. I'd like to live. Please. If this doesn't work out, I'm applying to Reynash College of Hotel Management and becoming a five-star waiter with a side quest in culinary sadness.</p>

      <p>The post-CAIE feeling is so goofy. I'm updating my website, trying to figure out how I'm already in 11th grade when 9th literally started 5 business minutes ago. Watching my A1 friends (hi Rimmal hi Laiba) suffer in 4K during their exams is such a unique feeling. I don't know if I'm supposed to lay in bed and rot or start prepping for the next CAIE's or what. Chemistry is scary. Physics too. Actually, all sciences are, except CS and ICT. But you know what, even those are scary because I definitely need an A*. Distinction, even :3</p>
      
      <h3>Za Council</h3>
      <p>Now the council sash. It didn't really hit the way I thought it would. I'm sharing the IT Vice position — didn't expect it, but it's not a bad thing. I'll get to focus on events and other nonsense without having to juggle everything alone. I think the build-up to the interview made it feel way bigger than it turned out to be. But at the end of the day, I know I'm lucky. A lot of people didn't get positions at all. So I'm learning to appreciate what I've got. Maybe when the new year starts, it'll feel more real. Maybe the sash has some meaning after all.</p>

      <p>Anyway, that's it for today. Time to go contemplate life and eat cereal straight from the box like a functioning human being.</p>
      `,
    },
    {
      id: 2,
      title: "Savoury Sixteen",
      excerpt: "Not as I expected, at all..",
      date: "13 October, 2024",
      readTime: "3 min read",
      tags: ["💩", "Why", "Proetry"],
      type: "blog",
      // Using a placeholder image URL that should work anywhere
      image: "https://i.ibb.co/HLRw45dj/birthday.jpg",
      content: `
      <h2>Just You</h2>
      <p>It begins in silence-<br />
      a flicker in the dark, a body not yet a body,<br />
      a whisper of something that will one day breathe.<br /></p>

      <p>There is no choice in the matter.<br />
      No asking, no agreement.<br />
      One moment, there is nothing.<br />
      And then, there is flesh.<br />
      And then, there is life.<br /></p>

      <p>The world opens like an unfinished poem.<br />
      There is warmth in hands too big to hold.<br />
      There is laughter, careless and loud.<br />
      There are names that feel like home.<br />
      And for a while, this is enough.<br />
      For a while, the world is gold-tipped and weightless.<br /></p>

      <p>But even the softest light stretches long shadows.<br /></p>

      <p>A face that once fit into the quiet of night<br />
      becomes unfamiliar in the morning.<br />
      A voice that once carried meaning<br />
      becomes background noise in a crowded room.<br />
      Laughter turns into echoes,<br />
      and the hands that once swore never to let go<br />
      loosen their grip,<br />
      finger by finger,<br />
      until there is only air where there was once belonging.<br /></p>

      <p>Even stone statues fade beneath the rain.<br />
      Even cathedrals turn to dust.<br /></p>

      <p>What is now was not always.<br />
      What is now will not always be.<br />
      A decade ago, love had another name.<br />
      A decade from now, it will wear another face.<br /></p>

      <p>This is the nature of things.<br /></p>

      <p>The river does not ask the rock if it may pass.<br />
      The sky does not mourn the birds that leave in winter.<br />
      Everything moves, everything shifts,<br />
      and the ones who once swore eternity<br />
      find new roads, new hands, new reasons.<br /></p>

      <p>Perhaps it is slow-<br />
      a step backward, then another,<br />
      until distance is measured in silence.<br /></p>

     <p>Or perhaps it is sudden-<br />
      one breath, one blink,<br />
      and the world is rearranged without warning.<br /></p>

      <p>And so, what is left?<br /></p>

      <p>Not the faces once memorized.<br />
      Not the hands once held.<br />
      Not the names whispered in the dark.<br /></p>

      <p>Only the self.<br />
      Only the weight of one’s own breath.<br /></p>

      <p>Because no matter how tightly fingers intertwine,<br />
      no matter how deeply a name is carved into memory,<br />
      the only thing that remains,<br />
      the only thing that carries through,<br />
      is what was there from the beginning.<br /></p>

      <p>And in the end, when the body folds back into the earth,<br />
      when the last light fades from the eyes-<br />
      not much remains.<br /></p>

      <p>Just a body.<br />
      Six feet beneath.<br />
      Alone.<br /></p>
      `,
    },
    {
      id: 4,
      title: "A Sip of Salvation: The Monster That Never Was",
      excerpt: "Please just a sip.",
      date: "18 April, 2025",
      readTime: "4 min read",
      tags: ["Desperate", "Energy Drinks", "Al-Fatah sucks"],
      type: "blog",
      // Using a placeholder image URL that should work anywhere
      image: "https://i.ibb.co/Y7rrH9HV/monster.jpg",
      content: `
      <h2>In the Aisles of Al-Fatah, I Lost My Will to Live</h2>
      <p>There are few things in life that truly test your patience and emotional stability. For some people, it’s heartbreak. For others, it’s failing a test they studied weeks for. But for me, it’s walking into Al-Fatah every single time with a flicker of hope in my heart only to leave crushed and defeated because once again, there is no Monster Energy drink in sight.</p>

      <p>I have been on this journey for over a month now. Saving extra money on the side. Holding back from buying snacks I don’t need. Skipping random bubble gums at the checkout counter. I have even sacrificed my impulse to buy stationery I know I won’t use. All for one goal. One can. One single sip of Monster. I don’t care what flavor it is. I don’t care if it’s warm. I don’t even care if it’s slightly expired. I just want to try it. Just once. Please.</p>

      <p>The universe, however, has a different kind of humor. Every time I have money in my pocket, I rush to Al-Fatah hoping this is finally the moment. This is the scene where the hero achieves what they’ve been chasing all along. But no. All I find is Prime staring back at me like a disappointment I never asked for. Prime is overhyped and it tastes like sweet regret. Red Bull is always there, looking smug and reliable. And yes, I love Red Bull. It’s goated. I will not disrespect it. But I do not want mango Red Bull. I do not want coconut or fig or some limited edition sugar-free glow-in-the-dark version. I want Monster.</p>

      <h3>Financially indisposed</h3>

      <p>Now, here’s the plot twist. On the rare days I have spotted Monster in Al-Fatah, do you know what happens? I’m broke. I’m beyond broke. I’m scraping coins from jacket pockets and pretending I don’t need anything while my heart weeps. The Monster sits there, chilling in the fridge like it knows I can’t have it. It stares at me. I stare back. And then I walk away slowly as if leaving behind a piece of my soul.</p>

      <p>It’s a never-ending cycle. When I have the money, there is no Monster. When there is Monster, I have no money. I’ve started thinking maybe Monster isn’t even real. Maybe it’s a collective hallucination. Maybe it’s like the mirage you see in the desert when you’re dying of thirst. It appears just to vanish.</p>

      <p>At this point, I don’t want a full can. I don’t want to chug it. I just want one sip. Just a little taste. Just to know what I’ve been missing all this time. That’s it. I’m not greedy. I’m just tired. I’m so tired. Please, if anyone out there hears me, give me a sip. Just one sip of Monster. Any flavor. Any kind. Any condition. I don’t even care if it’s flat. I just want to know what it feels like to win.</p>

     `,
    },
  ]

  // DIRECTLY EDIT THESE PHOTOS - Changes will be reflected when you deploy
  const photos = [
    {
      id: 1,
      title: "Tuff Baby",
      description: "I was a cool baby vro",
      date: "2011",
      type: "photo",
      // Using a placeholder image URL that should work anywhere
      image: "https://i.ibb.co/WvdHD3v3/Tuff-Baby.jpg",
    },
    {
      id: 2,
      title: "NOO MI PULL TAB",
      description: "MI REDBULL PULL TAB GAWN",
      date: "30 April, 2025",
      type: "photo",
      // Using a placeholder image URL that should work anywhere
      image: "https://i.ibb.co/1G7fdBdG/redbull.jpg",
    },
    {
      id: 3,
      title: "Good Shopping haul",
      description: "They gave the burnt piece tho",
      date: "2 April, 2025",
      type: "photo",
      // Using a placeholder image URL that should work anywhere
      image: "https://i.ibb.co/XxCH22Q7/rocky.jpg",
    },
    {
      id: 4,
      title: "Handsome boi",
      description: "He checking himself out",
      date: "11 April, 2025",
      type: "photo",
      // Using a placeholder image URL that should work anywhere
      image: "https://i.ibb.co/rDtHhyP/rocky1.jpg",
    },
  ]

  // DIRECTLY EDIT THESE THOUGHTS - Changes will be reflected when you deploy
  const randomThoughts = [
    {
      id: 1,
      content: "Need good drink recommendations tang doesn't hit anymore </3",
      date: "May 12, 2025",
      type: "thought",
    },
    {
      id: 2,
      content:
        "AH HELL NAH WHERE THE HEXTECH CHESTS AT DUDE I JUST CAME HERE AFTER 6 MONTHS WHERE MY CHESTS AT I WANTED PULSEFIRE CAIT NAURRURURURURUR",
      date: "May 8, 2025",
      type: "thought",
    },
    {
      id: 3,
      content: "I will force Rimmal to watch me eat mushy peas coated in cinnamon.",
      date: "April 30, 2025",
      type: "thought",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-28">
      <FadeIn>
        {/* EDIT THIS TEXT DIRECTLY */}
        <h1 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl glitch">
         Midnight <span className="text-teal-400">Journal</span>
        </h1>
        {/* EDIT THIS TEXT DIRECTLY */}
        <p className="mb-16 text-center text-xl text-gray-400 code-text">
         A collection of rants, cursed content, and sleep-disrupting nonsense. You're welcome.
        </p>
      </FadeIn>

      <ScrollAnimation>
        <Tabs defaultValue="blog" className="mb-16">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-4 bg-transparent p-1">
            <TabsTrigger value="all" className="tab-button">
              All
            </TabsTrigger>
            <TabsTrigger value="blog" className="tab-button">
              Blog
            </TabsTrigger>
            <TabsTrigger value="photos" className="tab-button">
              Photos
            </TabsTrigger>
            <TabsTrigger value="thoughts" className="tab-button">
              Thoughts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {[...blogPosts, ...photos, ...randomThoughts]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((item) => (
                  <StaggerItem key={item.id}>{renderCard(item, setSelectedItem)}</StaggerItem>
                ))}
            </StaggerChildren>
          </TabsContent>

          <TabsContent value="blog" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {blogPosts.map((post) => (
                <StaggerItem key={post.id}>{renderCard(post, setSelectedItem)}</StaggerItem>
              ))}
            </StaggerChildren>
          </TabsContent>

          <TabsContent value="photos" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {photos.map((photo) => (
                <StaggerItem key={photo.id}>{renderCard(photo, setSelectedItem)}</StaggerItem>
              ))}
            </StaggerChildren>
          </TabsContent>

          <TabsContent value="thoughts" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {randomThoughts.map((thought) => (
                <StaggerItem key={thought.id}>{renderCard(thought, setSelectedItem)}</StaggerItem>
              ))}
            </StaggerChildren>
          </TabsContent>
        </Tabs>
      </ScrollAnimation>

      <FadeIn className="mx-auto my-24 max-w-lg rounded-xl border border-teal-500/30 bg-gray-900/50 p-8 text-center">
        <div className="h-80">
          <TridentWeaponModel className="h-full w-full" />
        </div>
        {/* EDIT THIS TEXT DIRECTLY */}
        <h3 className="mb-4 text-2xl font-medium text-white terminal-text">More content coming soon!</h3>
        {/* EDIT THIS TEXT DIRECTLY */}
        <p className="text-lg text-gray-400">
          I'm jobless so this section is constantly updated the most! Check again later for another update :3
        </p>
      </FadeIn>

      {/* Full Item Slide-In */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 p-4 md:p-8"
          >
            <div className="mx-auto max-w-4xl">
              <Button
                onClick={() => setSelectedItem(null)}
                variant="ghost"
                className="mb-6 flex items-center text-teal-400"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back
              </Button>

              {selectedItem.type === "blog" ? (
                <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-8">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-3xl font-bold text-white">{selectedItem?.title}</h2>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {selectedItem?.date}
                      </span>
                      {selectedItem?.readTime && (
                        <span className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {selectedItem?.readTime}
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedItem?.tags && (
                    <div className="mb-8 flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-teal-500/50 text-teal-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div
                    className="prose prose-invert prose-teal max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedItem?.content }}
                  />
                </div>
              ) : selectedItem.type === "photo" ? (
                <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-8">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-3xl font-bold text-white">{selectedItem?.title}</h2>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {selectedItem?.date}
                      </span>
                    </div>
                  </div>

                  {/* Using regular HTML img tag for full-size photo */}
                  <div className="relative w-full mb-6">
                    <img
                      src={selectedItem.image || "https://placehold.co/800x600/333/teal?text=Full+Photo"}
                      alt={selectedItem.title}
                      className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                    />
                  </div>

                  <p className="text-xl text-gray-300 terminal-text">{selectedItem?.description}</p>
                </div>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function renderCard(item: any, setSelectedPost: any) {
  if (item.type === "blog") {
    return (
      <Card
        key={item.id}
        className="border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50 hover:-translate-y-2 duration-300"
      >
        <div className="relative h-48 w-full">
          {/* Using regular HTML img tag for blog thumbnail */}
          <img
            src={item.image || "https://placehold.co/600x400/333/teal?text=Blog+Post"}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
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
          <Button variant="link" className="px-0 text-teal-400" onClick={() => setSelectedPost(item)}>
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
        className="overflow-hidden border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50 hover:-translate-y-2 duration-300 cursor-pointer"
        onClick={() => setSelectedPost(item)}
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
