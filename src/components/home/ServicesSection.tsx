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
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative">
        <div className="space-y-3">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/15 rounded-full text-xs font-mono text-neutral-300">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>03 / CORE EDITING SERVICES</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-[#F4F4F5] leading-tight">
              SPECIALIZED POST-PRODUCTION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4E4E7] to-[#A1A1AA]">
                TAILORED FOR IMPACT.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <p className="text-sm md:text-base text-[#A1A1AA] max-w-md font-sans leading-relaxed">
            High-converting short-form, cinematic commercials, performance UGC ads, and surgical DaVinci color grading designed to retain viewers and scale brand authority.
          </p>
        </ScrollReveal>
      </div>

      {/* 4 Professional Monochrome Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
        {portfolioData.services.map((service, index) => {
          const config = serviceIcons[index] || serviceIcons[0];
          const IconComponent = config.icon;

          return (
            <ScrollReveal key={service.number} delay={0.1 * index}>
              <div className="group relative h-full bg-[#141418] hover:bg-[#18181F] border border-white/10 hover:border-white/30 rounded-2xl p-7 sm:p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden flex flex-col justify-between">
                <div className="space-y-6 relative">
                  {/* Top Bar: Number & Icon Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#1E1E26] border border-white/15 group-hover:border-white/40 flex items-center justify-center text-white transition-all shadow-inner group-hover:scale-105">
                        <IconComponent className="w-5 h-5 text-white transition-colors" />
                      </div>
                      <span className="font-mono text-sm font-bold text-neutral-400 group-hover:text-white transition-colors">
                        SERVICE #{service.number}
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wider uppercase border border-white/15 bg-white/5 text-neutral-300">
                      {config.turnaround}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#F4F4F5] group-hover:text-white transition-colors uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-[#A1A1AA] font-semibold tracking-wider uppercase">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#A1A1AA] font-sans font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Feature Highlight */}
                  <div className="flex items-center gap-2 text-xs font-mono text-white/90 bg-white/[0.03] border border-white/10 px-3.5 py-2 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span>{config.bullet}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-medium px-3 py-1 rounded-md border border-white/10 bg-[#1E1E26] text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: WhatsApp Quick Inquiry Link */}
                <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between relative">
                  <span className="text-[11px] font-mono text-[#71717A] tracking-wider uppercase">
                    4K MASTER DELIVERABLE
                  </span>

                  <a
                    href={`https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-neutral-300 transition-colors group-hover:translate-x-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-white" />
                    <span>BOOK THIS EDIT</span>
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
