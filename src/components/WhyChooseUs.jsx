import React from 'react';
import { ShieldCheck, Clock, BadgePercent, Car, Award, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Mountain-Expert Chauffeurs',
      desc: 'All our drivers possess 8+ years of steep hill driving experience across Darjeeling, Sikkim, and Bhutan hairpin curves.'
    },
    {
      icon: Clock,
      title: '100% Punctual Pickups',
      desc: 'Early 4:00 AM sunrise trips to Tiger Hill or late-night airport arrivals — our cab is waiting at your pickup point ahead of time.'
    },
    {
      icon: BadgePercent,
      title: 'Transparent, Fixed Fares',
      desc: 'No hidden toll, parking or permit surprises. You receive an all-inclusive clear quote upfront before booking.'
    },
    {
      icon: Car,
      title: 'Sanitized & Maintained Fleet',
      desc: 'Regularly serviced, air-conditioned vehicles with pristine interiors, powerful mountain engines, and luggage roof carriers.'
    }
  ];

  const stats = [
    { label: 'Trips Completed', value: siteConfig.tripsCompleted },
    { label: 'Google Rating', value: `${siteConfig.rating} ★` },
    { label: 'Happy Travelers', value: siteConfig.reviewsCount },
    { label: 'Regional Experience', value: siteConfig.yearsExperience }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-gold font-semibold text-xs tracking-wider uppercase mb-3 border border-gold/30">
            <Award className="w-3.5 h-3.5" />
            <span>The HillWay Standard</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Why Discerning Travelers Choose <span className="text-gold">HillWay Cabs</span>
          </h2>
          <p className="mt-4 text-cream/75 text-sm sm:text-lg font-light leading-relaxed">
            Travel in the Himalayan foothills demands trust, verified hill competence, and reliable vehicles. We guarantee peace of mind on every turn.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-charcoal-surface rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-gold/50 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2.5 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-cream/70 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Strip */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10">
              <span className="font-heading text-3xl sm:text-4xl font-bold text-gold block">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-cream/70 mt-1 block uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
