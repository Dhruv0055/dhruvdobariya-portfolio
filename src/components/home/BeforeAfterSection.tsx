import React, { useState } from 'react';
import { Sparkles, Wand2, Volume2, Film } from 'lucide-react';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { ScrollReveal } from '../ui/ScrollReveal';

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cinematic' | 'streetwear' | 'commercial'>('cinematic');

  const comparisons = {
    cinematic: {
      raw: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop&sat=-85&con=-30&bri=-10',
      final: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
      title: 'Cinematic Mountain Expedition',
      tags: ['S-Log3 to Film Emulation', 'DaVinci Resolve Grade', 'Dynamic Contrast Lift'],
    },
    streetwear: {
      raw: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1400&auto=format&fit=crop&sat=-90&con=-20',
      final: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=1400&auto=format&fit=crop',
      title: 'Urban Streetwear Campaign',
      tags: ['High-Contrast Split Tone', 'Kinetic Motion VFX', 'Punchy Shadow Curve'],
    },
    commercial: {
      raw: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop&sat=-80',
      final: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop',
      title: 'Acoustic Product Commercial',
      tags: ['Commercial Studio Grade', 'Surface Detail Isolation', 'Warm Accent Balance'],
    },
  };

  const current = comparisons[activeTab];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <ScrollReveal direction="down">
            <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase block mb-2 font-semibold">
              03 / POST-PRODUCTION FINISH
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white">
              RAW FOOTAGE <br />
              <span className="text-neutral-400">TO MASTER CUT.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Tab Selection */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-2 bg-neutral-900 p-1.5 rounded-full border border-white/10">
            {(['cinematic', 'streetwear', 'commercial'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Interactive Draggable Slider */}
      <ScrollReveal delay={0.2}>
        <BeforeAfterSlider
          rawImage={current.raw}
          finalImage={current.final}
          rawLabel="RAW FLAT FOOTAGE (S-LOG)"
          finalLabel="FINAL DAVINCI COLOR & POLISH"
          description="Good editing isn't about adding noise. It's knowing exactly what to amplify."
        />
      </ScrollReveal>

      {/* Breakdown Pillars */}
      <ScrollReveal delay={0.3}>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          <div className="bg-neutral-900/60 border border-white/10 p-5 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white text-xs font-mono font-bold">
              <Film className="w-4 h-4" />
              <span>COLOR SCIENCE</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Precision LUTs, skin-tone isolation, gamut mapping, and custom film-look print emulations in DaVinci Resolve.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 p-5 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white text-xs font-mono font-bold">
              <Volume2 className="w-4 h-4" />
              <span>SPATIAL AUDIO DESIGN</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Multi-layer risers, impacts, foley, vocal de-essing, ambient soundscapes, and beat-locked audio dynamics.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 p-5 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white text-xs font-mono font-bold">
              <Wand2 className="w-4 h-4" />
              <span>AI MOTION & VFX</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Custom kinetic subtitles, 3D object tracking, screen mockups, and seamless optical speed ramps.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-white/10 p-5 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-white text-xs font-mono font-bold">
              <Sparkles className="w-4 h-4" />
              <span>RETENTION PACING</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Surgically cut dead air, fast hook construction, visual pattern interrupts, and rhythm that commands attention.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
