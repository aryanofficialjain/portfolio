import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution built with MERN stack, featuring user authentication, payment integration, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/aryanofficialjain/ecommerce-app",
    live: "https://ecommerce-demo.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application integrated with GPT API for intelligent conversations and automated responses.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/aryanofficialjain/ai-chat-app",
    live: "https://ai-chat-demo.vercel.app",
    tech: ["Next.js", "OpenAI API", "Socket.io", "Tailwind CSS"],
  },
  {
    title: "Task Management Tool",
    description:
      "Collaborative task management platform with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    github: "https://github.com/aryanofficialjain/task-manager",
    live: "https://task-manager-demo.vercel.app",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
