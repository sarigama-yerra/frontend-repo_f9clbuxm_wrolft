import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  { id: 1, name: 'Liyana', text: 'The oversized fit is perfect and the fabric feels premium. The glow details are unreal.', rating: 5 },
  { id: 2, name: 'Harsh', text: 'Minimal, comfy and bold. Definitely a statement piece in my wardrobe.', rating: 5 },
  { id: 3, name: 'Noah', text: 'Fast delivery and the quality is insane for the price. Love the TRIANÇE aesthetic.', rating: 5 },
]

const Testimonials = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_250px_at_90%_100%,rgba(59,130,246,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-white text-3xl font-bold">What the community says</h3>
          <p className="text-blue-200/80 mt-2">Real reviews from fashion-forward buyers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.id} className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6">
              <div className="flex items-center gap-1 mb-3 text-yellow-400">
                {Array.from({length:t.rating}).map((_,i)=> <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-blue-100">“{t.text}”</p>
              <p className="mt-4 text-white font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
