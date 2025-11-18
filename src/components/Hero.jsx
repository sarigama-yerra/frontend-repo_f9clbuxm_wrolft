import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-900"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(59,130,246,0.35),transparent),radial-gradient(500px_300px_at_90%_10%,rgba(147,51,234,0.3),transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid lg:grid-cols-2 items-center gap-12">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="text-white">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/10 backdrop-blur-md">TRIANÇE EDITION</span>
          <h1 className="mt-5 text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Oversized T-Shirts
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 text-transparent bg-clip-text">Built to Glow</span>
          </h1>
          <p className="mt-6 text-blue-100/90 max-w-xl">Premium oversized silhouettes crafted for movement. Neon accents. Glassy finish. Future-ready streetwear by KINFASH.</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-[0_0_40px_rgba(37,99,235,0.55)] hover:shadow-[0_0_60px_rgba(37,99,235,0.7)] transition">Shop Now</button>
            <button className="px-6 py-3 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/15 transition">View Lookbook</button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-blue-200/80">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i)=> (
                <img key={i} src={`https://images.unsplash.com/photo-15${80+i}571977-fbe00f4fd94e?q=80&w=100&auto=format&fit=crop`} className="h-9 w-9 rounded-full ring-2 ring-slate-900 object-cover" />
              ))}
            </div>
            <p className="text-sm">Trusted by 10k+ fashion-forward shoppers</p>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2, duration:0.7}} className="relative">
          <div className="grid grid-cols-2 gap-5">
            {[
              {img:'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop', title:'Neo Black Oversized', price:'$48'},
              {img:'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1000&auto=format&fit=crop', title:'Haze Blue Tee', price:'$52'},
              {img:'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1000&auto=format&fit=crop', title:'Graphite Classic', price:'$45'},
              {img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop', title:'Ultraviolet Oversize', price:'$55'},
            ].map((p,idx)=> (
              <div key={p.title} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
                <img src={p.img} alt={p.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold drop-shadow">{p.title}</p>
                    <p className="text-blue-200 text-sm">{p.price}</p>
                  </div>
                  <button className="px-3 py-1.5 rounded-full bg-blue-600 text-white text-sm shadow-[0_0_25px_rgba(37,99,235,0.6)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">Add</button>
                </div>
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute -inset-10 blur-2xl bg-blue-500/20" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
