'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { Education } from '@/lib/data'

interface EducationCardProps {
  education: Education
  index: number
}

export default function EducationCard({ education, index }: EducationCardProps) {
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
          {education.logo ? (
            education.schoolUrl ? (
              <a
                href={education.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-lg bg-white border border-border flex items-center justify-center overflow-hidden hover:border-accent hover:shadow-md transition-all cursor-pointer"
              >
                <Image
                  src={education.logo}
                  alt={`${education.school} logo`}
                  width={56}
                  height={56}
                  className="object-contain p-1.5"
                />
              </a>
            ) : (
              <div className="w-14 h-14 rounded-lg bg-white border border-border flex items-center justify-center overflow-hidden">
                <Image
                  src={education.logo}
                  alt={`${education.school} logo`}
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
          <h3 className="font-semibold text-foreground">{education.degree}</h3>
          <p className="text-muted">{education.school}</p>
          <div className="flex items-center gap-2 text-sm text-muted mt-1">
            <span>{education.startDate} - {education.endDate}</span>
            <span>•</span>
            <span>{education.location}</span>
          </div>
          {education.description && (
            <p className="text-muted leading-relaxed mt-2">
              {education.description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
