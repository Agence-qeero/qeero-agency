import React from 'react';
import { Cursor } from '../../components/motion-primitives/cursor';

const GlobalCursor = () => {
  return (
    <>
      <Cursor
        attachToParent={false}
        springConfig={{
          bounce: 0,
          duration: 0.1,
        }}
      >
        <div className="w-4 h-4 bg-[#22C55E] rounded-full" />
      </Cursor>
      
      <Cursor
        attachToParent={false}
        springConfig={{
          bounce: 0,
          duration: 0.3, 
        }}
      >
        <div className="w-10 h-10 border border-[#22C55E]/50 rounded-full" />
      </Cursor>
    </>
  );
};

export default GlobalCursor;
