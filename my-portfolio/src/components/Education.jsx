const educations = [
    {
        school: 'Occidental Public School',
        location: 'Nepal',
        degree: 'Secondary Education (SEE)',
        status: 'Completed',
        year: 'Apr 2022',
        icon: '🏫',
    },
    {
        school: 'Himalayan WhiteHouse International College',
        location: 'Kathmandu, Nepal',
        degree: 'Higher Secondary Education (+2 Science)',
        status: 'Completed',
        year: 'Mar 2024',
        icon: '🏛️',
    },
    {
        school: 'Softwarica College of IT & E-Commerce',
        location: 'Dillibazar, Kathmandu, Nepal',
        degree: 'BSc (Hons) Computing — Software Engineering & Computer Science',
        status: 'Currently Enrolled',
        year: '2024 – Present',
        icon: '🎓',
    },
]

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
                My <span className="text-cyan-400">Education</span>
            </h2>
            <div className="w-12 h-1 bg-cyan-500 mx-auto mb-14 rounded-full" />

            {/* Timeline */}
            <div className="relative border-l-2 border-cyan-500/30 pl-10 flex flex-col gap-10">
                {educations.map((edu, index) => (
                    <div key={index} className="relative">

                        {/* Timeline dot */}
                        <div className="absolute -left-[3.2rem] w-8 h-8 rounded-full bg-gray-950 border-2 border-cyan-500 flex items-center justify-center text-sm shadow-lg shadow-cyan-500/20">
                            {edu.icon}
                        </div>

                        {/* Card */}
                        <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 shadow-md hover:shadow-cyan-500/10 hover:-translate-y-1">

                            <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                                {/* School name & location */}
                                <div>
                                    <h3 className="text-xl font-bold text-white">
                                        {edu.school}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-0.5">
                                        📍 {edu.location}
                                    </p>
                                </div>

                                {/* Status badge */}
                                <span
                                    className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${edu.status === 'Currently Enrolled'
                                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        }`}
                                >
                                    {edu.status === 'Currently Enrolled' ? '🟡' : '✅'} {edu.status}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/5 mb-3" />

                            {/* Degree & year */}
                            <div className="flex items-center justify-between flex-wrap gap-2">
                                <p className="text-cyan-400 text-sm font-medium">
                                    🎓 {edu.degree}
                                </p>
                                <p className="text-gray-500 text-xs bg-gray-800 px-3 py-1 rounded-full border border-white/5">
                                    📅 {edu.year}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}