import React, { useState } from 'react';
import { outstationRoutes } from '../data/routes';
import RouteCard from './RouteCard';
import { Compass } from 'lucide-react';

export default function OutstationRoutes() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Sikkim Hills', 'Darjeeling District', 'Dooars & Forests', 'International'];

  const filteredRoutes = outstationRoutes.filter((r) => {
    if (filter === 'All') return true;
    if (filter === 'Sikkim Hills') return r.to.includes('Gangtok');
    if (filter === 'Darjeeling District') return r.to.includes('Darjeeling') || r.to.includes('Kalimpong') || r.to.includes('Mirik') || r.to.includes('Kurseong') || r.to.includes('Lava');
    if (filter === 'Dooars & Forests') return r.to.includes('Lataguri');
    if (filter === 'International') return r.to.includes('Bhutan');
    return true;
  });

  return (
    <section id="outstation" className="py-16 sm:py-24 bg-cream-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark font-semibold text-xs tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>North Bengal & Sikkim Outstation</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Siliguri to Outstation Cabs
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-light font-normal">
            Private outstation cabs from Siliguri & NJP with fixed rates and 24/7 support.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-charcoal text-gold shadow-md scale-102'
                    : 'bg-white text-charcoal-light hover:bg-cream border border-cream-dark/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {filteredRoutes.map((route) => (
            <RouteCard key={route.id} route={route} isAirport={false} />
          ))}
        </div>

        {/* Custom Route Notice */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-gold/30 shadow-luxury max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-lg font-bold text-charcoal">
              Need a Customized Hill Tour or Multi-Day Package?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-light mt-0.5">
              Custom itineraries for Sikkim & Darjeeling with complete permit assistance.
            </p>
          </div>
          <a
            href="https://wa.me/917719199000?text=Hello%20HillWay%20Cabs,%20I%20want%20to%20plan%20a%20customized%20multi-day%20hill%20tour."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-charcoal text-gold hover:bg-charcoal-light font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md"
          >
            Plan Custom Tour ➔
          </a>
        </div>
      </div>
    </section>
  );
}
