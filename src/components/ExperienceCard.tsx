'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { Experience } from '@/lib/data'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasHighlights = experience.highlights && experience.highlights.length > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="flex gap-4 pb-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          {experience.logo ? (
            experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-lg bg-white border border-border flex items-center justify-center overflow-hidden hover:border-accent hover:shadow-md transition-all cursor-pointer"
              >
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={56}
                  height={56}
                  className="object-contain p-1.5"
                />
              </a>
            ) : (
              <div className="w-14 h-14 rounded-lg bg-white border border-border flex items-center justify-center overflow-hidden">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={56}
                  height={56}
                  className="object-contain p-1.5"
                />
              </div>
            )
          ) : (
            <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
              <div className="w-3 h-3 bg-accent rounded-full" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground">{experience.title}</h3>
          <p className="text-muted">{experience.company}</p>
          <div className="flex items-center gap-2 text-sm text-muted mt-1">
            <span>{experience.startDate} - {experience.endDate}</span>
            <span>•</span>
            <span>{experience.location}</span>
          </div>
          <p className="text-muted leading-relaxed mt-2">
            {experience.description}
          </p>

          {/* Collapsible Highlights */}
          {hasHighlights && (
            <div className="mt-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    d="M4.5 2.5L8 6L4.5 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
                {isExpanded ? 'Hide details' : 'Show details'}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-3 space-y-2 pl-4 border-l-2 border-accent/30">
                      {experience.highlights?.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.05 }}
                          className="text-sm text-muted leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full"
                        >
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
