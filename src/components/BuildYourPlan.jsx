import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingShapes from './FloatingShapes';

const MONTHLY_PRICE = 299;
const ANNUAL_DISCOUNT = 0.15;

const BuildYourPlan = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(false);

  const bp = t.buildYourPlan || {};
  const p1 = bp.plan1 || {};
  const p2 = bp.plan2 || {};
  const p3 = bp.plan3 || {};
  const p4 = bp.plan4 || {};

  const subMonthly = MONTHLY_PRICE;
  const subAnnual = Math.round(MONTHLY_PRICE * (1 - ANNUAL_DISCOUNT));
  const perMonthLabel = p1.perMonth || '€/mois';
  const displayPrice = isAnnual ? `${subAnnual}${perMonthLabel}` : `${subMonthly}${perMonthLabel}`;
  const annualSaving = `${p1.annualSavingPrefix || 'soit'} ${subAnnual * 12}${p1.annualSavingSuffix || '€/an'}`;

  return (
    <section id="services" className="relative py-16 md:py-24 bg-[#F8F8F6] border-t border-black/5 overflow-hidden">
      <FloatingShapes />

      <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">

<div className="text-center mb-14">
          <span className="qeero-badge mb-5 block w-fit mx-auto">{t.services?.badge || 'Tarifs'}</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111] mb-3">
            {t.services.title}
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            {t.services.desc}
          </p>
        </div>

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">

<motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="rounded-[2rem] p-8 flex flex-col relative bg-white text-[#111111] shadow-xl shadow-black/5 border-2 border-[#22C55E] transition-transform hover:-translate-y-2 duration-300"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full whitespace-nowrap z-10 shadow-lg shadow-green-500/20">
              {bp.recommendedBadge || '⭐ Recommandé'}
            </div>

            <h3 className="text-xl font-black tracking-tight mb-4 text-[#111111]">
              {p1.title || 'ABONNEMENT ANNUEL'}
            </h3>

            <div className="inline-flex items-center self-start p-1.5 bg-gray-100/90 rounded-full mb-6 border border-black/5 shadow-inner">
              <button
                onClick={() => setIsAnnual(false)}
                className={`relative z-10 px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-1.5 group ${
                  !isAnnual ? 'text-[#111111]' : 'text-gray-500 hover:text-[#22C55E]'
                }`}
              >
                <motion.span whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} className="transition-colors group-hover:text-[#22C55E]">
                  {p1.monthlyBtn || 'Mensuel'}
                </motion.span>
                {!isAnnual && (
                  <motion.div
                    layoutId="build-plan-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-md -z-10 border border-black/5"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative z-10 px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-1.5 group ${
                  isAnnual ? 'text-[#111111]' : 'text-gray-500 hover:text-[#22C55E]'
                }`}
              >
                <motion.span whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-1.5 transition-colors group-hover:text-[#22C55E]">
                  {p1.annualBtn || 'Annuel'} <span className="bg-[#E6F8ED] text-[#22C55E] text-[10px] px-2 py-0.5 rounded-full font-black shadow-sm">{p1.discount || '-15%'}</span>
                </motion.span>
                {isAnnual && (
                  <motion.div
                    layoutId="build-plan-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-md -z-10 border border-black/5"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            </div>

<div className="mb-2">
              <div className="text-3xl font-black tracking-tighter text-[#111111]">{displayPrice}</div>
              {isAnnual && <div className="text-xs text-[#22C55E] font-semibold mt-1">{annualSaving}</div>}
            </div>

<div className="flex items-start gap-2 p-4 rounded-2xl mb-8 bg-[#F0FDF4] mt-4">
              <Zap size={16} className="shrink-0 mt-0.5 text-[#22C55E]" fill="currentColor" />
              <span className="text-sm font-medium leading-snug text-[#22C55E]">
                {p1.tag || "Partenariat exclusif tout au long de l'année"}
              </span>
            </div>

<ul className="space-y-4 mb-10 flex-grow">
              {(p1.features || [
                'Partenaire de design exclusif',
                "Requêtes illimitées toute l'année",
                'Priorité absolue et livraison sous 48h',
                'Support et direction artistique en continu',
              ]).map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check size={18} className="text-[#22C55E] shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-gray-600 font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <Link to="/order-process" className="w-full block mt-auto">
              <button className="w-full py-4 px-6 rounded-full font-bold text-center bg-[#22C55E] text-white hover:bg-[#1ea951] shadow-lg shadow-green-500/20 transition-transform active:scale-95">
                {p1.btn || 'Commencer maintenant'}
              </button>
            </Link>
          </motion.div>

<motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[2rem] p-8 flex flex-col relative bg-white text-[#111111] shadow-xl shadow-black/5 transition-transform hover:-translate-y-2 duration-300"
          >
            <h3 className="text-xl font-black tracking-tight mb-6 text-[#111111]">
              {p2.title || 'OFFRE ESSENTIELLE'}
            </h3>

            <div className="mb-6">
              <div className="text-3xl font-black tracking-tighter text-[#111111]">
                {p2.price || 'À partir de 129€'}
              </div>
            </div>

            <div className="flex items-start gap-2 p-4 rounded-2xl mb-8 bg-[#F0FDF4]">
              <Zap size={16} className="shrink-0 mt-0.5 text-[#22C55E]" fill="currentColor" />
              <span className="text-sm font-medium leading-snug text-[#22C55E]">
                {p2.tag || 'Besoin de plusieurs visuels ? Contactez-nous'}
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {(p2.features || [
                'Idéal pour réseaux sociaux',
                '1 visuel (post social media)',
                'Design moderne et impactant',
                'Adapté à votre identité',
              ]).map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check size={18} className="text-[#22C55E] shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-gray-600 font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <Link to="/order-process" className="w-full block mt-auto">
              <button className="w-full py-4 px-6 rounded-full font-bold text-center bg-[#111111] text-white hover:bg-black shadow-xl shadow-black/10 transition-transform active:scale-95">
                {p2.btn || 'Commencer maintenant'}
              </button>
            </Link>
          </motion.div>

<motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[2rem] p-8 flex flex-col relative bg-white text-[#111111] shadow-xl shadow-black/5 transition-transform hover:-translate-y-2 duration-300"
          >
            <h3 className="text-xl font-black tracking-tight mb-6 text-[#111111]">
              {p3.title || 'OFFRE VISIBILITÉ'}
            </h3>

            <div className="mb-6">
              <div className="text-3xl font-black tracking-tighter text-[#111111]">
                {p3.price || 'À partir de 179€'}
              </div>
            </div>

            <div className="flex items-start gap-2 p-4 rounded-2xl mb-8 bg-[#F0FDF4]">
              <Zap size={16} className="shrink-0 mt-0.5 text-[#22C55E]" fill="currentColor" />
              <span className="text-sm font-medium leading-snug text-[#22C55E]">
                {p3.tag || 'Pour plusieurs supports, contactez-nous'}
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {(p3.features || [
                'Supports de communication',
                '1 création (flyer, affiche, dépliant)',
                'Design optimisé pour impression',
                'Transformez vos visuels en ventes',
              ]).map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check size={18} className="text-[#22C55E] shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-gray-600 font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <Link to="/order-process" className="w-full block mt-auto">
              <button className="w-full py-4 px-6 rounded-full font-bold text-center bg-[#111111] text-white hover:bg-black shadow-xl shadow-black/10 transition-transform active:scale-95">
                {p3.btn || 'Commencer maintenant'}
              </button>
            </Link>
          </motion.div>

<motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-[2rem] p-8 flex flex-col relative bg-[#111111] text-white shadow-2xl transition-transform hover:-translate-y-2 duration-300"
          >
            <div className="absolute top-8 right-8 w-6 h-6 rounded-full border-2 border-white/10 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></div>
            </div>

            <h3 className="text-xl font-black tracking-tight mb-6 text-white pr-10">
              {p4.title || 'OFFRE PREMIUM'}
            </h3>

            <div className="mb-6">
              <div className="text-3xl font-black tracking-tighter text-white">
                {p4.price || 'Sur devis'}
              </div>
              <div className="text-sm mt-1 text-white/50">{p4.subprice || 'Prix selon votre projet'}</div>
            </div>

            <div className="flex items-start gap-2 p-4 rounded-2xl mb-8 bg-[#1E1E1E]">
              <Zap size={16} className="shrink-0 mt-0.5 text-gray-400" fill="currentColor" />
              <span className="text-sm font-medium leading-snug text-gray-400">
                {p4.tag || 'Solution sur mesure selon vos besoins'}
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {(p4.features || [
                'Accompagnement premium',
                'Créations visuelles illimitées',
                'Identité visuelle complète',
                'Suivi et direction artistique',
              ]).map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check size={18} className="text-[#22C55E] shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/80">{f}</span>
                </li>
              ))}
            </ul>

            <Link to="/order-process" className="w-full block mt-auto">
              <button className="w-full py-4 px-6 rounded-full font-bold text-center bg-[#22C55E] text-white hover:bg-[#1ea951] shadow-lg shadow-green-500/20 transition-transform active:scale-95">
                {p4.btn || 'Demander un devis'}
              </button>
            </Link>
          </motion.div>

        </div>

        <p className="text-center text-sm text-gray-400 mt-8">{t.services.guarantee}</p>
      </div>
    </section>
  );
};

export default BuildYourPlan;
