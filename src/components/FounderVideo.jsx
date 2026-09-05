import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const FounderVideo = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white border-t border-black/5">
      <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="text-center mb-10">
          <span className="qeero-badge mb-5 block w-fit mx-auto">
            {t.founderVideo?.badge || '// En direct'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111]">
            {t.founderVideo?.title || 'Rencontrez votre'}&nbsp;
            <span className="text-gradient-qeero">
              {t.founderVideo?.titleHighlight || 'interlocuteur.'}
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            {t.founderVideo?.subtitle || 'Avant de travailler avec quelqu\'un, il est naturel de vouloir savoir à qui vous avez affaire. Voici qui je suis.'}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden bg-[#111111] shadow-2xl border border-black/10"
          style={{ aspectRatio: '16/9' }}
        >
          <iframe
            src="https://www.youtube-nocookie.com/embed/Ryvja-UQIvI?rel=0&modestbranding=1"
            title="Qeero Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
          />
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-500 font-medium">
            {t.founderVideo?.caption || 'Fondateur & Directeur Créatif — Qeero, Agence de Communication'}
          </p>
        </div>

      </div>
    </section>
  );
};

export default FounderVideo;
