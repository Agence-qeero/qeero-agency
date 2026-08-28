import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const LegalNotice = () => {
  const { t } = useLanguage();
  const ln = t.legalNoticePage || {};
  const s = ln.sections || {};

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
            {ln.title || 'Mentions Légales'}
          </h1>
          <p className="text-lg text-gray-500 mb-12 leading-relaxed">
            {ln.intro || "Informations légales relatives au site qeero.fr."}
          </p>

          <div className="space-y-10 text-[#111111]">
            <section>
              <h2 className="text-2xl font-bold mb-4">{s.publisher?.title || '1. Éditeur du site'}</h2>
              <p className="text-gray-600 mb-3 leading-relaxed">
                {s.publisher?.p1}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>{s.publisher?.director}</li>
                <li>{s.publisher?.location}</li>
                <li>{s.publisher?.email}</li>
                <li>{s.publisher?.phone}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{s.hosting?.title || '2. Hébergement'}</h2>
              <p className="text-gray-600 leading-relaxed">
                {s.hosting?.p1}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{s.intellectualProperty?.title || '3. Propriété intellectuelle'}</h2>
              <p className="text-gray-600 mb-3 leading-relaxed">
                {s.intellectualProperty?.p1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {s.intellectualProperty?.p2}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{s.personalData?.title || '4. Données personnelles et cookies'}</h2>
              <p className="text-gray-600 leading-relaxed">
                {s.personalData?.p1}
                <Link to="/privacy-policy" className="text-[#22C55E] font-semibold hover:underline">
                  {s.personalData?.privacyLink || 'Politique de confidentialité'}
                </Link>
                {s.personalData?.p2}
                <Link to="/cookie-policy" className="text-[#22C55E] font-semibold hover:underline">
                  {s.personalData?.cookieLink || 'Politique de cookies'}
                </Link>
                {s.personalData?.p3}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{s.liability?.title || '5. Limitation de responsabilité'}</h2>
              <p className="text-gray-600 leading-relaxed">
                {s.liability?.p1}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{s.contact?.title || '6. Contact'}</h2>
              <p className="text-gray-600">
                {s.contact?.p1}
                <a href="mailto:agence@qeero.fr" className="text-[#22C55E] font-semibold hover:underline">
                  agence@qeero.fr
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalNotice;
