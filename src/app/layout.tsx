import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luca Sfragara',
  description: 'Master student at MIT in Data Science and Machine Learning',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" font-family="system-ui" font-weight="bold">LF</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Luca Sfragara',
  jobTitle: 'MIT MBAn Student & Machine Learning Researcher',
  affiliation: {
    '@type': 'Organization',
    name: 'MIT',
  },
  url: 'https://www.lucasfragara.com',
  sameAs: [
    'https://www.linkedin.com/in/lucasfragara',
    'https://github.com/LucaSfragara',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
