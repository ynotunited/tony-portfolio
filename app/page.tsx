import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofStrip from './components/ProofStrip'
import About from './components/About'
import BuildLedger from './components/BuildLedger'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Contact from './components/Contact'
import FloatingCTA from './components/FloatingCTA'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProofStrip />
      <About />
      <BuildLedger />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <FloatingCTA />
    </main>
  )
}
