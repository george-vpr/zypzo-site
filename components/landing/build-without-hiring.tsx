"use client"

import { motion } from "framer-motion"
import { Check, TrendingUp, Users, Minus, Building2, Layers } from "lucide-react"

const benefits = [
  {
    icon: Check,
    title: "Hire only when needed",
    description: "No idle salaries. Pay for work that matters.",
  },
  {
    icon: TrendingUp,
    title: "Scale up or down instantly",
    description: "Ramp up for big projects, scale back when done.",
  },
  {
    icon: Minus,
    title: "No long-term commitments",
    description: "Flexible engagements that fit your timeline.",
  },
  {
    icon: Building2,
    title: "Replace agencies",
    description: "Direct access to talent without agency overhead.",
  },
  {
    icon: Users,
    title: "Always-available talent pool",
    description: "50,000+ professionals ready when you are.",
  },
  {
    icon: Layers,
    title: "One platform for everything",
    description: "Hiring, communication, payments — all in one place.",
  },
]

export function BuildWithoutHiring() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-300" />
      <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              The Zypzo advantage
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-card-foreground md:text-5xl lg:text-6xl">
              Build without
              <br />
              <span className="text-yellow-400">hiring full-time</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Stop the endless cycle of hiring, training, and managing full-time employees.
              Access skilled professionals exactly when you need them.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <button className="group flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 text-base font-semibold text-dark-400 transition-all hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/20">
                Start building your team
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Benefits grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                <div className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 transition-colors group-hover:bg-yellow-400/20">
                    <benefit.icon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <h3 className="mb-1 font-semibold text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
