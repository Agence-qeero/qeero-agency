import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FounderVideo = () => {
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setStarted(true);
    }
    setPlaying(p => !p);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(m => !m);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-10">
          <span className="qeero-badge mb-5 block w-fit mx-auto">
            {t.founderVideo?.badge || '// En direct'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#111111]">
            {t.founderVideo?.title || 'Rencontrez votre'}&nbsp;
            <span className="text-gradient-qeero">
              {t.founderVideo?.titleHighlight || 'interlocuteur.'}
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
            {t.founderVideo?.subtitle || 'Avant de travailler avec quelqu\'un, il est naturel de vouloir savoir à qui vous avez affaire. Voici qui je suis.'}
          </p>
        </div>

<motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden bg-[#111111] shadow-2xl cursor-pointer group"
          style={{ aspectRatio: '16/9' }}
          onClick={toggle}
        >
          <video
            ref={videoRef}
            src="/videos/presentation.mp4"
            className="w-full h-full object-cover"
            playsInline
            preload="metadata"
            onPlay={() => { setPlaying(true); setStarted(true); }}
            onPause={() => setPlaying(false)}
            onEnded={() => { setPlaying(false); setStarted(false); }}
          />

<div
            className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-all duration-300 ${
              playing ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
            }`}
          >
            
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
              aria-label={playing ? 'Pause' : 'Play'}
              className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl"
            >
              {playing
                ? <Pause size={32} className="text-[#111111]" />
                : <Play  size={32} className="text-[#111111] translate-x-0.5" />
              }
            </motion.button>

{!started && (
              <p className="mt-5 text-white/80 text-sm font-medium tracking-wide">
                {t.founderVideo?.cta || 'Regarder la présentation'}
              </p>
            )}
          </div>

<button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors z-10"
          >
            {muted
              ? <VolumeX size={16} strokeWidth={1.75} />
              : <Volume2 size={16} strokeWidth={1.75} />
            }
          </button>
        </motion.div>

<div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-500 font-medium">
            {t.founderVideo?.caption || 'Fondateur & Directeur Créatif — Qeero, Agence de Communication'}
          </p>
        </div>

      </div>
    </section>
  );
};

export default FounderVideo;
