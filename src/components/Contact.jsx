import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Mail, Phone, Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="relative py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_400px_at_100%_0%,rgba(250,204,21,0.12),transparent),radial-gradient(600px_500px_at_0%_100%,rgba(59,130,246,0.15),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-blue-500/20 bg-white/5 backdrop-blur-xl p-6">
          <h3 className="text-2xl font-bold text-white">Cuéntanos tu proyecto</h3>
          <p className="text-blue-100/80 mt-1">Respondemos en menos de 24h</p>

          <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Nombre','Email','Teléfono','Empresa'].map((f) => (
              <label key={f} className="group relative">
                <input placeholder=" " className="peer w-full rounded-xl bg-slate-900/50 border border-blue-400/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/60 transition placeholder-transparent" />
                <span className="pointer-events-none absolute left-3 -top-2.5 bg-slate-900 px-1 text-xs text-blue-200 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-blue-300/60 peer-focus:-top-2.5 peer-focus:text-xs">{f}</span>
              </label>
            ))}
            <label className="sm:col-span-2 group relative">
              <textarea rows="5" placeholder=" " className="peer w-full rounded-xl bg-slate-900/50 border border-blue-400/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/60 transition placeholder-transparent" />
              <span className="pointer-events-none absolute left-3 -top-2.5 bg-slate-900 px-1 text-xs text-blue-200 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-blue-300/60 peer-focus:-top-2.5 peer-focus:text-xs">Mensaje</span>
            </label>

            <div className="sm:col-span-2">
              <button type="button" className="relative inline-flex overflow-hidden rounded-2xl bg-yellow-400 text-slate-900 font-semibold px-6 py-3">
                <span className="relative z-10">Enviar</span>
                <span className="absolute inset-0 bg-white/0 hover:bg-white/30 transition" />
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid sm:grid-cols-2 gap-4">
          {[
            {icon: MapPin, title:'Ubicación', desc:'Mérida, Yucatán'},
            {icon: MessageCircle, title:'WhatsApp', desc:'+52 999 000 0000'},
            {icon: Clock, title:'Horarios', desc:'Lun - Vie: 9:00 - 18:00'},
            {icon: Mail, title:'E-mail', desc:'hola@peninsulaconstructora.mx'},
          ].map((c)=> (
            <div key={c.title} className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl text-white shadow-lg">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 mb-3">
                <c.icon className="w-5 h-5" />
              </div>
              <div className="font-semibold">{c.title}</div>
              <div className="text-blue-100/80 text-sm">{c.desc}</div>
            </div>
          ))}

          <div className="sm:col-span-2 mt-2 flex items-center gap-3">
            {[Instagram, Facebook, Phone].map((I, i) => (
              <a key={i} href="#" className="h-11 w-11 grid place-items-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition">
                <I className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
