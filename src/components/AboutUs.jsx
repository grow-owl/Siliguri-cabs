import React from 'react';
import { Award, CheckCircle2, ShieldCheck, MapPin, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual Collage */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-cream-dark/50">
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
                alt="HillWay Cabs Himalayan Travel"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest block">
                  Rooted in Siliguri
                </span>
                <p className="font-heading text-xl sm:text-2xl font-bold mt-1">
                  Connecting North Bengal & Sikkim with Safety & Integrity
                </p>
              </div>
            </div>

            {/* Floating Experience Badge - Top Left */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-black/50 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl border border-emerald-400/50 shadow-luxury max-w-[190px] sm:max-w-[215px]">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-emerald-400 block leading-none">
                {siteConfig.yearsExperience}
              </span>
              <span className="text-[11px] sm:text-xs text-white/85 font-medium leading-tight block mt-1">
                Years of Excellence in Mountain Mobility
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark font-semibold text-xs tracking-wider uppercase">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>About HillWay Cabs</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight leading-tight">
              Your Trusted Mountain Travel Partner in Siliguri
            </h2>

            <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
              Based in Siliguri, HillWay Cabs provides reliable, transparent, and comfortable private taxi services across North Bengal and Sikkim.
            </p>

            <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
              From Bagdogra Airport and NJP station to Darjeeling, Gangtok, and Dooars, we ensure safe mountain journeys with verified local chauffeurs.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-charcoal">Verified Local Mountain Chauffeurs</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-charcoal">No Hidden Surge or Extra Charges</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-charcoal">Flight Delay Tracking Guarantee</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-charcoal">24x7 Dedicated Travel Desk Support</span>
              </div>
            </div>

            {/* Tagline Box */}
            <div className="p-4 rounded-xl bg-cream border-l-4 border-gold">
              <p className="font-heading italic text-charcoal font-semibold text-base">
                “{siteConfig.tagline}”
              </p>
              <p className="text-xs text-charcoal-light mt-1">
                Dedicated to punctual, comfortable, and stress-free mountain journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
