'use client'

import { Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'Flask Authentication System',
      description:
        'Secure user authentication system with login/signup, input validation, password hashing, and session management.',
      tech: ['Python', 'Flask', 'PostgreSQL', 'Security'],
      highlights: [
        'Implemented secure user authentication flows',
        'Password hashing with industry standards',
        'Session management & validation',
        'PostgreSQL database integration',
      ],
      github: 'https://github.com/manigupta',
    },
    {
      title: 'Library Management System',
      description:
        'CLI application for library operations including book issuing, return tracking, and inventory management.',
      tech: ['C++', 'OOP', 'Data Structures', 'CLI'],
      highlights: [
        'Applied OOP principles effectively',
        'Encapsulation & abstraction implementation',
        'Efficient data structure design',
        'User-friendly command interface',
      ],
      github: 'https://github.com/manigupta',
    },
    {
      title: 'Food Ordering Platform',
      description:
        'Full-stack web application for food ordering with responsive UI and RESTful backend APIs.',
      tech: ['Node.js', 'JavaScript', 'PostgreSQL', 'Express', 'HTML/CSS'],
      highlights: [
        'RESTful API design & implementation',
        'Responsive UI design',
        'Database optimization',
        'Seamless client-server communication',
      ],
      github: 'https://github.com/manigupta',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Key Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card flex flex-col h-full group hover:border-blue-400"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="my-4 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-blue-900 bg-opacity-40 text-blue-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">Highlights</p>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex gap-2">
                        <span className="text-blue-400">▪</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github size={16} />
                  View Project
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
