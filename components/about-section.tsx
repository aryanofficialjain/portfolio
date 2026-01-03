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
            I’m a React Native software developer specializing in building cross-platform mobile applications for Android and iOS with a strong focus on performance, clean architecture, and scalability. I work with startups and product teams to turn ideas into production-ready apps, handling UI development, API integration, optimization, and release builds while prioritizing clear communication and long-term maintainability.
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