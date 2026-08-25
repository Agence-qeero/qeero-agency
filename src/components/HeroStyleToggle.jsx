import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QLogo from './QLogo';

const HeroStyleToggle = () => {
  const [style, setStyle] = useState('2D'); 
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStyle(prev => {
        if (prev === 'Print') return '2D';
        if (prev === '2D') return '3D';
        return 'Print';
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] w-full rounded-[2.5rem] border border-black/7 bg-white shadow-2xl flex flex-col items-center justify-center overflow-hidden">

<div className="relative w-72 h-72 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {style === 'Print' && (
            <motion.div
              key="print"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              
              <div className="relative flex items-center justify-center w-48 h-48">
                <img src="/Q.png" className="absolute mix-blend-multiply translate-x-2 translate-y-2 w-48 h-48 object-contain" style={{ filter: 'opacity(0.8) drop-shadow(0 0 0 cyan)' }} />
                <img src="/Q.png" className="absolute mix-blend-multiply -translate-x-2 -translate-y-1 w-48 h-48 object-contain" style={{ filter: 'opacity(0.8) drop-shadow(0 0 0 magenta)' }} />
                <img src="/Q.png" className="absolute mix-blend-multiply -translate-x-1 translate-y-3 w-48 h-48 object-contain" style={{ filter: 'opacity(0.8) drop-shadow(0 0 0 yellow)' }} />
              </div>
            </motion.div>
          )}

          {style === '2D' && (
            <motion.div
              key="2d"
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.2, x: 50 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              
              <div className="w-56 h-56 bg-[#22C55E] rounded-[3rem] -rotate-6 flex items-center justify-center shadow-2xl overflow-hidden border-4 border-[#111111]">
                <img src="/Q.png" className="w-40 h-40 rotate-6 object-contain grayscale contrast-200 brightness-0" />
              </div>
            </motion.div>
          )}

          {style === '3D' && (
            <motion.div
              key="3d"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 1.2, rotateY: 90 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              
              <motion.div 
                className="relative flex items-center justify-center w-48 h-48" 
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateX: [-15, -5, -15], rotateY: [25, 35, 25] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                
                {[...Array(10)].map((_, i) => (
                  <img 
                    key={i} 
                    src="/Q.png"
                    className={`absolute w-full h-full object-contain ${i === 9 ? '' : 'brightness-75'}`}
                    style={{ 
                      transform: `translateZ(${i * 4}px)`,
                      filter: i !== 9 ? 'drop-shadow(0 0 1px #15803D)' : 'none'
                    }}
                  />
                ))}
                
                <img 
                  src="/Q.png"
                  className="absolute w-full h-full object-contain blur-xl brightness-0 opacity-30" 
                  style={{ transform: 'translateZ(-20px) translateY(20px)' }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

<div className="absolute bottom-8 flex items-center gap-2 bg-[#F8F8F6] p-1.5 rounded-full border border-black/10 shadow-sm z-20">
        {['Print', '2D', '3D'].map(s => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-colors relative ${style === s ? 'text-white' : 'text-gray-500 hover:text-[#111111]'}`}
          >
            {style === s && (
              <motion.div layoutId="hero-style-bubble" className="absolute inset-0 bg-[#111111] rounded-full -z-10" />
            )}
            {s}
          </button>
        ))}
      </div>

      <div className="absolute top-8 left-8 pointer-events-none">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">Versatility Showcase</span>
      </div>
    </div>
  );
};

export default HeroStyleToggle;
