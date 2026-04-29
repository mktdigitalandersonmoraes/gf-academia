import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Locations from './components/Locations'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * App — Componente principal que monta todas as seções do site GF Academia.
 */
function App() {
  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Locations />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
