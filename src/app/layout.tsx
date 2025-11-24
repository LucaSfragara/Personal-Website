import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luca Sfragara | MIT Data Science & Machine Learning',
  description: 'MIT MBAn student specializing in Data Science and Machine Learning. Researching causal inference and machine learning with Prof. Georgia Perakis. Previously at BCG and Deutsche Bank',
  keywords: ['Luca Sfragara', 'MIT', 'Data Science', 'Machine Learning', 'Causal Inference', 'Reinforcement Learning', 'BCG', 'Deutsche Bank', 'Bocconi University', 'Operations Research'],
  authors: [{ name: 'Luca Sfragara' }],
  creator: 'Luca Sfragara',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lucasfragara.com',
    siteName: 'Luca Sfragara',
    title: 'Luca Sfragara | MIT Data Science & Machine Learning',
    description: 'MIT MBAn student specializing in Data Science and Machine Learning. Previously at BCG and Deutsche Bank',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luca Sfragara | MIT Data Science & Machine Learning',
    description: 'MIT MBAn student specializing in Data Science and Machine Learning. Previously at BCG and Deutsche Bank',
  },
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
