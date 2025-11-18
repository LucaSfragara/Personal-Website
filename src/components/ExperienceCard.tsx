'use client'

import { motion } from 'framer-motion'
import type { Experience } from '@/lib/data'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="flex gap-4">
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-accent rounded-full mt-1.5" />
          <div className="w-px h-full bg-border" />
        </div>

        {/* Content */}
        <div className="pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
            <h3 className="font-semibold text-foreground">{experience.title}</h3>
            <span className="hidden sm:inline text-muted">•</span>
            <span className="text-muted">{experience.company}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted mb-2">
            <span>{experience.startDate} - {experience.endDate}</span>
            <span>•</span>
            <span>{experience.location}</span>
          </div>
          <p className="text-muted leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
