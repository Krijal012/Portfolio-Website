const skillCategories = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', img: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    category: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-gray-900 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-cyan-500/10"
            >
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/5 mb-5" />

              {/* Skill items */}
              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-2 cursor-default"
                  >
                    {/* Icon box with glow on hover */}
                    <div className="w-14 h-14 rounded-xl bg-gray-800 border border-white/10 flex items-center justify-center p-2.5 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_18px_4px_rgba(34,211,238,0.35)] group-hover:scale-110 group-hover:bg-gray-700">
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        style={
                          skill.name === 'GitHub' || skill.name === 'Express.js'
                            ? { filter: 'invert(1)' }
                            : {}
                        }
                      />
                    </div>

                    {/* Skill name */}
                    <span className="text-xs text-gray-500 group-hover:text-cyan-400 transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}