'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/lib/data'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <span className="text-muted font-medium">{project.title}</span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:opacity-70 transition-opacity"
            >
              View Project
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:opacity-70 transition-opacity"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
