import React, { useEffect, useState } from 'react'
import { Menu, Phone, Hammer, Building2 } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { label: 'Proyectos', href: '#proyecto' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Especializados', href: '#especializados' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-slate-700/40 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl blur-md bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-60 group-hover:opacity-80 transition" />
              <div className="relative rounded-xl bg-slate-900/60 border border-blue-500/30 p-2">
                <Hammer className="w-6 h-6 text-blue-300" />
              </div>
            </div>
            <div className="font-semibold text-white tracking-tight">Peninsula Constructora</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="text-slate-200/90 hover:text-white relative underline-anim">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contacto" className="hidden sm:inline-flex items-center gap-2 btn-glow px-4 py-2 rounded-xl text-sm font-medium">
              <Phone className="w-4 h-4" /> Cotiza ahora
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-slate-700/60 bg-slate-800/40 text-slate-200">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-slate-700/50 bg-slate-900/80 p-3 space-y-2">
            {nav.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-slate-800/60">
                {n.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-slate-900 bg-yellow-400 font-semibold text-center">
              <div className="inline-flex items-center gap-2 justify-center"><Building2 className="w-4 h-4"/> Cotiza ahora</div>
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
