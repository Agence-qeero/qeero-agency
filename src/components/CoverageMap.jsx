import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const project = (lat, lon) => ({
  x: parseFloat(((lon + 18) * 9.33).toFixed(1)),
  y: parseFloat(((57 - lat) * 5.71).toFixed(1)),
});

const hub = project(45.18, 0.72); 

const cities = [
  { name: 'Paris',        ...project(48.85,  2.35), anchor: 'start', lx:  3, ly: -3 },
  { name: 'Lyon',         ...project(45.75,  4.83), anchor: 'start', lx:  3, ly:  0 },
  { name: 'Marseille',    ...project(43.30,  5.37), anchor: 'start', lx:  3, ly:  2 },
  { name: 'Toulouse',     ...project(43.60,  1.44), anchor: 'end',   lx: -3, ly:  3 },
  { name: 'Lille',        ...project(50.63,  3.06), anchor: 'start', lx:  3, ly: -3 },
  { name: 'Nantes',       ...project(47.22, -1.55), anchor: 'end',   lx: -3, ly: -3 },
  { name: 'Bordeaux',     ...project(44.84, -0.58), anchor: 'end',   lx: -3, ly:  4 },
  { name: 'La Rochelle',  ...project(46.16, -1.15), anchor: 'end',   lx: -3, ly: -3 },
  {
    name: 'Essaouira',
    ...project(31.51, -9.77),
    anchor: 'start', lx: 3, ly: 0,
    international: true,
    
    arc: `M ${project(45.18, 0.72).x},${project(45.18, 0.72).y} Q 100,115 ${project(31.51, -9.77).x},${project(31.51, -9.77).y}`,
  },
];

const FRANCE   = "M 124,49 L 152,41 L 191,34 L 241,47 L 237,76 L 195,82 L 155,77 L 148,56 Z";
const SPAIN    = "M 143,79 L 194,87 L 188,102 L 155,110 L 115,122 L 94,114 L 87,86 Z";
const PORTUGAL = "M 87,86 L 90,95 L 83,107 L 77,109 L 74,99 L 81,89 Z";
const UK       = "M 174,34 L 156,27 L 120,30 L 114,42 L 133,46 L 158,43 Z";
const MOROCCO  = "M 113,124 L 152,128 L 150,157 L 122,164 L 84,160 L 63,147 L 70,131 Z";
const ITALY_P  = "M 238,78 L 250,72 L 256,82 L 248,92 L 239,89 Z";
const ALGERIA  = "M 152,128 L 200,134 L 198,170 L 155,175 L 122,164 L 150,157 Z";

const CoverageMap = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section
      className="py-20 bg-[#111111] overflow-hidden border-t border-white/10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

