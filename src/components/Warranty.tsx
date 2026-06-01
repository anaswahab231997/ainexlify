'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Warranty() {
  const points = [
    "Lifetime Coverage",
    "Fully Transferable",
    "No Hidden Fees",
    "Backed by 5,000+ DFW Repairs"
  ];

  return (
    <section className="bg-stratum-obsidian py-32 border-t border-stratum-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-stratum-cyan text-xs font-bold uppercase tracking-widest mb-4">Our Promise</div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Warranty & Customer Service You Can Trust.
            </h2>
            <p className="text-xl text-slate-400 font-medium mb-8 leading-relaxed">
              Every Stratum foundation repair—whether it's the ST1, ST3, or ST10—comes with a <strong className="text-stratum-amber">lifetime transferable warranty</strong>. No fine print.
            </p>
            <p className="text-slate-500 mb-10 leading-relaxed">
              If you sell your home, the warranty transfers to the next owner. We back our work because we trust our systems—that's 5,000+ repairs across Dallas-Fort Worth proving it.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-stratum-amber shadow-[0_0_10px_rgba(245,158,11,0.5)] rounded-full" />
                  <span className="text-white font-bold">{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="group relative h-[400px] w-full rounded-3xl p-12 border border-stratum-amber overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_0_50px_-10px_rgba(245,158,11,0.3)] perspective-1000"
          >
            {/* Background Image Gimmick */}
            <div className="absolute inset-0 z-0">
              <img src="/images/hero.png" className="w-full h-full object-cover grayscale opacity-20 mix-blend-overlay group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-br from-stratum-dark/90 via-stratum-obsidian/90 to-stratum-amber/20" />
            </div>

            {/* Glowing orb */}
            <div className="absolute inset-0 bg-stratum-amber/10 blur-3xl rounded-3xl group-hover:bg-stratum-amber/20 transition-colors duration-700" />
            
            <motion.div 
              animate={{ rotateY: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex flex-col items-center justify-center transform-gpu"
            >
              <ShieldCheck className="w-32 h-32 text-stratum-amber mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
              <h3 className="text-4xl font-black text-white mb-2 tracking-tight drop-shadow-md">STRATUM TRUST</h3>
              <div className="text-stratum-amber font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-sm">LIFETIME TRANSFERABLE WARRANTY</div>
              <p className="text-slate-300 font-medium max-w-sm">
                Your peace of mind is guaranteed for the life of your home structure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
