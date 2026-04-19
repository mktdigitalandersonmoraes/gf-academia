import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Trainers from './components/Trainers'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * App — Componente principal que monta todas as seções do site GF Academia.
 */
function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Trainers />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
