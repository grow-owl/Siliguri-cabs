import React from 'react';
import { fleetData } from '../data/fleet';
import { Users, Briefcase, CheckCircle2, Car } from 'lucide-react';

export default function FleetShowcase() {
  return (
    <section id="fleet" className="py-16 sm:py-24 bg-cream-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark font-semibold text-xs tracking-wider uppercase mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Well-Maintained Vehicles</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Our Premium Travel Fleet
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-light font-normal">
            Clean, AC vehicles tailored for hill roads, group travel, and luggage space.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetData.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden border border-cream-dark/60 hover:border-gold shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badge */}
              <div className="relative h-48 w-full overflow-hidden bg-charcoal">
                <img
                  src={car.image}
                  alt={car.category}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                
                <span className="absolute top-3 right-3 bg-black/40 backdrop-blur-md border border-white/25 text-gold-accent text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                  {car.badge}
                </span>

                <div className="absolute bottom-3 left-3">
                  <span className="text-xs text-cream/80 block">{car.models}</span>
                  <h3 className="font-heading text-xl font-bold text-white">{car.category}</h3>
                </div>
              </div>

              {/* Specs */}
              <div className="p-5 flex-1">
                <div className="grid grid-cols-2 gap-2 text-xs text-charcoal-light pb-4 border-b border-cream-dark/50">
                  <div className="flex items-center space-x-1.5 bg-cream px-2.5 py-1.5 rounded-lg font-medium">
                    <Users className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                    <span className="truncate">{car.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-cream px-2.5 py-1.5 rounded-lg font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-gold-dark shrink-0" />
                    <span className="truncate">{car.luggage.split('+')[0]}</span>
                  </div>
                </div>

                <p className="mt-3 text-xs text-charcoal/70 italic">
                  {car.idealFor}
                </p>

                {/* Features */}
                <div className="mt-4 space-y-2">
                  {car.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-[12px] text-charcoal/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
