import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const { t } = useLanguage();

  const faqs = t.faq?.items || [];

  return (
    <section id="faq" className="py-14 md:py-20 bg-white border-t border-black/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="qeero-badge mb-5 block w-fit mx-auto">{t.faq?.badge || '// FAQ'}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111]">
            {t.faq?.title || 'Vos questions,'}<br />
            <span className="text-gradient-qeero">{t.faq?.titleHighlight || 'nos réponses.'}</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-3xl overflow-hidden border transition-all duration-200 ${
                open === i ? 'border-[#22C55E]/40 bg-[#F0FDF4]/60' : 'border-black/7 bg-white hover:border-black/15'
              }`}
            >
              <button
                className="w-full px-7 py-5 flex items-center justify-between text-left gap-4"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className={`font-bold text-base ${open === i ? 'text-[#111111]' : 'text-gray-700'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180 text-[#22C55E]' : 'text-gray-400'}`}
                />
              </button>
              <div
                className={`px-7 overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
