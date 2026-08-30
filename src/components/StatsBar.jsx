import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Zap, Star, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AnimatedPalette = () => (
  <motion.div
    animate={{ rotate: [-10, 10, -10] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <Palette size={36} className="text-[#22C55E]" />
  </motion.div>
);

const AnimatedZap = () => (
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
  >
    <Zap size={36} className="text-[#22C55E]" />
  </motion.div>
);

const AnimatedStar = () => (
  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
  >
    <Star size={36} className="text-[#22C55E]" />
  </motion.div>
);

const AnimatedTrophy = () => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    <Trophy size={36} className="text-[#22C55E]" />
  </motion.div>
);

const getStats = (t) => [
  { value: 40,  suffix: '+', label: t.statsBar.projects, icon: <AnimatedPalette /> },
  { value: 48,  suffix: 'h', label: t.statsBar.delivery,    icon: <AnimatedZap /> },
  { value: 100, suffix: '%', label: t.statsBar.satisfaction,   icon: <AnimatedStar /> },
  { value: 3,   suffix: '+', label: t.statsBar.experience, icon: <AnimatedTrophy /> },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const StatsBar = () => {
  const { t } = useLanguage();
  const stats = getStats(t);
  
  return (
  <section className="py-16 md:py-20 bg-[#111111]">
    <div className="px-4 sm:px-6 lg:px-8 xl:px-[5vw]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center md:px-8"
          >
            <div className="mb-4">{s.icon}</div>
            <div className="text-4xl font-black text-[#22C55E] leading-none mb-2">
              <Counter target={s.value} suffix={s.suffix} />
            </div>
            <p className="text-sm font-semibold text-white/50">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default StatsBar;
