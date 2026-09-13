import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ResultsSection: React.FC = () => {
  // If no real metrics exist, hide this section automatically as required
  if (!portfolioData.metrics || portfolioData.metrics.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16">
        <div>
          <ScrollReveal direction="down">
            <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase block mb-1.5 sm:mb-2 font-semibold">
              05 / RESULTS & RETENTION
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.12]">
              EDITING THAT DOES MORE.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-md font-sans">
            Measurable engagement growth and audience retention improvements across client video campaigns.
          </p>
        </ScrollReveal>
      </div>

      {/* Metrics Grid: 2-column on mobile, 4-column on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
        {portfolioData.metrics.map((metric, index) => (
          <ScrollReveal key={metric.label} delay={0.06 * index}>
            <div className="bg-neutral-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-8 space-y-1 sm:space-y-2 hover:border-white/30 transition-colors group">
              <span className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white group-hover:text-neutral-200 transition-colors block">
                {metric.value}
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-semibold text-neutral-300 tracking-wider uppercase block pt-0.5 sm:pt-1 truncate">
                {metric.label}
              </span>
              {metric.detail && (
                <span className="text-[10px] sm:text-[11px] font-sans text-neutral-500 block pt-0.5 sm:pt-1 line-clamp-2">
                  {metric.detail}
                </span>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
