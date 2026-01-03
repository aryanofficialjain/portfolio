const skillCategories = [
  {
    title: "Mobile App Development",
    skills: [
      "React Native",
      "Expo",
      "Cross-Platform Development",
      "TypeScript",
      "JavaScript (ES6+)",
      "React Navigation",
      "Redux / Zustand",
      "React Native Paper",
      "NativeBase",
      "NativeWind (Tailwind CSS)",
      "Firebase Integration",
      "Firebase Authentication",
      "Firebase Firestore",
      "Firebase Cloud Functions",
      "Google AdMob Integration",
      "In-App Purchases",
      "Push Notifications",
      "AI Integration (Gemini AI)",
      "OpenAI API Integration",
      "RESTful APIs",
      "GraphQL",
      "React Native Reanimated",
      "React Native Maps",
      "Image Picker & Camera",
      "Play Store Deployment",
      "App Store Deployment",
      "Xcode Configuration",
      "Android Build Configuration",
      "App Signing & Certificates",
      "Performance Optimization",
      "Bug Fixing & Debugging",
      "Native Module Integration",
      "Third-Party SDK Integration"
    ],
  },
  {
    title: "XR / AR / VR Development",
    skills: [
      "Unity XR",
      "XR Interaction Toolkit",
      "AR Foundation",
      "VR Development",
      "AR Development",
      "Mixed Reality",
      "3D Interaction Design",
      "Spatial UI",
      "Android AR",
      "Performance Optimization"
    ],
  },
  {
    title: "Unity & Game Development",
    skills: [
      "Unity",
      "C#",
      "Gameplay Programming",
      "Game Mechanics",
      "Mobile Game Development",
      "Unity Addressables",
      "App Store Publishing",
    ],
  },
  {
    title: "3D & XR Asset Pipeline",
    skills: [
      "Blender",
      "Basic 3D Modeling",
      "UV Mapping",
      "Materials & Textures",
      "Unity Import Pipeline",
      "XR Asset Optimization"
    ],
  },
  {
    title: "Full Stack Development (Supporting)",
    skills: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Next.js",
      "REST APIs",
      "Web Technologies"
    ],
  },
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS"
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "ChatGPT",
      "Cursor",
      "DaVinci Resolve"
    ],
  },
]

export function SkillsSection() {
  const mobileAppCategory = skillCategories[0]
  const otherCategories = skillCategories.slice(1)

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Skills & Technologies
        </h2>

        {/* Mobile App Development - Full Width */}
        <div className="mb-12">
          <div className="space-y-4 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-medium text-center mb-6">
              {mobileAppCategory.title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {mobileAppCategory.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-2 bg-white dark:bg-black text-sm rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other Skills - 3 Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherCategories.map((category, index) => (
            <div
              key={index}
              className="space-y-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <h3 className="text-lg font-medium text-center mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-white dark:bg-black text-sm rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
