import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const FloatingShapes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

container.innerHTML = '';

    const colors = ['rgba(34, 197, 94, 0.15)', 'rgba(17, 17, 17, 0.05)', 'rgba(34, 197, 94, 0.08)'];
    const shapes = ['50%', '10px', '25%']; 

for (let i = 0; i < 15; i++) {
      const el = document.createElement('div');
      
      const size = anime.random(60, 200);
      
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.position = 'absolute';
      el.style.backgroundColor = colors[anime.random(0, colors.length - 1)];
      el.style.borderRadius = shapes[anime.random(0, shapes.length - 1)];

el.style.left = `${anime.random(-10, 100)}%`;
      el.style.top = `${anime.random(-10, 100)}%`;
      
      container.appendChild(el);

anime({
        targets: el,
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        rotate: () => anime.random(-180, 180),
        scale: () => anime.random(0.8, 1.4),
        easing: 'easeInOutQuad',
        duration: () => anime.random(4000, 8000),
        direction: 'alternate',
        loop: true
      });
    }

  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    />
  );
};

export default FloatingShapes;
