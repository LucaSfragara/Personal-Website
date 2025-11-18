'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-muted leading-relaxed mb-8">
            Have a project in mind, want to collaborate, or just want to say
            hello? I&apos;d love to hear from you. Feel free to reach out through
            any of the channels below.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <motion.a
              href="mailto:hello@lucasfragara.com"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-muted group-hover:text-accent transition-colors"
                >
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </div>
              <div>
                <p className="font-medium group-hover:text-accent transition-colors">
                  Email
                </p>
                <p className="text-sm text-muted">hello@lucasfragara.com</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-muted group-hover:text-accent transition-colors"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <p className="font-medium group-hover:text-accent transition-colors">
                  GitHub
                </p>
                <p className="text-sm text-muted">@lucasfragara</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-muted group-hover:text-accent transition-colors"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="font-medium group-hover:text-accent transition-colors">
                  LinkedIn
                </p>
                <p className="text-sm text-muted">Lucas Fragara</p>
              </div>
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 text-sm text-muted"
          >
            I typically respond within 24-48 hours.
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
