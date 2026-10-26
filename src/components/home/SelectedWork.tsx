import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HardDrive, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ProjectCard } from '../ui/ProjectCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SelectedWork: React.FC = () => {
  const [isPausedTop, setIsPausedTop] = useState(false);
  const [isPausedBottom, setIsPausedBottom] = useState(false);
  const allProjects = portfolioData.projects;

  // PART 1: Upper Track (Commercial & Cinematic Deliverables) - Flows Left to Right
  const topProjects = [
    allProjects[0],  // 01 / Commercial Brand Film
    allProjects[2],  // 03 / Cinematic Campaign Edit
    allProjects[4],  // 05 / Commercial Visual Campaign
    allProjects[6],  // 07 / Direct Response UGC Ad
    allProjects[7],  // 08 / Cinematic Film Grading
    allProjects[9],  // 10 / Automotive Motion Grade
    allProjects[12], // 13 / Commercial Product Launch
  ].filter(Boolean);

  // PART 2: Lower Track (Short-Form & Viral Retention Reels) - Flows Right to Left
  const bottomProjects = [
    allProjects[1],  // 02 / Short-Form Retention Edit
    allProjects[3],  // 04 / UGC Brand Creative Ad
    allProjects[5],  // 06 / Viral Retention Reel
    allProjects[8],  // 09 / High-Retention Creative Edit
    allProjects[10], // 11 / E-Commerce Direct Response
    allProjects[11], // 12 / Viral Hook Retention Reel
    allProjects[13], // 14 / Creator Aesthetic Social Cut
  ].filter(Boolean);

  // Triplicate each row so there is physically ZERO gap on any screen size or 4K display
  const marqueeTop = [...topProjects, ...topProjects, ...topProjects];
  const marqueeBottom = [...bottomProjects, ...bottomProjects, ...bottomProjects];

  return (
    <section id="work" className="py-14 sm:py-20 md:py-28 overflow-hidden border-t border-[#0D0D0D]/10 bg-[#ECEBE8]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div>
          <ScrollReveal direction="down">
            <span className="font-mono text-xs text-[#E63E26] tracking-widest uppercase block mb-1.5 sm:mb-2 font-bold">
              01 / SELECTED WORK (DUAL DYNAMIC SHOWCASE)
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-[#0D0D0D] leading-[1.08]">
              PROJECTS THAT <br />
              <span className="text-[#0D0D0D]/50">
                SPEAK FOR THEMSELVES.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="space-y-2 sm:space-y-4 max-w-sm">
            <p className="text-xs sm:text-sm text-[#4A4A4F] font-sans">
              Two dynamic streams of commercial films and short-form retention edits. Hover any project to pause and click to open the 4K master on Drive.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#0D0D0D] hover:text-[#E63E26] group"
              >
                <span>VIEW ALL ARCHIVES ({allProjects.length})</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* DUAL STREAM CONTAINER: UPPER & LOWER TRACKS */}
      <div className="space-y-4 sm:space-y-6 select-none">
        
        {/* ========================================================= */}
        {/* UPPER PART: MOVES LEFT TO RIGHT (COMMERCIAL & CINEMATIC) */}
        {/* ========================================================= */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Edge Fades for Smooth Blend */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#ECEBE8] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#ECEBE8] to-transparent z-10 pointer-events-none" />

          <div
            className="w-full overflow-hidden"
            onMouseEnter={() => setIsPausedTop(true)}
            onMouseLeave={() => setIsPausedTop(false)}
            onTouchStart={() => setIsPausedTop(true)}
            onTouchEnd={() => setIsPausedTop(false)}
          >
            <div
              className={`flex gap-3.5 sm:gap-5 w-max animate-marquee-ltr ${
                isPausedTop ? 'paused' : ''
              }`}
            >
              {marqueeTop.map((project, index) => (
                <div
                  key={`top-${project.id}-${index}`}
                  className="w-[195px] sm:w-[230px] md:w-[255px] shrink-0"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LOWER PART: MOVES RIGHT TO LEFT (SHORT-FORM & RETENTION) */}
        {/* ========================================================= */}
        <div className="relative w-full overflow-hidden py-1">
          {/* Edge Fades for Smooth Blend */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-[#ECEBE8] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-[#ECEBE8] to-transparent z-10 pointer-events-none" />

          <div
            className="w-full overflow-hidden"
            onMouseEnter={() => setIsPausedBottom(true)}
            onMouseLeave={() => setIsPausedBottom(false)}
            onTouchStart={() => setIsPausedBottom(true)}
            onTouchEnd={() => setIsPausedBottom(false)}
          >
            <div
              className={`flex gap-3.5 sm:gap-5 w-max animate-marquee-rtl ${
                isPausedBottom ? 'paused' : ''
              }`}
            >
              {marqueeBottom.map((project, index) => (
                <div
                  key={`bottom-${project.id}-${index}`}
                  className="w-[195px] sm:w-[230px] md:w-[255px] shrink-0"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Full Gallery & Drive Folder CTA */}
      <div className="mt-8 sm:mt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
        <ScrollReveal delay={0.2}>
          <Link
            to="/work"
            className="group inline-flex items-center justify-center gap-1.5 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-[#0D0D0D] hover:bg-[#E63E26] text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm text-center w-full"
          >
            <span>ALL WORK ({allProjects.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <a
            href={portfolioData.masterDriveFolder || "https://drive.google.com/drive/folders/1-fAPohvDgHQ8tLt3TJAOscRYUVtHhLlL?usp=drive_link"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-8 py-3 sm:py-4 bg-white hover:bg-[#0D0D0D] text-[#0D0D0D] hover:text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-xl border border-[#0D0D0D]/20 hover:border-[#0D0D0D] transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-95 text-center w-full"
          >
            <HardDrive className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E63E26] shrink-0" />
            <span className="truncate">DRIVE VAULT</span>
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
