import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { siteConfig, generateWhatsAppLink } from '../data/config';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Outstation Cabs', href: '#outstation' },
    { name: 'Airport Transfers', href: '#airport' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Reviews', href: '#reviews' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal/80 backdrop-blur-xl shadow-lg border-b border-white/15 py-3'
            : 'bg-charcoal/40 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4'
        }`}
      >
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Name - Aligned to Far Left */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-3 group shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-700 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-6 h-6 text-white font-bold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                  <path d="M4.14 15.08A2 2 0 0 0 4 16v4h16v-4a2 2 0 0 0-.14-.92" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                  HillWay<span className="text-emerald-400">.Cabs</span>
                </span>
                <span className="text-[10px] tracking-wider text-emerald-100/70 font-medium uppercase -mt-1 hidden xs:block">
                  Siliguri & Hills
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Centered & Clean (FAQs & About Us removed) */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-white/90 hover:text-emerald-400 text-sm font-semibold tracking-wide transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-400 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons - Aligned to Far Right */}
            <div className="hidden sm:flex items-center space-x-3 shrink-0">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center space-x-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-150"
                title="Call 24/7 Desk"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href={generateWhatsAppLink({ tripType: 'General Enquiry' })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 hover:brightness-110 shadow-gold-glow transition-all duration-200 active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                <span>Book on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 sm:hidden active:scale-90 transition-transform"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-cream bg-white/10 hover:bg-white/20 border border-white/10 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/80 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-charcoal/90 backdrop-blur-2xl border-l border-white/15 p-6 flex flex-col justify-between transition-transform duration-300 ease-out safe-top safe-bottom ${
            mobileMenuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
                  H
                </div>
                <span className="font-heading text-lg font-bold text-white">
                  HillWay<span className="text-emerald-400"> Cabs</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-cream/70 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-cream/90 hover:text-gold hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-gold/50 text-xs">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/15 active:bg-white/20"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call: {siteConfig.phone}</span>
            </a>
            <a
              href={generateWhatsAppLink({ tripType: 'Mobile Drawer Booking' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 text-white font-bold text-sm shadow-gold-glow active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp Direct Booking</span>
            </a>
            <p className="text-center text-[11px] text-cream/50 pt-2">
              Siliguri • Darjeeling • Gangtok • Bagdogra Airport
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
