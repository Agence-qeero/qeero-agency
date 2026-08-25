import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import ContactModal from './ContactModal';
import { useLanguage } from '../contexts/LanguageContext';

const FloatingCTA = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { t } = useLanguage();

  if (dismissed) return null;

  return (
    <>
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      >
        
        <button
          onClick={() => setDismissed(true)}
          className="w-8 h-8 rounded-full bg-white border border-black/10 shadow flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={14} />
        </button>

<button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-3 bg-[#22C55E] text-white px-6 py-3.5 rounded-full shadow-lg hover:bg-[#16A34A] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl font-bold text-sm"
          style={{ boxShadow: '0 8px 24px rgba(34,197,94,0.4)' }}
        >
          <MessageSquare size={18} />
          {t.floatingCTA?.text || 'Démarrer un projet'}
        </button>
      </motion.div>

{modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default FloatingCTA;
