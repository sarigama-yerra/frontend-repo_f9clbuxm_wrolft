import React from 'react'
import { Truck, ShieldCheck, RefreshCcw } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-slate-900/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex items-center gap-4 text-white">
            <Truck className="text-blue-400" />
            <div>
              <p className="font-semibold">Fast Delivery</p>
              <p className="text-sm text-blue-200/80">1-3 business days</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex items-center gap-4 text-white">
            <ShieldCheck className="text-blue-400" />
            <div>
              <p className="font-semibold">Secure Payments</p>
              <p className="text-sm text-blue-200/80">256-bit encryption</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex items-center gap-4 text-white">
            <RefreshCcw className="text-blue-400" />
            <div>
              <p className="font-semibold">Easy Returns</p>
              <p className="text-sm text-blue-200/80">30-day policy</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-blue-200/80 text-sm">
          <p>© {new Date().getFullYear()} KINFASH. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
