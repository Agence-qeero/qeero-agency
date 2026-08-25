import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { TextEffect } from '../../components/motion-primitives/text-effect';
import { Magnetic } from '../../components/motion-primitives/magnetic';
import HeroGallery from './HeroGallery';

const ALL_ASSETS = [
  '/asset_1.jpeg',
  '/asset_2.jpeg',
  '/asset_3.jpeg',
  '/asset_4.jpeg',
  '/asset_5.jpeg',
  '/asset_6.jpeg',
  '/asset_7.jpeg',
];

const col1 = [...ALL_ASSETS, ...ALL_ASSETS];
const col2 = [...ALL_ASSETS.slice(3), ...ALL_ASSETS.slice(0, 3), ...ALL_ASSETS.slice(3), ...ALL_ASSETS.slice(0, 3)];

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-[#F8F8F6] pt-24 pb-12 overflow-hidden border-b border-black/5">

<div
        className="pointer-events-none absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)' }}
      />

<div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
        <img
          src="/logo.jpeg"
          alt=""
          aria-hidden="true"
          className="w-[700px] max-w-none object-contain select-none"
          style={{ opacity: 0.04, filter: 'grayscale(100%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

<div className="flex flex-col items-start text-left z-10">

<span className="qeero-badge mb-7">
            {t.hero.badge}
          </span>

<h1 key={language} className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold tracking-tight leading-[1.08] mb-5 text-[#111111]">
            <TextEffect as="span" per="word" preset="blur">
              {t.hero.title}
            </TextEffect>
            <br />
            <span className="text-gradient-qeero block mt-1">
              <TextEffect as="span" per="word" preset="fade" delay={0.2}>
                {t.hero.subtitle}
              </TextEffect>
            </span>
          </h1>

<p key={`p-${language}`} className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl font-normal">
            {t.hero.offer}
          </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Magnetic intensity={0.2} springOptions={{ bounce: 0.1 }} actionArea="global">
              <a href="#services" className="btn-qeero px-9 py-4 text-base text-center w-full sm:w-auto block">
                {t.hero.ctaPrimary}
              </a>
            </Magnetic>
            <Magnetic intensity={0.2} springOptions={{ bounce: 0.1 }} actionArea="global">
              <a href="#portfolio" className="btn-outline px-9 py-4 text-base text-center w-full sm:w-auto block">
                {t.hero.ctaSecondary}
              </a>
            </Magnetic>
          </div>

<div className="mt-10 flex flex-wrap items-center gap-5">
            {[
              { val: '48h',    label: t.hero.trustDelivery || 'Délai de livraison' },
              { val: '✓',      label: t.hero.trustRevisions || 'Révisions incluses' },
              { val: '100%',   label: t.hero.trustSatisfaction || 'Satisfaction garantie' },
            ].map(({ val, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="text-xl font-extrabold text-[#22C55E]">{val}</span>
                <span className="text-sm text-gray-500 font-medium">{label}</span>
              </div>
            ))}
          </div>

<div className="mt-6 flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-black/7 shadow-sm">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#111111]">
              Karting du Périgord, Groupe FGCI +&nbsp;{t.hero.others || 'autres'}
            </p>
          </div>
        </div>

<div className="hidden lg:block relative w-full">
          <HeroGallery />
        </div>

      </div>
    </section>
  );
};

export default Hero;
