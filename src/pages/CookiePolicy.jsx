import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const CookiePolicy = () => {
  const { t } = useLanguage();
  const cp = t.cookiePolicyPage || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F8F6] min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight mb-6">
            {cp.title || 'Politique de cookies'}
          </h1>
          <p className="text-lg text-gray-500 mb-12 leading-relaxed">
            {cp.intro}
          </p>

          <div className="space-y-10 text-[#111111]">
            {cp.s1 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{cp.s1.title}</h2>
                <p className="text-gray-600 leading-relaxed">{cp.s1.desc}</p>
              </section>
            )}

            {cp.s2 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{cp.s2.title}</h2>
                <p className="mb-4 text-gray-600">{cp.s2.desc}</p>
                <div className="space-y-4">
                  {cp.s2.items?.map((item, i) => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm">
                      <h3 className="text-base font-bold text-[#111111] mb-1.5">{item.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {cp.s3 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{cp.s3.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{cp.s3.desc}</p>
                <p className="text-gray-600 font-semibold mb-2">{cp.s3.browsers}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.apple.com/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">Apple Safari</a></li>
                  <li><a href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>
            )}

            {cp.s4 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{cp.s4.title}</h2>
                <p className="text-gray-600 leading-relaxed">{cp.s4.desc}</p>
              </section>
            )}

            {cp.s5 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{cp.s5.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {cp.s5.desc}
                  <a href="mailto:agence@qeero.fr" className="text-[#22C55E] font-semibold hover:underline inline-block ml-1">
                    agence@qeero.fr
                  </a>
                </p>
              </section>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
