import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();
  const pp = t.privacyPolicyPage || {};

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
            {pp.title || 'Politique de confidentialité'}
          </h1>
          <p className="text-lg text-gray-500 mb-12 leading-relaxed">
            {pp.intro}
          </p>

          <div className="space-y-10 text-[#111111]">
            {pp.s1 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{pp.s1.title}</h2>
                <p className="mb-3 text-gray-600">{pp.s1.desc}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {pp.s1.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {pp.s2 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{pp.s2.title}</h2>
                <p className="mb-3 text-gray-600">{pp.s2.desc}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {pp.s2.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {pp.s3 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{pp.s3.title}</h2>
                <p className="mb-3 text-gray-600">{pp.s3.desc}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {pp.s3.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {pp.s4 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{pp.s4.title}</h2>
                <p className="text-gray-600 leading-relaxed">{pp.s4.desc}</p>
              </section>
            )}

            {pp.s5 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{pp.s5.title}</h2>
                <p className="text-gray-600 leading-relaxed">{pp.s5.desc}</p>
              </section>
            )}

            {pp.s6 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{pp.s6.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {pp.s6.desc}
                  <a href="mailto:agence@qeero.fr" className="text-[#22C55E] font-semibold hover:underline inline-block ml-1">
                    agence@qeero.fr
                  </a>
                </p>
              </section>
            )}

            {pp.s7 && (
              <section>
                <h2 className="text-2xl font-bold mb-4">{pp.s7.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {pp.s7.desc}
                  <Link to="/cookie-policy" className="text-[#22C55E] font-semibold hover:underline">
                    {pp.s7.cookieLink}
                  </Link>
                  {pp.s7.descEnd}
                </p>
              </section>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
