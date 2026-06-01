'use client';

import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Drill } from 'lucide-react';

export default function Solution() {
  const systems = [
    {
      badge: "Budget-Friendly",
      title: "ST1 System",
      type: "Concrete Pressed Piers",
      desc: "High-strength concrete cylinders hydraulically pressed to refusal. The most affordable option for moderate foundation settlement in North Texas homes.",
      icon: Layers,
      bg: "/images/pier.png"
    },
    {
      badge: "Most Popular",
      title: "ST3 System",
      type: "Hybrid — Steel + Concrete",
      desc: "Three steel starters push past North Texas tough upper clay, then concrete finishes. Approximately 50% deeper than the ST1 on average.",
      icon: ShieldCheck,
      featured: true,
      bg: "/images/steel_pier.png"
    },
    {
      badge: "Maximum Depth",
      title: "ST10 System",
      type: "Deep Steel + Concrete",
      desc: "10 feet of double-walled steel pipe plus concrete. Approximately 100% deeper than the ST1—for severe movement and deep North Texas clay profiles.",
      icon: Drill,
      bg: "/images/steel_pier.png"
    }
  ];

  return (
    <section className="bg-stratum-obsidian py-32 relative overflow-hidden" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-stratum-amber font-bold tracking-widest uppercase text-sm mb-4">Foundation Repair Systems</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Three Pier Systems for North Texas Clay Soils
          </h3>
          <p className="text-xl text-slate-400 font-medium">
            Dallas-Fort Worth sits on expansive montmorillonite clay that swells and shrinks with moisture. Stratum engineered three pier systems at three depth tiers so your home gets exactly the stabilization it needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {systems.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`bg-stratum-dark rounded-[2rem] p-10 relative overflow-hidden border-2 group hover:scale-105 transition-transform duration-500 cursor-pointer ${s.featured ? 'border-stratum-amber shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)]' : 'border-stratum-gray hover:border-stratum-cyan'}`}
            >
              {/* Graphical gimmick: background image that reveals on hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 grayscale group-hover:grayscale-0 mix-blend-screen transition-all duration-700 scale-110 group-hover:scale-100">
                <img src={s.bg} alt={s.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${s.featured ? 'from-stratum-amber/80' : 'from-stratum-cyan/80'} via-stratum-dark/80 to-stratum-dark`} />
              </div>

              {s.featured && (
                <div className="absolute top-0 right-0 bg-stratum-amber text-black text-xs font-black px-4 py-1 uppercase tracking-widest rounded-bl-lg z-10">
                  Most Popular
                </div>
              )}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-stratum-cyan text-xs font-bold uppercase tracking-widest mb-2 drop-shadow-md group-hover:text-white transition-colors">{s.badge}</div>
                <h4 className={`text-3xl font-black mb-2 transition-colors ${s.featured ? 'text-white' : 'text-white group-hover:text-stratum-cyan'}`}>{s.title}</h4>
                <div className="text-slate-400 font-bold mb-6 pb-6 border-b border-stratum-gray/50 group-hover:border-white/20">{s.type}</div>
                
                <p className="text-slate-300 leading-relaxed mb-8 flex-grow group-hover:text-white transition-colors">
                  {s.desc}
                </p>
                
                <a href="#inspection" className={`inline-block w-full text-center py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${s.featured ? 'bg-stratum-amber text-black hover:bg-stratum-gold shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]' : 'bg-stratum-gray/80 backdrop-blur-sm text-white border border-stratum-gray hover:bg-stratum-cyan hover:text-black hover:border-stratum-cyan'}`}>
                  Compare System
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
