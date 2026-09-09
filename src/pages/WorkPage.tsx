import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Film, ArrowRight, HardDrive } from 'lucide-react';

export const WorkPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'COMMERCIAL',
    'SHORT-FORM',
    'UGC',
    'CINEMATIC',
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'ALL') {
      return portfolioData.projects;
    }
    return portfolioData.projects.filter(
      (p) => p.category.toUpperCase() === selectedCategory.toUpperCase()
    );
  }, [selectedCategory]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="space-y-6 max-w-4xl mb-12">
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-white/10 rounded-full text-xs font-mono text-neutral-300">
            <Film className="w-3.5 h-3.5 text-white" />
            <span>PORTFOLIO & VERTICAL PREVIEWS</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-white">
            ALL VIDEO EDITS.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-neutral-400 font-sans font-light leading-relaxed max-w-2xl">
              Live uncompressed video deliverables. Filter by category or explore the entire raw archive directly on Google Drive.
            </p>

            <div>
              <a
                href={portfolioData.masterDriveFolder || "https://drive.google.com/drive/folders/1-fAPohvDgHQ8tLt3TJAOscRYUVtHhLlL?usp=drive_link"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl border border-white transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-95"
              >
                <HardDrive className="w-4 h-4 text-black" />
                <span>MASTER DRIVE VAULT</span>
                <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Filter Tabs */}
      <ScrollReveal delay={0.3}>
        <div className="flex flex-wrap items-center gap-2 pb-10 border-b border-white/10 mb-12">
          {categories.map((cat) => {
            const count =
              cat === 'ALL'
                ? portfolioData.projects.length
                : portfolioData.projects.filter(
                    (p) => p.category.toUpperCase() === cat.toUpperCase()
                  ).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-white/10 hover:border-white/30'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] ${selectedCategory === cat ? 'text-neutral-600' : 'text-neutral-500'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Vertical Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.08 * (index % 4)}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4 bg-neutral-900/60 border border-white/10 rounded-2xl">
          <p className="text-sm font-mono text-neutral-400">
            No projects found in this category.
          </p>
          <button
            type="button"
            onClick={() => setSelectedCategory('ALL')}
            className="px-5 py-2 bg-white text-black text-xs font-mono font-bold uppercase rounded-xl shadow-md"
          >
            SHOW ALL PROJECTS
          </button>
        </div>
      )}

      {/* Bottom Conversion CTA */}
      <div className="mt-24 pt-16 border-t border-white/10 text-center space-y-6">
        <ScrollReveal delay={0.2}>
          <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
            HAVE A VIDEO PROJECT IN MIND?
          </h3>
          <p className="text-sm md:text-base text-neutral-400 max-w-lg mx-auto pt-2">
            Let's discuss footage requirements, style, and timeline directly on WhatsApp or Gmail.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv%2C%20I%20saw%20your%20video%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl hover:scale-[1.02] active:scale-95"
            >
              <span>WHATSAPP (+91 81609 25636)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}&su=Video%20Editing%20Project%20Inquiry%20-%20Dhruv%20Dobariya`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-mono font-bold text-xs uppercase tracking-widest rounded-xl border border-white/15 transition-all shadow-lg hover:scale-[1.02] active:scale-95"
            >
              <span>EMAIL ({portfolioData.contact.email})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
