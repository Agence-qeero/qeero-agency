import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { TextEffect } from '../../components/motion-primitives/text-effect';
import { ClipboardList, PenTool, Rocket } from 'lucide-react';

const AnimatedClipboard = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
    transition={{ duration: 0.5 }}
  >
    <ClipboardList size={24} className="text-[#22C55E]" />
  </motion.div>
);

const AnimatedPen = () => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: [0, 45, 0] }}
    transition={{ duration: 0.5 }}
  >
    <PenTool size={24} className="text-[#22C55E]" />
  </motion.div>
);

const AnimatedRocket = () => (
  <motion.div
    whileHover={{ scale: 1.1, y: [-2, -8, -2], x: [2, 8, 2] }}
    transition={{ duration: 0.6 }}
  >
    <Rocket size={24} className="text-[#22C55E]" />
  </motion.div>
);

const stepsIcons = [
  <AnimatedClipboard />,
  <AnimatedPen />,
  <AnimatedRocket />,
];

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    { ...t.howItWorks.step1, icon: stepsIcons[0] },
    { ...t.howItWorks.step2, icon: stepsIcons[1] },
    { ...t.howItWorks.step3, icon: stepsIcons[2] },
  ];

  return (
    <section id="how-it-works" className="py-14 md:py-20 bg-[#F8F8F6] border-t border-black/5">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-[5vw]">

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="qeero-badge mb-5 block w-fit mx-auto">{t.howItWorks.badge}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-6">
            <TextEffect as="span" per="word" preset="blur">
              {t.howItWorks.title}
            </TextEffect>
          </h2>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.4 } }
              }}
              whileHover={{ y: -8 }}
              className="flat-card p-6 rounded-3xl group bg-white shadow-sm hover:shadow-xl border border-black/5 transition-all duration-300 relative overflow-hidden"
            >
              
              <div className="absolute top-0 left-0 w-full h-1 bg-[#22C55E] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

<div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-black text-[#22C55E]/15 leading-none group-hover:text-[#22C55E]/30 transition-colors duration-300">{step.num}</span>
                <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-2">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
