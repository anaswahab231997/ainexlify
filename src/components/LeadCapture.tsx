'use client';

import { MapPin, Phone, Shield, ArrowRight } from 'lucide-react';

export default function LeadCapture() {
  return (
    <section id="inspection" className="bg-stratum-obsidian py-32 border-t border-stratum-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stratum-dark rounded-[2.5rem] border-2 border-stratum-gray overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
          
          <div className="lg:w-5/12 p-10 lg:p-16 bg-gradient-to-br from-stratum-gray/50 to-transparent relative z-10">
            <h2 className="text-4xl font-black text-white mb-6">Schedule Your Free Inspection</h2>
            <p className="text-slate-400 font-medium mb-12">
              Not sure if your home needs foundation repair? Our NFRA-certified inspectors evaluate your foundation at no cost and recommend only the work that's necessary.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stratum-gray rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-stratum-amber" />
                </div>
                <div>
                  <div className="font-bold text-white">Dallas-Fort Worth</div>
                  <div className="text-slate-500 text-sm">Serving 100+ DFW Cities</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stratum-gray rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-stratum-amber" />
                </div>
                <div>
                  <div className="font-bold text-white">Call Us Directly</div>
                  <div className="text-slate-500 text-sm">214-302-8559</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stratum-gray rounded-full flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-stratum-amber" />
                </div>
                <div>
                  <div className="font-bold text-white">Lifetime Warranty</div>
                  <div className="text-slate-500 text-sm">Fully Transferable</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 p-10 lg:p-16 relative z-10 bg-stratum-obsidian">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-stratum-gray border-2 border-stratum-gray focus:border-stratum-amber focus:ring-0 rounded-xl px-4 py-4 text-white font-medium transition-colors outline-none"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-stratum-gray border-2 border-stratum-gray focus:border-stratum-amber focus:ring-0 rounded-xl px-4 py-4 text-white font-medium transition-colors outline-none"
                    placeholder="(214) 555-0123"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-stratum-gray border-2 border-stratum-gray focus:border-stratum-amber focus:ring-0 rounded-xl px-4 py-4 text-white font-medium transition-colors outline-none"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Zip Code</label>
                  <input 
                    type="text" 
                    className="w-full bg-stratum-gray border-2 border-stratum-gray focus:border-stratum-amber focus:ring-0 rounded-xl px-4 py-4 text-white font-medium transition-colors outline-none"
                    placeholder="75034"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2 uppercase tracking-wide">Primary Issue</label>
                <select className="w-full bg-stratum-gray border-2 border-stratum-gray focus:border-stratum-amber focus:ring-0 rounded-xl px-4 py-4 text-white font-medium transition-colors outline-none appearance-none cursor-pointer">
                  <option value="">Select the main symptom...</option>
                  <option value="cracks">Cracked Bricks / Mortar</option>
                  <option value="doors">Sticking Doors / Windows</option>
                  <option value="floors">Uneven / Sloping Floors</option>
                  <option value="gap">Gaps in Walls / Ceilings</option>
                  <option value="other">Other Concern</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-stratum-amber to-stratum-gold hover:from-stratum-gold hover:to-stratum-yellow text-black py-6 rounded-xl font-black text-xl tracking-widest uppercase transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] mt-4 flex items-center justify-center gap-3"
              >
                Get Your Free Audit <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
