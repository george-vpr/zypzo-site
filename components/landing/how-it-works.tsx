"use client"

import { motion } from "framer-motion"
import { ClipboardList, Users, Zap } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Post a task",
    description:
      "Describe what you need done. Be specific about requirements, timeline, and budget.",
  },
  {
    icon: Users,
    number: "02",
    title: "Get matched instantly",
    description:
      "Our AI matches you with the perfect professional based on skills and availability.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Get it done",
    description:
      "Work gets completed quickly. Pay securely only when you're satisfied.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-400" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
            How it works
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-card-foreground md:text-5xl">
            Three steps to
            <br />
            <span className="text-muted-foreground">getting things done</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-card group relative h-full rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/5">
                {/* Number badge */}
                <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-yellow-400/10 p-4">
                  <step.icon className="h-6 w-6 text-yellow-400" />
                </div>

                {/* Step number */}
                <div className="absolute right-8 top-8 font-display text-5xl font-bold text-dark-50/50">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-yellow-400 opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
