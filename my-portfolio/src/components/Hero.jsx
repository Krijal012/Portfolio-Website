import profilePhoto from '../assets/profile.jpeg'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <div>

        {/* Profile Photo */}
        <div className="w-36 h-36 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-cyan-500/40 shadow-xl shadow-cyan-500/20">
          <img
            src={profilePhoto}
            alt="Krijal Shrestha"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Greetings */}
        <p className="tetx-cyan-400 uppercase tracking-widest text-sm mb-3">Hello, World! 👋</p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">Hi, This is <br /><span className="text-cyan-400">Krijal Shrestha</span></h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-3">A student studying at Softwarica College of IT &amp; E-Commerce</p>
        <p className="text-gray-500 mb-10 text-base">A 2nd Year IT Student</p>

        {/* Social Links */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/Krijal012"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-900 border border-white/20 rounded-full text-gray-300 hover:text-white hover:border-cyan-400 hover:bg-gray-800 transition-all duration-200 shadow-md"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/krijal-shrestha-78b85a3a6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-cyan-500 text-gray-950 font-semibold rounded-full hover:bg-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/30"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}