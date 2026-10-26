import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AboutIntroduction: React.FC = () => {
  return (
    <section id="about-intro" className="relative w-full overflow-hidden border-t border-[#0D0D0D]/10 bg-[#0D0D0D] text-white py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 flex items-center justify-center">
      {/* FULL SCREEN HORIZONTAL / VERTICAL BACKGROUND PHOTO */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={portfolioData.profileImage || "/dhruv-photo.jpg"}
          alt="Dhruv Dobariya - Freelance Video Editor"
          loading="eager"
          className="w-full h-full object-cover object-[center_35%] sm:object-[center_30%] scale-105 brightness-[0.72] contrast-[1.08]"
        />
        {/* Cinematic Scrim Overlays for Razor-Sharp Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60 sm:to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/75" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
      </div>

      {/* Precision Crosshairs */}
      <span className="absolute top-8 left-6 sm:left-12 font-mono text-sm text-white/30 pointer-events-none z-10">+</span>
      <span className="absolute top-8 right-6 sm:right-12 font-mono text-sm text-white/30 pointer-events-none z-10">+</span>

      {/* FOREGROUND CONTENT LAYERED OVER FULL-SCREEN PHOTO */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header Tags & Status Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-6">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-[11px] sm:text-xs font-mono text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#E63E26] animate-pulse" />
              <span className="font-bold uppercase tracking-wider">AVAILABLE FOR PROJECTS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-[10px] sm:text-xs font-mono text-neutral-300">
              <Sparkles className="w-3.5 h-3.5 text-[#E63E26]" />
              <span>ABOUT & EDITING APPROACH</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Headline: "BEHIND THE EDIT." IN ONE SINGLE LINE */}
        <ScrollReveal delay={0.15}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase tracking-tight text-white leading-none mb-4 sm:mb-6 drop-shadow-md">
            BEHIND <span className="text-[#E63E26]">THE EDIT.</span>
          </h2>
        </ScrollReveal>

        {/* Bio Description */}
        <div className="space-y-3 max-w-3xl mb-8 sm:mb-10">
          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-xl text-neutral-100 font-sans font-medium leading-relaxed drop-shadow-md">
              I'm <strong className="text-white font-extrabold underline decoration-[#E63E26] underline-offset-4">Dhruv Dobariya</strong> — a freelance video editor helping creators, agencies, and brands turn raw footage into high-retention Reels, commercial films, and viral social content.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="text-xs sm:text-base text-neutral-300 font-sans font-light leading-relaxed drop-shadow-sm">
              I focus on what actually moves metrics: fast 24-48h turnarounds, clean DaVinci color grading, retention-first pacing, and surgical audio design.
            </p>
          </ScrollReveal>
        </div>

        {/* Core Strengths Checklist: 4-Column Grid */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-10 text-[11px] sm:text-xs font-mono">
            <div className="flex items-center gap-2.5 p-3.5 sm:p-4 bg-black/60 backdrop-blur-md border border-white/15 rounded-xl shadow-lg hover:border-[#E63E26] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#E63E26] shrink-0" />
              <span className="font-bold text-white truncate">Retention Pacing</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 sm:p-4 bg-black/60 backdrop-blur-md border border-white/15 rounded-xl shadow-lg hover:border-[#E63E26] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#E63E26] shrink-0" />
              <span className="font-bold text-white truncate">DaVinci Science</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 sm:p-4 bg-black/60 backdrop-blur-md border border-white/15 rounded-xl shadow-lg hover:border-[#E63E26] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#E63E26] shrink-0" />
              <span className="font-bold text-white truncate">Spatial Audio Mix</span>
            </div>
            <div className="flex items-center gap-2.5 p-3.5 sm:p-4 bg-black/60 backdrop-blur-md border border-white/15 rounded-xl shadow-lg hover:border-[#E63E26] transition-colors">
              <CheckCircle2 className="w-4 h-4 text-[#E63E26] shrink-0" />
              <span className="font-bold text-white truncate">24-48H Turnaround</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 1-Click Action Buttons & Links */}
        <ScrollReveal delay={0.35}>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20collaborate%20on%20a%20video%20project!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 bg-[#E63E26] hover:bg-white text-white hover:text-black font-mono font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>CHAT ON WHATSAPP</span>
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}&su=Video%20Editing%20Inquiry%20-%20Dhruv%20Dobariya`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 bg-white/10 hover:bg-white text-white hover:text-black font-mono font-bold text-xs uppercase tracking-wider rounded-full border border-white/25 hover:border-white transition-all shadow-lg hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              <Mail className="w-4 h-4" />
              <span>SEND GMAIL</span>
            </a>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono font-bold text-white/80 hover:text-[#E63E26] transition-colors"
            >
              <span>FULL PHILOSOPHY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
