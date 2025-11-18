'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'

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

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
