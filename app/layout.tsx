import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Zypzo — From Task to Done",
  description:
    "Find skilled professionals across India instantly and get your work done without delays. Hire designers, developers, writers, marketers, and more.",
  keywords: [
    "hire freelancers",
    "find professionals",
    "task marketplace",
    "hire developers",
    "hire designers",
  ],
  openGraph: {
    title: "Zypzo — From task to done",
    description:
      "Find skilled professionals instantly and get your work done without delays.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
