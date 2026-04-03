"use client"

import { FileDown, Github, Globe, Linkedin, Mail, MapPin, Phone, Printer } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900/50 shadow-sm border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden print:shadow-none print:border-none print:rounded-none">
        {/* Actions - Hidden on print */}
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center print:hidden bg-zinc-50/50 dark:bg-zinc-900/50">
          <Link href="/">
            <Button variant="ghost" size="sm" className="rounded-full">
              ← Back to Portfolio
            </Button>
          </Link>
          <div className="flex gap-3">
            <Button onClick={handlePrint} size="sm" className="rounded-full gap-2 font-medium">
              <Printer className="h-4 w-4" />
              Print / Save PDF
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="p-8 md:p-12 space-y-10">
          {/* Header */}
          <header className="space-y-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b pb-8 border-zinc-200 dark:border-zinc-800">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white uppercase transition-all duration-300">
                  Aryan Jain
                </h1>
                <p className="text-xl md:text-2xl font-light text-zinc-600 dark:text-zinc-400 tracking-wide uppercase">
                  AI Product Engineer | Full Stack Developer
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-zinc-400" />
                  <span>+91 9569058699</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-zinc-400" />
                  <a href="mailto:aryanofficialjain@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors underline-offset-4 hover:underline">
                    aryanofficialjain@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-zinc-400" />
                  <span>Remote / Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-zinc-400" />
                  <a href="https://itsaryanportfolio.vercel.app/" className="hover:text-zinc-900 dark:hover:text-white transition-colors underline-offset-4 hover:underline">
                    itsaryanportfolio.vercel.app
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2 print:hidden justify-center md:justify-start">
               <a href="https://github.com/aryanofficialjain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                  <Github className="h-4 w-4" /> GitHub
               </a>
               <a href="https://linkedin.com/in/aryanofficialjain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
               </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-400 border-l-4 border-zinc-900 dark:border-white pl-4">
              Professional Summary
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg font-light italic">
              Dynamic AI Product Engineer and Full Stack Developer with a proven track record of building autonomous AI agents, multi-platform SaaS products, and high-performance mobile applications. Expert in architecting scalable AI pipelines, integrating LLMs (GPT-4, Gemini, Whisper), and delivering premium user experiences across Web, Mobile (iOS/Android), and XR platforms.
            </p>Section
          </section>

          {/* Skills */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-400 border-l-4 border-zinc-900 dark:border-white pl-4">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-zinc-900 dark:text-white uppercase text-xs tracking-wider">AI & Machine Learning</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Autonomous Agents (JARVIS), LLM Integration (OpenAI, Gemini), Whisper (STT), Vector Databases, AI Pipeline Architecture, Python (FastAPI).</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-zinc-900 dark:text-white uppercase text-xs tracking-wider">Mobile & Frontend</h3>
                <p className="text-zinc-600 dark:text-zinc-400">React Native, Expo, NativeWind, iOS/Android Deployment, Next.js, TypeScript, Tailwind CSS, Framer Motion.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-zinc-900 dark:text-white uppercase text-xs tracking-wider">Backend & Infrastructure</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Node.js, Express, Serverless PostgreSQL, MongoDB, Redis, Clerk Auth, JWT, Vercel, Render, Firebase.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-zinc-900 dark:text-white uppercase text-xs tracking-wider">XR & Gaming</h3>
                <p className="text-zinc-600 dark:text-zinc-400">Unity, AR Foundation, XR Interaction Toolkit, C#, Gameplay Systems, 3D Interaction Design.</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-8">
            <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-400 border-l-4 border-zinc-900 dark:border-white pl-4">
              Featured Projects
            </h2>

            <div className="space-y-8">
              {/* Project 1 */}
              <div className="group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    UploadKar AI SaaS
                  </h3>
                  <span className="text-sm font-medium px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">AI Product Engineer</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-zinc-600 dark:text-zinc-400 space-y-2 leading-relaxed">
                  <li>Architected a <strong className="text-zinc-900 dark:text-white font-medium">10-stage AI pipeline</strong> that automates content creation, optimization, and multi-platform distribution.</li>
                  <li>Developed a custom <strong className="text-zinc-900 dark:text-white font-medium">"Title Intelligence Engine"</strong> using XGBoost and LLMs to analyze emotional triggers and SEO performance.</li>
                  <li>Optimized complex data workflows using FastAPI and MongoDB to reduce processing latency by 40%.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    JARVIS AI Agent
                  </h3>
                  <span className="text-sm font-medium px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">AI Systems Developer</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-zinc-600 dark:text-zinc-400 space-y-2 leading-relaxed">
                  <li>Engineered an <strong className="text-zinc-900 dark:text-white font-medium">autonomous agent</strong> capable of handling complex workflows independently through advanced decision-making logic.</li>
                  <li>Implemented a <strong className="text-zinc-900 dark:text-white font-medium">Persistent Memory Layer</strong> using vector embeddings, allowing the agent to learn from past interactions.</li>
                  <li>Designed a modular architecture for seamless integration with multiple LLM providers (OpenAI, Gemini).</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                    Recap AI
                  </h3>
                  <span className="text-sm font-medium px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full">Mobile AI Specialist</span>
                </div>
                <ul className="list-disc list-outside ml-5 text-zinc-600 dark:text-zinc-400 space-y-2 leading-relaxed">
                  <li>Built a cross-platform React Native app that captures, transcribes (<strong className="text-zinc-900 dark:text-white font-medium">OpenAI Whisper</strong>), and summarizes long-form meetings.</li>
                  <li>Integrated a personalized learning model that adapts to user interactions for smarter productivity suggestions using GPT-4.</li>
                  <li>Deployed the application to both Android and iOS platforms with optimized CI/CD pipelines.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-400 border-l-4 border-zinc-900 dark:border-white pl-4">
              Professional Experience
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white italic">Software Engineer</h3>
                  <span className="font-medium text-zinc-500">2024 – Present</span>
                </div>
                <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">SKIDOS</p>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">Leading development efforts for scalable educational gaming platforms, focusing on React-based architectures and performance efficiency.</p>
              </div>
              
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white italic">Software Engineering Intern</h3>
                  <span className="font-medium text-zinc-500">2023 – 2024</span>
                </div>
                <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300">Insanity Crew</p>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">Focused on real-time mobile app integrations and frontend development for high-traffic student engagement platforms.</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-400 border-l-4 border-zinc-900 dark:border-white pl-4">
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">Bachelor of Computer Application</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Teerthankar Mahavir University | 2022 – 2025</p>
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">Senior Secondary School</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">R.M.S.G Public School | 2020 – 2021</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-400 border-l-4 border-zinc-900 dark:border-white pl-4">
                Achievements
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
                  <span className="font-bold text-zinc-900 dark:text-white">UDC GAMEJAM:</span> Published interactive gaming experiences on Itch.io.
                </li>
                <li className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400">
                  <span className="font-bold text-zinc-900 dark:text-white">Rajasthan-IT Hackathon:</span> Recognized for rapid prototyping of innovative tech solutions.
                </li>
              </ul>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-12 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-400 font-light tracking-widest uppercase mb-4 print:hidden">
          Built by Aryan Jain • Portfolio 2026
        </footer>
      </div>
    </div>
  )
}
