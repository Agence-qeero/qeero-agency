import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    
    const accepted = localStorage.getItem('qeero_cookies');
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('qeero_cookies', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('qeero_cookies', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:w-[420px] z-[80] bg-white rounded-3xl shadow-2xl border border-black/7 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center shrink-0">
              <Cookie size={20} className="text-[#22C55E]" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#111111] text-sm mb-1">
                {t.cookies?.title || 'Nous utilisons des cookies 🍪'}
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                {t.cookies?.desc || 'Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. Conformément au RGPD, votre consentement est requis.'}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={accept}
                  className="flex-1 btn-qeero py-2 text-xs"
                >
                  {t.cookies?.accept || 'Accepter'}
                </button>
                <button
                  onClick={decline}
                  className="flex-1 py-2 text-xs font-semibold text-gray-500 hover:text-gray-700 border border-black/10 rounded-full transition-colors"
                >
                  {t.cookies?.decline || 'Refuser'}
                </button>
              </div>
            </div>
            <button onClick={decline} className="text-gray-400 hover:text-gray-600 transition-colors mt-0.5">
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
