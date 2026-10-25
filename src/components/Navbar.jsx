import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';
import TextHover from './TextHover';

const FrenchFlag = () => (
  <svg viewBox="0 0 640 480" className="w-4 h-3 rounded-[2px] object-cover shadow-[0_0_1px_rgba(0,0,0,0.4)] shrink-0 inline-block overflow-hidden">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v480H0z"/>
      <path fill="#00267f" d="M0 0h213.3v480H0z"/>
      <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
    </g>
  </svg>
);

const UKFlag = () => (
  <svg viewBox="0 0 640 480" className="w-4 h-3 rounded-[2px] object-cover shadow-[0_0_1px_rgba(0,0,0,0.4)] shrink-0 inline-block overflow-hidden">
    <path fill="#012169" d="M0 0h640v480H0z"/>
    <path fill="#FFF" d="m75 0 245 180L565 0h75v60L435 240l205 180v60h-75L320 300 75 480H0v-60l205-180L0 60V0z"/>
    <path fill="#C8102E" d="m424 288 216 156v36h-49L387 312zm-208 0-216 156v-36l204-148zm0-96L0 36V0h49l204 148zm208 0L640 36V0h-49L387 144z"/>
    <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/>
    <path fill="#C8102E" d="M266.7 0h106.6v480H266.7zM0 186.7h640v106.6H0z"/>
  </svg>
);

const languages = [
  { code: 'fr', icon: <FrenchFlag />, label: 'FR' },
  { code: 'en', icon: <UKFlag />, label: 'EN' },
];

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const links = [
    { href: '/#how-it-works', label: t.nav.howItWorks },
    { href: '/#portfolio',    label: t.nav.portfolio },
    { href: '/#services',     label: t.nav.services },
    { href: '/#faq',          label: t.nav.faq },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 dark:bg-[#111111]/95 backdrop-blur-md shadow-sm border-b border-black/5 dark:border-white/5'
          : 'bg-transparent'
      }`}>
        <div className="px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <div className="flex justify-between items-center h-20 xl:h-24">

            <a href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <img src="/Q.png" alt="Qeero Logo" className="h-10 w-auto object-contain dark:brightness-200" />
              <span translate="no" className="text-2xl font-black tracking-tight text-[#111111] dark:text-white group-hover:text-[#22C55E] transition-colors">qeero.</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-[#22C55E] dark:hover:text-[#22C55E] transition-colors relative group"
                >
                  <TextHover>{label}</TextHover>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <div className="relative flex items-center bg-gray-100/90 dark:bg-white/10 p-1 rounded-full border border-black/5 dark:border-white/10 shadow-inner">
                {languages.map((item) => {
                  const isActive = language === item.code;
                  return (
                    <button
                      key={item.code}
                      onClick={() => setLanguage(item.code)}
                      className={`relative z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer ${
                        isActive ? 'text-[#111111] dark:text-white' : 'text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                      }`}
                      title={item.code === 'fr' ? 'Français' : 'English'}
                    >
                      <motion.span
                        className="inline-flex items-center"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="text-[11px] font-extrabold tracking-wider">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="active-flag-pill"
                          className="absolute inset-0 bg-white dark:bg-white/15 rounded-full shadow-sm -z-10 border border-black/5 dark:border-white/10"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Dark / Light mode toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100/90 dark:bg-white/10 border border-black/5 dark:border-white/10 text-gray-500 dark:text-gray-300 hover:text-[#22C55E] dark:hover:text-[#22C55E] transition-colors"
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={16} strokeWidth={2} /> : <Moon size={16} strokeWidth={2} />}
              </motion.button>

              <button
                onClick={() => setContactOpen(true)}
                className="hidden md:inline-flex btn-qeero px-6 py-2.5 text-sm"
              >
                {t.nav.contact}
              </button>

              <button
                onClick={() => setMobileOpen(o => !o)}
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-[#111111] dark:text-white"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white dark:bg-[#111111] border-t border-black/5 dark:border-white/5 px-6 py-8 flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-black/5 dark:border-white/5">
              <span className="text-sm font-bold text-gray-500 dark:text-gray-400">Langue / Language</span>
              <div className="relative flex items-center bg-gray-100 dark:bg-white/10 p-1 rounded-full border border-black/5 dark:border-white/10">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      language === item.code
                        ? 'bg-white dark:bg-white/20 shadow text-[#111111] dark:text-white'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                  >
                    <span className="inline-flex items-center">{item.icon}</span>
                    <span className="text-xs font-extrabold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-bold text-[#111111] dark:text-white hover:text-[#22C55E] dark:hover:text-[#22C55E] transition-colors border-b border-black/5 dark:border-white/5 pb-4 last:border-0"
              >
                {label}
              </a>
            ))}

            <div className="flex items-center gap-3">
              <button
                onClick={() => { setMobileOpen(false); setContactOpen(true); }}
                className="btn-qeero px-8 py-3.5 text-base flex-1"
              >
                {t.nav.contact}
              </button>
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/10 border border-black/5 dark:border-white/10 text-gray-500 dark:text-gray-300 flex-shrink-0"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>
            </div>
          </div>
        )}
      </nav>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </>
  );
};

export default Navbar;
