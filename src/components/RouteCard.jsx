import React, { useState } from 'react';
import { MapPin, Clock, Phone, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { generateWhatsAppLink, siteConfig } from '../data/config';
import WhatsAppIcon from './WhatsAppIcon';

export default function RouteCard({ route, isAirport = false }) {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = generateWhatsAppLink({
    tripType: isAirport ? 'Airport Transfer' : 'Outstation Cab',
    pickup: route.from,
    destination: route.to,
    vehicle: route.vehicles?.[0] || 'Innova Crysta'
  });

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-cream-dark/60 hover:border-emerald-500/60 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between">
      {/* Destination Image */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gradient-to-br from-charcoal via-charcoal-light to-emerald-950 flex flex-col items-center justify-center border-b border-cream-dark/40">
        {route.image && !imgError ? (
          <>
            <img
              src={route.image}
              alt={`${route.to} — ${route.tag}`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-white/30 select-none">
            <ImageIcon className="w-8 h-8 mb-1.5 stroke-[1.5]" />
            <span className="text-[11px] font-medium tracking-wider uppercase">{route.to}</span>
          </div>
        )}

        {route.tag && (
          <span className="absolute bottom-3 left-3 bg-black/55 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
            {route.tag}
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Destination Title & Route Info */}
          <div className="pb-3 border-b border-cream-dark/60">
            <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-emerald-700 transition-colors leading-snug">
              {route.from} to {route.to}
            </h3>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-charcoal-light">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{route.distance}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Approx. {route.duration}</span>
              </span>
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
            className="flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm hover:shadow transition-all active:scale-95"
            title="Enquire on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-white shrink-0" />
            <span>Book Ride</span>
          </a>
        </div>
      </div>
    </div>
  );
}
