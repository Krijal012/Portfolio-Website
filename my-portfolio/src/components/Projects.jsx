import projectLibrary from '../assets/project-library.png'
import projectJobvetau from '../assets/project-jobvetau.png'
import projectKindim from '../assets/project-kindim.png'
import projectMedsathiWeb from '../assets/project-medsathi-web.png'
import projectMedsathiMobile from '../assets/project-medsathi-mobile.png'

const projects = [
  {
    title: 'Library Management System',
    tech: ['Python', 'Tkinter', 'SQLite'],
    description:
      'A desktop LMS with role-based access for Admin, Librarian, and Student. Admin manages user accounts, Librarians handle books, and Students view available books — all with seamless SQLite database integration.',
    image: projectLibrary,
    code: 'https://github.com/Krijal012/Library-Management-System.git',
  },
  {
    title: 'Job Vetau',
    tech: ['Java', 'Java Swing', 'MySQL'],
    description:
      'A job portal system bridging employers and job seekers in Nepal. Supports job posting, job search, applications, and profile management — all in a single cohesive platform tailored for the Nepalese market.',
    image: projectJobvetau,
    code: 'https://github.com/anilkc01/JobVetau_GroupC_37B.git',
  },
  {
    title: 'Kindim',
    tech: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js'],
    description:
      'An online marketplace supporting customers, sellers, and administrators. Features secure login, product browsing, cart management, order tracking, seller dashboards, and admin controls for verifying sellers and monitoring orders.',
    image: projectKindim,
    code: 'https://github.com/Krijal012/Kindim_37B.git',
  },
  {
    title: 'MedSathi Web',
    tech: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js'],
    description:
      'A comprehensive pharmacy management system with role-based authentication and dedicated modules for patients, staff, doctors, pharmacists, and administrators — all in one platform.',
    image: projectMedsathiWeb,
    code: 'https://github.com/Krijal012/MedSathi-37B.git',
  },
  {
    title: 'MedSathi Mobile',
    tech: ['Kotlin', 'Firebase', 'Android'],
    description:
      'A Kotlin & Firebase-based pharmacy management app enabling user authentication, medicine inventory, appointment booking, digital prescriptions, billing, alerts, and patient/staff management.',
    image: projectMedsathiMobile,
    code: 'https://github.com/Krijal012/MedSathi-37B-Kotlin.git',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto mb-14 rounded-full" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.code}
              className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-cyan-500/10"
            >

              {/* Image */}
              <div className="w-full h-44 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 mb-3" />

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Button */}
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-gray-800 hover:bg-cyan-500 hover:text-gray-950 text-gray-300 hover:font-bold border border-white/10 hover:border-cyan-500 rounded-xl text-sm transition-all duration-200"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-4 h-4 invert"
                  />
                  View on GitHub
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}