import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const MONTHLY_PRICE = 299;
const DISCOUNT = 0.15;

const ServicesPricing = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const displayPrice = isAnnual
    ? `${Math.round(MONTHLY_PRICE * (1 - DISCOUNT))}€/mois`
    : `${MONTHLY_PRICE}€/mois`;

  const annualTotal = `soit ${Math.round(MONTHLY_PRICE * (1 - DISCOUNT) * 12)}€/an`;

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#F8F8F6] border-y border-[var(--color-q-border)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">

{[0, 1, 2].map((index) => {
            const service = t.services.items[index];
            const isDark = index === 0;
            const isQuote = service.price.toLowerCase().includes('devis') || service.price.toLowerCase().includes('demande');
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-[2rem] p-8 flex flex-col relative transition-transform hover:-translate-y-2 duration-300 ${
                  isDark ? 'bg-[#111111] text-white shadow-2xl' : 'bg-white text-[#111111] shadow-xl shadow-black/5'
                }`}
              >
                {isDark && (
                  <div className="absolute top-8 right-8 w-6 h-6 rounded-full border-2 border-white/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></div>
                  </div>
                )}

                <h3 className={`text-xl font-black tracking-tight mb-8 ${isDark ? 'text-white pr-10' : 'text-[#111111]'}`}>
                  {service.title}
                </h3>

<div className="mb-6">
                  <div className={`text-3xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                    {isQuote ? 'Sur devis' : service.price}
                  </div>
                  {isQuote && (
                    <div className={`text-sm mt-1 ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
                      Prix selon votre projet
                    </div>
                  )}
                </div>

<div className={`flex items-start gap-2 p-4 rounded-2xl mb-8 ${isDark ? 'bg-[#1E1E1E]' : 'bg-[#F0FDF4]'}`}>
                  <Zap size={16} className={`shrink-0 mt-0.5 ${isDark ? 'text-gray-400' : 'text-[#22C55E]'}`} fill="currentColor" />
                  <span className={`text-sm font-medium leading-snug ${isDark ? 'text-gray-400' : 'text-[#22C55E]'}`}>
                    {service.turnaround}
                  </span>
                </div>

<ul className="space-y-4 mb-10 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-[#22C55E] shrink-0 mt-0.5" strokeWidth={3} />
                      <span className={isDark ? 'text-white/80' : 'text-gray-600 font-medium'}>{feature}</span>
                    </li>
                  ))}
                </ul>

<a href="mailto:agence@qeero.fr" className="w-full block mt-auto">
                  <button className={`w-full py-4 px-6 rounded-full font-bold text-center transition-transform active:scale-95 ${
                    isDark
                      ? 'bg-[#22C55E] text-white hover:bg-[#1ea951] shadow-lg shadow-green-500/20'
                      : 'bg-[#111111] text-white hover:bg-black shadow-xl shadow-black/10'
                  }`}>
                    {isQuote ? 'Demander un devis' : 'Commencer maintenant'}
                  </button>
                </a>
              </motion.div>
            );
          })}

{(() => {
            const service = t.services.items[3];
            return (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-[2rem] p-8 flex flex-col relative bg-white text-[#111111] shadow-xl shadow-black/5 border-2 border-[#22C55E] transition-transform hover:-translate-y-2 duration-300"
              >
                
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full whitespace-nowrap z-10 shadow-lg shadow-green-500/20">
                  ⭐ Recommandé
                </div>

                <h3 className="text-xl font-black tracking-tight mb-6 text-[#111111]">
                  {service.title}
                </h3>

<div className="inline-flex items-center self-start p-1 bg-gray-100 rounded-full mb-6">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                      !isAnnual ? 'bg-white shadow text-black' : 'text-gray-500'
                    }`}
                  >
                    Mensuel
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                      isAnnual ? 'bg-white shadow text-black' : 'text-gray-500'
                    }`}
                  >
                    Annuel <span className="bg-[#E6F8ED] text-[#22C55E] text-[9px] px-1.5 py-0.5 rounded-full font-black">-15%</span>
                  </button>
                </div>

<div className="mb-2">
                  <div className="text-3xl font-black tracking-tighter text-[#111111]">
                    {displayPrice}
                  </div>
                  {isAnnual && (
                    <div className="text-xs text-[#22C55E] font-semibold mt-1">{annualTotal}</div>
                  )}
                </div>

<div className="flex items-start gap-2 p-4 rounded-2xl mb-8 bg-[#F0FDF4] mt-6">
                  <Zap size={16} className="shrink-0 mt-0.5 text-[#22C55E]" fill="currentColor" />
                  <span className="text-sm font-medium leading-snug text-[#22C55E]">
                    {service.turnaround}
                  </span>
                </div>

<ul className="space-y-4 mb-10 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="text-[#22C55E] shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

<a href="mailto:agence@qeero.fr" className="w-full block mt-auto">
                  <button className="w-full py-4 px-6 rounded-full font-bold text-center bg-[#22C55E] text-white hover:bg-[#1ea951] shadow-lg shadow-green-500/20 transition-transform active:scale-95">
                    Commencer maintenant
                  </button>
                </a>
              </motion.div>
            );
          })()}

        </div>
      </div>
    </section>
  );
};

export default ServicesPricing;
