import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">© 2024 Aryan Jain. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
