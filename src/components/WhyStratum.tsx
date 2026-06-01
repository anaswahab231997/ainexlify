'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Map, Award } from 'lucide-react';
import { useRef } from 'react';

export default function WhyStratum() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const reasons = [
    {
      icon: Target,
      tag: "Our Standard",
      title: "Trust & Transparency",
      desc: "Stratum starts with having the highest standards. Every foundation inspection includes a detailed report with photos, elevation measurements, and a clear explanation of what your foundation needs—and what it doesn't."
    },
    {
      icon: Map,
      tag: "18+ Years in North Texas",
      title: "Local Experience",
      desc: "Headquartered in Plano and serving over 100 cities across Dallas-Fort Worth, Stratum has been solving foundation problems for over 18 years. We know North Texas expansive clay soils."
    },
    {
      icon: Award,
      tag: "Our Only Goal",
      title: "Guaranteed Satisfaction",
      desc: "Our sole mission is to leave you 100% satisfied. Stratum has over 500 online reviews with a 4.9/5 average from homeowners across Dallas-Fort Worth."
    }
  ];

  return (
    <section ref={containerRef} className="bg-stratum-dark py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2">
          <div className="mb-12">
            <h2 className="text-stratum-amber font-bold tracking-widest uppercase text-sm mb-4">Why Stratum</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Why Dallas-Fort Worth Homeowners Trust Us
            </h3>
          </div>

          <div className="space-y-6">
            {reasons.map((r, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15 }}
                className="bg-stratum-obsidian border border-stratum-gray rounded-2xl p-8 hover:border-stratum-amber/50 transition-all hover:bg-stratum-gray/50 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-stratum-gray rounded-xl flex items-center justify-center shrink-0 group-hover:bg-stratum-amber/10 group-hover:scale-110 transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                    <r.icon className="w-7 h-7 text-stratum-amber" />
                  </div>
                  <div>
                    <div className="text-stratum-cyan text-xs font-bold uppercase tracking-widest mb-1">{r.tag}</div>
                    <h4 className="text-xl font-bold text-white mb-2">{r.title}</h4>
                    <p className="text-slate-400 leading-relaxed font-medium text-sm">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Graphical Gimmick: Parallax Image */}
        <div className="lg:w-1/2 relative h-[700px] w-full rounded-[2.5rem] overflow-hidden group border border-stratum-gray">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <img 
              src="/images/inspection.png" 
              alt="Professional Engineering Inspection" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" 
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-stratum-obsidian via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-8 right-8 bg-stratum-dark/80 backdrop-blur-md border border-stratum-gray rounded-2xl p-6">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
              <div className="font-bold text-white tracking-widest uppercase">Precision Laser Measurement</div>
            </div>
            <div className="text-slate-400 text-sm mt-2">Every home receives a digital elevation survey accurate to 1/10th of an inch.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
