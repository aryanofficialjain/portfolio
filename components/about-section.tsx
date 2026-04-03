import { Github, Linkedin, Twitter } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          About Me
        </h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            I’m an AI Product Engineer specializing in building intelligent, agentic systems and high-performance cross-platform applications. With a background in React Native and full-stack development, I now focus on integrating LLMs, machine learning pipelines, and autonomous agents into production-ready products. I work with startups to turn complex AI concepts into scalable growth engines, prioritizing clean architecture and data-driven user experiences.
          </p>

          <div className="flex justify-center space-x-6 pt-8">
            {/* GitHub */}
            <a
              href="https://github.com/aryanofficialjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/aryanofficialjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com/aryanofficia_l"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}