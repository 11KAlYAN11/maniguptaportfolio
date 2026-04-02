'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-gray-800 py-12">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Mani Gupta</h3>
            <p className="text-gray-400">Senior Software Engineer</p>
            <p className="text-gray-500 text-sm mt-2">Specializing in C++, Python & Full-Stack Development</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <Link
                href="https://github.com/manigupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors block"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/mani-gupta-rg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors block"
              >
                LinkedIn
              </Link>
              <Link
                href="mailto:Mani.gupta.rg@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors block"
              >
                Email
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Mani Gupta. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-lg text-gray-300 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            Back to Top
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
