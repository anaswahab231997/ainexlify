'use client';

import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { num: '5,000+', label: 'Homes Repaired' },
    { num: '20,000+', label: 'Inspections Done' },
    { num: '100+', label: 'Cities Served' },
    { num: '18+', label: 'Years in Business' }
  ];

  return (
    <section className="bg-stratum-obsidian py-16 border-y border-stratum-gray relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-stratum-gray/50">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-stratum-amber to-stratum-gold mb-2">
                {stat.num}
              </div>
              <div className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
