import React from 'react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_0%_100%,rgba(59,130,246,0.25),transparent),radial-gradient(600px_300px_at_100%_0%,rgba(250,204,21,0.18),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold text-white">
          Impulsa tu proyecto con un equipo de alto nivel
        </motion.h3>
        <p className="mt-3 text-blue-100/85">Diseño, ingeniería y obra civil con la precisión que tu marca merece.</p>
        <div className="mt-8">
          <a href="#contacto" className="inline-flex px-6 py-3 rounded-2xl bg-yellow-400 text-slate-900 font-semibold shadow-[0_0_35px_rgba(250,204,21,0.45)] hover:shadow-[0_0_55px_rgba(250,204,21,0.65)] transition">Cotiza con nosotros</a>
        </div>
      </div>
    </section>
  )
}
