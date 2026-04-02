'use client'

import { BriefcaseIcon } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'HCL Software',
      location: 'Bengaluru, India',
      duration: 'Oct 2023 – Present (1 yr 6 m)',
      highlights: [
        'Debugged and resolved production issues in enterprise software using C++ and Python',
        'Implemented feature enhancements and performance fixes across multiple product modules',
        'Collaborated with cross-functional teams to troubleshoot complex technical issues',
        'Recognized with Custom Miles Award – QJFM 2025 for outstanding performance',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Solar Secure Solutions',
      location: 'Bengaluru, India',
      duration: 'Jul 2022 – Sep 2022 (3 m)',
      highlights: [
        'Developed full-stack food ordering platform using HTML, CSS, JavaScript, Node.js, PostgreSQL',
        'Designed RESTful backend APIs and integrated database for order management workflows',
        'Built responsive UI and implemented seamless client-server interaction',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-slate-900 bg-opacity-50">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BriefcaseIcon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-400 whitespace-nowrap">{exp.duration}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{exp.location}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
