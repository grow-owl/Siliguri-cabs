import React from 'react';
import { Phone, ShieldCheck, Award, Users } from 'lucide-react';
import { siteConfig, generateWhatsAppLink } from '../data/config';
import WhatsAppIcon from './WhatsAppIcon';

export default function FinalCTA() {
  const ctaPillars = [
    {
      title: "Affordable Fares",
      desc: "Budget-friendly hill rates with zero hidden charges."
    },
    {
      title: "Courteous Chauffeurs",
      desc: "Polite, experienced, and verified mountain drivers."
    },
    {
      title: "Clean & Sanitized Cabs",
      desc: "Spotless interiors with working dual climate control."
    },
    {
      title: "Well-Maintained Cars",
      desc: "Regular safety checks for smooth mountain trips."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-charcoal via-charcoal-dark to-charcoal text-white relative overflow-hidden border-t border-gold/30">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-xs sm:text-sm uppercase tracking-widest font-bold bg-gold/15 text-gold border border-gold/30 px-4 py-1.5 rounded-full inline-block mb-4 shadow-md">
          Ready to Explore the Hills?
        </span>

        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Book Affordable & Hassle-Free Taxi Service for <span className="text-gold">Airport, Outstation & Local Hire</span>
        </h2>

        <p className="mt-2 text-sm sm:text-base text-cream/80 max-w-lg mx-auto font-light">
          Confirm your ride in 2 minutes via WhatsApp or direct call. 24x7 support.
        </p>

        {/* 4 Feature Badges */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {ctaPillars.map((item, idx) => (
            <div key={idx} className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white rounded-xl p-5 border border-white/15 shadow-lg text-left hover:border-gold/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-gold text-charcoal flex items-center justify-center font-bold text-xs mb-3">
                ✓
              </div>
              <h4 className="font-heading font-bold text-base text-gold mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-cream/70 font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons - Matching Upper Hero & Navbar Style */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-base border border-white/25 flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-lg"
          >
            <Phone className="w-5 h-5 text-gold" />
            <span>Call Now: {siteConfig.phone}</span>
          </a>

          <a
            href={generateWhatsAppLink({ tripType: 'Final Banner Booking' })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold hover:brightness-110 text-charcoal font-bold text-base shadow-gold-glow flex items-center justify-center space-x-3 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 fill-charcoal shrink-0" />
            <span>Book Ride via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
