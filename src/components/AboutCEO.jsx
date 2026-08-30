import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const rings = [
  { w: 380, h: 380, top: '-100px', right: '-100px', dur: 25, dir:  1, dash: true  },
  { w: 200, h: 200, top:  '-20px', right:   '55px', dur: 16, dir: -1, dash: false },
  { w: 560, h: 560, top: '-230px', right: '-230px', dur: 42, dir:  1, dash: true  },
  { w: 150, h: 150, bottom: '40px', left:  '12%',   dur: 20, dir: -1, dash: true  },
  { w: 90,  h: 90,  top:    '32%',  left:   '5%',   dur: 12, dir:  1, dash: false },
  { w: 65,  h: 65,  bottom: '18%',  right:  '30%',  dur:  9, dir: -1, dash: false },
];

const diamonds = [
  { size: 20, top: '15%', left:  '9%',  delay: 0,   dur: 6  },
  { size: 13, top: '60%', right: '14%', delay: 1.2, dur: 8  },
  { size: 22, top: '76%', left:  '44%', delay: 2.5, dur: 7  },
  { size: 10, top: '22%', right:  '9%', delay: 0.6, dur: 9  },
  { size: 28, top: '82%', left:   '4%', delay: 1.8, dur: 10 },
  { size: 11, top:  '8%', left:  '56%', delay: 0.9, dur: 6  },
];

const dots = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: i % 3 === 0 ? 5 : i % 3 === 1 ? 4 : 3,
  left:  `${(i * 67 + 5)  % 90}%`,
  top:   `${(i * 41 + 10) % 82}%`,
  delay: (i * 0.5) % 5,
  dur:   4 + (i % 4),
}));

const AboutCEO = () => {
  const { t } = useLanguage();
  return (
  
  <section className="relative py-16 md:py-24 overflow-hidden border-t border-[#22C55E]/15"
    style={{ background: '#f0fdf4' }}
  >

<div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">

{rings.map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width:  r.w,
            height: r.h,
            top:    r.top,
            right:  r.right,
            left:   r.left,
            bottom: r.bottom,
            border: `2px ${r.dash ? 'dashed' : 'solid'} rgba(34,197,94,0.55)`,
          }}
          animate={{ rotate: r.dir === 1 ? [0, 360] : [0, -360] }}
          transition={{ duration: r.dur, repeat: Infinity, ease: 'linear' }}
        />
      ))}

<div
        className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -left-16 w-[350px] h-[350px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)' }}
      />

{diamonds.map((d, i) => (
        <motion.div
          key={i}
          className="absolute bg-[#22C55E]"
          style={{
            width:  d.size,
            height: d.size,
            top:    d.top,
            left:   d.left,
            right:  d.right,
            borderRadius: '3px',
            opacity: 0,
          }}
          animate={{ rotate: [45, 90, 45], y: [0, -20, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

{dots.map(dot => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-[#16a34a]"
          style={{ width: dot.size, height: dot.size, left: dot.left, top: dot.top, opacity: 0 }}
          animate={{ y: [0, -35], opacity: [0, 0.7, 0] }}
          transition={{ duration: dot.dur, delay: dot.delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

<svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ceo-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 50" stroke="#16a34a" strokeWidth="0.7" strokeOpacity="0.18" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ceo-grid)" />
      </svg>

    </div>

<div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
      <div className="grid lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] 2xl:grid-cols-[520px_1fr] gap-12 xl:gap-20 2xl:gap-28 items-center">

<motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-start"
        >
          <motion.div
            className="absolute -bottom-6 -left-6 w-64 h-64 xl:w-80 xl:h-80 rounded-[2rem] bg-[#22C55E]/20 z-0"
            animate={{ rotate: [0, 4, 0, -4, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -top-4 -right-4 w-28 h-28 xl:w-36 xl:h-36 rounded-full bg-[#22C55E]/15 z-0"
            animate={{ scale: [1, 1.2, 1], x: [0, 8, 0], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          <div className="relative z-10 w-72 md:w-80 xl:w-96 2xl:w-[420px] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#22C55E]/15 border border-[#22C55E]/20">
            <img
              src="/CEO.jpeg"
              alt="Fondateur de Qeero"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent px-6 py-5">
              <p className="text-white font-extrabold text-lg xl:text-xl leading-tight">{t.aboutCEO.role}</p>
              <p className="text-[#22C55E] text-sm xl:text-base font-semibold mt-0.5">{t.aboutCEO.agency}</p>
            </div>
          </div>
        </motion.div>

<motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="text-left"
        >
          <span className="qeero-badge mb-6 block w-fit">{t.aboutCEO.badge}</span>

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#111111] leading-[1.1] mb-6">
            {t.aboutCEO.title}{' '}
            <span className="text-gradient-qeero">{t.aboutCEO.titleHighlight}</span>
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-5">
            {t.aboutCEO.p1}
          </p>

          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            {t.aboutCEO.p2}
          </p>

          <div className="space-y-3">
            {t.aboutCEO.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <span className="text-[#22C55E] font-black text-lg leading-none mt-0.5">✓</span>
                <p className="text-gray-700 font-medium text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
  );
};

export default AboutCEO;
