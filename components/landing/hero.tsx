"use client";

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-visible">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400" />
      
      {/* Accent glow */}
      <div className="absolute top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-yellow-400/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
  src="/zypzo-yellow-logo.png"
  alt="Zypzo"
  width={120}
  height={40}
  className="h-10 w-auto"
/>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-6"
          >
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-card-foreground"
            >
              How it works
            </a>
            <a
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-card-foreground"
            >
              Features
            </a>
            <button className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-dark-400 transition-all hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20">
              Get started
            </button>
          </motion.div>
        </nav>

        {/* Hero content */}
        <div className="grid min-h-[calc(100vh-100px)] items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Text */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1.5"
            >
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-yellow-400">
                Trusted by 10,000+ businesses
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-card-foreground md:text-6xl lg:text-7xl"
            >
              From task
              <br />
              <span className="text-muted-foreground">to done.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              Hire instantly, schedule ahead, or build long-term working
              relationships — all in one place.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-3 max-w-lg text-base text-muted-foreground/80"
            >
              From a single task to a full team — Zypzo scales with you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button className="group flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 text-base font-semibold text-dark-400 transition-all hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/20">
                Get it done
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-full border border-border px-7 py-4 text-base font-medium text-card-foreground transition-all hover:border-yellow-400/50 hover:bg-yellow-400/5">
                See how it works
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 flex gap-12"
            >
              {[
                { value: "50K+", label: "Professionals" },
                { value: "120K+", label: "Tasks completed" },
                { value: "4.9", label: "Average rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-yellow-400 md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Product mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative block mt-10 lg:mt-0"
          >
            <div className="relative flex justify-center lg:block">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card glow-yellow relative z-20 rounded-3xl p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-card-foreground">
                    Active Tasks
                  </span>
                  <span className="rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-medium text-yellow-400">
                    3 pending
                  </span>
                </div>

                {/* Task cards */}
                <div className="space-y-3">
                  {[
                    {
                      title: "Website Redesign",
                      category: "Design",
                      price: "₹45,000",
                      status: "In Progress",
                    },
                    {
                      title: "Mobile App Development",
                      category: "Development",
                      price: "₹1,50,000",
                      status: "Review",
                    },
                    {
                      title: "Brand Identity",
                      category: "Design",
                      price: "₹75,000",
                      status: "Matched",
                    },
                  ].map((task, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-dark-100 p-4 transition-all hover:bg-dark-50"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-card-foreground">
                            {task.title}
                          </h4>
                          <span className="mt-1 inline-block rounded-full bg-dark-50 px-2 py-0.5 text-xs text-muted-foreground">
                            {task.category}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-yellow-400">
                            {task.price}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {task.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating chat card */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="glass-card relative mt-6 mx-auto w-[90%] max-w-xs rounded-2xl p-4 lg:absolute lg:bottom-[-20px] lg:left-20 lg:translate-x-0 z-30"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600" />
                  <div>
                    <div className="text-sm font-medium text-card-foreground">
                      Priya Sharma
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Senior Designer • Online
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-dark-100 p-3">
                  <p className="text-sm text-muted-foreground">
                    {"I've completed the first draft. Ready for your review!"}
                  </p>
                </div>
              </motion.div>

              {/* Floating status card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="glass-card-light absolute -right-10 top-10 z-10 rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400">
                    <svg
                      className="h-6 w-6 text-dark-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-card-foreground">
                      Task Completed
                    </div>
                    <div className="text-xs text-muted-foreground">
                      2 minutes ago
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  )
}
