'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "How much does foundation repair cost in Dallas-Fort Worth?",
      a: "Foundation repair in Dallas-Fort Worth typically costs $2,500–$15,000, depending on the number of piers needed, which pier system is used, and how much your foundation has moved. Stratum's ST1 (concrete pressed piers) is the most affordable option, while the ST3 and ST10 offer progressively deeper stabilization for North Texas clay profiles. Every Stratum inspection is free with a no-obligation estimate."
    },
    {
      q: "What are signs of foundation problems in Dallas-Fort Worth homes?",
      a: "Cracks in interior walls or exterior brick, sticking doors and windows, uneven floors, and gaps between walls and ceilings are the most common signs. North Texas expansive clay soils swell during wet seasons and shrink during dry periods, creating foundation movement that causes these symptoms."
    },
    {
      q: "What foundation repair systems does Stratum use?",
      a: "Stratum uses three proprietary pier systems: the ST1 (concrete pressed piers), ST3 (hybrid steel + concrete), and ST10 (deep steel + concrete). Each is engineered for different depth requirements in North Texas clay soils. All three include a lifetime transferable warranty."
    },
    {
      q: "Does homeowners insurance cover foundation repair in Texas?",
      a: "No—standard Texas homeowners insurance typically does not cover foundation repair. Most policies exclude damage caused by settling, earth movement, or soil conditions. However, if foundation damage results from a covered event like a plumbing leak, some insurers may cover part of the repair. Stratum offers financing options to help manage costs."
    },
    {
      q: "How long does foundation repair take?",
      a: "Most residential foundation repairs take 1–3 days. The timeline depends on the number of piers being installed and which system is used. You can typically stay in your home during the repair. After installation, your foundation begins stabilizing immediately."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-stratum-dark py-32 border-t border-stratum-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-stratum-cyan text-xs font-bold uppercase tracking-widest mb-4">Dallas-Fort Worth Foundation Repair FAQ</div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-stratum-obsidian border border-stratum-gray rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-stratum-amber' : 'text-white'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-stratum-amber text-black' : 'bg-stratum-gray text-white'}`}>
                  {openIndex === i ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 md:p-8 pt-0 border-t border-stratum-gray text-slate-400 leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
