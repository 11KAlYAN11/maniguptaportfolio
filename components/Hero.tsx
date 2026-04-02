'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container">
        <div className="text-center space-y-8 animate-fadeIn">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Mani Gupta</span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 font-light">
              Senior Software Engineer
            </h2>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Software Engineer with 2+ years of experience in C++ and Python development, specializing in debugging, performance improvements, and feature enhancements in enterprise applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="#projects" className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              View My Work
              <ArrowRight size={20} />
            </Link>
            <Link href="#contact" className="inline-flex items-center gap-2 px-8 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:bg-opacity-10 transition-all">
              Contact Me
            </Link>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <Link
              href="https://github.com/manigupta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/mani-gupta-rg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:Mani.gupta.rg@gmail.com"
              className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
            >
              <Mail size={24} />
            </Link>
          </div>

          <div className="pt-12">
            <p className="text-gray-400 text-sm mb-4">Scroll to explore more</p>
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 mx-auto text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
