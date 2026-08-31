import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TextEffect } from '../../components/motion-primitives/text-effect';
import Lightbox from './Lightbox';
import { useLanguage } from '../contexts/LanguageContext';

const allImages = [
  { src: '/asset_1.jpeg',       label: 'Branding Produit — Canette',                   cat: '2D' },
  { src: '/asset_2.jpeg',       label: 'Affichage Digital — Miami Burger',             cat: 'Digital' },
  { src: '/asset_3.jpeg',       label: 'Poster 3D — High-Satisfaction Burger',         cat: '3D' },
  { src: '/logo-karting.jpeg',  label: 'Logo & Identité — Karting du Périgord',        cat: '2D' },
  { src: '/asset_4.jpeg',       label: 'Motion & Contenu Digital',                     cat: 'Digital' },
  { src: '/asset_5.jpeg',       label: 'Brochure & Dépliant Print',                    cat: 'Print' },
  { src: '/asset_6.jpeg',       label: 'Visuel Architectural & Vectoriel',             cat: '2D' },
  { src: '/asset_7.jpeg',       label: 'Papeterie & Document Officiel',                cat: 'Print' },
  { src: '/asset_8.jpeg',       label: 'Direction Artistique — MD Pizza',              cat: 'Print' },
  { src: '/asset_9.jpeg',       label: 'Publicité Digitale & Display',                 cat: 'Digital' },
  { src: '/asset_10.jpeg',      label: 'Social Media — Galerie Galet',                 cat: '2D' },
  { src: '/jbl.jpeg',           label: 'Branding Produit — JBL',                       cat: '2D' },
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
  const location = useLocation();

  const [active, setActive] = useState(t.portfolio.categories.all);

  const catMap = React.useMemo(() => ({
    '2D': t.portfolio.categories.twoD,
    '3D': t.portfolio.categories.threeD,
    'Print': t.portfolio.categories.print,
    'Digital': t.portfolio.categories.digital
  }), [t]);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('cat');
    if (catParam && catMap[catParam]) {
      setActive(catMap[catParam]);
      setTimeout(() => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [location, catMap]);

  React.useEffect(() => {
    const handleCategoryEvent = (e) => {
      const catKey = e.detail;
      if (catKey && catMap[catKey]) {
        setActive(catMap[catKey]);
      }
    };
    window.addEventListener('qeero:set-portfolio-category', handleCategoryEvent);
    return () => window.removeEventListener('qeero:set-portfolio-category', handleCategoryEvent);
  }, [catMap]);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = active === t.portfolio.categories.all 
    ? allImages 
    : allImages.filter(img => catMap[img.cat] === active);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex(i => (i + 1) % filtered.length);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white border-t border-black/5 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">

        <div className="mb-10 xl:mb-12">
          <span className="qeero-badge mb-4 block w-fit">{t.portfolio.badge}</span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            <TextEffect as="span" per="word" preset="blur">
              {t.portfolio.title}
            </TextEffect>
          </h2>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 xl:px-5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 border cursor-pointer ${
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-8 items-stretch"
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
