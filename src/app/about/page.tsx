'use client'

import { motion } from 'framer-motion'
import ExperienceCard from '@/components/ExperienceCard'
import { experiences, skills } from '@/lib/data'

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="max-w-3xl space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m a developer who believes in the power of well-crafted software
              to solve real problems. With a focus on clean code and thoughtful
              design, I build applications that are both functional and delightful
              to use.
            </p>
            <p>
              My journey in tech started with curiosity about how things work,
              which evolved into a passion for building them. I enjoy the entire
              process—from understanding a problem deeply to architecting a
              solution to polishing the final details.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open source, reading about design patterns, or diving
              deep into whatever rabbit hole has captured my curiosity.
            </p>
            <p>
              I&apos;m always interested in connecting with fellow creators and
              exploring new opportunities. Feel free to reach out if you&apos;d like
              to collaborate or just chat about ideas.
            </p>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Education (placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-accent rounded-full mt-1.5" />
                <div className="w-px h-full bg-border" />
              </div>
              <div className="pb-6">
                <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-muted">University Name</p>
                <p className="text-sm text-muted">2016 - 2020</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
