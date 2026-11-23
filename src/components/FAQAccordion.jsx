import React, { useState } from 'react';
import { faqsData } from '../data/faqs';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/config';
import WhatsAppIcon from './WhatsAppIcon';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-cream-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark font-semibold text-xs tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-charcoal-light">
            Quick answers to common questions about bookings, fares, and hill travel.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-gold/60 shadow-luxury'
                    : 'bg-white/80 border-cream-dark/60 hover:border-gold/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-charcoal text-base sm:text-lg flex items-center space-x-3">
                    <span className="text-gold font-sans text-sm font-semibold">
                      Q{faq.id}.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-gold text-charcoal rotate-180' : 'bg-cream text-charcoal-light'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-charcoal-light leading-relaxed border-t border-cream-dark/40 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-gold/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-charcoal text-base sm:text-lg">
              Have another question not covered here?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-light mt-0.5">
              Our 24x7 booking desk is ready to assist you anytime.
            </p>
          </div>
          <a
            href="https://wa.me/917719199000?text=Hello%20HillWay%20Cabs,%20I%20have%20a%20question%20regarding%20cab%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-dark text-charcoal font-bold text-xs flex items-center space-x-2 transition-all active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 fill-charcoal shrink-0" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
