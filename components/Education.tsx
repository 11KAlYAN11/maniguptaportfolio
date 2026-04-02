'use client'

import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900 bg-opacity-50">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="text-blue-400" size={28} />
              Education
            </h3>

            <div className="card">
              <h4 className="text-lg font-bold text-blue-300 mb-2">
                B.Tech – Computer Science & Engineering
              </h4>
              <p className="text-gray-400 mb-3">
                A.K.T.U. – Ghaziabad, India
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="font-semibold">CGPA:</span>
                <span className="text-lg font-bold text-green-400">8.1</span>
              </div>
              <p className="text-sm text-gray-400 mt-3">Graduated: Jun 2023</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Award className="text-blue-400" size={28} />
              Certifications
            </h3>

            <div className="space-y-3">
              {[
                'AWS Cloud Development Kit (AWS)',
                'Cyber Security – IIT Kanpur',
                'Python OOP – Udemy',
                'Google Cloud: Implement Load Balancing on Compute Engine',
                'Set Up App Dev Environment on GCP',
                '3★ C++ on HackerRank',
                'CodeChef Rating: 1166, Div 4',
              ].map((cert, index) => (
                <div
                  key={index}
                  className="card p-4 flex items-start gap-3"
                >
                  <span className="text-blue-400 text-lg flex-shrink-0">✓</span>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12 p-8 bg-purple-900 bg-opacity-20 border border-purple-500 border-opacity-30 rounded-lg">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Award size={24} />
            Achievements
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-gray-300">
              <span className="text-purple-400 font-bold">•</span>
              <span>HCL's Custom Miles Award (QJFM 2025) for outstanding individual performance</span>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-purple-400 font-bold">•</span>
              <span>Solved 270+ C++ problems on HackerRank and competitive platforms</span>
            </li>
            <li className="flex gap-3 text-gray-300">
              <span className="text-purple-400 font-bold">•</span>
              <span>Recognized for quick learning and rapid technology adoption</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
