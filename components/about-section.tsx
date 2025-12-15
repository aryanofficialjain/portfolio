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
            Unity XR Developer focused on building immersive AR and VR experiences
            with a strong foundation in game development and mobile performance
            optimization. Experienced in shipping Unity projects, designing
            interactive 3D systems, and translating ideas into scalable,
            user-centric XR applications.
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