import { Calendar, MapPin, Award, Briefcase, Gamepad2 } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Experience</h2>

        <div className="space-y-8">

          {/* Skidos */}
          <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-medium">Software Engineer — Skidos (US-based)</h3>
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Noida 62 (U.P.) - Delhi</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Worked as a Unity Developer on multiple mobile games for a US-based ed-tech gaming company. Contributed directly to production releases, SDK stabilization, and performance-focused architecture improvements.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>Published and maintained multiple Unity mobile games on the App Store</li>
                  <li>Refactored and cleaned poorly structured third-party SDKs to improve stability</li>
                  <li>Converted 4 live games to Unity Addressables to significantly reduce base app size</li>
                  <li>Improved scalability, patch delivery, and memory management for mobile builds</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">Unity</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">Addressables</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">Mobile Optimization</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">App Store</span>
                </div>
              </div>
            </div>
          </div>

          {/* Insanity Crew */}
          <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Gamepad2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-medium">Software Developer Intern — Insanity Crew</h3>
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">6 Months</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">India</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Completed a 6-month game development internship, working on multiple 2D titles with a strong focus on gameplay programming, mechanics design, and rapid prototyping.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>Solely programmed the complete gameplay systems for the 2D platformer <strong>Forgetful</strong></li>
                  <li>Designed player movement, physics interactions, and world mechanics from scratch</li>
                  <li>Handled prototyping-to-production workflow with iterative gameplay improvements</li>
                  <li>Collaborated with artists and designers to align mechanics with visual direction</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">Unity</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">C#</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">2D Platformer</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">Gameplay Programming</span>
                </div>
              </div>
            </div>
          </div>

          {/* Game Jam */}
          <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-full">
                <Gamepad2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-medium">UDC Game Jam Participant</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Developed a complete 2D game within a strict 24-hour time limit, focusing on core mechanics, game loop stability, and playable polish under extreme constraints.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>Built core gameplay systems end-to-end within 24 hours</li>
                  <li>Prioritized scope management, rapid iteration, and bug-free delivery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rajasthan IT Hackathon */}
          <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-medium">Rajasthan IT Hackathon Participant</h3>
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">2023</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Rajasthan, India</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Participated in the Rajasthan IT Hackathon, where I designed and developed a real-time speech-to-text web application, demonstrating strong problem-solving, UX thinking, and rapid prototyping skills.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                  <li>Built a real-time voice-to-text system using modern web technologies</li>
                  <li>Implemented live speech recognition using the Web Speech API</li>
                  <li>Presented the solution to judges with a clear technical and product narrative</li>
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">HTML5</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">CSS3</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-full">Web Speech API</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
