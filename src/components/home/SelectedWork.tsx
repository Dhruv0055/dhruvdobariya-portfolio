import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, HardDrive, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ProjectCard } from '../ui/ProjectCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SelectedWork: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const projects = portfolioData.projects;

  // Seamless infinite loop containing all 9 unique video deliverables
  const marqueeProjects = [...projects, ...projects];

  return (
    <section id="work" className="py-14 sm:py-20 md:py-28 overflow-hidden border-t border-[#0D0D0D]/10 bg-[#ECEBE8]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div>
          <ScrollReveal direction="down">
            <span className="font-mono text-xs text-[#E63E26] tracking-widest uppercase block mb-1.5 sm:mb-2 font-bold">
              01 / SELECTED WORK (VERTICAL PREVIEWS)
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
              Curated high-impact video deliverables ({projects.length} uncompressed master edits). Hover any project to pause and click to stream directly on Google Drive.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#0D0D0D] hover:text-[#E63E26] group"
              >
                <span>VIEW ALL ARCHIVES ({portfolioData.projects.length})</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* CONTINUOUS SMOOTH LEFT-TO-RIGHT MARQUEE (NOT IN BOX) */}
      <div 
        className="relative w-full overflow-hidden py-4 select-none cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Soft edge fades for high-end cinematic blend */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#ECEBE8] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#ECEBE8] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 w-max"
          animate={{
            x: isPaused ? undefined : ['-50%', '0%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 36,
              ease: 'linear'
            }
          }}
        >
          {marqueeProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="w-[210px] sm:w-[250px] md:w-[280px] shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Full Gallery & Drive Folder CTA */}
      <div className="mt-8 sm:mt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
        <ScrollReveal delay={0.2}>
          <Link
            to="/work"
            className="group inline-flex items-center justify-center gap-1.5 sm:gap-3 px-4 sm:px-8 py-3 sm:py-4 bg-[#0D0D0D] hover:bg-[#E63E26] text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm text-center w-full"
          >
            <span>ALL WORK ({projects.length})</span>
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
