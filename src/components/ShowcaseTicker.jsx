import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const ShowcaseTicker = () => {
  const { t } = useLanguage();

  const items = [
    { title: t.ticker.item1, img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
    { title: t.ticker.item2, img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop" },
    { title: t.ticker.item3, img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop" },
    { title: t.ticker.item4, img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
    
    { title: t.ticker.item1, img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
    { title: t.ticker.item2, img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section id="portfolio" className="py-10 bg-[#0a0a0a] overflow-hidden border-y border-[var(--color-q-border)] relative">
      
      <div className="flex gap-6 w-[200vw] sm:w-[150vw] md:w-[120vw]">
        <motion.div 
          className="flex gap-6 min-w-full"
          animate={{ x: [0, -1035] }}
          transition={{ 
            ease: "linear", 
            duration: 20, 
            repeat: Infinity 
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="relative w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden shrink-0 group">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl">{item.title}</span>
              </div>
            </div>
          ))}
          
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="relative w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden shrink-0 group">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-xl">{item.title}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseTicker;
