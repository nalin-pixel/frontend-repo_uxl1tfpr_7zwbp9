import React from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Sparkles } from 'lucide-react'

export default function FeaturedProject() {
  return (
    <section id="proyecto" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(250,204,21,0.12),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/60">
          <img src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop" alt="Proyecto" className="w-full h-[420px] object-cover transition-transform duration-500 hover:scale-105" />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur text-blue-200 text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Proyectos de alta calidad en tu comercio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Excelencia que se ve y se siente</h2>
          <p className="text-blue-100/80 mb-8 max-w-prose">Diseñamos y ejecutamos con precisión: desde cimentación hasta acabados. Control de calidad, seguridad y supervisión continua para resultados superiores.</p>

          <div className="flex flex-wrap gap-3">
            {[
              {label:'Invertir', color:'from-blue-500 to-indigo-500'},
              {label:'Ahora', color:'from-yellow-400 to-amber-300'},
              {label:'Conócenos', color:'from-slate-200 to-white'}
            ].map((b,i)=> (
              <a key={i} href="#contacto" className={`group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-slate-900 bg-gradient-to-tr ${b.color}`}>
                <span className="relative z-10">{b.label}</span>
                <ChevronRight className="w-4 h-4 relative z-10" />
                <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
