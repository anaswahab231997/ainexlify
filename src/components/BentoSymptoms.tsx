'use client';

import { motion } from 'framer-motion';
import { Home, DoorOpen, Expand } from 'lucide-react';

export default function BentoSymptoms() {
  const symptoms = [
    {
      title: "Cracked Bricks",
      desc: "Stair-step cracks in exterior brick or mortar are the most obvious sign of foundation movement.",
      icon: Home,
      image: "/images/cracks.png",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Sticking Doors",
      desc: "Doors that rub, stick, or fail to latch properly indicate shifting frames.",
      icon: DoorOpen,
      image: "/images/doors.png",
      span: "md:col-span-1"
    },
    {
      title: "Drywall Gaps",
      desc: "Separation between walls and ceilings, or cracks extending from window corners.",
      icon: Expand,
      image: "/images/gaps.png",
      span: "md:col-span-1"
    }
  ];

  return (
    <section className="bg-stratum-dark py-32 border-t border-stratum-gray relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.03),transparent_50%)]" />
      
      {/* Graphical gimmick: background blur rings */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] border border-stratum-gray/20 rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-stratum-cyan font-bold tracking-widest uppercase text-sm mb-4">Warning Signs</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Does Your Home Show These Symptoms?
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
          {symptoms.map((symptom, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`bg-stratum-obsidian rounded-[2rem] p-8 border border-stratum-gray relative overflow-hidden group hover:border-stratum-amber transition-all shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.3)] ${symptom.span}`}
            >
              {symptom.image && (
                <>
                  <div className="absolute inset-0 opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0">
                    <img src={symptom.image} alt={symptom.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stratum-obsidian via-stratum-obsidian/70 to-transparent pointer-events-none transition-opacity group-hover:opacity-90" />
                </>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 ${index === 0 ? 'bg-stratum-amber shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'bg-stratum-gray/80 backdrop-blur-sm group-hover:bg-stratum-amber'} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3`}>
                  <symptom.icon className={`w-7 h-7 ${index === 0 ? 'text-black' : 'text-white group-hover:text-black'} transition-colors`} />
                </div>
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold tracking-tight mb-3 text-white group-hover:text-stratum-amber transition-colors">
                    {symptom.title}
                  </h3>
                  <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-200 transition-colors">
                    {symptom.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
