import React from 'react';
import { MapPin, Clock, ShieldCheck, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateWhatsAppLink, siteConfig } from '../data/config';
import WhatsAppIcon from './WhatsAppIcon';

export default function RouteCard({ route, isAirport = false }) {
  const whatsappUrl = generateWhatsAppLink({
    tripType: isAirport ? 'Airport Transfer' : 'Outstation Cab',
    pickup: route.from,
    destination: route.to,
    vehicle: route.vehicles?.[0] || 'Innova Crysta'
  });

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-cream-dark/60 hover:border-gold/60 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between">
      {/* Top Image + Badges */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-charcoal">
        <img
          src={route.image}
          alt={`${route.from} to ${route.to} cab service`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

        {/* Route Destination Title */}
        <div className="absolute top-3 left-3 max-w-[85%] bg-charcoal/90 backdrop-blur-md text-white border border-gold/40 px-3.5 py-1.5 rounded-xl shadow-md font-heading font-bold text-xs sm:text-sm tracking-wide">
          {route.from} to {route.to}
        </div>

        {/* Starting Fare Pill */}
        <div className="absolute bottom-3 right-3 bg-charcoal/90 backdrop-blur-md border border-gold/40 px-3 py-1 rounded-lg text-right">
          <span className="text-[10px] text-cream/70 block uppercase leading-none">Starting from</span>
          <span className="text-gold font-bold text-sm sm:text-base leading-tight font-heading">{route.startingFare}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Distance & Time Chips */}
          <div className="flex items-center gap-3 text-xs text-charcoal-light pb-3 border-b border-cream-dark/50">
            <div className="flex items-center space-x-1 bg-cream px-2.5 py-1 rounded-md font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold-dark shrink-0" />
              <span>{route.distance}</span>
            </div>
            <div className="flex items-center space-x-1 bg-cream px-2.5 py-1 rounded-md font-medium">
              <Clock className="w-3.5 h-3.5 text-gold-dark shrink-0" />
              <span>Approx. {route.duration}</span>
            </div>
          </div>

          {/* Key Features Checklist */}
          <div className="mt-3.5 grid grid-cols-2 gap-2 text-[12px] text-charcoal/80">
            {route.features.map((feat, idx) => (
              <div key={idx} className="flex items-center space-x-1.5 truncate">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Vehicle options tag */}
          {route.vehicles && (
            <div className="mt-3 pt-2.5 border-t border-cream-dark/40 flex items-center justify-between text-[11px] text-charcoal-light/80">
              <span className="font-medium">Fleet choices:</span>
              <span className="text-charcoal font-semibold">{route.vehicles.slice(0, 2).join(' • ')}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-cream-dark/60 grid grid-cols-2 gap-2">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl border border-charcoal/20 hover:bg-cream text-charcoal font-semibold text-xs transition-colors active:scale-95"
            title="Call to Book"
          >
            <Phone className="w-3.5 h-3.5 text-gold-dark" />
            <span>Call Now</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-gold hover:bg-gold-dark text-charcoal font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95"
            title="Enquire on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>Book Ride</span>
          </a>
        </div>
      </div>
    </div>
  );
}
