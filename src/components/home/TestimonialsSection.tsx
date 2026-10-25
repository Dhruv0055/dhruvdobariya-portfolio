import React from 'react';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  if (!portfolioData.testimonials || portfolioData.testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-[#0D0D0D]/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16">
        <div>
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-[#0D0D0D] text-white rounded-full text-[11px] sm:text-xs font-mono mb-2 sm:mb-3">
              <MessageSquare className="w-3.5 h-3.5 text-[#E63E26]" />
              <span>06 / CLIENT VOICES & RESULTS</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-[#0D0D0D] leading-tight">
              WORDS FROM <br />
              <span className="text-[#E63E26]">CLIENTS & CREATORS.</span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-xs sm:text-sm md:text-base text-[#0D0D0D]/70 max-w-md font-sans leading-relaxed">
            Direct feedback and campaign outcomes from collaborating creators, brand founders, and creative directors.
          </p>
        </ScrollReveal>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
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
            <ScrollReveal key={test.id || index} delay={0.06 * index}>
              <div className="h-full bg-white hover:bg-white border border-[#0D0D0D]/10 hover:border-[#E63E26] rounded-xl sm:rounded-2xl p-4 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                <div className="space-y-3 sm:space-y-5">
                  {/* Top Bar: Stars + Verified Badge + Metric */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-0.5 sm:gap-1 text-[#E63E26]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#E63E26] text-[#E63E26]" />
                      ))}
                    </div>

                    {test.metric && (
                      <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-[#0D0D0D]/5 border border-[#0D0D0D]/10 rounded-full text-[10px] sm:text-[11px] font-mono font-bold text-[#0D0D0D]">
                        {test.metric}
                      </span>
                    )}
                  </div>

                  {/* Quote Content */}
                  <p className="text-xs sm:text-base text-[#0D0D0D]/80 font-sans leading-relaxed">
                    "{quoteText}"
                  </p>
                </div>

                {/* Author Info & Verified Client Tag */}
                <div className="pt-3 sm:pt-5 border-t border-[#0D0D0D]/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0D0D0D] text-white flex items-center justify-center font-display font-bold text-[11px] sm:text-xs group-hover:bg-[#E63E26] transition-colors shrink-0">
                      {initials}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-base text-[#0D0D0D]">
                        {authorName}
                      </h4>
                      <p className="text-[10px] sm:text-xs font-mono text-[#0D0D0D]/60">
                        {authorRole} {test.company ? `● ${test.company}` : ''}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[#0D0D0D]/60">
                    <CheckCircle className="w-3.5 h-3.5 text-[#E63E26]" />
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
