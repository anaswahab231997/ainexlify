'use client';

import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-stratum-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          <div className="flex flex-col">
            <img src="/logo.svg" alt="Stratum Foundation Repair" className="h-10 w-fit mb-6 brightness-0 invert sepia hue-rotate-[1deg] saturate-[500%] contrast-[105%]" style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(87%) saturate(1637%) hue-rotate(345deg) brightness(101%) contrast(97%)' }} />
            <p className="text-slate-400 font-medium leading-relaxed">
              The definitive foundation repair authority for Dallas-Fort Worth. Three proprietary pier systems engineered for expansive clay soils.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-stratum-amber shrink-0" />
                <span className="font-bold text-white">214-302-8559</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-stratum-amber shrink-0 mt-0.5" />
                <span className="font-medium">
                  <strong>Stratum Foundation Repair</strong><br/>
                  Serving 100+ Cities Across<br/>
                  The Greater DFW Metroplex
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Clock className="w-5 h-5 text-stratum-amber shrink-0 mt-0.5" />
                <span className="font-medium">
                  Mon-Fri: 8:00 AM - 6:00 PM<br/>
                  Sat: 9:00 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-6">Top Service Areas</h4>
            <ul className="space-y-3">
              {["Dallas", "Fort Worth", "Plano", "McKinney", "Frisco", "Allen", "Arlington", "Prosper"].map((city) => (
                <li key={city}>
                  <a href="#" className="text-slate-400 hover:text-stratum-amber font-medium transition-colors">
                    Foundation Repair {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-stratum-gray flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm font-medium">
            &copy; {new Date().getFullYear()} Stratum Foundation Repair. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-white transition-colors text-sm font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
