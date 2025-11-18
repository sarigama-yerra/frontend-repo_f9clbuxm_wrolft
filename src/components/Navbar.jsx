import React from 'react'
import { ShoppingCart, Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
          <span className="text-white text-lg font-semibold tracking-wide">KINFASH</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {['Home','New Arrivals','Oversized','Trends','Kinfash Exclusive','Cart'].map((item) => (
            <li key={item} className="text-blue-100 hover:text-white transition-colors cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.8)]">2</span>
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 text-white">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
