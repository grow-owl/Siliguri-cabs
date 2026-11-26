import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import BookingBar from './BookingBar';

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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600 italic">
            Comfort, Safety & Elegance.
          </span>
        </h1>

        {/* Subtitle / Promise */}
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed">
          Private cabs from <strong className="text-white font-semibold">Siliguri & Bagdogra</strong> to Darjeeling, Gangtok & Dooars with transparent fares.
        </p>

        {/* Quick Highlights Row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/90">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Hill Drivers</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>4.9 / 5 Top Rated Service</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>All-Inclusive Fixed Fares</span>
          </div>
        </div>

        {/* Interactive Booking Bar */}
        <div className="mt-10 sm:mt-12">
          <BookingBar />
        </div>
      </div>
    </section>
  );
}
