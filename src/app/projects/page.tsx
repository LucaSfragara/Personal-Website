'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-muted max-w-2xl">
            A selection of projects I&apos;ve worked on. Each one represents a
            problem I wanted to solve or an idea I wanted to explore.
          </p>
        </motion.div>

        {/* Under Construction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center py-20"
        >
          <div className="w-20 h-20 mb-6 text-muted">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Under Construction</h2>
          <p className="text-muted text-center max-w-md">
            I&apos;m currently working on documenting my projects. Check back soon for updates!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
