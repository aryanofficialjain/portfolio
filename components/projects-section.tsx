import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"


const mobileAppProjects = [
  {
    title: "Med Life",
    description:
      "A cross-platform meditation app designed for mental wellness. Users can read inspirational quotes, listen to calming meditation music, and practice guided meditation using a customizable timer. Built for both Android and iOS with a clean, distraction-free experience.",
    image: "/medlife.png",
    github: "https://github.com/aryanofficialjain/MedU",
    live: "",
    tech: [
      "React Native",
      "Expo",
      "Android",
      "iOS",
      "Wellness App",
      "Cross-Platform",
    ],
  },
  // {
  //   title: "FitApp",
  //   description:
  //     "An AI-powered fitness and nutrition tracking app that helps users monitor daily meals, protein and carb intake. Integrated with Gemini AI to generate personalized meal plans and health recommendations. Fully functional on both Android and iOS.",
  //   image: "/fitapp.png",
  //   github: "https://github.com/aryanofficialjain/FitApp",
  //   live: "",
  //   tech: [
  //     "React Native",
  //     "Expo",
  //     "Android",
  //     "iOS",
  //     "AI Integration",
  //     "Gemini AI",
  //     "Nutrition Tracking",
  //   ],
  // },
  {
    title: "Med Track",
    description:
      "A medicine reminder and tracking app that helps users manage prescriptions, dosage schedules, and duration. Includes smart reminders and a reward-based system to encourage consistency and correct medication intake.",
    image: "/medtrack.png",
    github: "https://github.com/aryanofficialjain/med-track",
    live: "",
    tech: [
      "React Native",
      "Android",
      "iOS",
      "Notifications",
      "Task Automation",
      "Health App",
    ],
  },
  {
    title: "FinApp",
    description:
      "A full-featured expense tracking app that allows users to manage income, expenses, and spending categories. Built with a scalable backend using Express, serverless PostgreSQL, Redis caching, Clerk authentication, and rate limiting. Backend hosted on Render.",
    image: "/finapp.png",
    github: "https://github.com/aryanofficialjain/finace_Management",
    live: "",
    tech: [
      "React Native",
      "Android",
      "iOS",
      "Express.js",
      "Serverless PostgreSQL",
      "Redis",
      "Clerk Auth",
      "Rate Limiting",
    ],
  },
]

const projects = [
  // XR PROJECTS
  {
    title: "AR Custom Cars",
    description:
      "Augmented Reality car customization experience allowing users to modify car colors, wheels, and visual styles in real time. Includes interactive AR-based drifting mechanics to demonstrate dynamic physics and user interaction in spatial environments.",
    image: "/project4.png",
    github: "https://github.com/aryanofficialjain/Custom_Cars",
    live: "https://aryanofficialjain.itch.io/custom-cars",
    tech: [
      "Unity",
      "AR Foundation",
      "XR Interaction Toolkit",
      "Android AR",
      "Real-time Customization",
      "3D Interaction",
    ],
  },
  {
    title: "VR Jewellery Store",
    description:
      "Virtual Reality jewellery store simulation where users can browse, select, and purchase jewellery using VR controllers. Implemented interactive product selection, price visualization, and a wallet-based purchase system within a fully immersive VR environment.",
    image: "/project5.png",
    github: "https://github.com/aryanofficialjain/Jewellery-Store-",
    tech: [
      "Unity",
      "VR Development",
      "XR Interaction Toolkit",
      "VR Controllers",
      "In-World UI",
      "Wallet System",
    ],
  },

  // GAME PROJECTS
  {
    title: "Nightmare",
    description:
      "Third-person action combat game set in a dark fantasy world. Designed and developed enemy combat mechanics and player fighting systems while creating a custom environment using Unity Terrain for immersive world-building.",
    image: "/project6.png",
    live: "https://aryanofficialjain.itch.io/papakipari",
    tech: [
      "Unity",
      "C#",
      "Third-Person Combat",
      "Unity Terrain",
      "Enemy AI",
      "Gameplay Systems",
    ],
  },
  {
    title: "Khata Laga",
    description:
      "2D casual mobile game featuring a fun emoji character where players must avoid incoming spikes (khata). Focused on simple controls, fast-paced gameplay loops, and casual-friendly mechanics.",
    image: "/project7.png",
    live: "https://aryanofficialjain.itch.io/katalaga",
    tech: [
      "Unity",
      "C#",
      "2D Game Development",
      "Casual Game Design",
      "Physics-Based Gameplay",
    ],
  },
  {
    title: "Parinda",
    description:
      "2D arcade-style game inspired by Flappy Bird with an Indian thematic touch. Implemented physics-driven movement, obstacle systems, and score tracking for a mobile-first gameplay experience.",
    image: "/project8.png",
    live: "https://aryanofficialjain.itch.io/parinda",
    tech: [
      "Unity",
      "C#",
      "2D Physics",
      "Mobile Game Development",
      "Game Loop Design",
    ],
  },

  // WEB PROJECTS
  {
    title: "Car Becho",
    description:
      "Full-stack e-commerce platform for buying and selling cars, featuring authentication, admin management, and deployment-ready architecture built using the MERN stack.",
    image: "/project1.png",
    github: "https://github.com/aryanofficialjain/Car_dealership",
    live: "https://car-dealership-frontend-indol.vercel.app/",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "MERN Stack",
      "Vercel",
    ],
  },
  {
    title: "Chat Karo",
    description:
      "Real-time chat application built for private, one-time communication with file sharing support and live messaging using WebSockets.",
    image: "/project2.png",
    github: "https://github.com/aryanofficialjain/chat-app-with_filesharing",
    live: "https://chat-app-with-filesharing.vercel.app/",
    tech: [
      "Next.js",
      "Socket.io",
      "Tailwind CSS",
      "Real-Time Communication",
    ],
  },
  {
    title: "Cryptocurrency Tracker",
    description:
      "Web application for tracking real-time cryptocurrency prices and market data with a clean, responsive UI.",
    image: "/project3.png",
    live: "https://real-time-cryptocurrency-tracker.vercel.app/",
    tech: ["React", "Tailwind CSS", "API Integration"],
  },
]

const ProjectCard = ({ project }: { project: any }) => (
  <div className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
      />
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-xl font-medium">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string, techIndex: number) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.github || project.live) && (
        <div className="flex space-x-4 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      )}
    </div>
  </div>
)

export function ProjectsSection() {
  const xrProjects = projects.slice(0, 2)
  const gameProjects = projects.slice(2, 5)
  const webProjects = projects.slice(5)

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
          Featured Projects
        </h2>

        {/* Mobile App Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-light mb-8">
            Mobile App Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileAppProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* XR Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-light mb-8">
            XR Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {xrProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Game Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-light mb-8">
            Game Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Web Projects */}
        <div>
          <h3 className="text-2xl md:text-3xl font-light mb-8">
            Web Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
