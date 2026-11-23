import React from 'react';
import { reviewsData } from '../data/faqs';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/config';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-gold/20 text-gold-dark font-semibold text-xs tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-gold-dark text-gold-dark" />
            <span>Verified Passenger Experiences</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Read What Our Travelers Say
          </h2>
          <p className="mt-2 text-sm text-charcoal-light">
            Genuine feedback from travelers who explored the hills with us.
          </p>

          {/* Google & Trip Trust Badges */}
          <div className="mt-4 flex items-center justify-center space-x-4 text-xs font-semibold text-charcoal">
            <span className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full border border-cream-dark/60 shadow-sm">
              <span className="text-blue-500 font-bold">G</span>
              <span className="text-red-500 font-bold">o</span>
              <span className="text-yellow-500 font-bold">o</span>
              <span className="text-blue-500 font-bold">g</span>
              <span className="text-green-500 font-bold">l</span>
              <span className="text-red-500 font-bold">e</span>
              <span className="ml-1 text-charcoal">{siteConfig.rating} ★ Rating</span>
            </span>
            <span className="text-charcoal-light font-medium">({siteConfig.reviewsCount} Reviews)</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-cream-dark/60 hover:border-gold/50 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Route chip */}
                <span className="inline-block mt-3 px-2.5 py-0.5 rounded-md bg-cream text-[11px] font-semibold text-charcoal-light">
                  {rev.route}
                </span>

                {/* Review Text */}
                <p className="mt-3 text-xs sm:text-sm text-charcoal/85 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-cream-dark/40 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-charcoal">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-charcoal-light block">
                    {rev.location}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-[11px] text-emerald-600 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
