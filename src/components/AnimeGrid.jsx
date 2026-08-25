import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimeGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const wrapper = containerRef.current;
    if (!wrapper) return;

    let columns = 0;
    let rows = 0;
    let toggled = false;

    const createGrid = () => {
      wrapper.innerHTML = '';
      
      const size = 60; 
      columns = Math.floor(wrapper.clientWidth / size) + 1;
      rows = Math.floor(wrapper.clientHeight / size) + 1;
      
      wrapper.style.setProperty('--columns', columns);
      wrapper.style.setProperty('--rows', rows);
      
      const createTile = index => {
        const tile = document.createElement('div');
        tile.className = 'w-full h-full flex items-center justify-center cursor-crosshair group';

const dot = document.createElement('div');
        dot.className = 'anime-dot w-1.5 h-1.5 bg-gray-200 rounded-full group-hover:scale-150 transition-transform duration-300';
        tile.appendChild(dot);
        
        tile.onclick = e => handleOnClick(index);
        return tile;
      };

      const createTiles = quantity => {
        Array.from(Array(quantity)).map((_, index) => {
          wrapper.appendChild(createTile(index));
        });
      };

      createTiles(columns * rows);
    };

    const handleOnClick = index => {
      toggled = !toggled;
      
      anime({
        targets: '.anime-dot',
        scale: [
          { value: 0, easing: 'easeOutSine', duration: 250 },
          { value: 1, easing: 'easeInOutQuad', duration: 500 }
        ],
        backgroundColor: toggled ? '#22C55E' : '#E5E7EB',
        delay: anime.stagger(40, {
          grid: [columns, rows],
          from: index
        })
      });
    };

    createGrid();
    window.addEventListener('resize', createGrid);
    return () => window.removeEventListener('resize', createGrid);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(var(--columns), 1fr)`,
        gridTemplateRows: `repeat(var(--rows), 1fr)`,
      }}
    />
  );
};

export default AnimeGrid;
