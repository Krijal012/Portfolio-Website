import { useState } from 'react'

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'krijalshrestha7@gmail.com',
    link: 'mailto:krijal@gmail.com',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Lubhu, Lalitpur, Nepal',
    link: null,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/Krijal012',
    link: 'https://github.com/Krijal012',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)

    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="w-12 h-1 bg-cyan-500 mx-auto mb-14 rounded-full" />

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Let's work together
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I'm currently open to new opportunities and collaborations.
                Whether you have a project in mind, a question, or just want
                to say hi — my inbox is always open!
              </p>
            </div>

            <div className="w-full h-px bg-white/5" />

            {/* Contact Info */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 bg-gray-900 border border-white/10 rounded-xl px-5 py-4 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <span className="text-2xl">{info.icon}</span>

                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>

                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-cyan-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-white/5" />

            {/* Status */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-gray-400 text-sm">
                Available for work & freelance projects
              </span>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-8">

            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-10">
                <span className="text-5xl">✅</span>
                <h4 className="text-white text-xl font-bold">Message Sent!</h4>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-2 px-6 py-2 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-gray-400 rounded-xl text-sm transition-all duration-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors duration-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors duration-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors duration-200 resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 text-sm"
                >
                  Send Message →
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Footer */}
        <div className="w-full h-px bg-white/5 mt-16 mb-8" />
        <p className="text-center text-gray-600 text-sm">
          © 2024 Krijal Shrestha — Built with React & Tailwind CSS 🚀
        </p>

      </div>
    </section>
  )
}