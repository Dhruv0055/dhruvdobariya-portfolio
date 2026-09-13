import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16">
        <div>
          <ScrollReveal direction="down">
            <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase block mb-1.5 sm:mb-2 font-semibold">
              04 / POST-PRODUCTION WORKFLOW
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.12]">
              HOW I WORK.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-md font-sans">
            A structured, frictionless post-production workflow engineered for fast turnarounds, crystal-clear communication, and spotless quality.
          </p>
        </ScrollReveal>
      </div>

      {/* Process 4-Step Cards: 2-column on mobile (2x2), 4-column on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
        {portfolioData.process.map((step, index) => (
          <ScrollReveal key={step.number || step.step || index} delay={0.06 * index}>
            <div className="h-full bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/10 hover:border-white/30 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 flex flex-col justify-between space-y-3 sm:space-y-6 transition-all duration-300 hover:shadow-xl group">
              <div className="space-y-2 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-lg sm:text-2xl font-bold text-white">
                    {step.number || step.step || `0${index + 1}`}
                  </span>
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                </div>

                <h3 className="text-xs sm:text-lg font-display font-bold text-white group-hover:text-neutral-200 transition-colors uppercase leading-snug">
                  {step.title}
                </h3>

                <p className="text-[11px] sm:text-sm text-neutral-400 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {step.description}
                </p>
              </div>

              {/* Step Key Checklist */}
              {step.details && step.details.length > 0 && (
                <div className="pt-2 sm:pt-4 border-t border-white/5 space-y-1 sm:space-y-2">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-1.5 text-[9px] sm:text-[11px] font-mono text-neutral-300">
                      <CheckCircle2 className="w-3 h-3 text-white shrink-0 mt-0.5" />
                      <span className="truncate">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
