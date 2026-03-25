"use client"

import { motion } from "framer-motion"
import { MessageSquare, CreditCard, RotateCcw, Shield } from "lucide-react"

const platformFeatures = [
  {
    icon: MessageSquare,
    title: "In-app communication",
    description:
      "Chat, share files, and collaborate without leaving the platform. Everything in one place.",
  },
  {
    icon: CreditCard,
    title: "Secure payments",
    description:
      "All payments handled inside Zypzo. Funds held securely until work is approved.",
  },
  {
    icon: RotateCcw,
    title: "Easy rebooking",
    description:
      "Loved working with someone? Rebook them instantly for future projects with one click.",
  },
  {
    icon: Shield,
    title: "Trust & safety",
    description:
      "Built-in protections to ensure quality work and secure transactions every time.",
  },
]

export function PlatformControl() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-400" />
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
            All-in-one platform
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold text-card-foreground md:text-5xl">
            Built to keep
            <br />
            <span className="text-muted-foreground">work inside Zypzo</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to manage work relationships — communication, payments,
            and collaboration — all under one roof.
          </p>
        </motion.div>

        {/* Features in horizontal layout */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/5">
                {/* Top accent line */}
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 transition-all duration-300 group-hover:bg-yellow-400/20">
                  <feature.icon className="h-7 w-7 text-yellow-400" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Bank-level encryption</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Verified professionals</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">Money-back guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
