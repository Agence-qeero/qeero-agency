import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Cell = ({ val }) => {
  if (val === true)  return <Check size={20} className="text-[#22C55E] mx-auto" strokeWidth={3} />;
  if (val === false) return <X size={20} className="text-red-400/70 mx-auto" strokeWidth={3} />;
  return <span className="text-gray-400 text-xl leading-none mx-auto block text-center">~</span>;
};

const ComparisonTable = () => {
  const { t } = useLanguage();
  const rows = t.comparison?.rows || [];

  return (
    <section id="comparison" className="py-16 md:py-24 bg-[#F8F8F6] border-t border-black/5">
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-14">
          <span className="qeero-badge mb-5 block w-fit mx-auto">{t.comparison?.badge || '// Pourquoi QEERO ?'}</span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#111111]">
            {t.comparison?.title || 'La meilleure option,'}<br />
            <span className="text-gradient-qeero">{t.comparison?.titleHighlight || 'sans compromis.'}</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flat-card rounded-[2rem] overflow-x-auto"
        >
          <div className="min-w-[580px]">
            <div className="grid grid-cols-4 bg-[#111111] text-white text-sm xl:text-base font-bold">
              <div className="p-5 xl:p-6 text-white/50">{t.comparison?.feature || 'Fonctionnalité'}</div>
              <div className="p-5 xl:p-6 text-center bg-[#22C55E] text-white">
                <span className="block text-xs font-black uppercase tracking-widest mb-1 opacity-70">
                  {t.comparison?.recommended || 'Recommandé'}
                </span>
                {t.comparison?.qeero || 'QEERO'}
              </div>
              <div className="p-5 xl:p-6 text-center text-white/60">{t.comparison?.freelance || 'Freelance'}</div>
              <div className="p-5 xl:p-6 text-center text-white/60">{t.comparison?.agency || 'Agence trad.'}</div>
            </div>

{rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 border-b border-black/5 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F6]'}`}
            >
              <div className="p-4 pl-6 text-sm font-semibold text-gray-700 flex items-center">{row.label}</div>
              <div className="p-4 flex items-center justify-center bg-[#F0FDF4]/60 border-x border-[#22C55E]/10">
                <Cell val={row.qeero} />
              </div>
              <div className="p-4 flex items-center justify-center"><Cell val={row.freelance} /></div>
              <div className="p-4 flex items-center justify-center"><Cell val={row.agence} /></div>
            </div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
