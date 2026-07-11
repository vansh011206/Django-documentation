import React, { useState, useEffect } from 'react';

export default function Loader({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Smooth, slightly slower progress increment (approx 2-3 seconds total loading time)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smaller random incremental jumps (average 5% progress per tick)
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 120); // 120ms interval for natural loading pace

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Fade out transition trigger
      const timeout = setTimeout(() => {
        setFade(true);
        const finishTimeout = setTimeout(() => {
          onFinished();
        }, 500); // matches transition opacity duration
        return () => clearTimeout(finishTimeout);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinished]);

  return (
    <div className={`fixed inset-0 bg-[#0b0f19] z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Branding and Loader */}
      <div className="relative flex flex-col items-center">
        
        {/* Custom Circular Spinners */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Neon outer ping glow */}
          <div className="absolute inset-0 rounded-full bg-accent/5 border border-accent/20 animate-ping opacity-75"></div>
          {/* Glowing spin progress border */}
          <div className="absolute inset-2 rounded-full border-2 border-slate-800 border-t-accent border-r-accent/30 animate-spin"></div>
          
          {/* Inner circle brand emblem */}
          <div className="absolute w-16 h-16 rounded-full bg-[#111827] border border-slate-800 flex items-center justify-center shadow-2xl">
            {/* Serif 'dj' brand logo representation */}
            <span className="font-mono text-2xl font-black text-accent tracking-tighter animate-pulse select-none">
              dj
            </span>
          </div>
        </div>

        {/* Text Indicators */}
        <div className="mt-6 text-center">
          <h2 className="font-mono text-xl font-bold text-textMain tracking-wider flex items-center justify-center gap-1">
            <span className="text-accent font-black">django</span>
            <span className="text-textMuted text-sm font-light">.notes</span>
          </h2>
          <p className="text-xs text-textMuted font-sans mt-2 tracking-wide animate-pulse">
            ruk jaa thodi der...
          </p>
        </div>
      </div>

      {/* Horizontal Progress Bar */}
      <div className="w-56 bg-slate-900/60 border border-slate-800/80 rounded-full h-1.5 mt-8 overflow-hidden shadow-inner relative">
        <div 
          className="bg-accent h-full rounded-full transition-all duration-150 shadow-[0_0_8px_rgba(0,245,212,0.6)]" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {/* Counter Label */}
      <span className="text-[10px] font-mono text-accent mt-2 font-bold tracking-wider">
        {progress}%
      </span>
    </div>
  );
}
