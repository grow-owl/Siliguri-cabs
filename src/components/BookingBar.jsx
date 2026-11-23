import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Users, Car, ArrowRight } from 'lucide-react';
import { generateWhatsAppLink, siteConfig } from '../data/config';
import WhatsAppIcon from './WhatsAppIcon';

export default function BookingBar() {
  const [tripType, setTripType] = useState('Outstation Cab');
  const [pickup, setPickup] = useState('Siliguri / NJP Railway Station');
  const [destination, setDestination] = useState('Gangtok');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState('1 - 4 Persons');
  const [vehicle, setVehicle] = useState('Innova Crysta (Luxury SUV)');

  const tripTabs = ['Outstation Cab', 'Bagdogra Airport Transfer', 'Sightseeing Tour'];

  const pickupOptions = {
    'Outstation Cab': [
      'Siliguri / NJP Railway Station',
      'Siliguri Town / Junction',
      'Bagdogra Airport (IXB)',
      'Sevoke Road / Salugara',
      'Matigara / City Centre'
    ],
    'Bagdogra Airport Transfer': [
      'Bagdogra Airport (Arrival Terminal)',
      'Bagdogra Airport (Departure Drop)',
      'Bagdogra Flight Gate 1'
    ],
    'Sightseeing Tour': [
      'Siliguri Hotel / Residence',
      'Bagdogra Airport (IXB)',
      'NJP Railway Station'
    ]
  };

  const destinationOptions = [
    'Gangtok (Sikkim)',
    'Darjeeling (Queen of Hills)',
    'Kalimpong',
    'Mirik (Lake & Pine Forests)',
    'Pelling (West Sikkim)',
    'Kurseong',
    'Bhutan (Phuentsholing Border)',
    'Lataguri (Gorumara Dooars)',
    'Lava & Lolegaon',
    'Ravangla / Namchi'
  ];

  const vehicleOptions = [
    'Innova Crysta (Luxury 7-Seater)',
    'Maruti Ertiga (Comfort 6-Seater)',
    'Executive Sedan (Dzire / Etios - 4 Seater)',
    'Luxury Tempo Traveller (12-26 Seater)'
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const url = generateWhatsAppLink({
      tripType,
      pickup,
      destination,
      date: travelDate,
      passengers,
      vehicle
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-charcoal-surface/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gold/30 shadow-2xl p-4 sm:p-7 text-white relative z-20">
      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6 pt-2">
        {tripTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setTripType(tab);
              if (tab === 'Bagdogra Airport Transfer') {
                setPickup('Bagdogra Airport (Arrival Terminal)');
              } else if (tab === 'Outstation Cab') {
                setPickup('Siliguri / NJP Railway Station');
              }
            }}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              tripType === tab
                ? 'bg-gold text-charcoal shadow-md scale-102 font-bold'
                : 'bg-white/5 text-cream/75 hover:bg-white/10 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form Grid */}
      <form onSubmit={handleBookingSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Pickup */}
          <div className="space-y-1.5 text-left">
            <label className="text-[11px] sm:text-xs font-semibold text-gold tracking-wide uppercase flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Pickup Location</span>
            </label>
            <div className="relative">
              <select
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-charcoal/80 border border-white/15 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
              >
                {(pickupOptions[tripType] || pickupOptions['Outstation Cab']).map((opt) => (
                  <option key={opt} value={opt} className="bg-charcoal text-white">
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-cream/50 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Destination */}
          <div className="space-y-1.5 text-left">
            <label className="text-[11px] sm:text-xs font-semibold text-gold tracking-wide uppercase flex items-center space-x-1.5">
              <Navigation className="w-3.5 h-3.5 text-gold" />
              <span>Drop Destination</span>
            </label>
            <div className="relative">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-charcoal/80 border border-white/15 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
              >
                {destinationOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-charcoal text-white">
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-cream/50 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Travel Date */}
          <div className="space-y-1.5 text-left">
            <label className="text-[11px] sm:text-xs font-semibold text-gold tracking-wide uppercase flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span>Travel Date</span>
            </label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              style={{ colorScheme: 'dark' }}
              className="w-full bg-charcoal/80 border border-white/15 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer"
            />
          </div>

          {/* Passengers */}
          <div className="space-y-1.5 text-left">
            <label className="text-[11px] sm:text-xs font-semibold text-gold tracking-wide uppercase flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-gold" />
              <span>Guests / Passengers</span>
            </label>
            <div className="relative">
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full bg-charcoal/80 border border-white/15 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
              >
                <option value="1 - 3 Persons (Sedan)" className="bg-charcoal text-white">1 - 3 Persons (Sedan)</option>
                <option value="4 - 6 Persons (Ertiga / Innova)" className="bg-charcoal text-white">4 - 6 Persons (Ertiga / Innova)</option>
                <option value="7 - 8 Persons (Innova Crysta)" className="bg-charcoal text-white">7 - 8 Persons (Innova Crysta)</option>
                <option value="9 - 16 Persons (Tempo Traveller)" className="bg-charcoal text-white">9 - 16 Persons (Tempo Traveller)</option>
                <option value="17+ Persons (Group Excursion)" className="bg-charcoal text-white">17+ Persons (Group Excursion)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-cream/50 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Vehicle Type */}
          <div className="space-y-1.5 text-left sm:col-span-2 lg:col-span-2">
            <label className="text-[11px] sm:text-xs font-semibold text-gold tracking-wide uppercase flex items-center space-x-1.5">
              <Car className="w-3.5 h-3.5 text-gold" />
              <span>Preferred Vehicle Class</span>
            </label>
            <div className="relative">
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full bg-charcoal/80 border border-white/15 rounded-xl px-3.5 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
              >
                {vehicleOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-charcoal text-white">
                    {opt}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-cream/50 text-xs">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="pt-4 flex items-center justify-center border-t border-white/10">
          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3.5 rounded-xl font-bold text-charcoal bg-gradient-to-r from-gold via-gold-light to-gold hover:brightness-110 active:scale-98 shadow-gold-glow transition-all duration-200 flex items-center justify-center space-x-2.5 text-sm sm:text-base cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 fill-charcoal shrink-0" />
            <span>Check Fares on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
