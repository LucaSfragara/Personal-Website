'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-xl tracking-tight hover:text-accent transition-colors"
        >
          LF
        </Link>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
