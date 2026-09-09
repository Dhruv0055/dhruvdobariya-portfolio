import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { VideoPlayer } from '../ui/VideoPlayer';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          {/* Availability & Name Badge */}
          <ScrollReveal direction="down" delay={0.1}>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-white shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="tracking-wider uppercase font-bold">DHRUV DOBARIYA</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141418] border border-white/10 text-xs font-mono text-[#A1A1AA]">
                <span className="tracking-wider uppercase font-medium">{portfolioData.contact.availability}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Large Editorial Headline */}
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-display font-extrabold text-white leading-[1.12] uppercase">
              VIDEO EDITOR <br />
              <span className="text-neutral-400">
                & VISUAL STORYTELLER
              </span>
            </h1>
          </ScrollReveal>

          {/* Supporting Personal Introduction */}
          <ScrollReveal delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-xl font-sans font-light leading-relaxed">
              Hi, I'm <strong className="text-white font-medium">Dhruv</strong> — a freelance video editor helping creators, agencies, and businesses turn raw footage into high-retention video content, viral short-form edits, and cinematic brand films.
            </p>
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/work"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:scale-105"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={portfolioData.masterDriveFolder || "https://drive.google.com/drive/folders/1-fAPohvDgHQ8tLt3TJAOscRYUVtHhLlL?usp=drive_link"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#141418] hover:bg-[#1C1C22] text-white font-mono font-bold text-xs uppercase tracking-widest rounded-full border border-white/20 hover:border-white transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>GOOGLE DRIVE FOLDER</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#141418] hover:bg-white/10 text-[#A1A1AA] hover:text-white font-mono font-medium text-xs uppercase tracking-widest border border-white/10 hover:border-white rounded-full transition-all duration-300"
              >
                <span>LET'S TALK</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Quick Metrics Bar */}
          <ScrollReveal delay={0.5}>
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <span className="block font-display text-2xl font-bold text-white">
                  STUDIO
                </span>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
                  Master Quality
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-white">
                  +45%
                </span>
                <span className="text-[10px] font-mono text-[#71717A] tracking-wider uppercase">
                  Avg. Retention Lift
                </span>
              </div>
              <div>
                <span className="block font-display text-2xl font-bold text-[#F4F4F5]">
                  24-48H
                </span>
                <span className="text-[10px] font-mono text-[#71717A] tracking-wider uppercase">
                  Fast Turnaround
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Featured Video / Reel Preview */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollReveal direction="left" delay={0.3}>
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              <div className="relative bg-[#141418] border border-white/15 group-hover:border-white/30 rounded-2xl overflow-hidden p-2 sm:p-3 shadow-2xl space-y-2 transition-all duration-300">
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-1 px-2 text-[10px] font-mono tracking-widest text-[#A1A1AA]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>MASTER SHOWREEL (9:16)</span>
                  </div>
                  <span className="text-white font-semibold">GOOGLE DRIVE</span>
                </div>

                {/* Video Component (Embedded Preview) */}
                <VideoPlayer
                  videoUrl={portfolioData.showreel.videoUrl}
                  googleDriveUrl={portfolioData.showreel.googleDriveUrl}
                  previewVideoUrl={portfolioData.showreel.previewVideoUrl}
                  posterImage={portfolioData.showreel.posterImage}
                  title="Dhruv Dobariya Showreel"
                  sourceType="google-drive"
                  aspectRatio="vertical"
                  showDriveCta={true}
                />

                {/* Footer Link */}
                <div className="flex items-center justify-between pt-2 px-2 text-[10px] font-mono text-[#A1A1AA]">
                  <span>DAVINCI RESOLVE ● PREMIERE PRO</span>
                  <a
                    href={portfolioData.showreel.googleDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>OPEN FULL QUALITY</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="pt-12 flex justify-center items-center">
        <a
          href="#about-intro"
          className="group flex flex-col items-center gap-2 text-[11px] font-mono tracking-widest text-[#71717A] hover:text-white transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 text-white animate-bounce" />
        </a>
      </div>
    </section>
  );
};
