import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Loader2, Wrench, Building } from 'lucide-react'

const services = [
  { icon: Shield, title: 'Impermeabilización', desc: 'Protección total con materiales de alta durabilidad.' },
  { icon: Loader2, title: 'Rampas elevables', desc: 'Soluciones industriales seguras y eficientes.' },
  { icon: Building, title: 'Construcción', desc: 'Obra civil con estándares premium.' },
  { icon: Wrench, title: 'Mantenimiento', desc: 'Planes de servicio y correctivos especializados.' },
]

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_500px_at_110%_110%,rgba(250,204,21,0.12),transparent)]">
      <div className="absolute inset-0 -z-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-3xl sm:text-4xl font-bold text-white">Servicios de excelencia</motion.h2>
        <p className="text-center text-blue-100/80 max-w-2xl mx-auto mt-3">Calidad, seguridad y estética en cada entrega.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="group relative rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl hover:shadow-2xl hover:shadow-blue-900/30 transition-transform [transform-style:preserve-3d] hover:-translate-y-1">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative">
                <div className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-900/40">
                  <s.icon className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-blue-100/80">{s.desc}</p>
                <button className="mt-5 inline-flex px-4 py-2 rounded-xl bg-yellow-400 text-slate-900 font-semibold hover:scale-105 transition-transform">Cotizar</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
