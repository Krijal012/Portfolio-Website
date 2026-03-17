import certImage from "../assets/certificate.png";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Achievements &amp; <span className="text-cyan-400">Certificates</span>
        </h2>

        <div className="w-12 h-1 bg-cyan-500 mx-auto mb-14 rounded-full" />

        <div className="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-cyan-500/10">

          <div className="grid md:grid-cols-2">

            {/* Left — Certificate Image */}
            <div className="relative overflow-hidden">
              <img
                src={certImage}
                alt="TRI-KODE Hackathon Certificate"
                className="w-full h-full object-cover min-h-64 hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-4 left-4 bg-gray-950/80 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-xs text-gray-300">
                🏅 Certificate of Participation
              </div>
            </div>

            {/* Right — Details */}
            <div className="p-8 flex flex-col justify-center gap-4">

              <div>
                <span className="text-xs text-cyan-400 uppercase tracking-widest">
                  Hackathon
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 leading-snug">
                  TRI-KODE: The Ultimate Hackathon
                </h3>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-cyan-500">🏢</span>
                  Softwarica College of IT &amp; E-Commerce
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-cyan-500">👥</span>
                  Represented as
                  <span className="text-white font-semibold ml-1">
                    Team STRAWHATS
                  </span>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-cyan-500">📅</span>
                  January 22, 2026
                </div>
              </div>

              <div className="w-full h-px bg-white/5" />

              <p className="text-gray-500 text-sm leading-relaxed italic">
                "Didn't win, but built something real, learned a lot, and earned
                this certificate for the effort and innovation shown during the
                competition."
              </p>

              {/* ✅ FIXED BUTTON */}
              <a
                href="https://github.com/Krijal012/Check-Before-Click.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-cyan-500 hover:text-gray-950 text-gray-300 hover:font-bold border border-white/10 hover:border-cyan-500 rounded-xl text-sm transition-all duration-200 w-fit"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View Project on GitHub
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}