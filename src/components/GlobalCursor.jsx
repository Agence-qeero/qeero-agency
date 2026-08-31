import React, { useEffect, useState } from 'react';
import { Cursor } from '../../components/motion-primitives/cursor';

const GlobalCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      if (typeof window === 'undefined') return;
      const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      const isLargeScreen = window.innerWidth >= 1024;
      const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      
      setIsDesktop(hasFinePointer && isLargeScreen && !isTouch);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="hidden lg:block global-cursor-container pointer-events-none" data-cursor-wrapper>
      <Cursor
        className="hidden lg:block"
        attachToParent={false}
        springConfig={{
          bounce: 0,
          duration: 0.1,
        }}
      >
        <div className="w-4 h-4 bg-[#22C55E] rounded-full" />
      </Cursor>
      
      <Cursor
        className="hidden lg:block"
        attachToParent={false}
        springConfig={{
          bounce: 0,
          duration: 0.3, 
        }}
      >
        <div className="w-10 h-10 border border-[#22C55E]/50 rounded-full" />
      </Cursor>
    </div>
  );
};

export default GlobalCursor;
