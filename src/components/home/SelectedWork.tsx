import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HardDrive, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ProjectCard } from '../ui/ProjectCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const SelectedWork: React.FC = () => {
  const projects = portfolioData.projects;

  return (
    <section id="work" className="py-12 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-16">
        <div>
          <ScrollReveal direction="down">
            <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase block mb-1.5 sm:mb-2 font-semibold">
              01 / SELECTED WORK (VERTICAL PREVIEWS)
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.12]">
              PROJECTS THAT <br />
              <span className="text-neutral-400">
                SPEAK FOR THEMSELVES.
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="space-y-2 sm:space-y-4 max-w-sm">
            <p className="text-xs sm:text-sm text-neutral-400 font-sans">
              Curated high-impact video edits. Click any project to stream the uncompressed master file on Google Drive in full 4K quality.
            </p>
            <div className="flex items-center gap-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-wider text-white hover:text-neutral-300 group"
              >
                <span>VIEW ALL ARCHIVES ({portfolioData.projects.length})</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Vertical Projects Grid: 2-columns on mobile (2x2 grid), 4-columns on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={0.06 * index}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom Full Gallery & Drive Folder CTA: Side-by-side on mobile */}
      <div className="mt-8 sm:mt-16 grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <ScrollReveal delay={0.2}>
          <Link
            to="/work"
            className="group inline-flex items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-8 py-3 sm:py-4 bg-neutral-900 hover:bg-white text-white hover:text-black font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-xl border border-white/10 hover:border-white transition-all duration-300 shadow-xl text-center w-full"
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
            className="group relative inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-8 py-3 sm:py-4 bg-white hover:bg-neutral-200 text-black font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-xl border border-white transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-95 text-center w-full"
          >
            <HardDrive className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black shrink-0" />
            <span className="truncate">DRIVE VAULT</span>
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
