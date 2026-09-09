import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ResultsSection: React.FC = () => {
  // If no real metrics exist, hide this section automatically as required
  if (!portfolioData.metrics || portfolioData.metrics.length === 0) {
    return null;
  }

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <ScrollReveal direction="down">
            <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase block mb-2 font-semibold">
              07 / RESULTS & RETENTION
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white">
              EDITING THAT DOES MORE.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-sm md:text-base text-neutral-400 max-w-md font-sans">
            Measurable engagement growth and audience retention improvements across client video campaigns.
          </p>
        </ScrollReveal>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.metrics.map((metric, index) => (
          <ScrollReveal key={metric.label} delay={0.1 * index}>
            <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-2 hover:border-white/30 transition-colors group">
              <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white group-hover:text-neutral-200 transition-colors block">
                {metric.value}
              </span>
              <span className="font-mono text-xs font-semibold text-neutral-300 tracking-wider uppercase block pt-1">
                {metric.label}
              </span>
              {metric.detail && (
                <span className="text-[11px] font-sans text-neutral-500 block pt-1">
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
