import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';
import TextHover from './TextHover';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
      <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled || mobileOpen ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

<a href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <img src="/Q.png" alt="Qeero Logo" className="h-10 w-auto object-contain" />
              <span translate="no" className="text-2xl font-black tracking-tight text-[#111111] group-hover:text-[#22C55E] transition-colors">qeero.</span>
            </a>

<div className="hidden md:flex items-center gap-8">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm font-semibold text-gray-600 hover:text-[#22C55E] transition-colors relative group"
                >
                  <TextHover>{label}</TextHover>
                </a>
              ))}
            </div>

<div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-lg"
                title={language === 'en' ? 'Change language' : 'Changer de langue'}
              >
                {language === 'en' ? '🇬🇧' : '🇫🇷'}
              </button>
              <button
                onClick={() => setContactOpen(true)}
                className="hidden md:inline-flex btn-qeero px-6 py-2.5 text-sm"
              >
                {t.nav.contact}
              </button>
              
              <button
                onClick={() => setMobileOpen(o => !o)}
                className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

{mobileOpen && (
          <div className="md:hidden bg-white border-t border-black/5 px-6 py-8 flex flex-col gap-6">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-bold text-[#111111] hover:text-[#22C55E] transition-colors border-b border-black/5 pb-4 last:border-0"
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => { setMobileOpen(false); setContactOpen(true); }}
              className="btn-qeero px-8 py-3.5 text-base mt-2"
            >
              {t.nav.contact}
            </button>
          </div>
        )}
      </nav>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </>
  );
};

export default Navbar;
