import React from 'react';
import { Phone } from 'lucide-react';
import { siteConfig, generateWhatsAppLink } from '../data/config';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingMobileBar() {
  const whatsappUrl = generateWhatsAppLink({ tripType: 'Mobile Quick Dock' });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-charcoal/80 backdrop-blur-xl border-t border-white/15 px-3 py-2 safe-bottom shadow-2xl">
      <div className="grid grid-cols-2 gap-2.5">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-xs active:bg-white/25 active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4 text-gold shrink-0" />
          <span>Call Desk</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 text-white font-extrabold text-xs shadow-gold-glow active:scale-98 transition-transform"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
