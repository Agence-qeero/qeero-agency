import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F8F6] min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight mb-6">Politique de confidentialité</h1>
          <p className="text-lg text-gray-500 mb-12 leading-relaxed">
            La présente politique de confidentialité a pour objectif d’informer les utilisateurs du site sur la collecte et l’utilisation de leurs données personnelles.
          </p>

          <div className="space-y-10 text-[#111111]">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Données collectées</h2>
              <p className="mb-3 text-gray-600">Nous pouvons collecter les données suivantes :</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Toute information transmise via les formulaires</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Finalité de la collecte</h2>
              <p className="mb-3 text-gray-600">Les données collectées sont utilisées pour :</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Répondre aux demandes via le formulaire de contact</li>
                <li>Gérer la relation client</li>
                <li>Envoyer des informations ou offres (si consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Base légale</h2>
              <p className="mb-3 text-gray-600">La collecte des données repose sur :</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Le consentement de l’utilisateur</li>
                <li>L’intérêt légitime de l’entreprise</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Durée de conservation</h2>
              <p className="text-gray-600 leading-relaxed">
                Les données sont conservées pendant une durée maximale de <strong>6 mois à compter du dernier contact</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Partage des données</h2>
              <p className="text-gray-600 mb-3 leading-relaxed">Les données ne sont pas vendues ni cédées à des tiers.</p>
              <p className="text-gray-600 leading-relaxed">
                Elles peuvent être partagées avec des prestataires techniques (hébergement, outils marketing) uniquement dans le cadre du fonctionnement du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Sécurité</h2>
              <p className="text-gray-600 leading-relaxed">
                Nous mettons en œuvre toutes les mesures nécessaires pour protéger les données personnelles contre toute perte, accès non autorisé ou divulgation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Vos droits</h2>
              <p className="mb-3 text-gray-600">Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                <li>Droit d’accès</li>
                <li>Droit de rectification</li>
                <li>Droit de suppression</li>
                <li>Droit d’opposition</li>
              </ul>
              <p className="text-gray-600">
                Pour exercer ces droits, vous pouvez nous contacter à : <br />
                <a href="mailto:agence@qeero.fr" className="text-[#22C55E] font-semibold hover:underline mt-2 inline-block">📧 agence@qeero.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cookies</h2>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Le site utilise des cookies pour améliorer l’expérience utilisateur.
              </p>
              <p className="text-gray-600 mb-3 leading-relaxed">
                Vous pouvez accepter ou refuser les cookies via le bandeau prévu à cet effet.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pour en savoir plus, consultez notre <Link to="/cookie-policy" className="text-[#22C55E] font-semibold hover:underline">politique de cookies</Link>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
