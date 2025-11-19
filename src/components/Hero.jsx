import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="hero">
      {/* Background Spline 3D */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90 pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur text-blue-200 text-xs mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" /> Innovación en construcción
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Tú lo imaginas,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-yellow-300"> nosotros lo construimos</span>
          </h1>

          <p className="mt-6 text-lg text-blue-100/90 max-w-xl">
            Soluciones industriales, comerciales y residenciales con acabados de alto nivel, precisión y tiempos controlados.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#proyecto" className="px-6 py-3 rounded-xl bg-yellow-400 text-slate-900 font-semibold shadow-[0_0_30px_rgba(250,204,21,0.35)] hover:shadow-[0_0_45px_rgba(250,204,21,0.55)] transition-shadow">
              Más información
            </a>
            <a href="#contacto" className="px-6 py-3 rounded-xl border border-blue-300/40 bg-white/5 text-white hover:bg-white/10 transition">
              Cotizar proyecto
            </a>
          </div>
        </motion.div>

        {/* Tabs / categories */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {['Industrial','Comercial','Residencial','Mantenimientos'].map((t) => (
              <button key={t} className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-slate-900/60 backdrop-blur p-4 text-left">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-blue-500/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500/80 mb-3 shadow-lg shadow-blue-900/40" />
                  <div className="text-white font-medium">{t}</div>
                  <div className="mt-1 text-blue-200/70 text-sm">Ver más</div>
                </div>
                <span className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-400/40 transition" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
