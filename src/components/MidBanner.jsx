import React from 'react';
import { Phone, ShieldCheck, Headphones } from 'lucide-react';
import { siteConfig, generateWhatsAppLink } from '../data/config';
import WhatsAppIcon from './WhatsAppIcon';

export default function MidBanner() {
  return (
    <section className="py-14 sm:py-18 bg-gradient-to-r from-charcoal-dark via-charcoal to-charcoal-dark text-white border-y border-gold/30 relative overflow-hidden">
      {/* Decorative gold pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A46D_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider mb-4 border border-gold/30">
          <ShieldCheck className="w-4 h-4" />
          <span>Safe & Certified Hill Mobility</span>
        </div>

        <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          We provide safe, reliable taxi services that ensure <br className="hidden sm:inline" />
          your total peace of mind in the hills.
        </h3>

        <p className="mt-3 text-sm sm:text-base text-cream/75 max-w-2xl mx-auto font-light">
          A wide range of A/C and non-A/C luxury cabs for personal, family and corporate use. Available for instant hire across Siliguri, Darjeeling, Kalimpong & Dooars.
        </p>

        {/* Large Phone Call CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-gold block font-semibold">
              For Instant Cab Booking Call
            </span>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:text-gold transition-colors inline-flex items-center space-x-3 group mt-1"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-gold group-hover:scale-110 transition-transform" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          <span className="hidden sm:inline text-cream/30 text-2xl font-light">|</span>

          <a
            href={generateWhatsAppLink({ tripType: 'Mid Banner Quick Call' })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-charcoal font-bold text-sm shadow-gold-glow flex items-center space-x-2.5 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-charcoal shrink-0" />
            <span>WhatsApp Quick Assistance</span>
          </a>
        </div>
      </div>
    </section>
  );
}
