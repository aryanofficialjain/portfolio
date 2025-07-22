"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-semibold text-lg">Aryan Jain</div>
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            Contact
          </button>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
