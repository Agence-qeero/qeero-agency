import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BASE = [
  { name: 'Karting du Périgord', logo: '/logo-karting.jpeg' },
  { name: 'Groupe FGCI',         logo: '/logo-fgci.jpeg' },
  { name: 'Miami Burger',        logo: '/logo-miami-burger.jpeg' },
];

// Expanded set so each half of the marquee is substantially wider than any 4K display
const trackLogos = [...BASE, ...BASE, ...BASE, ...BASE, ...BASE, ...BASE];

const ClientStrip = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-10 bg-white border-y border-black/5 overflow-hidden">
      <div className="mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          {t.clientStrip.trustedBy}
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex">
          {/* Set 1 */}
          <div className="flex shrink-0 items-center justify-around gap-16 md:gap-24 px-8 md:px-12">
            {trackLogos.map((c, i) => (
              <div
                key={`a-${i}`}
                className="flex items-center justify-center h-14 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-full max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Set 2 (Seamless loop twin) */}
          <div className="flex shrink-0 items-center justify-around gap-16 md:gap-24 px-8 md:px-12">
            {trackLogos.map((c, i) => (
              <div
                key={`b-${i}`}
                className="flex items-center justify-center h-14 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-full max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 24s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientStrip;
