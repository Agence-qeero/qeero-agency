import React from 'react';
import { motion } from 'framer-motion';

const ALL_ASSETS = [
  '/asset_1.jpeg',
  '/asset_2.jpeg',
  '/asset_3.jpeg',
  '/asset_4.jpeg',
  '/asset_5.jpeg',
  '/asset_6.jpeg',
  '/asset_7.jpeg',
  '/asset_8.jpeg',
  '/asset_9.jpeg',
  '/asset_10.jpeg',
  '/jbl.jpeg',
];

const col1 = [...ALL_ASSETS, ...ALL_ASSETS];
const col2 = [
  ...ALL_ASSETS.slice(5),
  ...ALL_ASSETS.slice(0, 5),
  ...ALL_ASSETS.slice(5),
  ...ALL_ASSETS.slice(0, 5),
];

const GAP = 16;  

const HeroGallery = () => (
  <div className="relative w-full h-[550px] lg:h-[620px] xl:h-[700px] 2xl:h-[780px] rounded-[2.5rem] overflow-hidden">
    
    <div className="absolute inset-0 rounded-[2.5rem] border border-black/8 shadow-2xl pointer-events-none z-20" />

    <div
      className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, #F8F8F6 0%, transparent 100%)' }}
    />
    <div
      className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
      style={{ background: 'linear-gradient(to top, #F8F8F6 0%, transparent 100%)' }}
    />

    <div className="absolute inset-0 flex gap-4 px-4">

      {/* Column 1 - Scroll Up */}
      <div className="flex-1 overflow-hidden">
        <motion.div
          className="flex flex-col"
          style={{ gap: GAP }}
          animate={{ y: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          {col1.map((src, i) => (
            <div
              key={i}
              className="w-full shrink-0 rounded-2xl overflow-hidden border border-black/5 bg-white/50"
            >
              <img
                src={src}
                alt={`Design Qeero ${(i % ALL_ASSETS.length) + 1}`}
                className="w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Column 2 - Scroll Down */}
      <div className="flex-1 overflow-hidden">
        <motion.div
          className="flex flex-col"
          style={{ gap: GAP }}
          animate={{ y: ['-50%', '0%'] }}
          transition={{ duration: 45, ease: 'linear', repeat: Infinity }}
        >
          {col2.map((src, i) => (
            <div
              key={i}
              className="w-full shrink-0 rounded-2xl overflow-hidden border border-black/5 bg-white/50"
            >
              <img
                src={src}
                alt={`Design Qeero ${(i % ALL_ASSETS.length) + 1}`}
                className="w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  </div>
);

export default HeroGallery;
