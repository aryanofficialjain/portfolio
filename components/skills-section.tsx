const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "XGBoost",
      "Scikit-learn",
      "Feature Engineering",
      "ML Pipelines",
      "Model Training & Evaluation",
      "Data Preprocessing",
      "ZenML",
      "MLOps",
      "MCP Servers",
      "Predictive Analytics",
      "Feedback Loops & Retraining",
    ],
  },
  {
    title: "LLMs & NLP",
    skills: [
      "OpenAI GPT-4",
      "Google Gemini",
      "Prompt Engineering",
      "LangChain",
      "Whisper (Speech-to-Text)",
      "Text Generation",
      "Sentiment Analysis",
      "AI Agents",
    ],
  },
  {
    title: "Backend & Data Infrastructure",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "REST APIs",
    ],
  },
  {
    title: "Frontend & Product",
    skills: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Render",
      "Docker",
      "Postman",
    ],
  },
]

export function SkillsSection() {
  const primaryCategory = skillCategories[0]
  const otherCategories = skillCategories.slice(1)

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
          Skills & Technologies
        </h2>

        {/* AI & Machine Learning - Full Width */}
        <div className="mb-12">
          <div className="space-y-4 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-medium text-center mb-6">
              {primaryCategory.title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {primaryCategory.skills.map((skill, skillIndex) => (
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

        {/* Other Skills - Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
