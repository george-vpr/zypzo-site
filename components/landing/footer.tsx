"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link" // Added Link
import { Instagram, Linkedin } from "lucide-react" // Added specific icons

const footerLinks = {
  Product: ["Features", "Pricing", "How it works", "Reviews"],
  Company: ["About", "Careers", "Blog", "Press"],
  Resources: ["Help Center", "Community", "Tutorials", "API Docs"],
  // Removed Legal section as requested
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-dark-400 py-16">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            // Centered on mobile, left on desktop
            className="lg:col-span-2 text-center lg:text-left"
          >
            <Link href="/" className="inline-block">
              <Image
                src="/zypzo-yellow-logo.png"
                alt="Zypzo"
                width={100}
                height={32}
                className="h-8 w-auto mx-auto lg:mx-0" // Centered image on mobile
              />
            </Link>
            <p className="mt-4 max-w-xs mx-auto lg:mx-0 text-muted-foreground">
              From task to done. Find skilled professionals across India
              instantly.
            </p>
            {/* Centered icons on mobile */}
            <div className="mt-6 flex gap-4 justify-center lg:justify-start">
              {/* LinkedIn */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-100 text-muted-foreground transition-all hover:bg-yellow-400 hover:text-dark-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-100 text-muted-foreground transition-all hover:bg-yellow-400 hover:text-dark-400"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Centered on mobile, left on desktop
              className="text-center lg:text-left"
            >
              <h4 className="mb-4 font-semibold text-card-foreground">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-yellow-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row text-center md:text-left"
        >
          <p className="text-sm text-muted-foreground">
            © 2026 Zypzo. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-yellow-400">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-yellow-400">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-yellow-400">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
