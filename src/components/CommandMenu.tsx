'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Command } from 'cmdk'
import { experiences, education, projects, skills } from '@/lib/data'

export default function CommandMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = useCallback((command: () => void) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted bg-white border border-border rounded-lg hover:border-accent transition-colors"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span>Search...</span>
        <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-gray-50 px-1.5 font-mono text-[10px] font-medium text-muted">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Command dialog */}
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed inset-0 z-[100]"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Dialog content */}
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg">
          <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
            <Command.Input
              placeholder="Search pages, experiences, projects..."
              className="w-full px-4 py-4 text-base border-b border-border outline-none placeholder:text-muted"
            />
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="py-6 text-center text-sm text-muted">
                No results found.
              </Command.Empty>

              {/* Pages */}
              <Command.Group heading="Pages" className="px-2 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                <Command.Item
                  value="home"
                  onSelect={() => runCommand(() => router.push('/'))}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                  </svg>
                  Home
                </Command.Item>
                <Command.Item
                  value="projects"
                  onSelect={() => runCommand(() => router.push('/projects'))}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                  Projects
                </Command.Item>
                <Command.Item
                  value="contact"
                  onSelect={() => runCommand(() => router.push('/contact'))}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Contact
                </Command.Item>
              </Command.Group>

              {/* Experience */}
              <Command.Group heading="Experience" className="px-2 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider mt-2">
                {experiences.map((exp) => (
                  <Command.Item
                    key={exp.id}
                    value={`${exp.title} ${exp.company}`}
                    onSelect={() => runCommand(() => {
                      router.push('/')
                      // Scroll to experience section after navigation
                      setTimeout(() => {
                        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    })}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    <div>
                      <div className="font-medium">{exp.title}</div>
                      <div className="text-xs text-muted">{exp.company}</div>
                    </div>
                  </Command.Item>
                ))}
              </Command.Group>

              {/* Education */}
              <Command.Group heading="Education" className="px-2 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider mt-2">
                {education.map((edu) => (
                  <Command.Item
                    key={edu.id}
                    value={`${edu.degree} ${edu.school}`}
                    onSelect={() => runCommand(() => {
                      router.push('/')
                      setTimeout(() => {
                        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    })}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    <div>
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-xs text-muted">{edu.school}</div>
                    </div>
                  </Command.Item>
                ))}
              </Command.Group>

              {/* Projects */}
              <Command.Group heading="Projects" className="px-2 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider mt-2">
                {projects.map((project) => (
                  <Command.Item
                    key={project.id}
                    value={`${project.title} ${project.description}`}
                    onSelect={() => runCommand(() => router.push('/projects'))}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                    <div>
                      <div className="font-medium">{project.title}</div>
                      <div className="text-xs text-muted line-clamp-1">{project.description}</div>
                    </div>
                  </Command.Item>
                ))}
              </Command.Group>

              {/* Skills */}
              <Command.Group heading="Skills" className="px-2 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider mt-2">
                {skills.slice(0, 5).map((skill) => (
                  <Command.Item
                    key={skill}
                    value={skill}
                    onSelect={() => runCommand(() => {
                      router.push('/')
                      setTimeout(() => {
                        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    })}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {skill}
                  </Command.Item>
                ))}
              </Command.Group>

              {/* Links */}
              <Command.Group heading="Links" className="px-2 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider mt-2">
                <Command.Item
                  value="github"
                  onSelect={() => runCommand(() => window.open('https://github.com/LucaSfragara', '_blank'))}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </Command.Item>
                <Command.Item
                  value="linkedin"
                  onSelect={() => runCommand(() => window.open('https://linkedin.com/in/lucasfragara', '_blank'))}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </Command.Item>
                <Command.Item
                  value="email"
                  onSelect={() => runCommand(() => window.open('mailto:lsfragar@mit.edu', '_blank'))}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email
                </Command.Item>
              </Command.Group>
            </Command.List>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-border text-xs text-muted">
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 bg-gray-100 border border-border rounded">↑↓</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 bg-gray-100 border border-border rounded">↵</kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 bg-gray-100 border border-border rounded">Esc</kbd>
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      </Command.Dialog>
    </>
  )
}
