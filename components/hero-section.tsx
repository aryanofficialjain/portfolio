"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">Aryan Jain</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">Full Stack Developer</h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building modern web experiences with MERN & AI
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            onClick={scrollToProjects}
            className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
