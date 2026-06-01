'use client';

import { ShieldCheck, Phone, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-stratum-dark/80 backdrop-blur-xl border-b border-stratum-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-col">
          <img src="/logo.svg" alt="Stratum Foundation Repair" className="h-10 brightness-0 invert sepia hue-rotate-[1deg] saturate-[500%] contrast-[105%]" style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(87%) saturate(1637%) hue-rotate(345deg) brightness(101%) contrast(97%)' }} />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-5 h-5 text-stratum-amber" />
            <span className="text-sm font-semibold tracking-wide uppercase">Lifetime Warranty</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-white">
            <Phone className="w-5 h-5 text-stratum-amber" />
            <span className="text-lg font-bold tracking-tight">214-302-8559</span>
          </div>
          <a
            href="#inspection"
            className="bg-gradient-to-r from-stratum-amber to-stratum-gold hover:from-stratum-gold hover:to-stratum-yellow transition-all text-black px-6 py-3 rounded-md font-bold tracking-wide uppercase text-sm shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]"
          >
            Free Inspection
          </a>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
