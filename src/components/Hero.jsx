import React from 'react';
import { Phone, ShieldCheck, Award, Compass, CheckCircle2 } from 'lucide-react';
import { siteConfig, generateWhatsAppLink } from '../data/config';
import BookingBar from './BookingBar';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] pt-24 sm:pt-28 pb-16 lg:pb-24 flex flex-col justify-center overflow-hidden bg-charcoal-dark">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
          alt="Scenic Mountain Road Darjeeling Sikkim"
          className="w-full h-full object-cover object-center brightness-45 scale-105 transform animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Main Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Experience the Hills in <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark italic">
            Comfort, Safety & Elegance.
          </span>
        </h1>

        {/* Subtitle / Promise */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-cream/80 max-w-xl mx-auto font-light leading-relaxed">
          Private cabs from <strong className="text-white font-semibold">Siliguri & Bagdogra</strong> to Darjeeling, Gangtok & Dooars with transparent fares.
        </p>

        {/* Quick Highlights Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-cream/90">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>Verified Hill Drivers</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <Award className="w-4 h-4 text-gold" />
            <span>4.9 / 5 Top Rated Service</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <CheckCircle2 className="w-4 h-4 text-gold" />
            <span>All-Inclusive Fixed Fares</span>
          </div>
        </div>

        {/* Interactive Booking Bar */}
        <div className="mt-10 sm:mt-12">
          <BookingBar />
        </div>

        {/* Fast Action CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-sm border border-white/25 flex items-center justify-center space-x-2 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call 24/7 Desk: {siteConfig.phone}</span>
          </a>

          <a
            href={generateWhatsAppLink({ tripType: 'Hero Fast Connect' })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-charcoal font-bold text-sm shadow-gold-glow flex items-center justify-center space-x-2 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Instant WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
