import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { TextEffect } from '../../components/motion-primitives/text-effect';
import { Magnetic } from '../../components/motion-primitives/magnetic';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function AnalogClock({ timeZone, label }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const tzTime = new Date(time.toLocaleString('en-US', { timeZone }));
  const hours = tzTime.getHours() % 12;
  const minutes = tzTime.getMinutes();
  const seconds = tzTime.getSeconds();

  const hourAngle = (hours * 30) + (minutes * 0.5);
  const minuteAngle = (minutes * 6) + (seconds * 0.1);
  const secondAngle = seconds * 6;

  return (
    <div className="flex flex-col items-center gap-3">
      
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/25 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] flex items-center justify-center backdrop-blur-md">

<div className="absolute top-1 w-[1.5px] h-1.5 bg-white/40 rounded-full" />
        <div className="absolute bottom-1 w-[1.5px] h-1.5 bg-white/40 rounded-full" />
        <div className="absolute left-1 w-1.5 h-[1.5px] bg-white/40 rounded-full" />
        <div className="absolute right-1 w-1.5 h-[1.5px] bg-white/40 rounded-full" />

<div 
          className="absolute w-[2px] h-[25%] bg-white rounded-full bottom-1/2 left-[calc(50%-1px)]"
          style={{ transformOrigin: 'bottom center', transform: `rotate(${hourAngle}deg)` }}
        />

<div 
          className="absolute w-[1.5px] h-[35%] bg-white/90 rounded-full bottom-1/2 left-[calc(50%-0.75px)]"
          style={{ transformOrigin: 'bottom center', transform: `rotate(${minuteAngle}deg)` }}
        />

<div 
          className="absolute w-[1px] h-[42%] bg-[#22C55E] rounded-t-full bottom-1/2 left-[calc(50%-0.5px)]"
          style={{ transformOrigin: 'bottom center', transform: `rotate(${secondAngle}deg)` }}
        />

<div className="absolute w-2 h-2 rounded-full bg-[#22C55E] shadow-sm z-10 border border-[#111111]" />
      </div>
      <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">{label}</span>
    </div>
  );
}

const Footer = () => {
  const { t } = useLanguage();
  const ctaRef = useRef(null);
  const lineRef = useRef(null);

  const inView = useInView(ctaRef, { once: true, margin: '-80px' });

useEffect(() => {
    if (inView && lineRef.current) {
      lineRef.current.style.transition = 'transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s';
      lineRef.current.style.transform = 'scaleX(1)';
    }
  }, [inView]);

  return (
  <footer className="bg-[#111111] text-white pt-16 md:pt-24 pb-8">
    <div className="px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">

<motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[2.5rem] bg-[#0a0a0a] border border-[#22C55E]/40 shadow-[0_0_50px_rgba(34,197,94,0.25)] p-10 md:p-14 mb-16 overflow-hidden"
      >
        
        <TextEffect
          as="h2"
          per="word"
          preset="fade-in-blur"
          speedReveal={1.4}
          className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3 leading-tight"
        >
          {t.footer.ctaTitle}
        </TextEffect>

<motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="text-white/80 text-lg mb-10"
        >
          {t.footer.ctaSubtitle}
        </motion.p>

<div
          ref={lineRef}
          className="h-px bg-white/30 mb-8 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

<motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-center mb-8 bg-black rounded-full py-2.5 px-5 w-fit border border-[#22C55E]/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
        >
          
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E] shadow-[0_0_8px_#22C55E]"></span>
            </span>
            <span className="text-[#22C55E] font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              {t.footer?.available || 'Disponible pour de nouveaux projets'}
            </span>
          </div>
        </motion.div>

<motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', bounce: 0.4 }}
          className="w-fit"
        >
          <Magnetic intensity={0.4} range={120}>
            <a
              href="mailto:agence@qeero.fr"
              className="group relative inline-flex items-center overflow-hidden bg-white text-[#111111] font-black text-base px-10 py-4 rounded-full shadow-2xl cursor-pointer"
            >
              
              <motion.span
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '220%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              <span className="relative transition-transform duration-200 group-hover:translate-x-0.5">
                {t.footer.ctaBtn}
              </span>
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
      
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-2">
          <a href="/" className="flex items-center gap-2 mb-5 group w-fit">
            <img src="/Q.png" alt="Qeero Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            <span translate="no" className="text-2xl font-black tracking-tight text-white group-hover:text-[#22C55E] transition-colors">qeero.</span>
          </a>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            {t.footer.description}
          </p>
          <div className="flex gap-4 mt-6">
            <a href="mailto:agence@qeero.fr" aria-label="Email" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#22C55E]/20 hover:text-[#22C55E] flex items-center justify-center text-white/60 transition-colors">
              <Mail size={16} strokeWidth={1.75} />
            </a>
            <a href="tel:+33649735276" aria-label="Phone" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#22C55E]/20 hover:text-[#22C55E] flex items-center justify-center text-white/60 transition-colors">
              <Phone size={16} strokeWidth={1.75} />
            </a>
            <span aria-label="Location" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60">
              <MapPin size={16} strokeWidth={1.75} />
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">
            {t.footer.sectionsTitle || 'Sections'}
          </h4>
          <ul className="space-y-3 text-sm text-white/50">
            {(t.footer.sectionsList || [
              { label: 'Portfolio', href: '/#portfolio' },
              { label: 'Comment ça marche', href: '/#how-it-works' },
              { label: 'Pourquoi QEERO', href: '/#comparison' },
              { label: 'Tarifs & Offres', href: '/#services' },
              { label: 'Avis Clients', href: '/#testimonials' },
              { label: 'FAQ', href: '/#faq' },
            ]).map(({ label, href }) => {
              const handleClick = (e) => {
                const targetId = href.replace('/#', '');
                const targetEl = document.getElementById(targetId);
                if (targetEl && window.location.pathname === '/') {
                  e.preventDefault();
                  targetEl.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', href);
                }
              };

              return (
                <li key={label}>
                  <a 
                    href={href} 
                    onClick={handleClick} 
                    className="hover:text-[#22C55E] transition-colors cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5">{t.footer.contactTitle}</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li><a href="mailto:agence@qeero.fr" className="hover:text-[#22C55E] transition-colors">{t.footer.email}</a></li>
            <li><a href="tel:+33649735276" className="hover:text-[#22C55E] transition-colors">{t.footer.phone}</a></li>
            <li className="text-white/30">{t.footer.location}</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>{t.footer.rights}</p>
        <div className="flex gap-6">
          <Link to="/legal-notice" className="hover:text-white transition-colors">{t.footer.legal1}</Link>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">{t.footer.legal2}</Link>
          <Link to="/cookie-policy" className="hover:text-white transition-colors">{t.footer.cookiePolicy || 'Politique de cookies'}</Link>
        </div>
      </div>
    </div>
  </footer>
)};

export default Footer;
