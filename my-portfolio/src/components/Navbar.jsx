export default function Navbar() {
  const links = ['About', 'Skills', 'Achievements', 'Projects', 'Contact']

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-cyan-400 tracking-widest uppercase">
          Krijal
        </span>

        <ul className="flex gap-6 flex-wrap">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  )
}