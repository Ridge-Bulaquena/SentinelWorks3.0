
import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'top' }) => {
  const [show, setShow] = useState(false);

  const posClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div className={`absolute z-50 px-3 py-2 text-xs font-medium text-white bg-slate-800 border border-slate-700 rounded-md shadow-xl whitespace-nowrap ${posClasses[position]}`}>
          {text}
          <div className="absolute w-2 h-2 bg-slate-800 border-b border-r border-slate-700 rotate-45" 
            style={{ 
              bottom: position === 'top' ? '-5px' : 'auto', 
              top: position === 'bottom' ? '-5px' : 'auto',
              left: (position === 'top' || position === 'bottom') ? 'calc(50% - 4px)' : 'auto',
              right: position === 'left' ? '-5px' : 'auto',
              marginLeft: position === 'right' ? '-5px' : 'auto'
            }} 
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
