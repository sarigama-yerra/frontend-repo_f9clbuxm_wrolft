import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CollectionGrid from './components/CollectionGrid'
import ParallaxShowcase from './components/ParallaxShowcase'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background gradients */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(37,99,235,0.18),transparent),radial-gradient(900px_500px_at_110%_-10%,rgba(109,40,217,0.18),transparent)]" />
      </div>

      <Navbar />
      <Hero />
      <CollectionGrid />

      {/* minimalistic product showcase */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl grid md:grid-cols-2">
            <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1600&auto=format&fit=crop" alt="Minimal tee" className="h-96 w-full object-cover" />
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold">Minimal Drop</h3>
              <p className="text-blue-200/90 mt-3">Clean lines, muted palette, iconic oversized fit. Designed for the modern silhouette.</p>
              <div className="mt-6 flex gap-3">
                <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-[0_0_40px_rgba(37,99,235,0.55)]">Add to Cart</button>
                <button className="px-6 py-3 rounded-full bg-white/10 text-white border border-white/20">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ParallaxShowcase />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
