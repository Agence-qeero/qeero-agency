import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
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
          <h1 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight mb-6">Politique de cookies</h1>
          
          <div className="space-y-10 text-[#111111]">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mb-3 text-gray-600 leading-relaxed">
                Lors de la consultation du site <strong>Qeero</strong>, des cookies peuvent être déposés sur votre terminal (ordinateur, mobile, tablette).
              </p>
              <p className="text-gray-600 leading-relaxed">
                La présente politique a pour objectif de vous expliquer ce que sont les cookies, comment ils sont utilisés et comment vous pouvez les gérer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Qu’est-ce qu’un cookie ?</h2>
              <p className="mb-3 text-gray-600 leading-relaxed">
                Un cookie est un petit fichier texte enregistré sur votre appareil lors de la visite d’un site internet. Il permet notamment de :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>améliorer la navigation</li>
                <li>mémoriser certaines préférences</li>
                <li>mesurer l’audience du site</li>
                <li>proposer des contenus adaptés</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Types de cookies utilisés</h2>
              <p className="mb-4 text-gray-600">Le site peut utiliser différents types de cookies :</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">a) Cookies strictement nécessaires</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ces cookies sont essentiels au bon fonctionnement du site. Ils ne peuvent pas être désactivés.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">b) Cookies de performance et de mesure d’audience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ces cookies permettent d’analyser la fréquentation du site (pages visitées, temps passé, etc.) afin d’améliorer son fonctionnement.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">c) Cookies fonctionnels</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ces cookies permettent de mémoriser vos préférences (langue, paramètres, etc.) pour améliorer votre expérience utilisateur.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">d) Cookies marketing / publicitaires (si applicable)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ces cookies peuvent être utilisés pour proposer des contenus ou publicités personnalisés en fonction de votre navigation.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Consentement</h2>
              <p className="mb-3 text-gray-600 leading-relaxed">
                Lors de votre première visite sur le site, un bandeau vous informe de l’utilisation des cookies. Vous avez la possibilité de :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-3">
                <li>accepter tous les cookies</li>
                <li>refuser les cookies non essentiels</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Votre consentement peut être modifié à tout moment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Gestion des cookies</h2>
              <p className="mb-3 text-gray-600 leading-relaxed">
                Vous pouvez à tout moment configurer votre navigateur pour :
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                <li>accepter ou refuser les cookies</li>
                <li>supprimer les cookies déjà enregistrés</li>
              </ul>
              <p className="text-gray-600 mb-2">Voici les liens d’aide selon votre navigateur :</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">Chrome</a></li>
                <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">Safari</a></li>
                <li><a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">Firefox</a></li>
                <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#22C55E] hover:underline">Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Durée de conservation</h2>
              <p className="mb-3 text-gray-600 leading-relaxed">
                Les cookies sont conservés pour une durée maximale de <strong>13 mois</strong> à compter de leur dépôt sur votre terminal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Les données collectées via les cookies sont conservées pour une durée maximale de <strong>25 mois</strong> (si applicable).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Vos droits</h2>
              <p className="mb-3 text-gray-600">Conformément à la réglementation en vigueur (RGPD), vous disposez de droits sur vos données personnelles :</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
                <li>droit d’accès</li>
                <li>droit de rectification</li>
                <li>droit de suppression</li>
                <li>droit d’opposition</li>
              </ul>
              <p className="text-gray-600">
                Pour exercer ces droits, vous pouvez nous contacter à : <br />
                <a href="mailto:agence@qeero.fr" className="text-[#22C55E] font-semibold hover:underline mt-2 inline-block">📧 agence@qeero.fr</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
              <p className="text-gray-600">
                Pour toute question relative à cette politique de cookies, vous pouvez nous contacter à : <br />
                <a href="mailto:agence@qeero.fr" className="text-[#22C55E] font-semibold hover:underline mt-2 inline-block">📧 agence@qeero.fr</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
