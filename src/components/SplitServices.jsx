import React from 'react'
import { motion } from 'framer-motion'

export default function SplitServices() {
  return (
    <section id="especializados" className="relative py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_10%_20%,rgba(2,6,23,0.06),transparent),radial-gradient(500px_300px_at_90%_80%,rgba(2,6,23,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center lg:text-left">Especializados</h2>
          <div className="mt-3 h-1 w-24 mx-auto lg:mx-0 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-full" />
          <p className="mt-4 text-slate-600 text-center lg:text-left">Equipos certificados para trabajos en altura, soldadura, obra eléctrica y más. Protocolos y controles para garantizar tu operación.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-7">
          <div className="grid sm:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600 animate-[pulse_2s_ease-in-out_infinite]" />
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 mb-2" />
                <div className="font-semibold text-slate-900">Servicio {i}</div>
                <div className="text-sm text-slate-600">Detalle breve del servicio especializado.</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
