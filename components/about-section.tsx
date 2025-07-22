import { Github, Linkedin, Youtube } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">About Me</h2>

        <div className="space-y-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            Passionate about building modern web applications, games, and tools using the MERN stack, Next.js, and AI
            tools like GPT. I love creating seamless user experiences and solving complex problems through clean,
            efficient code.
          </p>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/aryanofficialjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/aryanofficialjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://youtube.com/@aryanofficialjain"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
