import React from 'react';
import { motion } from 'framer-motion';

const TextHover = ({ children }) => {
  if (typeof children !== 'string') {
    return <span>{children}</span>;
  }
  const letters = Array.from(children);

  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      className="relative block overflow-hidden whitespace-nowrap"
      style={{ lineHeight: 1 }}
    >
      <div>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hover: { y: '-100%' },
            }}
            transition={{
              duration: 0.3,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.02 * i,
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: '100%' },
              hover: { y: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.02 * i,
            }}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};

export default TextHover;
