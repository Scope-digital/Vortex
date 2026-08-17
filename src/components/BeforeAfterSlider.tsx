import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  subtitle?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before (Old Frames)',
  afterLabel = 'After (Vortex Transformation)',
  title,
  subtitle,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-md">
      {/* Title */}
      <div className="mb-4">
        <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          {title}
        </h4>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{subtitle}</p>}
      </div>

      {/* Interactive Slider Box */}
      <div 
        ref={containerRef}
        className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden cursor-ew-resize select-none bg-slate-900 shadow-inner"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* AFTER Image (Background) */}
        <img 
          src={afterImage} 
          alt="After installation" 
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* BEFORE Image (Clipped Foreground) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before installation" 
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            style={{ 
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              maxWidth: 'none'
            }}
          />
        </div>

        {/* Slider Divider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white rounded-full shadow-lg border-2 border-blue-600 flex items-center justify-center text-blue-600">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 z-10 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm pointer-events-none">
          {beforeLabel}
        </div>
        <div className="absolute top-3 right-3 z-10 bg-blue-700/90 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm pointer-events-none">
          {afterLabel}
        </div>

        {/* Hint footer overlay */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xs text-white/90 text-[11px] px-3 py-0.5 rounded-full pointer-events-none flex items-center gap-1">
          <span>Drag slider left / right to compare</span>
        </div>
      </div>
    </div>
  );
};
