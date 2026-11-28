import React from 'react';
import { ArrowRight, Home, Navigation, Plane, Briefcase } from 'lucide-react';
import { generateWhatsAppLink } from '../data/config';

export default function Hero() {
  const localCabWhatsAppUrl = generateWhatsAppLink({
    tripType: 'Local Cab in Siliguri (Starting at Rs.1999)',
    pickup: 'Siliguri',
    destination: 'Local / Sightseeing'
  });
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
        {/* Starting Price Pill */}
        <a
          href={localCabWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-2.5 bg-emerald-950/85 hover:bg-emerald-900/90 backdrop-blur-md px-5 py-2 sm:px-7 sm:py-2.5 rounded-full border border-emerald-400/40 mb-6 shadow-gold-glow transition-all hover:scale-[1.02] active:scale-95"
        >
          <span className="text-sm sm:text-base md:text-lg tracking-wider uppercase text-emerald-100 font-medium">
            Starting at <strong className="text-emerald-300 font-extrabold">Rs.1999</strong>
          </span>
          <span className="text-white/40">|</span>
          <span className="inline-flex items-center gap-1 text-sm sm:text-base md:text-lg uppercase font-bold text-white underline decoration-emerald-400 underline-offset-4">
            Book Now!
            <ArrowRight className="w-4 h-4 text-emerald-300" />
          </span>
        </a>

        {/* Main Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Affordable Local &amp; Hill <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-600 italic">
            Cabs in Siliguri.
          </span>
        </h1>

        {/* Primary CTA */}
        <div className="mt-8">
          <a
            href={localCabWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base tracking-wide uppercase shadow-gold-glow transition-all active:scale-95"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Service Highlights Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-left">
          {[
            { icon: Home, title: 'Home Pickups', subtitle: 'Taxi Service' },
            { icon: Navigation, title: 'Outstation & Local', subtitle: 'Taxi/Cab Service' },
            { icon: Plane, title: 'Airport to City', subtitle: 'Taxi/Cab Service' },
            { icon: Briefcase, title: 'Corporate Business', subtitle: 'Taxi Service' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3.5 bg-emerald-950/60 backdrop-blur-md border border-emerald-400/20 rounded-2xl px-4 py-3 hover:border-emerald-400/45 transition-colors"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-charcoal-dark/90 border-2 border-dashed border-emerald-400/70 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-sm sm:text-base leading-tight">
                    {item.title}
                  </p>
                  <p className="text-emerald-200/80 font-medium text-xs sm:text-sm leading-tight mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
