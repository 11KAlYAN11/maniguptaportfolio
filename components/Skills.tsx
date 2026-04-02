'use client'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['C++', 'Python', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Flask', 'Node.js', 'Express', 'Bootstrap', 'jQuery'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'ZEN'],
    },
    {
      category: 'Cloud & Tools',
      skills: ['AWS', 'Google Cloud Platform', 'Git', 'GitHub', 'Docker', 'Linux'],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card overflow-hidden hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-blue-900 bg-opacity-20 border border-blue-500 border-opacity-30 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-300">Proficiency Overview</h3>
          <div className="space-y-4">
            {[
              { label: 'C++ Development', value: 95 },
              { label: 'Python Development', value: 90 },
              { label: 'Debugging & Problem Solving', value: 95 },
              { label: 'Full Stack Development', value: 85 },
              { label: 'Performance Optimization', value: 88 },
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.label}</span>
                  <span className="text-blue-400 font-semibold">{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
