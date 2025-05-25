"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { FadeIn, ScrollAnimation, StaggerChildren, StaggerItem } from "@/components/animations"
import { motion, AnimatePresence } from "framer-motion"
import TridentWeaponModel from "@/components/trident-weapon-model"

export default function JournalClientPage() {
  const [selectedPost, setSelectedPost] = useState(null)

  // These blog posts are directly editable
  const blogPosts = [
    {
      id: 1,
      title: "Just a CAIE and Council Dump",
      excerpt: "I don't like this bro Icl ts Pmo 💔💔",
      date: "May 17, 2025",
      readTime: "3.3 min read",
      tags: ["Suffering", "Acceptance", "Naur"],
      type: "blog",
      content: `
      <h2>Just a CAIE and Council Dump</h2>
      <p>Okay so it's not that bad. But here's the thing — I wasn't stressed about the exams, and because of that, I got stressed. Make it make sense. My friends were having breakdowns, losing sleep, skipping meals... meanwhile I was living like a Victorian child post-plague: 12 hours of sleep, three fat meals, and zero regrets. Food is my only hobby atp (and I think it's visibly obvious).</p>
      
      <h3>Study Plan? Nah</h3>
      <p>Did I study? Not really. Especially not for History because Rocky got injured the day before my mocks and obviously I had to turn into a vet-slash-emotional support provider. Geo was good though because it's actually fun. Past papers go meow. Islamiyat? Mid. I don't hate it, I don't love it, I just coexist with it. Paper 1 is fine. Been there, done that. But Paper 2? It's terrifying. I don't even know why. The battles scare me and I don't want to talk about it.</p>
      
      <p>If there's one thing this syllabus taught me, it's that Sir Abdullah is the GOAT. The rest? Meh. Sir Muzammil just didn't hit this time. Sir Usman is vibing. Sir Jalil's cool too. Now I'm just praying for results because I'd really prefer not to vanish off the face of the academic earth. I'd like to live. Please. If this doesn't work out, I'm applying to Reynash College of Hotel Management and becoming a five-star waiter with a side quest in culinary sadness.</p>

      <p>The post-CAIE feeling is so goofy. I'm updating my website, trying to figure out how I'm already in 11th grade when 9th literally started 5 business minutes ago. Watching my A1 friends (hi Rimmal hi Laiba) suffer in 4K during their exams is such a unique feeling. I don't know if I'm supposed to lay in bed and rot or start prepping for the next CAIE's or what. Chemistry is scary. Physics too. Actually, all sciences are, except CS and ICT. But you know what, even those are scary because I definitely need an A*. Distinction, even :3</p>
      
      <h3>Za Council</h3>
      <p>Now the council sash. It didn't really hit the way I thought it would. I'm sharing the IT Vice position — didn't expect it, but it's not a bad thing. I'll get to focus on events and other nonsense without having to juggle everything alone. I think the build-up to the interview made it feel way bigger than it turned out to be. But at the end of the day, I know I'm lucky. A lot of people didn't get positions at all. So I'm learning to appreciate what I've got. Maybe when the new year starts, it'll feel more real. Maybe the sash has some meaning after all.</p>

      <p>Anyway, that's it for today. Time to go contemplate life and eat cereal straight from the box like a functioning human being.</p>
      
    `,
    },
    {
      id: 2,
      title: "Building a Smart Home System with Raspberry Pi",
      excerpt: "I've been working on a DIY smart home system using Raspberry Pi. Here's my progress so far...",
      date: "April 28, 2025",
      readTime: "8 min read",
      tags: ["IoT", "Raspberry Pi", "Project"],
      type: "blog",
      content: `
      <h2>Building a Smart Home System with Raspberry Pi</h2>
      <p>For the past three months, I've been working on creating my own smart home system using Raspberry Pi as the central hub. This project has been a fantastic way to apply my programming skills to a practical, real-world application while learning about IoT technologies.</p>
      
      <h3>Project Goals</h3>
      <p>I wanted to create a system that would:</p>
      <ul>
        <li>Monitor temperature, humidity, and air quality throughout my apartment</li>
        <li>Control lights and appliances remotely</li>
        <li>Provide security monitoring when I'm away</li>
        <li>Collect and analyze data about my home environment</li>
        <li>Be expandable for future sensors and devices</li>
      </ul>
      
      <h3>Hardware Setup</h3>
      <p>The core of my system includes:</p>
      <ul>
        <li>Raspberry Pi 4 (4GB) as the central controller</li>
        <li>DHT22 temperature and humidity sensors in each room</li>
        <li>MQ-135 air quality sensors in main living areas</li>
        <li>Relay modules for controlling lights and appliances</li>
        <li>PIR motion sensors for presence detection</li>
        <li>ESP8266 modules for wireless communication with distant sensors</li>
      </ul>
      
      <h3>Software Architecture</h3>
      <p>I built the software stack using Python for the backend processing and data collection. Node.js powers the web interface, which allows me to monitor and control everything from my phone or computer. For data storage, I'm using InfluxDB, which is perfect for time-series data from sensors.</p>
      
      <h3>Challenges Faced</h3>
      <p>The project hasn't been without its challenges:</p>
      <ul>
        <li>Power management - ensuring reliable power to all components</li>
        <li>Network reliability - maintaining stable connections between wireless nodes</li>
        <li>Data processing - handling the volume of sensor data efficiently</li>
        <li>Integration with existing devices - making everything work together seamlessly</li>
      </ul>
      
      <h3>Current Status</h3>
      <p>The system is now operational with temperature, humidity, and motion sensing in all rooms. I've automated lighting in the living room and bedroom, and I'm collecting environmental data that's visualized through a Grafana dashboard.</p>
      
      <h3>Next Steps</h3>
      <p>I'm planning to expand the system with:</p>
      <ul>
        <li>Voice control integration using a local speech recognition solution</li>
        <li>Machine learning to predict and optimize energy usage</li>
        <li>Additional security features like door/window sensors</li>
        <li>Integration with my garden irrigation system</li>
      </ul>
      
      <p>This project has been incredibly rewarding, combining my interests in programming, electronics, and automation. I'll post updates as I continue to expand and refine the system!</p>
    `,
    },
    {
      id: 3,
      title: "My Favorite Programming Languages in 2025",
      excerpt: "As a student, I've experimented with various programming languages. Here are my top picks and why...",
      date: "April 15, 2025",
      readTime: "6 min read",
      tags: ["Programming", "Languages", "Opinion"],
      type: "blog",
      content: `
      <h2>My Favorite Programming Languages in 2025</h2>
      <p>As a student and aspiring developer, I've had the opportunity to work with numerous programming languages across different courses and personal projects. Each language has its strengths and ideal use cases, but some have stood out as particularly enjoyable and productive. Here's my current ranking of programming languages in 2025.</p>
      
      <h3>1. Python</h3>
      <p>Python remains my go-to language for a wide range of applications. Its readability and expressiveness make it perfect for quick prototyping, while its extensive ecosystem of libraries supports everything from web development to data science.</p>
      <p>What I love most about Python:</p>
      <ul>
        <li>Clean, readable syntax that feels almost like pseudocode</li>
        <li>Versatility across domains (web, data, AI, automation)</li>
        <li>The incredible scientific computing stack (NumPy, Pandas, SciPy)</li>
        <li>Strong community support and documentation</li>
      </ul>
      
      <h3>2. TypeScript</h3>
      <p>TypeScript has become my preferred language for front-end development. The type safety it adds to JavaScript has saved me countless hours of debugging and made my code more robust.</p>
      <p>Why TypeScript ranks high:</p>
      <ul>
        <li>Type safety with the flexibility of JavaScript</li>
        <li>Excellent tooling and IDE support</li>
        <li>Great for large-scale applications</li>
        <li>Works seamlessly with modern frameworks like React and Next.js</li>
      </ul>
      
      <h3>3. Rust</h3>
      <p>Though it has a steeper learning curve, Rust has become one of my favorites for performance-critical applications. The language's focus on memory safety without garbage collection is revolutionary.</p>
      <p>What makes Rust special:</p>
      <ul>
        <li>Performance comparable to C/C++ with modern safety features</li>
        <li>The borrow checker, which prevents entire classes of bugs</li>
        <li>Expressive type system and pattern matching</li>
        <li>Growing ecosystem for web assembly and systems programming</li>
      </ul>
      
      <h3>4. Go</h3>
      <p>Go (or Golang) has become my choice for backend services that need to be fast and reliable. Its simplicity and focus on maintainability make it a joy to work with.</p>
      <p>Go's strengths:</p>
      <ul>
        <li>Excellent concurrency model with goroutines</li>
        <li>Fast compilation and execution</li>
        <li>Built-in testing and profiling tools</li>
        <li>Simple syntax that's easy to learn and maintain</li>
      </ul>
      
      <h3>5. Kotlin</h3>
      <p>For Android development and JVM-based applications, Kotlin has become my language of choice. It addresses many of Java's pain points while maintaining compatibility.</p>
      <p>Why I enjoy Kotlin:</p>
      <ul>
        <li>More concise and expressive than Java</li>
        <li>Null safety built into the type system</li>
        <li>Excellent interoperability with existing Java code</li>
        <li>Coroutines for asynchronous programming</li>
      </ul>
      
      <h3>Honorable Mentions</h3>
      <p>A few other languages that I enjoy working with:</p>
      <ul>
        <li>Julia - for scientific computing and numerical analysis</li>
        <li>Elixir - for fault-tolerant, distributed systems</li>
        <li>Swift - for iOS development</li>
      </ul>
      
      <p>The best language always depends on the specific task at hand, but having a diverse toolkit allows me to choose the right tool for each job. As I continue my journey in software development, I'm excited to see how these languages evolve and what new ones might emerge in the coming years.</p>
    `,
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development...",
      date: "April 5, 2025",
      readTime: "7 min read",
      tags: ["Web Dev", "Future", "Trends"],
      type: "blog",
      content: `
      <h2>The Future of Web Development</h2>
      <p>Web development continues to evolve at a rapid pace, with new technologies and approaches emerging regularly. As someone passionate about building for the web, I've been researching and experimenting with cutting-edge tools that I believe will shape the future of web development. Here's my perspective on where things are heading.</p>
      
      <h3>AI-Assisted Development</h3>
      <p>AI coding assistants have transformed from simple autocomplete tools to sophisticated pair programmers. These tools now understand context, suggest entire functions, and can even refactor code intelligently. I've been using several AI assistants in my workflow, and they've significantly increased my productivity.</p>
      <p>Key developments in this space:</p>
      <ul>
        <li>Natural language to code translation is becoming remarkably accurate</li>
        <li>AI can now generate not just code snippets but entire components with proper architecture</li>
        <li>Specialized AI tools for debugging and performance optimization</li>
        <li>Collaborative AI that learns from team coding patterns</li>
      </ul>
      
      <h3>WebAssembly Everywhere</h3>
      <p>WebAssembly (WASM) is finally reaching its potential as a platform-agnostic runtime. It's enabling high-performance applications in the browser that were previously impossible.</p>
      <p>Exciting WASM applications:</p>
      <ul>
        <li>Full-featured video editing in the browser</li>
        <li>Complex 3D modeling and CAD software</li>
        <li>Scientific simulations and visualizations</li>
        <li>Cross-platform applications with near-native performance</li>
      </ul>
      
      <h3>Edge Computing</h3>
      <p>The line between frontend and backend continues to blur with the rise of edge computing. Running code at the network edge reduces latency and enables new types of applications.</p>
      <p>Benefits of the edge approach:</p>
      <ul>
        <li>Globally distributed applications with minimal latency</li>
        <li>Reduced server costs through intelligent caching and computation</li>
        <li>Better user experiences, especially in regions with slower internet</li>
        <li>Simplified deployment models with integrated CDN functionality</li>
      </ul>
      
      <h3>Zero-Bundle JavaScript</h3>
      <p>The JavaScript ecosystem is moving toward zero-bundle approaches, where code is served directly from CDNs or via native ES modules. This shift is simplifying build processes and improving performance.</p>
      <p>Key technologies enabling this:</p>
      <ul>
        <li>Import maps for managing dependencies without bundlers</li>
        <li>HTTP/3 and multiplexing for efficient resource loading</li>
        <li>Fine-grained reactivity systems that minimize code transfer</li>
        <li>Browser-native optimization for modern JavaScript</li>
      </ul>
      
      <h3>Immersive Web Experiences</h3>
      <p>WebXR and related technologies are making immersive experiences accessible directly through browsers. Virtual and augmented reality are becoming first-class citizens of the web.</p>
      <p>Emerging immersive web technologies:</p>
      <ul>
        <li>WebXR for cross-platform VR/AR experiences</li>
        <li>Spatial audio APIs for immersive sound</li>
        <li>Hand and body tracking without specialized hardware</li>
        <li>3D commerce and virtual try-on experiences</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>The web platform continues to evolve in exciting ways, becoming more capable, performant, and accessible. As developers, we have an incredible opportunity to create experiences that were once impossible in a browser. I'm particularly excited about the combination of AI-assisted development and WebAssembly, which I believe will unlock new levels of creativity and functionality on the web.</p>
      
      <p>What web technologies are you most excited about? I'd love to hear your thoughts and predictions for the future of web development!</p>
    `,
    },
    {
      id: 5,
      title: "Getting Started with Machine Learning",
      excerpt: "A beginner's guide to understanding and implementing basic machine learning concepts...",
      date: "March 22, 2025",
      readTime: "10 min read",
      tags: ["ML", "AI", "Tutorial"],
      type: "blog",
      content: `
      <h2>Getting Started with Machine Learning</h2>
      <p>Machine learning can seem intimidating at first, but with the right approach, anyone with programming experience can begin exploring this fascinating field. This guide outlines the steps I took to get started with machine learning, from fundamental concepts to building my first models.</p>
      
      <h3>Understanding the Fundamentals</h3>
      <p>Before diving into code, it's important to understand some core concepts:</p>
      <ul>
        <li><strong>Supervised vs. Unsupervised Learning:</strong> Supervised learning uses labeled data to make predictions, while unsupervised learning finds patterns in unlabeled data.</li>
        <li><strong>Classification vs. Regression:</strong> Classification predicts categories (like spam/not spam), while regression predicts continuous values (like house prices).</li>
        <li><strong>Training, Validation, and Test Sets:</strong> Different data subsets used to build and evaluate models.</li>
        <li><strong>Overfitting and Underfitting:</strong> Common problems where models either memorize training data or fail to capture important patterns.</li>
      </ul>
      
      <h3>Essential Tools and Libraries</h3>
      <p>The Python ecosystem offers excellent tools for machine learning:</p>
      <ul>
        <li><strong>NumPy:</strong> For numerical computing and array operations</li>
        <li><strong>Pandas:</strong> For data manipulation and analysis</li>
        <li><strong>Scikit-learn:</strong> For implementing common ML algorithms</li>
        <li><strong>Matplotlib and Seaborn:</strong> For data visualization</li>
        <li><strong>TensorFlow or PyTorch:</strong> For deep learning (when you're ready)</li>
      </ul>
      
      <h3>My First Project: Predicting Housing Prices</h3>
      <p>For my first ML project, I chose to predict housing prices using the classic Boston Housing dataset. Here's my approach:</p>
      
      <h4>Step 1: Data Exploration</h4>
      <p>I began by exploring the dataset to understand its structure:</p>
      <ul>
        <li>Examining feature distributions and correlations</li>
        <li>Identifying missing values and outliers</li>
        <li>Visualizing relationships between features and target variable</li>
      </ul>
      
      <h4>Step 2: Data Preprocessing</h4>
      <p>Next, I prepared the data for modeling:</p>
      <ul>
        <li>Handling missing values through imputation</li>
        <li>Scaling numerical features to similar ranges</li>
        <li>Encoding categorical variables</li>
        <li>Splitting data into training and test sets</li>
      </ul>
      
      <h4>Step 3: Model Selection and Training</h4>
      <p>I experimented with several algorithms:</p>
      <ul>
        <li>Linear Regression as a baseline</li>
        <li>Decision Trees for capturing non-linear relationships</li>
        <li>Random Forest for improved accuracy</li>
        <li>Gradient Boosting for even better performance</li>
      </ul>
      
      <h4>Step 4: Model Evaluation</h4>
      <p>To evaluate model performance, I used:</p>
      <ul>
        <li>Mean Squared Error (MSE) and Root MSE</li>
        <li>R-squared to measure explained variance</li>
        <li>Cross-validation to ensure robust results</li>
      </ul>
      
      <h4>Step 5: Model Tuning</h4>
      <p>Finally, I improved my best model through:</p>
      <ul>
        <li>Hyperparameter tuning using grid search</li>
        <li>Feature selection to focus on the most important variables</li>
        <li>Ensemble methods to combine multiple models</li>
      </ul>
      
      <h3>Learning Resources I Recommend</h3>
      <p>These resources were invaluable in my learning journey:</p>
      <ul>
        <li><strong>Courses:</strong> Andrew Ng's Machine Learning course, fast.ai</li>
        <li><strong>Books:</strong> "Hands-On Machine Learning with Scikit-Learn and TensorFlow" by Aurélien Géron</li>
        <li><strong>Websites:</strong> Kaggle for datasets and competitions, Towards Data Science for articles</li>
        <li><strong>YouTube:</strong> StatQuest for clear explanations of complex concepts</li>
      </ul>
      
      <h3>Next Steps in My ML Journey</h3>
      <p>As I continue learning, I'm focusing on:</p>
      <ul>
        <li>Deep learning for image and text data</li>
        <li>Time series forecasting</li>
        <li>Deploying models to production</li>
        <li>Ethical considerations in AI development</li>
      </ul>
      
      <p>Machine learning is a vast field with endless opportunities for exploration. The key is to start with simple projects, build a solid understanding of the fundamentals, and gradually tackle more complex challenges. Happy learning!</p>
    `,
    },
    {
      id: 6,
      title: "My Journey Learning React",
      excerpt: "The challenges, breakthroughs, and resources that helped me master React...",
      date: "March 10, 2025",
      readTime: "6 min read",
      tags: ["React", "JavaScript", "Learning"],
      type: "blog",
      content: `
      <h2>My Journey Learning React</h2>
      <p>When I first decided to learn React, I was already familiar with HTML, CSS, and basic JavaScript. However, the component-based architecture and state management concepts of React presented a significant learning curve. Here's the story of my journey, including the challenges I faced and the resources that helped me overcome them.</p>
      
      <h3>The Beginning: Confusion and Frustration</h3>
      <p>My first attempts at learning React were frustrating. I struggled with:</p>
      <ul>
        <li>Understanding the virtual DOM and JSX syntax</li>
        <li>Grasping the concept of unidirectional data flow</li>
        <li>Managing component state effectively</li>
        <li>Figuring out when to use class vs. functional components</li>
      </ul>
      <p>I started with the official React documentation, which is comprehensive but sometimes assumes prior knowledge that I didn't have. I found myself constantly switching between tutorials, trying to piece together a coherent understanding.</p>
      
      <h3>The Turning Point: Project-Based Learning</h3>
      <p>Everything changed when I adopted a project-based approach. Instead of trying to learn every React concept upfront, I decided to build a simple to-do application. This forced me to apply concepts in a practical context and solve real problems.</p>
      <p>Key breakthroughs during this phase:</p>
      <ul>
        <li>Understanding component lifecycle by implementing features that depended on it</li>
        <li>Learning state management by tracking to-do items</li>
        <li>Grasping props by creating reusable components</li>
        <li>Implementing event handling for user interactions</li>
      </ul>
      
      <h3>Leveling Up: Hooks and Modern React</h3>
      <p>Just as I was getting comfortable with class components, React introduced Hooks. Initially, this felt like starting over, but I soon realized that Hooks simplified many aspects of React development.</p>
      <p>My experience with Hooks:</p>
      <ul>
        <li>useState made state management more intuitive</li>
        <li>useEffect consolidated lifecycle methods into a cleaner API</li>
        <li>Custom hooks allowed me to extract and reuse logic</li>
        <li>The transition from class to functional components streamlined my code</li>
      </ul>
      
      <h3>Advanced Concepts: State Management and Beyond</h3>
      <p>As my projects grew more complex, I needed to learn advanced state management. I explored:</p>
      <ul>
        <li>Context API for sharing state across components</li>
        <li>Redux for centralized state management</li>
        <li>React Query for server state management</li>
        <li>Performance optimization techniques like memoization</li>
      </ul>
      <p>Each of these tools solved specific problems, and learning when to use each one was as important as learning how to use them.</p>
      
      <h3>Resources That Made a Difference</h3>
      <p>These resources were game-changers in my React learning journey:</p>
      <ul>
        <li><strong>Scrimba's React Course:</strong> Interactive lessons that let me edit code while learning</li>
        <li><strong>Kent C. Dodds' Blog and Courses:</strong> Especially helpful for hooks and testing</li>
        <li><strong>React for Beginners by Wes Bos:</strong> Practical, project-based learning</li>
        <li><strong>Epic React:</strong> Deep dives into advanced patterns and practices</li>
        <li><strong>React DevTools:</strong> Essential for debugging and understanding component behavior</li>
      </ul>
      
      <h3>Projects That Cemented My Knowledge</h3>
      <p>These projects helped me apply and retain what I learned:</p>
      <ul>
        <li>A personal portfolio site using React and styled-components</li>
        <li>A weather application that consumed an external API</li>
        <li>A social media dashboard with complex state management</li>
        <li>A collaborative drawing app with React and Socket.io</li>
      </ul>
      
      <h3>Current Focus and Future Learning</h3>
      <p>Now that I'm comfortable with React, I'm focusing on:</p>
      <ul>
        <li>Server Components and React 19 features</li>
        <li>Micro-frontends architecture</li>
        <li>Accessibility best practices in React applications</li>
        <li>Performance optimization for large-scale applications</li>
      </ul>
      
      <h3>Advice for React Beginners</h3>
      <p>If you're just starting with React, here's my advice:</p>
      <ul>
        <li>Focus on understanding core concepts before diving into libraries</li>
        <li>Build small projects that gradually increase in complexity</li>
        <li>Don't try to learn everything at once - master fundamentals first</li>
        <li>Join communities like React Discord or Reddit for support</li>
        <li>Read other people's code to learn different approaches</li>
      </ul>
      
      <p>Learning React has been challenging but incredibly rewarding. It's opened up opportunities for me to build sophisticated web applications and has fundamentally changed how I think about frontend development. If you're on this journey too, keep going - the "aha" moments are worth the initial confusion!</p>
    `,
    },
  ]

  const photos = [
    {
      id: 1,
      title: "Campus Robotics Lab",
      description: "Working on our semester project in the robotics lab",
      date: "May 5, 2025",
      type: "photo",
    },
    {
      id: 2,
      title: "Coding Competition",
      description: "Our team at the regional coding competition",
      date: "April 20, 2025",
      type: "photo",
    },
    {
      id: 3,
      title: "New Tech Setup",
      description: "Finally upgraded my development environment",
      date: "April 2, 2025",
      type: "photo",
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
          Tech <span className="text-teal-400">Journal</span>
        </h1>
        <p className="mb-16 text-center text-xl text-gray-400 code-text">
          My thoughts, articles, photos, and experiences in the world of technology
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
                  <StaggerItem key={item.id}>{renderCard(item, setSelectedPost)}</StaggerItem>
                ))}
            </StaggerChildren>
          </TabsContent>

          <TabsContent value="blog" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {blogPosts.map((post) => (
                <StaggerItem key={post.id}>{renderCard(post, setSelectedPost)}</StaggerItem>
              ))}
            </StaggerChildren>
          </TabsContent>

          <TabsContent value="photos" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {photos.map((photo) => (
                <StaggerItem key={photo.id}>{renderCard(photo, setSelectedPost)}</StaggerItem>
              ))}
            </StaggerChildren>
          </TabsContent>

          <TabsContent value="thoughts" className="mt-12">
            <StaggerChildren className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" delayStep={0.05}>
              {randomThoughts.map((thought) => (
                <StaggerItem key={thought.id}>{renderCard(thought, setSelectedPost)}</StaggerItem>
              ))}
            </StaggerChildren>
          </TabsContent>
        </Tabs>
      </ScrollAnimation>

      <FadeIn className="mx-auto my-24 max-w-lg rounded-xl border border-teal-500/30 bg-gray-900/50 p-8 text-center">
        <div className="h-80">
          <TridentWeaponModel className="h-full w-full" />
        </div>
        <h3 className="mb-4 text-2xl font-medium text-white terminal-text">More content coming soon!</h3>
        <p className="text-lg text-gray-400">
          I'm constantly adding new content to this section. Check back later for more updates!
        </p>
      </FadeIn>

      {/* Full Blog Post Slide-In */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 p-4 md:p-8"
          >
            <div className="mx-auto max-w-4xl">
              <Button
                onClick={() => setSelectedPost(null)}
                variant="ghost"
                className="mb-6 flex items-center text-teal-400"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to all posts
              </Button>

              <div className="rounded-xl border border-gray-800 bg-gray-900/80 p-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-3xl font-bold text-white">{selectedPost?.title}</h2>
                  <div className="flex items-center gap-4 text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {selectedPost?.date}
                    </span>
                    {selectedPost?.readTime && (
                      <span className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {selectedPost?.readTime}
                      </span>
                    )}
                  </div>
                </div>

                {selectedPost?.tags && (
                  <div className="mb-8 flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-teal-500/50 text-teal-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div
                  className="prose prose-invert prose-teal max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost?.content }}
                />
              </div>
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
        className="overflow-hidden border-gray-800 bg-gray-900/50 transition-all hover:border-teal-500/50 hover:-translate-y-2 duration-300"
      >
        <div className="relative h-56 w-full">
          <Image src={`/placeholder-cmdtv.png?height=400&width=600`} alt={item.title} fill className="object-cover" />
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
