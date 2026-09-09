import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CheckCircle2, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AboutIntroduction: React.FC = () => {
  return (
    <section id="about-intro" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait Photo & Details Card */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="right">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#141418] aspect-[4/5] max-w-sm sm:max-w-md w-full shadow-2xl group">
              {/* Photo */}
              <img
                src={portfolioData.profileImage || "/dhruv-photo.jpg"}
                alt="Dhruv Dobariya - Freelance Video Editor"
                loading="eager"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none" />

              {/* Status Badge in Photo */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-[11px] font-mono text-neutral-200 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold uppercase tracking-wider">AVAILABLE FOR PROJECTS</span>
              </div>

              {/* Bottom Card Details */}
              <div className="absolute bottom-6 left-6 right-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-2xl text-[#F4F4F5] block tracking-wide">
                    {portfolioData.brandName || "DHRUV DOBARIYA"}
                  </span>
                  <span className="px-2.5 py-0.5 bg-white/10 border border-white/20 rounded text-[10px] font-mono text-white font-semibold">
                    PRO EDITOR
                  </span>
                </div>
                
                <p className="text-xs font-mono text-[#D4D4D8] font-bold uppercase tracking-wider">
                  {portfolioData.profession || "FREELANCE VIDEO EDITOR"}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] pt-1">
                  <Globe className="w-3.5 h-3.5 text-white/80" />
                  <span>{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Bio & Introduction Details */}
        <div className="lg:col-span-7 space-y-7">
          <div>
            <ScrollReveal direction="down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/15 rounded-full text-xs font-mono text-neutral-300 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>ABOUT ME & BACKGROUND</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-[#F4F4F5] leading-[1.12]">
                BEHIND <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4E4E7] to-[#A1A1AA]">
                  THE EDIT.
                </span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Bio Text */}
          <div className="space-y-3">
            <ScrollReveal delay={0.15}>
              <p className="text-base sm:text-lg text-neutral-200 font-sans font-normal leading-relaxed">
                I'm <strong className="text-white font-semibold">Dhruv Dobariya</strong> — a freelance video editor helping creators, agencies, and brands turn raw footage into high-retention Reels, commercial films, and viral social content.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-sm sm:text-base text-neutral-400 font-sans font-light leading-relaxed">
                I focus on what actually matters: fast 24-48h turnarounds, clean DaVinci color grading, retention-first pacing, and surgical audio design.
              </p>
            </ScrollReveal>
          </div>

          {/* Core Strengths Checklist */}
          <ScrollReveal delay={0.25}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-[#F4F4F5]">
              <div className="flex items-center gap-2.5 p-3.5 bg-[#141418] border border-white/10 rounded-xl hover:border-white/25 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Retention-Engineered Pacing</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 bg-[#141418] border border-white/10 rounded-xl hover:border-white/25 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>DaVinci Resolve Color Grade</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 bg-[#141418] border border-white/10 rounded-xl hover:border-white/25 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Spatial Sound Design & Mix</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 bg-[#141418] border border-white/10 rounded-xl hover:border-white/25 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>24-48 Hour Fast Turnaround</span>
              </div>
            </div>
          </ScrollReveal>

          {/* 1-Click Direct Action Buttons */}
          <ScrollReveal delay={0.3}>
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20collaborate%20on%20a%20video%20project!`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}&su=Video%20Editing%20Inquiry%20-%20Dhruv%20Dobariya`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#141418] hover:bg-white text-[#F4F4F5] hover:text-black font-mono font-bold text-xs uppercase tracking-widest rounded-full border border-white/15 hover:border-white transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>SEND GMAIL</span>
              </a>

              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#A1A1AA] hover:text-white transition-colors"
              >
                <span>FULL BIO & PHILOSOPHY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
