import React from 'react';
import { Phone, Mail, MapPin, Compass, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Outstation Cabs', href: '#outstation' },
    { name: 'Bagdogra Airport Transfers', href: '#airport' },
    { name: 'Vehicle Fleet', href: '#fleet' },
    { name: 'About Us', href: '#about' },
    { name: 'Frequently Asked Questions', href: '#faqs' },
    { name: 'Reviews', href: '#reviews' },
  ];

  const popularRoutes = [
    'Siliguri to Darjeeling Cab',
    'Siliguri to Gangtok Taxi',
    'Bagdogra Airport to Gangtok',
    'Bagdogra Airport to Darjeeling',
    'Siliguri to Kalimpong Cab',
    'Siliguri to Mirik Taxi',
    'Siliguri to Bhutan Border',
    'Siliguri to Dooars Lataguri'
  ];

  return (
    <footer className="bg-charcoal-dark text-white pt-14 pb-24 sm:pb-14 border-t border-white/10 relative">
      {/* Checkered taxi border accent on top of footer */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">
                H
              </div>
              <span className="font-heading text-2xl font-bold text-white">
                HillWay<span className="text-emerald-400">.Cabs</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-cream/70 leading-relaxed font-light">
              Premium outstation cabs and Bagdogra Airport transfers across North Bengal and Sikkim.
            </p>
            <p className="text-xs font-semibold text-gold italic">
              "{siteConfig.tagline}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-gold uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream/80">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-gold/60 text-xs">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes Directory */}
          <div>
            <h4 className="font-heading text-base font-bold text-gold uppercase tracking-wider mb-4">
              Popular Routes
            </h4>
            <ul className="space-y-2 text-xs text-cream/80">
              {popularRoutes.map((route, i) => (
                <li key={i} className="flex items-center space-x-1.5">
                  <span className="text-gold/60 text-xs">✓</span>
                  <span>{route}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-base font-bold text-gold uppercase tracking-wider mb-4">
              24x7 Booking Desk
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-cream/80">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-cream/50 uppercase">Helpline</span>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="font-bold text-white hover:text-gold transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-cream/50 uppercase">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-gold transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-cream/50 uppercase">Hub Address</span>
                  <p className="text-cream/80 text-xs leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p>© {new Date().getFullYear()} HillWay Cabs. All rights reserved.</p>
          <a
            href="https://www.growowl.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-cream/70 hover:text-white transition-opacity hover:opacity-90"
          >
            <span>Designed by</span>
            <img
              src="/growowl-logo.webp"
              alt="GrowOwl"
              style={{ height: '15px', width: 'auto', display: 'inline-block', verticalAlign: 'middle' }}
              className="brightness-100"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/growowl-logo.png';
              }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
