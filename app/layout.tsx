import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mani Gupta - Senior Software Engineer',
  description: 'Professional portfolio of Mani Gupta, Senior Software Engineer specializing in C++, Python, and full-stack development.',
  keywords: 'software engineer, developer, C++, Python, JavaScript, portfolio',
  authors: [{ name: 'Mani Gupta' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manigupta.dev',
    title: 'Mani Gupta - Senior Software Engineer',
    description: 'Professional portfolio showcasing experience in enterprise software development',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {children}
      </body>
    </html>
  )
}
