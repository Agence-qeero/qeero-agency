import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ContactModal = ({ onClose }) => {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSent(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

<motion.div
          className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden z-10"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          
          <div className="h-2 w-full bg-[#22C55E]" />

          <div className="p-8">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-gray-600" />
            </button>

            {sent ? (
              <div className="text-center py-8">
                <CheckCircle size={56} className="text-[#22C55E] mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold text-[#111111] mb-2">{t.contactModal.sentTitle}</h3>
                <p className="text-gray-500">{t.contactModal.sentDesc}</p>
                <button
                  onClick={onClose}
                  className="mt-8 btn-qeero px-8 py-3 text-sm"
                >
                  {t.contactModal.closeBtn}
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-extrabold text-[#111111] mb-1">{t.contactModal.title}</h3>
                  <p className="text-gray-500 text-sm">{t.contactModal.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.contactModal.nameLabel}</label>
                      <input
                        required
                        type="text"
                        placeholder={t.contactModal.namePlaceholder}
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 bg-[#F8F8F6] text-sm font-medium text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.contactModal.emailLabel}</label>
                      <input
                        required
                        type="email"
                        placeholder={t.contactModal.emailPlaceholder}
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-[#F8F8F6] text-sm font-medium text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.contactModal.serviceLabel}</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-[#F8F8F6] text-sm font-medium text-gray-600 focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all"
                    >
                      <option value="">{t.contactModal.serviceSelect}</option>
                      {t.contactModal.services.map((svc, i) => (
                        <option key={i} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">{t.contactModal.projectLabel}</label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t.contactModal.projectPlaceholder}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-black/10 bg-[#F8F8F6] text-sm font-medium text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-[#22C55E]/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-qeero py-3.5 text-sm flex items-center justify-center gap-2 rounded-2xl"
                  >
                    <Send size={16} />
                    {t.contactModal.submitBtn}
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;
