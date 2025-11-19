import React from 'react'
import { motion } from 'framer-motion'

export default function Footprint() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-5">
          <h3 className="text-3xl font-bold text-slate-900">Huellas en la Península</h3>
          <p className="text-slate-600 mt-2">Más de 120 obras entregadas a tiempo en Yucatán, Campeche y Quintana Roo.</p>
          <ol className="mt-6 space-y-4">
            {["Planeación meticulosa","Ejecución con estándares","Supervisión y control","Entrega y garantía"].map((t,i)=> (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-1 h-7 w-7 rounded-full bg-blue-600 text-white grid place-items-center font-semibold">{i+1}</span>
                <span className="text-slate-800">{t}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
            <img src="https://images.unsplash.com/photo-1552084117-56a987666449?q=80&w=1600&auto=format&fit=crop" className="w-full h-[400px] object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
