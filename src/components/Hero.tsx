'use client';

import { motion } from 'framer-motion';
import { Star, Shield, Building } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-stratum-dark perspective-1000">
      {/* Background Image & Gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-stratum-dark/90 via-stratum-dark/80 to-stratum-obsidian z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/hero.png" 
          alt="Foundation Repair in Dallas-Fort Worth" 
          className="w-full h-full object-cover opacity-40 grayscale" 
        />
      </div>

      {/* Decorative Grid & Graphical Gimmicks */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Floating abstract glowing orbs */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-stratum-amber/20 rounded-full blur-[120px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-stratum-cyan/20 rounded-full blur-[100px] pointer-events-none z-0" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-20">
        <div className="max-w-5xl flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-2/3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stratum-gray/80 border border-stratum-gray mb-6 shadow-lg backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-stratum-cyan animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Born in Dallas. Built in Plano.</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05] mb-6">
              Trusted Foundation Repair in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stratum-amber via-stratum-gold to-stratum-yellow">Dallas-Fort Worth.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl font-medium mb-10 border-l-4 border-stratum-amber pl-6">
              Stratum Foundation Repair engineers three proprietary pier systems for the expansive clay soils under North Texas homes. Every repair is backed by a lifetime transferable warranty that you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#inspection"
                className="inline-flex items-center justify-center bg-gradient-to-r from-stratum-amber to-stratum-gold hover:from-stratum-gold hover:to-stratum-yellow text-black px-8 py-5 rounded-lg font-black tracking-widest uppercase text-lg transition-transform hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)]"
              >
                Book a Free Inspection
              </a>
              <a 
                href="tel:214-302-8559"
                className="inline-flex items-center justify-center bg-stratum-gray/50 hover:bg-stratum-gray border border-stratum-gray text-white px-8 py-5 rounded-lg font-bold tracking-wide uppercase text-lg transition-all backdrop-blur-md"
              >
                Call 214-302-8559
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 items-center border-t border-stratum-gray pt-8">
              <div className="flex items-center gap-4 group">
                <div className="flex -space-x-1 transition-transform group-hover:scale-110">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-stratum-amber text-stratum-amber" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-white leading-tight">4.9 / 5.0 Rating</div>
                  <div className="text-sm text-slate-400">500+ Google Reviews</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <Shield className="w-8 h-8 text-stratum-cyan transition-transform group-hover:scale-110" />
                <div>
                  <div className="font-bold text-white leading-tight">Lifetime Warranty</div>
                  <div className="text-sm text-slate-400">Fully Transferable</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <Building className="w-8 h-8 text-stratum-amber transition-transform group-hover:scale-110" />
                <div>
                  <div className="font-bold text-white leading-tight">BBB Accredited</div>
                  <div className="text-sm text-slate-400">A+ Rating</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Graphical Gimmick: 3D Floating Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block lg:w-1/3 relative"
            style={{ perspective: "1000px" }}
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 rounded-2xl overflow-hidden border border-stratum-gray shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu"
            >
              <img src="/images/hero.png" alt="Engineering precision" className="w-full h-auto object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-stratum-amber/20 to-transparent mix-blend-overlay" />
            </motion.div>
            {/* Decorative background accent for the card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-stratum-amber to-stratum-cyan opacity-20 blur-2xl -z-10 rounded-full animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
