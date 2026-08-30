import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const InteractivePlayground = () => {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  const itemLabels = t.playground?.items || [
    { label: 'Branding' },
    { label: 'Poster Design' },
    { label: '3D Render' },
    { label: 'Social Kit' },
    { label: 'Packaging' },
  ];

  const artifacts = [
    { id: 1, src: '/asset_1.jpeg', label: itemLabels[0]?.label || 'Branding', x: '10%', y: '10%', rotate: -6 },
    { id: 2, src: '/asset_2.jpeg', label: itemLabels[1]?.label || 'Poster Design', x: '40%', y: '5%', rotate: 4 },
    { id: 3, src: '/asset_3.jpeg', label: itemLabels[2]?.label || '3D Render', x: '70%', y: '15%', rotate: -3 },
    { id: 4, src: '/asset_4.jpeg', label: itemLabels[3]?.label || 'Social Kit', x: '20%', y: '40%', rotate: 8 },
    { id: 5, src: '/asset_5.jpeg', label: itemLabels[4]?.label || 'Packaging', x: '55%', y: '35%', rotate: -5 },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-black/5 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="mb-10 text-center">
          <span className="qeero-badge mb-4 mx-auto block w-fit">
            {t.playground?.badge || '// Bac à sable interactif'}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            {t.playground?.title || 'Tirez, lancez,'} <span className="text-gradient-qeero">{t.playground?.titleHighlight || 'explorez.'}</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.playground?.desc || 'Jouez avec nos créations. Utilisez votre souris ou votre doigt pour déplacer les éléments librement sur la table de travail.'}
          </p>
        </div>

        <div 
          ref={containerRef} 
          className="relative w-full h-[550px] lg:h-[620px] xl:h-[700px] 2xl:h-[780px] bg-[#F8F8F6] rounded-[3rem] border border-black/10 shadow-inner overflow-hidden cursor-crosshair"
          style={{ backgroundImage: 'radial-gradient(circle, #E5E7EB 2px, transparent 2px)', backgroundSize: '40px 40px' }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
            <span className="text-9xl font-black tracking-tighter">QEERO</span>
          </div>

          {artifacts.map((item, i) => (
            <motion.div
              key={item.id}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              dragMomentum={true}
              whileDrag={{ scale: 1.05, cursor: 'grabbing', zIndex: 50, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
              whileHover={{ scale: 1.02 }}
              initial={{ x: 0, y: 0, rotate: item.rotate }}
              style={{ 
                position: 'absolute',
                left: item.x,
                top: item.y,
                cursor: 'grab',
                zIndex: i + 10
              }}
              className="w-48 sm:w-64 bg-white p-3 rounded-2xl shadow-xl border border-black/5 flex flex-col gap-3"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img src={item.src} alt="" className="w-full h-full object-cover pointer-events-none" />
              </div>
              <div className="flex items-center justify-between px-1">
                <span className="text-sm font-bold text-[#111111] pointer-events-none">{item.label}</span>
                <span className="text-xs font-black text-[#22C55E] bg-[#F0FDF4] px-2 py-1 rounded-full pointer-events-none">
                  {t.playground?.drag || 'DRAG'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractivePlayground;
