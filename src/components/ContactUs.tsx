"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 uppercase">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 font-medium">
            Have questions about our engineering process? Need to speak with a structural specialist immediately? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-stratum-orange" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Call Us Directly</h4>
                <p className="text-slate-400 text-sm mb-2">Available Mon-Sat for immediate assistance.</p>
                <a href="tel:214-302-8559" className="text-stratum-light font-bold text-lg hover:text-white transition-colors">
                  214-302-8559
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-stratum-orange" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Email Support</h4>
                <p className="text-slate-400 text-sm mb-2">Send us your inspection reports or general questions.</p>
                <a href="mailto:info@stratumfoundationrepair.com" className="text-stratum-light font-bold hover:text-white transition-colors">
                  info@stratumfoundationrepair.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-stratum-orange" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Frisco Operations</h4>
                <p className="text-slate-400 text-sm">
                  Serving the entire Frisco and DFW Metroplex area. Deep clay soil specialists.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 rounded-2xl p-8 md:p-10 border border-slate-800 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-950 border border-slate-800 focus:border-stratum-orange focus:ring-1 focus:ring-stratum-orange rounded-xl px-4 py-3 text-white transition-colors outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-950 border border-slate-800 focus:border-stratum-orange focus:ring-1 focus:ring-stratum-orange rounded-xl px-4 py-3 text-white transition-colors outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-stratum-orange focus:ring-1 focus:ring-stratum-orange rounded-xl px-4 py-3 text-white transition-colors outline-none resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
