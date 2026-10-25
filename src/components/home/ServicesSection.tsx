import React from 'react';
import { ArrowRight, Sparkles, Video, Flame, Play, Palette, MessageSquare, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ServicesSection: React.FC = () => {
  const serviceIcons = [
    {
      icon: Video,
      bullet: '4K Master Cut & Sound Mix',
      turnaround: '2-4 Days Turnaround'
    },
    {
      icon: Flame,
      bullet: 'Hook-Optimized 9:16 Pacing',
      turnaround: '24-48h Fast Delivery'
    },
    {
      icon: Play,
      bullet: 'High-Converting Direct Response',
      turnaround: '24-48h Fast Delivery'
    },
    {
      icon: Palette,
      bullet: 'DaVinci Resolve Color Science',
      turnaround: '2-3 Days Turnaround'
    }
  ];

  return (
    <section id="services" className="py-14 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-[#0D0D0D]/10 relative bg-[#ECEBE8]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16 relative">
        <div className="space-y-2 sm:space-y-3">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-[#E63E26]/10 border border-[#E63E26]/30 rounded-full text-[11px] sm:text-xs font-mono text-[#E63E26] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#E63E26]" />
              <span>03 / CORE EDITING SERVICES</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-[#0D0D0D] leading-tight">
              SPECIALIZED POST-PRODUCTION <br />
              <span className="text-[#E63E26]">
                TAILORED FOR IMPACT.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-xs sm:text-sm md:text-base text-[#4A4A4F] max-w-md font-sans leading-relaxed">
            High-converting short-form, cinematic commercials, performance UGC ads, and surgical DaVinci color grading designed to retain viewers and scale brand authority.
          </p>
        </ScrollReveal>
      </div>

      {/* 4 Professional Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 relative">
        {portfolioData.services.map((service, index) => {
          const config = serviceIcons[index] || serviceIcons[0];
          const IconComponent = config.icon;

          return (
            <ScrollReveal key={service.number} delay={0.08 * index}>
              <div className="group relative h-full bg-white hover:bg-white border border-[#0D0D0D]/15 hover:border-[#E63E26] rounded-xl sm:rounded-2xl p-5 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden flex flex-col justify-between">
                <div className="space-y-4 sm:space-y-6 relative">
                  {/* Top Bar: Number & Icon Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#0D0D0D] border border-black group-hover:bg-[#E63E26] group-hover:border-[#E63E26] flex items-center justify-center text-white transition-all shadow-inner group-hover:scale-105">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-colors" />
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-black text-[#0D0D0D] group-hover:text-[#E63E26] transition-colors">
                        SERVICE #{service.number}
                      </span>
                    </div>

                    <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase border border-[#0D0D0D]/15 bg-[#ECEBE8] text-[#0D0D0D]">
                      {config.turnaround}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-display font-black text-[#0D0D0D] group-hover:text-[#E63E26] transition-colors uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-mono text-[#E63E26] font-bold tracking-wider uppercase">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-[#4A4A4F] font-sans font-normal leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Feature Highlight */}
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-[#0D0D0D] bg-[#ECEBE8] border border-[#0D0D0D]/10 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E63E26] shrink-0" />
                    <span>{config.bullet}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-[11px] font-mono font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md border border-[#0D0D0D]/10 bg-[#ECEBE8] text-[#0D0D0D]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: WhatsApp Quick Inquiry Link */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#0D0D0D]/10 flex items-center justify-between relative">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#76767D] font-bold tracking-wider uppercase">
                    4K MASTER
                  </span>

                  <a
                    href={`https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-bold text-[#0D0D0D] hover:text-[#E63E26] transition-colors group-hover:translate-x-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#E63E26]" />
                    <span>BOOK EDIT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
