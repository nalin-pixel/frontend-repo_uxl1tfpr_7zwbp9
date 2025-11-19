import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import Services from './components/Services'
import SplitServices from './components/SplitServices'
import Contact from './components/Contact'
import Footprint from './components/Footprint'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_20%_10%,#1e3a8a_0%,transparent_40%),radial-gradient(circle_at_80%_90%,#0ea5e9_0%,transparent_35%)]" />
      <Header />
      <Hero />
      <FeaturedProject />
      <Services />
      <SplitServices />
      <Contact />
      <Footprint />
      <FinalCTA />
      <footer className="py-10 text-center text-sm text-blue-200/70">© {new Date().getFullYear()} Peninsula Constructora. Todos los derechos reservados.</footer>
    </div>
  )
}

export default App
