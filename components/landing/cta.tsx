"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-400" />

      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-[150px]" />
      <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 translate-x-1/2 rounded-full bg-yellow-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-dark-300 to-dark-400 p-12 md:p-20"
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400"></span>
              </span>
              <span className="text-sm font-medium text-yellow-400">
                Join 10,000+ businesses already using Zypzo
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-3xl font-display text-4xl font-bold text-card-foreground md:text-5xl lg:text-6xl"
            >
              Ready to get
              <br />
              <span className="gradient-text">started?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
            >
              Post your first task in minutes and get matched with the perfect
              professional. No commitments, no hassle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 text-base font-semibold text-dark-400 transition-all hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/30 sm:w-auto">
                Post your first task
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="w-full rounded-full border border-border px-8 py-4 text-base font-medium text-card-foreground transition-all hover:border-yellow-400/50 hover:bg-yellow-400/5 sm:w-auto">
                Talk to sales
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 text-sm text-muted-foreground"
            >
              No credit card required • Free to post tasks
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
