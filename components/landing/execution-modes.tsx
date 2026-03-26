"use client"

import { motion } from "framer-motion"
import { Globe, MapPin, ArrowLeftRight } from "lucide-react"

const executionModes = [
  {
    icon: Globe,
    title: "Remote",
    description: "Work with professionals from anywhere in India",
    visual: "remote",
  },
  {
    icon: MapPin,
    title: "In-person",
    description: "Book professionals to work at your location",
    visual: "in-person",
  },
  {
    icon: ArrowLeftRight,
    title: "Hybrid",
    description: "Start remote, continue in-person if needed",
    visual: "hybrid",
  },
]

export function ExecutionModes() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-400" />
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header - asymmetric */}
        {/* Added text-center for mobile, lg:text-left for desktop */}
        <div className="mb-20 grid items-end gap-8 lg:grid-cols-2 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Your rules
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-card-foreground md:text-5xl">
              Work, your way
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-lg text-muted-foreground lg:text-right"
          >
            Choose how and where work gets done. Full flexibility to match your needs.
          </motion.p>
        </div>

        {/* Execution modes - horizontal cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {executionModes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400/30">
                {/* Background visual */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {mode.visual === "remote" && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent" />
                  )}
                  {mode.visual === "in-person" && (
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-yellow-400/10" />
                  )}
                  {mode.visual === "hybrid" && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10" />
                  )}
                </div>

                {/* Added text-center for mobile, md:text-left for desktop */}
                <div className="relative text-center md:text-left">
                  {/* Icon */}
                  {/* Added mx-auto for mobile, md:mx-0 for desktop */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 transition-all duration-300 group-hover:bg-yellow-400/20 mx-auto md:mx-0">
                    <mode.icon className="h-7 w-7 text-yellow-400" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                    {mode.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {mode.description}
                  </p>
                </div>

                {/* Decorative elements */}
                {mode.visual === "remote" && (
                  <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full border border-yellow-400/10 opacity-50" />
                )}
                {mode.visual === "in-person" && (
                  <div className="absolute -bottom-2 -right-2 h-24 w-24">
                    <div className="absolute inset-0 rounded-full border border-yellow-400/20" />
                    <div className="absolute inset-4 rounded-full border border-yellow-400/10" />
                  </div>
                )}
                {mode.visual === "hybrid" && (
                  <div className="absolute -bottom-4 -right-4 flex gap-2 opacity-50">
                    <div className="h-16 w-16 rounded-full border border-yellow-400/10" />
                    <div className="h-16 w-16 -translate-x-8 rounded-full border border-yellow-400/10" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
