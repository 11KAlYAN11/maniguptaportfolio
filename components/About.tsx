'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 bg-opacity-50">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          About Me
        </h2>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            I am a dedicated software engineer with 2+ years of professional experience specializing in C++ and Python development. My expertise lies in debugging complex enterprise systems, optimizing performance, and implementing robust features that enhance user experience.
          </p>

          <p className="text-lg leading-relaxed">
            Currently working as a Senior Software Engineer at HCL Software, I focus on resolving production issues and implementing features that directly impact customer satisfaction. I have been recognized with the Custom Miles Award (QJFM 2025) for outstanding performance.
          </p>

          <p className="text-lg leading-relaxed">
            Beyond backend development, I have hands-on experience building full-stack applications using Node.js, React, and PostgreSQL. I'm passionate about writing clean, maintainable code and following best practices in software development.
          </p>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-white">Key Strengths</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                '🔍 Advanced Debugging & Problem Solving',
                '⚡ Performance Optimization',
                '🏗️ System Design & Architecture',
                '👥 Cross-functional Collaboration',
                '📚 Quick Learning & Adaptation',
                '💻 Clean Code Practices',
              ].map((strength, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-300 p-3 bg-slate-800 bg-opacity-50 rounded-lg"
                >
                  <span className="text-blue-400 text-xl">{strength.split(' ').shift()}</span>
                  <span>{strength.substring(strength.indexOf(' '))}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
