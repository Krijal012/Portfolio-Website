export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <div className="w-12 h-1 bg-cyan-500 mx-auto mb-14 rounded-full" />

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Photo */}
        <div className="rounded-2xl overflow-hidden shadow-xl shadow-cyan-500/10 ring-1 ring-white/10">
          <img
            src="/src/assets/profile2.jpg"
            alt="Krijal Shrestha"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Bio */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Who am I?
          </h3>

          <p className="text-gray-400 leading-relaxed mb-4">
            I'm a passionate student studying at Softwarica College
            of IT & E-Commerce. I love building modern web
            application using React, Node.js, Express and PostgreSQL. I am learning
            coding to become Software Engineer in the future.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              ['Name', 'Krijal Shrestha'],
              ['Location', 'Lubhu, Lalitpur, Nepal'],
              ['College', 'Softwarica College of IT & E-Commerce'],
              ['Availability', 'Open to Work'],
            ].map(([title, value]) => (
              <div key={title}>
                <span className="text-gray-500">{title}: </span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}