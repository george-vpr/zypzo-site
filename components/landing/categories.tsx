"use client"

import { motion } from "framer-motion"
import {
  Palette,
  Code,
  Pen,
  Megaphone,
  GraduationCap,
  Camera,
  Video,
  Music,
  LineChart,
  Smartphone,
} from "lucide-react"

const categories = [
  { icon: Palette, name: "Designers", count: "2,400+" },
  { icon: Code, name: "Developers", count: "3,100+" },
  { icon: Pen, name: "Writers", count: "1,800+" },
  { icon: Megaphone, name: "Marketers", count: "1,200+" },
  { icon: GraduationCap, name: "Tutors", count: "950+" },
  { icon: Camera, name: "Photographers", count: "780+" },
  { icon: Video, name: "Video Editors", count: "650+" },
  { icon: Music, name: "Audio Engineers", count: "420+" },
  { icon: LineChart, name: "Data Analysts", count: "890+" },
  { icon: Smartphone, name: "App Developers", count: "1,500+" },
]

export function Categories() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400 via-dark-300 to-dark-400" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
            Categories
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-card-foreground md:text-5xl">
            What can you get done?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Find experts across every skill set. From creative work to technical
            projects.
          </p>
        </motion.div>

        {/* Categories grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 rounded-full bg-dark-100 px-6 py-4 transition-all hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              <category.icon className="h-5 w-5 text-yellow-400 transition-colors group-hover:text-dark-400" />
              <span className="font-medium text-card-foreground transition-colors group-hover:text-dark-400">
                {category.name}
              </span>
              <span className="rounded-full bg-dark-50 px-2 py-0.5 text-xs text-muted-foreground transition-colors group-hover:bg-dark-400/50 group-hover:text-dark-400">
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Extra visual element */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground">
            {"Can't find what you're looking for?"}
          </p>
          <button className="mt-3 text-yellow-400 underline decoration-yellow-400/30 underline-offset-4 transition-colors hover:decoration-yellow-400">
            Request a new category
          </button>
        </motion.div>
      </div>
    </section>
  )
}
