import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Magnetic } from '../../components/motion-primitives/magnetic';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F6] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center z-10"
      >
        <h1 className="text-[8rem] md:text-[12rem] font-black text-[#111111] leading-none tracking-tighter mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-[#111111] tracking-tight mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-12 max-w-md mx-auto">
          Il semble que la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <Magnetic intensity={0.2} springOptions={{ bounce: 0.1 }}>
          <Link to="/" className="btn-qeero px-9 py-4 text-base inline-block">
            Retour à l'accueil
          </Link>
        </Magnetic>
      </motion.div>
    </div>
  );
};

export default NotFound;
