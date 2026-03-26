"use client"

import { motion } from "framer-motion"
import { Zap, Clock, MessageCircle, Shield, Globe, CreditCard } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant matching",
    description:
      "Get connected to available professionals in minutes, not days. Our AI-powered system finds the perfect match for your project.",
  },
  {
    icon: Clock,
    title: "Flexible work",
    description:
      "From quick one-hour tasks to long-term projects — everything in one place. Scale up or down as needed.",
  },
  {
    icon: MessageCircle,
    title: "Real-time communication",
    description:
      "Built-in messaging, file sharing, and video calls. Stay connected with your team without switching apps.",
  },
  {
    icon: Shield,
    title: "Secure payments",
    description:
      "Funds held securely until work is approved. Pay only when you're satisfied with milestone completion.",
  },
  {
    icon: Globe,
    title: "Global talent pool",
    description:
      "Access professionals from around the world. Find experts across time zones to keep your project moving 24/7.",
  },
  {
    icon: CreditCard,
    title: "Transparent pricing",
    description:
      "No hidden fees. See upfront pricing before you commit. Budget with confidence on every project.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-400" />
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-yellow-400/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header - asymmetric */}
        {/* Added text-center for mobile, md:text-left for tablet/desktop */}
        <div className="mb-20 grid items-end gap-8 lg:grid-cols-2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-400">
              Features
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-card-foreground md:text-5xl">
              Everything you need
              <br />
              <span className="text-muted-foreground">to get work done</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-lg text-muted-foreground text-center lg:text-right mx-auto lg:mx-0"
          >
            Powerful tools that make finding, hiring, and managing professionals
            seamless.
          </motion.p>
        </div>

        {/* Features grid - bento style */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative ${
                index === 0 ? "lg:col-span-2" : ""
              } ${index === 3 ? "lg:col-span-2" : ""}`}
            >
              {/* Added text-center for mobile, md:text-left for tablet/desktop */}
              <div className="glass-card h-full rounded-3xl p-8 transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/5 text-center md:text-left">
                {/* Added mx-auto for mobile, md:mx-0 for tablet/desktop */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/10 transition-colors group-hover:bg-yellow-400/20 mx-auto md:mx-0">
                  <feature.icon className="h-7 w-7 text-yellow-400" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
