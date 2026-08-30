import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const getReviews = (t) => t.testimonials.reviews;

const Testimonials = () => {
  const { t } = useLanguage();
  const reviews = getReviews(t);

  return (
  <section className="py-14 md:py-20 bg-[#F8F8F6] border-t border-black/5">
    <div className="px-4 sm:px-6 lg:px-8 xl:px-[5vw]">

      <div className="text-center mb-14">
        <span className="qeero-badge mb-5 block w-fit mx-auto">{t.testimonials.badge}</span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111]">
          {t.testimonials.title}<br /><span className="text-gradient-qeero">{t.testimonials.titleHighlight}</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="flat-card rounded-3xl p-6 flex flex-col bg-white"
          >
            
            <div className="text-[#22C55E] text-base mb-4">★★★★★</div>
            <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow italic">
              "{r.text}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-black/5">
              
              <div className="w-11 h-11 rounded-full bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center shrink-0 overflow-hidden">
                {r.logo ? (
                  <img
                    src={r.logo}
                    alt={r.author}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-xs font-black text-[#22C55E]">
                    {r.author.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </span>
                )}
              </div>
              <div>
                <p className="font-bold text-[#111111] text-sm">{r.author}</p>
                <p className="text-gray-400 text-xs">{r.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
  );
};

export default Testimonials;
