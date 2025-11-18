import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ShowcaseCard = ({img, title, caption, invert}) => (
  <div className={`relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl ${invert ? 'md:col-start-2' : ''}`}>
    <img src={img} alt={title} className="h-80 w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
    <div className="absolute bottom-4 left-4">
      <p className="text-white text-xl font-semibold">{title}</p>
      <p className="text-blue-200 text-sm">{caption}</p>
    </div>
  </div>
)

const ParallaxShowcase = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const y1 = useTransform(scrollYProgress, [0,1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0,1], [0, 80])

  return (
    <section ref={ref} className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_300px_at_10%_100%,rgba(147,51,234,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
        <motion.div style={{ y: y1 }} className="space-y-6">
          <ShowcaseCard img="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" title="Featherweight" caption="Breathable cotton blends" />
          <ShowcaseCard img="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1200&auto=format&fit=crop" title="Bold Silhouette" caption="Drop shoulders, relaxed fit" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="space-y-6">
          <ShowcaseCard img="https://images.unsplash.com/photo-1581349437898-cebbe983d3f2?q=80&w=1200&auto=format&fit=crop" title="Neon Accents" caption="Reflective trims and glow" invert />
          <ShowcaseCard img="https://images.unsplash.com/photo-1546950232-56f48f755e03?q=80&w=1200&auto=format&fit=crop" title="Everyday Comfort" caption="Soft-touch finish" invert />
        </motion.div>
      </div>
    </section>
  )
}

export default ParallaxShowcase
