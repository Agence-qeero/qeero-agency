import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const OrderProcess = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const op = t.orderProcess || {};

  const emailAddress = "agence@qeero.fr";
  const emailSubject = encodeURIComponent(language === 'en' ? "Project Inquiry - Qeero" : "Demande de projet - Qeero");
  const emailBody = encodeURIComponent(
    language === 'en'
      ? "Hello Qeero Team,\n\nI would like to start a project with you.\n\nHere are the details of my needs:\n- [Describe your project here]\n- [Links to visual references if applicable]\n\nThank you!"
      : "Bonjour l'équipe Qeero,\n\nJe souhaite démarrer un projet avec vous.\n\nVoici les détails de mes besoins :\n- [Décrivez votre projet ici]\n- [Lien vers vos références si nécessaire]\n\nMerci !"
  );
  const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="min-h-screen pt-32 pb-20 bg-[#F8F8F6] flex items-center justify-center border-t border-black/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-12 left-4 md:left-0">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#22C55E] transition-colors font-semibold">
              <ArrowLeft size={18} /> {op.back || (language === 'en' ? 'Back' : 'Retour')}
            </Link>
          </div>
          <span className="qeero-badge mb-6 block w-fit mx-auto">{op.badge || '// Processus de commande'}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-6">
            {op.title || 'Votre projet,'} <span className="text-gradient-qeero">{op.titleHighlight || 'notre priorité.'}</span>
          </h1>
          <p className="text-lg text-gray-500 mb-12 leading-relaxed">
            {op.desc || 'Nous suivons ce processus pour rendre la commande aussi simple et pratique que possible pour nos clients. Une fois que vous avez décidé de travailler avec nous, tout se passe directement par e-mail avec notre équipe.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-black/5 mb-12 text-left"
        >
          <h2 className="text-2xl font-bold text-[#111111] mb-8 border-b border-gray-100 pb-4">
            {op.stepsTitle || 'Comment ça se passe ?'}
          </h2>
          <ul className="space-y-8">
            <li className="flex gap-4 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#22C55E] text-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 transition-transform">1</div>
              <div>
                <h3 className="font-bold text-[#111111] text-lg mb-1 flex items-center gap-2">
                  {op.step1Title || 'Contactez-nous'} <Mail size={18} className="text-gray-400" />
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {op.step1Desc || 'Cliquez sur le bouton ci-dessous pour nous envoyer un e-mail pré-rempli. Partagez simplement les grandes lignes de ce dont vous avez besoin.'}
                </p>
              </div>
            </li>
            <li className="flex gap-4 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#22C55E] text-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 transition-transform">2</div>
              <div>
                <h3 className="font-bold text-[#111111] text-lg mb-1 flex items-center gap-2">
                  {op.step2Title || 'Prise en charge rapide'} <ArrowRight size={18} className="text-gray-400" />
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {op.step2Desc || 'Notre équipe prend en charge votre demande immédiatement. Nous vous confirmerons les délais et poserons nos questions éventuelles par retour de mail.'}
                </p>
              </div>
            </li>
            <li className="flex gap-4 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#22C55E] text-white flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 transition-transform">3</div>
              <div>
                <h3 className="font-bold text-[#111111] text-lg mb-1 flex items-center gap-2">
                  {op.step3Title || 'Conception & Livrables'} <CheckCircle2 size={18} className="text-gray-400" />
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {op.step3Desc || 'Vous recevrez vos premiers designs directement par e-mail sous 48h. Les retours sont gérés en répondant simplement au fil de discussion !'}
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href={mailtoLink}
            className="btn-qeero px-10 py-5 text-lg inline-flex items-center justify-center gap-3 w-full sm:w-auto shadow-xl shadow-green-500/20 hover:scale-105 transition-transform"
          >
            <Mail size={22} />
            {op.contactUs || 'Contactez-nous'}
          </a>
          <p className="text-sm text-gray-400 mt-6 font-medium">
            {op.emailNote || 'Ouvre votre application de messagerie par défaut (mailto)'}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OrderProcess;
