import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'
import Achievements from './components/Achievement'

export default function App() {
  return (
    <div className="bg-gray-950 text-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  )
}