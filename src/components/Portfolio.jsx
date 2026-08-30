import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextEffect } from '../../components/motion-primitives/text-effect';
import Lightbox from './Lightbox';
import { useLanguage } from '../contexts/LanguageContext';

const allImages = [
  { src: '/asset_1.jpeg',  label: 'Branding Produit',             cat: '2D' },
  { src: '/asset_2.jpeg',  label: 'Signalétique Digitale',        cat: 'Print' },
  { src: '/asset_3.jpeg',  label: 'Réseaux Sociaux',              cat: '2D' },
  { src: '/asset_4.jpeg',  label: 'Motion & Digital',             cat: 'Digital' },
  { src: '/asset_5.jpeg',  label: 'Brochure Print',               cat: 'Print' },
  { src: '/asset_6.jpeg',  label: 'Visuel Architectural',         cat: '3D' },
  { src: '/asset_7.jpeg',  label: 'Document Officiel',            cat: 'Print' },
  { src: '/asset_8.jpeg',  label: 'Social Media — Restauration',  cat: '2D' },
  { src: '/asset_9.jpeg',  label: 'Publicité Digitale',           cat: 'Digital' },
  { src: '/asset_10.jpeg', label: 'Social Media — Galerie Galet', cat: '2D' },
  { src: '/jbl.jpeg',      label: 'Branding Produit — JBL',       cat: '2D' },
];

const getCategories = (t) => [
  t.portfolio.categories.all,
  t.portfolio.categories.twoD,
  t.portfolio.categories.threeD,
  t.portfolio.categories.print,
  t.portfolio.categories.digital
];

const PortfolioItem = ({ src, label, cat, t, i, openLightbox }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.3, delay: i * 0.04 }}
      className="group relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl border border-black/5 cursor-zoom-in transition-all duration-300 flex flex-col"
      onClick={() => openLightbox(i)}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="bg-white/95 backdrop-blur-sm text-[#111111] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {label}
          </span>
        </div>
      </div>
      <span className="absolute top-3 right-3 bg-[#22C55E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
        {t.portfolio.delivered}
      </span>
    </motion.div>
  );
};

const Portfolio = () => {
  const { t } = useLanguage();
  const categories = getCategories(t);

  const [active, setActive] = useState(t.portfolio.categories.all);

  React.useEffect(() => {
    setActive(t.portfolio.categories.all);
  }, [t]);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const catMap = {
    '2D': t.portfolio.categories.twoD,
    '3D': t.portfolio.categories.threeD,
    'Print': t.portfolio.categories.print,
    'Digital': t.portfolio.categories.digital
  };

  const filtered = active === t.portfolio.categories.all 
    ? allImages 
    : allImages.filter(img => catMap[img.cat] === active);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex(i => (i + 1) % filtered.length);

  return (
    <section id="portfolio" className="py-14 md:py-20 bg-white border-t border-black/5 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-[5vw]">

        <div className="mb-8">
          <span className="qeero-badge mb-4 block w-fit">{t.portfolio.badge}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111] leading-tight">
            <TextEffect as="span" per="word" preset="blur">
              {t.portfolio.title}
            </TextEffect>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 border ${
                active === cat
                  ? 'bg-[#22C55E] text-white border-[#22C55E] shadow-sm'
                  : 'bg-white text-gray-600 border-black/10 hover:border-[#22C55E]/40 hover:text-[#22C55E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence>
            {filtered.map((item, i) => (
              <PortfolioItem 
                key={item.src} 
                src={item.src} 
                label={item.label} 
                cat={item.cat}
                t={t}
                i={i} 
                openLightbox={openLightbox} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
};

export default Portfolio;
