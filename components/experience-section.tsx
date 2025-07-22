import { Calendar, MapPin, Award } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Experience</h2>

        <div className="space-y-8">
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

                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Participated in the prestigious Rajasthan IT Hackathon, where I developed an innovative
                    speech-to-text detection application using core web technologies.
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300 ml-4">
                      <li>Built a speech-to-text detection app using HTML, CSS, and JavaScript</li>
                      <li>Implemented real-time voice recognition and text conversion</li>
                      <li>Successfully presented the project to judges and attendees</li>
                      <li>Gained valuable experience in rapid prototyping and presentation skills</li>
                    </ul>
                  </div>

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
      </div>
    </section>
  )
}
