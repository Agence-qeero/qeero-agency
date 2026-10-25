import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const ALL_ITEMS = [
  { title: 'Branding Produit — Canette', img: '/asset_1.jpeg' },
  { title: 'Affichage Digital — Miami Burger', img: '/asset_2.jpeg' },
  { title: 'Poster 3D — Burger', img: '/asset_3.jpeg' },
  { title: 'Affiche Karting du Périgord', img: '/karting-du-perigord.jpeg' },
  { title: 'Motion & Digital', img: '/asset_4.jpeg' },
  { title: 'Brochure Print', img: '/asset_5.jpeg' },
  { title: 'Design Vectoriel', img: '/asset_6.jpeg' },
  { title: 'Papeterie Officielle', img: '/asset_7.jpeg' },
  { title: 'Moitié de Pizza — MD Pizza', img: '/asset_8.jpeg' },
  { title: 'Display Ads', img: '/asset_9.jpeg' },
  { title: 'Social Media Galet', img: '/asset_10.jpeg' },
  { title: 'Branding Produit — JBL', img: '/jbl.jpeg' },
  { title: 'Bloon Paris', img: '/asset_11.jpeg' },
  { title: 'Négotaux', img: '/asset_12.jpeg' },
  { title: 'Tropical Padel', img: '/asset_13.jpeg' },
  { title: 'Immobilier La Maison', img: '/asset_14.jpeg' },
  { title: 'Rendu 3D Tropical Padel', img: '/asset_15.jpeg' },
  { title: 'Luxe Dordogne', img: '/asset_16.jpeg' },
];

function shuffleArray(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const ShowcaseTicker = () => {
  const items = useMemo(() => shuffleArray(ALL_ITEMS), []);

  return (
    <section id="portfolio" className="py-10 bg-[#0a0a0a] overflow-hidden border-y border-[var(--color-q-border)] relative">
      <div className="flex gap-6 overflow-hidden">
        <motion.div 
          className="flex gap-6 shrink-0"
          animate={{ x: [0, -5616] }}
          transition={{ 
            ease: "linear", 
            duration: 60, 
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