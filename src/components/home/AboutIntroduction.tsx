import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AboutIntroduction: React.FC = () => {
  return (
    <section id="about-intro" className="relative w-full overflow-hidden border-t border-[#0D0D0D]/10 bg-[#0D0D0D] text-white py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 flex items-center min-h-[580px] sm:min-h-[680px]">
      {/* FULL-BLEED CENTRALIZED PHOTO OF DHRUV - BRIGHT, CLEAR & CENTRALIZED */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <img
          src={portfolioData.profileImage || "/dhruv-photo.jpg"}
          alt="Dhruv Dobariya - Freelance Video Editor"
          loading="eager"
          className="w-full h-full object-cover object-center brightness-100 contrast-[1.04]"
        />
        {/* Soft edge-only shading to keep Dhruv in the center bright, natural and visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
      </div>

      {/* Precision Corner Crosshairs */}
      <span className="absolute top-6 left-6 sm:left-12 font-mono text-sm text-white/40 pointer-events-none z-10">+</span>
      <span className="absolute top-6 right-6 sm:right-12 font-mono text-sm text-white/40 pointer-events-none z-10">+</span>

      {/* FOREGROUND CONTENT: COMPACT & POSITIONED ON THE LEFT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-lg text-left bg-black/40 sm:bg-black/30 backdrop-blur-md p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
          {/* Header Status & Approach Tag */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
            <ScrollReveal direction="down">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-[10px] sm:text-xs font-mono text-white shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#E63E26] animate-pulse" />
                <span className="font-bold uppercase tracking-wider">AVAILABLE FOR PROJECTS</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-[10px] sm:text-xs font-mono text-neutral-300">
                <Sparkles className="w-3 h-3 text-[#E63E26]" />
                <span>ABOUT & APPROACH</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Headline: "BEHIND THE EDIT." in One Single Line with Smaller Size */}
          <ScrollReveal delay={0.15}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-white leading-tight mb-3 sm:mb-4 drop-shadow-md">
              BEHIND <span className="text-[#E63E26]">THE EDIT.</span>
            </h2>
          </ScrollReveal>

          {/* Compact Bio Text */}
          <div className="space-y-2 mb-5 sm:mb-6">
            <ScrollReveal delay={0.2}>
              <p className="text-xs sm:text-sm md:text-base text-neutral-100 font-sans font-medium leading-relaxed drop-shadow-sm">
                I'm <strong className="text-white font-extrabold underline decoration-[#E63E26] underline-offset-4">Dhruv Dobariya</strong> — a freelance video editor helping creators, agencies, and brands turn raw footage into high-retention Reels, commercial films, and viral social content.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-[11px] sm:text-xs md:text-sm text-neutral-300 font-sans font-light leading-relaxed">
                I focus on what actually moves metrics: fast 24-48h turnarounds, clean DaVinci color grading, retention-first pacing, and surgical audio design.
              </p>
            </ScrollReveal>
          </div>

          {/* Action Buttons Directly Below Bio Text */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <a
                href={`https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20collaborate%20on%20a%20video%20project!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 bg-[#E63E26] hover:bg-white text-white hover:text-black font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-full transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}&su=Video%20Editing%20Inquiry%20-%20Dhruv%20Dobariya`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 bg-white/10 hover:bg-white text-white hover:text-black font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-full border border-white/20 hover:border-white transition-all shadow-md hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>SEND GMAIL</span>
              </a>

              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 px-2.5 py-2 text-[10px] sm:text-xs font-mono font-bold text-neutral-300 hover:text-[#E63E26] transition-colors"
              >
                <span>FULL PHILOSOPHY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
