import React from 'react';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  if (!portfolioData.testimonials || portfolioData.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-white/10 rounded-full text-xs font-mono text-neutral-300 mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-white" />
              <span>06 / CLIENT VOICES & RESULTS</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
              WORDS FROM <br />
              <span className="text-neutral-400">CLIENTS & CREATORS.</span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-sm md:text-base text-neutral-400 max-w-md font-sans leading-relaxed">
            Direct feedback and campaign outcomes from collaborating creators, brand founders, and creative directors.
          </p>
        </ScrollReveal>
      </div>

      {/* Testimonials 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {portfolioData.testimonials.map((test, index) => {
          const authorName = test.author || test.clientName || 'Client';
          const authorRole = test.clientRole || test.role || '';
          const quoteText = test.quote || test.content || '';
          const initials = authorName
            .split(' ')
            .map((n) => n[0])
            .join('')
            .slice(0, 2);

          return (
            <ScrollReveal key={test.id || index} delay={0.08 * index}>
              <div className="h-full bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/10 hover:border-white/25 rounded-2xl p-7 sm:p-9 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group">
                <div className="space-y-5">
                  {/* Top Bar: Stars + Verified Badge + Metric */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-1 text-white">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-white text-white" />
                      ))}
                    </div>

                    {test.metric && (
                      <span className="px-3 py-1 bg-white/5 border border-white/15 rounded-full text-[11px] font-mono font-semibold text-neutral-200">
                        {test.metric}
                      </span>
                    )}
                  </div>

                  {/* Quote Content */}
                  <p className="text-sm sm:text-base text-neutral-300 font-sans font-light leading-relaxed">
                    "{quoteText}"
                  </p>
                </div>

                {/* Author Info & Verified Client Tag */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/15 flex items-center justify-center font-display font-bold text-xs text-white group-hover:scale-105 transition-transform">
                      {initials}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-white">
                        {authorName}
                      </h4>
                      <p className="text-xs font-mono text-neutral-400">
                        {authorRole} {test.company ? `● ${test.company}` : ''}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Verified Client</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
