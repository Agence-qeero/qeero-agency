import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BASE = [
  { name: 'Karting du Périgord', logo: '/logo-karting.jpeg' },
  { name: 'Groupe FGCI',         logo: '/logo-fgci.jpeg' },
  { name: 'Miami Burger',        logo: '/logo-miami-burger.jpeg' },
];

const clients = [...BASE, ...BASE, ...BASE, ...BASE];

const ClientStrip = () => {
  const { t } = useLanguage();
  
  return (
  <section className="py-10 bg-white border-y border-black/5 overflow-hidden">
    <div className="mb-5 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
        {t.clientStrip.trustedBy}
      </p>
    </div>

    <div className="relative">
      
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

<div className="overflow-hidden">
        
        <div className="flex gap-16 w-max items-center px-8" style={{ animation: 'marquee 16s linear infinite' }}>
          {clients.map((c, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-14 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="h-full max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

<style>{`
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-25%); }
      }
    `}</style>
    </section>
  );
};

export default ClientStrip;
