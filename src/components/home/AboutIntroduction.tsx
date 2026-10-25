import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CheckCircle2, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AboutIntroduction: React.FC = () => {
  return (
    <section id="about-intro" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-[#0D0D0D]/10 relative bg-[#ECEBE8]">
      {/* Precision Crosshairs */}
      <span className="absolute top-8 left-6 sm:left-12 font-mono text-sm text-[#0D0D0D]/30 pointer-events-none">+</span>
      <span className="absolute top-8 right-6 sm:right-12 font-mono text-sm text-[#0D0D0D]/30 pointer-events-none">+</span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Column: Portrait Photo & Details Card */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="right">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#0D0D0D]/20 bg-[#0D0D0D] aspect-[4/3] sm:aspect-[4/5] max-w-[290px] sm:max-w-sm w-full shadow-2xl group">
              {/* Photo */}
              <img
                src={portfolioData.profileImage || "/dhruv-photo.jpg"}
                alt="Dhruv Dobariya - Freelance Video Editor"
                loading="eager"
                className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

              {/* Status Badge in Photo */}
              <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-mono text-white shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63E26]" />
                <span className="font-bold uppercase tracking-wider">AVAILABLE FOR PROJECTS</span>
              </div>

              {/* Top Right Stamp */}
              <div className="absolute top-3.5 right-3.5">
                <span className="px-2 py-0.5 bg-[#E63E26] text-white rounded font-mono text-[9px] font-black uppercase tracking-wider">
                  PRO
                </span>
              </div>

              {/* Bottom Card Details */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 space-y-1 sm:space-y-1.5 text-white">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-lg sm:text-2xl text-white block tracking-wide">
                    {portfolioData.brandName.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-white/60">
                    DVS X2X4
                  </span>
                </div>
                
                <p className="text-[10px] sm:text-xs font-mono text-[#E63E26] font-bold uppercase tracking-wider">
                  {portfolioData.profession}
                </p>

                <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-neutral-400 pt-0.5">
                  <Globe className="w-3 h-3 text-white/70" />
                  <span>{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Bio & Introduction Details */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-7">
          <div>
            <ScrollReveal direction="down">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#E63E26]/10 border border-[#E63E26]/30 rounded-full text-[11px] sm:text-xs font-mono text-[#E63E26] font-bold mb-2 sm:mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#E63E26]" />
                <span>ABOUT & EDITING APPROACH</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-[#0D0D0D] leading-[1.08]">
                BEHIND <br />
                <span className="text-[#E63E26]">
                  THE EDIT.
                </span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Bio Text */}
          <div className="space-y-2 sm:space-y-3">
            <ScrollReveal delay={0.15}>
              <p className="text-base sm:text-lg text-[#0D0D0D] font-sans font-medium leading-relaxed">
                I'm <strong className="text-[#0D0D0D] font-extrabold underline decoration-[#E63E26] underline-offset-4">Dhruv Dobariya</strong> — a freelance video editor helping creators, agencies, and brands turn raw footage into high-retention Reels, commercial films, and viral social content.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xs sm:text-base text-[#4A4A4F] font-sans font-light leading-relaxed">
                I focus on what actually moves metrics: fast 24-48h turnarounds, clean DaVinci color grading, retention-first pacing, and surgical audio design.
              </p>
            </ScrollReveal>
          </div>

          {/* Core Strengths Checklist: 2-column grid */}
          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1 text-[10px] sm:text-xs font-mono text-[#0D0D0D]">
              <div className="flex items-center gap-2 p-3 sm:p-3.5 bg-white border border-[#0D0D0D]/15 rounded-xl shadow-xs hover:border-[#E63E26] transition-colors">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#E63E26] shrink-0" />
                <span className="font-bold truncate">Retention Pacing</span>
              </div>
              <div className="flex items-center gap-2 p-3 sm:p-3.5 bg-white border border-[#0D0D0D]/15 rounded-xl shadow-xs hover:border-[#E63E26] transition-colors">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#E63E26] shrink-0" />
                <span className="font-bold truncate">DaVinci Science</span>
              </div>
              <div className="flex items-center gap-2 p-3 sm:p-3.5 bg-white border border-[#0D0D0D]/15 rounded-xl shadow-xs hover:border-[#E63E26] transition-colors">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#E63E26] shrink-0" />
                <span className="font-bold truncate">Spatial Audio Mix</span>
              </div>
              <div className="flex items-center gap-2 p-3 sm:p-3.5 bg-white border border-[#0D0D0D]/15 rounded-xl shadow-xs hover:border-[#E63E26] transition-colors">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#E63E26] shrink-0" />
                <span className="font-bold truncate">24-48H Turnaround</span>
              </div>
            </div>
          </ScrollReveal>

          {/* 1-Click Direct Action Buttons: Side-by-side */}
          <ScrollReveal delay={0.3}>
            <div className="pt-2 sm:pt-3 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-4">
              <a
                href={`https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20collaborate%20on%20a%20video%20project!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-6 py-2.5 sm:py-3.5 bg-[#0D0D0D] hover:bg-[#E63E26] text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-full transition-all shadow-md hover:scale-105 active:scale-95 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WHATSAPP</span>
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}&su=Video%20Editing%20Inquiry%20-%20Dhruv%20Dobariya`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-6 py-2.5 sm:py-3.5 bg-white hover:bg-[#0D0D0D] text-[#0D0D0D] hover:text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-full border border-[#0D0D0D]/20 hover:border-[#0D0D0D] transition-all shadow-sm hover:scale-105 active:scale-95 text-center"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>SEND GMAIL</span>
              </a>

              <Link
                to="/about"
                className="col-span-2 sm:col-span-1 inline-flex items-center justify-center sm:justify-start gap-1.5 text-[11px] sm:text-xs font-mono font-bold text-[#0D0D0D]/70 hover:text-[#E63E26] transition-colors py-1"
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
