import React from 'react';
import { motion } from 'framer-motion';

const HERO_ASSETS_COL1 = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&auto=format&fit=crop&q=80',
];

const HERO_ASSETS_COL2 = [
  'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop&q=80',
];

const col1 = [...HERO_ASSETS_COL1, ...HERO_ASSETS_COL1];
const col2 = [...HERO_ASSETS_COL2, ...HERO_ASSETS_COL2];

const GAP = 16;  

const HeroGallery = () => (
  <div className="relative w-full h-[600px] rounded-[2.5rem] overflow-hidden">
    
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
                alt={`Design Qeero ${(i % HERO_ASSETS_COL1.length) + 1}`}
                className="w-full h-auto object-contain"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>

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
                alt={`Design Qeero ${(i % HERO_ASSETS_COL2.length) + 1}`}
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

