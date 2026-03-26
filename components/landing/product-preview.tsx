"use client"

import { motion } from "framer-motion"
import { MessageSquare, Star, Clock, CheckCircle2, Search } from "lucide-react" // Added Search icon

export function ProductPreview() {
  return (
    <section className="relative py-32"> {/* Removed overflow-hidden to allow floating cards to be visible */}
      {/* Background - Added overflow-hidden here to contain background blurs */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-dark-400 via-dark-300 to-dark-400" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-yellow-400/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
            Product Preview
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold text-card-foreground md:text-5xl">
            A workspace designed for{" "}
            <span className="text-muted-foreground">getting things done</span>
          </h2>
        </motion.div>

        {/* Product UI mockup */}
        <div className="relative">
          {/* Main dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card glow-yellow mx-auto max-w-5xl rounded-3xl p-6 lg:p-8"
          >
            {/* Header - Fixed for Mobile */}
            <div className="mb-6 flex items-center justify-between border-b border-border pb-6 gap-4">
              <div className="flex items-center gap-3 min-w-0">
                {/* Added flex-shrink-0 to prevent squeezing */}
                <div className="h-10 w-10 rounded-xl bg-yellow-400 flex-shrink-0" />
                <div className="min-w-0">
                  <h3 className="font-semibold text-card-foreground truncate">
                    Dashboard
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    Welcome back, Arjun
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                {/* Replaced Search Input with Icon Button for mobile space */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-100 text-muted-foreground hover:text-yellow-400 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
                {/* Avatar - Added flex-shrink-0 */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-sm font-semibold text-dark-400 flex-shrink-0">
                  A
                </div>
              </div>
            </div>

            {/* Content grid */}
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Task card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl bg-dark-200 p-5"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="rounded-full bg-yellow-400/20 px-3 py-1 text-xs font-medium text-yellow-400">
                    In Progress
                  </span>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
                <h4 className="mb-2 font-semibold text-card-foreground">
                  E-commerce Website
                </h4>
                <p className="mb-4 text-sm text-muted-foreground">
                  Full stack development with React and Node.js
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border-2 border-dark-200 bg-gradient-to-br from-blue-400 to-blue-600" />
                    <div className="h-8 w-8 rounded-full border-2 border-dark-200 bg-gradient-to-br from-purple-400 to-purple-600" />
                  </div>
                  <span className="text-sm font-semibold text-yellow-400">
                    ₹2,50,000
                  </span>
                </div>
              </motion.div>

              {/* Chat interface */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl bg-dark-200 p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-yellow-400" />
                  <span className="font-medium text-card-foreground">
                    Messages
                  </span>
                  <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-dark-400">
                    3
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      name: "Rahul Verma",
                      msg: "Just pushed the latest updates...",
                      time: "2m",
                    },
                    {
                      name: "Ananya Gupta",
                      msg: "The designs look great!",
                      time: "15m",
                    },
                    {
                      name: "Vikram Singh",
                      msg: "Ready for review when you are",
                      time: "1h",
                    },
                  ].map((chat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl bg-dark-100 p-3 transition-colors hover:bg-dark-50"
                    >
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-400/80 to-yellow-600/80" />
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-card-foreground">
                            {chat.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {chat.time}
                          </span>
                        </div>
                        <p className="truncate text-xs text-muted-foreground">
                          {chat.msg}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Freelancer profile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-2xl bg-dark-200 p-5"
              >
                <div className="mb-4 text-center">
                  <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600" />
                  <h4 className="font-semibold text-card-foreground">
                    Aditya Patel
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Senior Full Stack Developer
                  </p>
                </div>
                <div className="mb-4 flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-1 text-sm text-muted-foreground">
                    4.9 (127)
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {["React", "Node.js", "TypeScript"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-dark-100 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-muted-foreground">
                    Available for hire
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating elements - Desktop & Mobile Handling */}
          
          {/* Payment Received Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            // Desktop: -left-10 (outside), Mobile: bottom-[-20px] (stacked below)
            className="glass-card absolute z-20 
                       left-4 right-4 bottom-[-20px] translate-y-full
                       lg:left-[-40px] lg:right-auto lg:bottom-auto lg:top-20 lg:translate-y-0 
                       rounded-2xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-card-foreground">
                  Payment Received
                </div>
                <div className="text-xs text-muted-foreground">
                  +₹1,50,000 • Just now
                </div>
              </div>
            </div>
          </motion.div>

          {/* New Review Card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            // Desktop: -right-10 (outside), Mobile: bottom-[-90px] (stacked below first card)
            className="glass-card absolute z-20 
                       left-4 right-4 bottom-[-90px] translate-y-full
                       lg:left-auto lg:right-[-40px] lg:bottom-20 lg:top-auto lg:translate-y-0 
                       rounded-2xl p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400">
                <Star className="h-5 w-5 text-dark-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-card-foreground">
                  New Review
                </div>
                <div className="text-xs text-muted-foreground">
                  {"\"Amazing work! Highly recommend\""}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
