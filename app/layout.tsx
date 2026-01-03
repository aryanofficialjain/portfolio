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
  title: "Aryan Jain | React Native App Developer (Android & iOS)",
  description: "React Native developer building scalable Android & iOS apps using Expo and modern UI/UX.",
  keywords: "React Native Developer, Mobile App Developer, Android App Developer, iOS App Developer, Expo Developer, Cross Platform App Developer, React Native Freelance Developer, React Native Engineer, Mobile App Development, Fitness App Developer, AI App Developer, JavaScript Developer, TypeScript Developer, Software Engineer",
  authors: [{ name: "Aryan Jain" }],
  openGraph: {
    title: "Aryan Jain - React Native App Developer",
    description: "React Native developer building scalable Android & iOS apps using Expo and modern UI/UX.",
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
