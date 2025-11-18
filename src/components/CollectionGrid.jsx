import React from 'react'
import { motion } from 'framer-motion'

const products = [
  { id: 1, title: 'Spectra Oversize', price: '$49', img: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Abyss Tee', price: '$54', img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Pulse Indigo', price: '$59', img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Neon Drift', price: '$57', img: 'https://images.unsplash.com/photo-1577597074146-2f6b88bb6b2f?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Glacier Blue', price: '$52', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Aurora Grey', price: '$47', img: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1200&auto=format&fit=crop' },
]

const CollectionGrid = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-bold">Oversized Collection</h2>
            <p className="text-blue-200/80 mt-2">Premium silhouettes with neon accents and breathable fabrics</p>
          </div>
          <button className="px-5 py-2 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/15">View All</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div key={p.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.2}} transition={{delay:i*0.05}} className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <p className="text-white text-lg font-semibold drop-shadow">{p.title}</p>
                    <p className="text-blue-200">{p.price}</p>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm shadow-[0_0_25px_rgba(37,99,235,0.6)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">Add to Cart</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionGrid
