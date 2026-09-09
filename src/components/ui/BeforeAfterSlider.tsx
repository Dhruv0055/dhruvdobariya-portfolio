import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  rawImage: string;
  finalImage: string;
  rawLabel?: string;
  finalLabel?: string;
  description?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  rawImage,
  finalImage,
  rawLabel = 'RAW S-LOG FOOTAGE',
  finalLabel = 'FINAL COLOR GRADE & EDIT',
  description = "Good editing isn't about adding more. It's about knowing what to keep.",
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Visual Draggable Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-[340px] sm:h-[450px] md:h-[550px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0C] cursor-ew-resize select-none touch-none shadow-2xl"
      >
        {/* Final Edit (Right / Base layer) */}
        <img
          src={finalImage}
          alt="Final color graded edit"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Final Edit Label */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-[#E5A93C]/40 text-[#E5A93C] text-[11px] font-mono tracking-wider">
          <Sparkles className="w-3 h-3" />
          <span>{finalLabel}</span>
        </div>

        {/* Raw Footage (Left / Clipped overlay layer) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={rawImage}
            alt="Raw footage before grading"
            className="absolute inset-0 w-full h-full object-cover max-w-none filter contrast-90 brightness-95"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          {/* Raw Footage Label */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/20 text-[#A1A1AA] text-[11px] font-mono tracking-wider">
            <Sliders className="w-3 h-3" />
            <span>{rawLabel}</span>
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-30 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Center Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#E5A93C] text-black flex items-center justify-center shadow-[0_0_20px_rgba(229,169,60,0.8)] border-2 border-black">
            <div className="flex items-center gap-0.5">
              <span className="text-[10px] font-bold">‹</span>
              <span className="text-[10px] font-bold">›</span>
            </div>
          </div>
        </div>

        {/* Mobile drag hint overlay */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
          <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-mono text-[#A1A1AA] border border-white/10">
            DRAG TO REVEAL TRANSFORMATION
          </div>
        </div>
      </div>

      {/* Editorial Quote / Description */}
      {description && (
        <p className="text-center text-sm md:text-base text-[#A1A1AA] italic font-sans max-w-xl mx-auto pt-2">
          "{description}"
        </p>
      )}
    </div>
  );
};
