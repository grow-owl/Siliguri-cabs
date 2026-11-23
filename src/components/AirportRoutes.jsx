import React from 'react';
import { airportRoutes } from '../data/routes';
import RouteCard from './RouteCard';
import { Plane, CheckCircle2 } from 'lucide-react';

export default function AirportRoutes() {
  return (
    <section id="airport" className="py-16 sm:py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold/20 text-gold-dark font-semibold text-xs tracking-wider uppercase mb-3">
            <Plane className="w-3.5 h-3.5" />
            <span>Flight Meet & Greet Service</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Bagdogra Airport (IXB) Cab Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-light font-normal leading-relaxed">
            Direct, comfortable transfers straight from the Bagdogra Airport arrival gate to your hill hotel. Free flight delay monitoring so you are never left waiting.
          </p>

          {/* Airport Guarantee Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-charcoal">
            <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-lg border border-gold/30 shadow-sm font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Complimentary Flight Delay Buffer</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-lg border border-gold/30 shadow-sm font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Nameboard Arrival Pickup</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-lg border border-gold/30 shadow-sm font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Clean Luggage Boot & Carrier</span>
            </span>
          </div>
        </div>

        {/* Airport Route Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {airportRoutes.map((route) => (
            <RouteCard key={route.id} route={route} isAirport={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
