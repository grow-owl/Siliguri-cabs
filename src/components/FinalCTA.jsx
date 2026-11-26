import React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig, generateWhatsAppLink } from '../data/config';
import WhatsAppIcon from './WhatsAppIcon';

export default function FinalCTA() {
  const stats = [
    { value: siteConfig.tripsCompleted, label: "Trips Completed" },
    { value: `${siteConfig.rating} ★`, label: "Google Rating" },
    { value: siteConfig.reviewsCount, label: "Happy Travelers" },
    { value: siteConfig.yearsExperience, label: "Regional Experience" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-charcoal via-charcoal-dark to-charcoal text-white relative overflow-hidden border-t border-gold/30">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Trust & Performance Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 hover:border-emerald-400/40 transition-all text-center shadow-lg"
            >
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-400 block">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-white/75 uppercase tracking-wider font-semibold mt-1 sm:mt-1.5 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <span className="text-xs sm:text-sm uppercase tracking-widest font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-full inline-block mb-4 shadow-md">
          Ready to Explore the Hills?
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Book Affordable & Hassle-Free Taxi Service for <span className="text-emerald-400">Airport, Outstation & Local Hire</span>
        </h2>

        <p className="mt-2 text-sm sm:text-base text-white/80 max-w-lg mx-auto font-light">
          Confirm your ride in 2 minutes via WhatsApp or direct call. 24x7 support.
        </p>

        {/* Action Buttons - Matching Upper Hero & Navbar Style */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-base border border-white/25 flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-lg"
          >
            <Phone className="w-5 h-5 text-emerald-400" />
            <span>Call Now: {siteConfig.phone}</span>
          </a>

          <a
            href={generateWhatsAppLink({ tripType: 'Final Banner Booking' })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 hover:brightness-110 text-white font-bold text-base shadow-gold-glow flex items-center justify-center space-x-3 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
            <span>Book Ride via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