<div className="lg:w-1/2 text-left">
            <span className="qeero-badge bg-white/10 text-white border-white/20 mb-4 block w-fit">
              {t.coverageMap.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              {t.coverageMap.title}{' '}
              <span className="text-[#22C55E]">{t.coverageMap.titleAquitaine}</span>.<br />
              {t.coverageMap.titleFrance}<br />
              <span className="text-[#22C55E]">{t.coverageMap.titleIntl}</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-md">
              {t.coverageMap.desc1}{' '}
              <span className="text-[#22C55E] font-semibold">{t.coverageMap.descPerigueux}</span> {t.coverageMap.desc2}{' '}
              <span className="text-[#22C55E] font-semibold">{t.coverageMap.descEssaouira}</span>
              {t.coverageMap.desc3}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="/asset_1.jpeg"
                  className="w-10 h-10 rounded-full border-2 border-[#111111] object-cover"
                  alt=""
                />
                <img
                  src="/asset_3.jpeg"
                  className="w-10 h-10 rounded-full border-2 border-[#111111] object-cover"
                  alt=""
                />
                <div className="w-10 h-10 rounded-full border-2 border-[#111111] bg-[#22C55E] flex items-center justify-center text-xs font-bold text-white">
                  +40
                </div>
              </div>
              <span className="text-sm font-semibold text-white/80">
                {t.coverageMap.deliveredPrefix}
              </span>
            </div>
          </div>

<div className="lg:w-1/2 w-full max-w-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <svg
                viewBox="0 0 280 200"
                className="w-full h-full"
                style={{ background: '#161616' }}
              >
                
                {[0, 40, 80, 120, 160, 200, 240, 280].map(gx => (
                  <line key={`gx${gx}`} x1={gx} y1={0} x2={gx} y2={200} stroke="#ffffff" strokeWidth="0.15" strokeOpacity="0.06" />
                ))}
                {[0, 40, 80, 120, 160, 200].map(gy => (
                  <line key={`gy${gy}`} x1={0} y1={gy} x2={280} y2={gy} stroke="#ffffff" strokeWidth="0.15" strokeOpacity="0.06" />
                ))}

<path d={UK}       fill="#1f1f1f" stroke="#2e2e2e" strokeWidth="0.5" />
                <path d={ITALY_P}  fill="#1f1f1f" stroke="#2e2e2e" strokeWidth="0.5" />
                <path d={PORTUGAL} fill="#1f1f1f" stroke="#2e2e2e" strokeWidth="0.5" />
                <path d={SPAIN}    fill="#1f1f1f" stroke="#2e2e2e" strokeWidth="0.5" />
                <path d={ALGERIA}  fill="#1e1e1e" stroke="#2a2a2a" strokeWidth="0.5" />

<path
                  d={FRANCE}
                  fill="#1a2b1a"
                  stroke="#22C55E"
                  strokeWidth="0.7"
                  strokeOpacity="0.45"
                />

<path
                  d={MOROCCO}
                  fill="#1a2518"
                  stroke="#22C55E"
                  strokeWidth="0.5"
                  strokeOpacity="0.35"
                />

<text x="60"  y="65"  fontSize="2.6" fill="rgba(255,255,255,0.1)" fontStyle="italic">{t.coverageMap.seaAtlantic}</text>
                <text x="210" y="105" fontSize="2.6" fill="rgba(255,255,255,0.1)" fontStyle="italic">{t.coverageMap.seaMed}</text>
                <text x="78"  y="175" fontSize="2.6" fill="rgba(255,255,255,0.1)" fontStyle="italic">{t.coverageMap.seaMorocco}</text>

<motion.circle
                  cx={hub.x} cy={hub.y} r="10"
                  fill="#22C55E" opacity="0.12"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: [0, 1.3, 1] } : {}}
                  transition={{ duration: 1 }}
                />

{cities.map((city, i) => (
                  <motion.path
                    key={`line-${i}`}
                    d={city.arc || `M ${hub.x},${hub.y} L ${city.x},${city.y}`}
                    stroke="#22C55E"
                    strokeWidth={city.international ? 0.6 : 0.4}
                    strokeDasharray={city.international ? '3 2' : '2 1.5'}
                    strokeOpacity={city.international ? 0.9 : 0.6}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{
                      duration: city.international ? 2.2 : 1.4,
                      delay: 0.5 + i * 0.14,
                      ease: 'easeInOut',
                    }}
                  />
                ))}

<motion.circle
                  cx={hub.x} cy={hub.y} r="2.8"
                  fill="#22C55E"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2, type: 'spring' }}
                />
                
                <motion.circle
                  cx={hub.x} cy={hub.y} r="2.8"
                  fill="none" stroke="#22C55E" strokeWidth="0.8"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 5, opacity: 0 }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                />
                
                <motion.text
                  x={hub.x + 4} y={hub.y - 3}
                  fontSize="3" fill="#22C55E" fontWeight="700"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  {t.coverageMap.cityPerigueux}
                </motion.text>

{cities.map((city, i) => (
                  <g key={`node-${i}`}>
                    <motion.circle
                      cx={city.x} cy={city.y}
                      r={city.international ? 2.2 : 1.6}
                      fill={city.international ? '#22C55E' : 'white'}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 1.5 + i * 0.14, type: 'spring' }}
                    />
                    
                    {city.international && (
                      <motion.circle
                        cx={city.x} cy={city.y} r="2.2"
                        fill="none" stroke="#22C55E" strokeWidth="0.6"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 5, opacity: 0 }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
                      />
                    )}
                    <motion.text
                      x={city.x + city.lx}
                      y={city.y + city.ly + 1}
                      fontSize="2.8"
                      textAnchor={city.anchor}
                      fill={city.international ? '#22C55E' : 'rgba(255,255,255,0.65)'}
                      fontWeight={city.international ? '700' : '400'}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.7 + i * 0.14 }}
                    >
                      {city.name}
                    </motion.text>
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
