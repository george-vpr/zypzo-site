"use client"

import { motion } from "framer-motion"
import { Zap, Clock, Calendar, RefreshCw } from "lucide-react"

const workModes = [
  {
    icon: Zap,
    title: "Instant",
    description: "Get a professional within minutes for urgent tasks",
    highlight: "Within minutes",
  },
  {
    icon: Clock,
    title: "Scheduled",
    description: "Book work for later today or a specific time",
    highlight: "Plan ahead",
  },
  {
    icon: Calendar,
    title: "Long-term",
    description: "Work with the same person over days or months",
    highlight: "Build relationships",
  },
  {
    icon: RefreshCw,
    title: "Recurring",
    description: "Automate weekly or monthly work — content, ads, editing, and more",
    highlight: "Set & forget",
  },
]

export function WorkModes() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-300" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-yellow-400/5 blur-[120px]" />

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
            Flexible by design
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-card-foreground md:text-5xl">
            Work your way
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose how you want to work. From urgent one-off tasks to automated recurring workflows.
          </p>
        </motion.div>

        {/* Work modes grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workModes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Added text-center for mobile, md:text-left for desktop */}
              <div className="glass-card h-full rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/5 text-center md:text-left">
                {/* Icon */}
                {/* Added mx-auto for mobile, md:mx-0 for desktop */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400/10 transition-all duration-300 group-hover:bg-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-400/20 mx-auto md:mx-0">
                  <mode.icon className="h-8 w-8 text-yellow-400 transition-colors group-hover:text-dark-400" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {mode.title}
                </h3>
                <p className="mb-4 text-muted-foreground">
                  {mode.description}
                </p>

                {/* Highlight tag */}
                <span className="inline-block rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-400">
                  {mode.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
