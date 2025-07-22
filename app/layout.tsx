import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Aryan Jain - Full Stack Developer",
  description: "Building modern web experiences with MERN & AI. Portfolio of Aryan Jain, Full Stack Developer.",
  keywords: "Full Stack Developer, MERN Stack, Next.js, React, Node.js, AI, Web Development",
  authors: [{ name: "Aryan Jain" }],
  openGraph: {
    title: "Aryan Jain - Full Stack Developer",
    description: "Building modern web experiences with MERN & AI",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
