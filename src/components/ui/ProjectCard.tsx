import React from 'react';
import { Play, ExternalLink } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { getGoogleDriveThumbnail } from '../../utils/videoUtils';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'featured';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const driveLink = project.googleDriveUrl || project.videoUrl || '';
  const thumbnail = getGoogleDriveThumbnail(driveLink) || project.posterImage;

  return (
    <article className="group relative flex flex-col bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl">
      {/* Vertical Media Container (9:16 Aspect Ratio) */}
      <a
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full aspect-[9/16] overflow-hidden bg-black flex items-center justify-center cursor-pointer group/media"
      >
        {/* Exact Video Frame Preview from Google Drive */}
        <img
          src={thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-700 brightness-90 group-hover/media:brightness-100"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = project.posterImage || 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1080&auto=format&fit=crop';
          }}
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-20 flex items-center gap-1 sm:gap-1.5 pointer-events-none">
          <span className="px-1.5 sm:px-2 py-0.5 bg-black/80 backdrop-blur-md rounded font-mono text-[9px] sm:text-[10px] font-bold text-white border border-white/15">
            {project.number}
          </span>
          <span className="px-1.5 sm:px-2 py-0.5 bg-black/80 backdrop-blur-md rounded font-mono text-[8px] sm:text-[10px] tracking-wider uppercase text-neutral-200 border border-white/15 truncate max-w-[80px] sm:max-w-none">
            {project.category}
          </span>
        </div>

        {/* Center Play Action */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-2 sm:p-4">
          {/* White Circular Play Button */}
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl group-hover/media:scale-105 group-hover/media:bg-white transition-all duration-300">
            <Play className="w-4 h-4 sm:w-6 sm:h-6 text-black fill-black ml-0.5" />
          </div>

          {/* Subdued Watch on Drive Pill */}
          <span className="mt-2 sm:mt-3 px-2 sm:px-3.5 py-0.5 sm:py-1 bg-black/80 backdrop-blur-md rounded-full font-mono text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-200 border border-white/15 shadow-md group-hover/media:border-white/30 group-hover/media:text-white transition-colors">
            DRIVE PREVIEW
          </span>
        </div>

        {/* Bottom Quick Overlay */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 z-20 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-neutral-400 pointer-events-none">
          <span className="px-1.5 sm:px-2 py-0.5 bg-black/80 rounded backdrop-blur-sm border border-white/10 text-neutral-300">
            PLAY
          </span>
          <span className="text-white font-semibold inline-flex items-center gap-1 text-[9px] sm:text-[10px]">
            <span>4K</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>
      </a>

      {/* Content & Metadata Footer */}
      <div className="p-3 sm:p-5 flex flex-col justify-between space-y-2 sm:space-y-3 bg-neutral-900/40">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase font-semibold tracking-wider">
              {project.category}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500">
              {project.year}
            </span>
          </div>

          <h3 className="text-xs sm:text-base font-display font-bold text-white group-hover:text-neutral-200 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-[11px] sm:text-xs text-neutral-400 line-clamp-1 sm:line-clamp-2 leading-relaxed font-sans pt-0.5 sm:pt-1">
            {project.shortDescription}
          </p>
        </div>

        {/* Clean 1-Click Action */}
        <div className="pt-2 sm:pt-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-[8px] sm:text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
            MASTER
          </span>

          {driveLink && (
            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold text-white hover:text-neutral-300 transition-colors group/link"
            >
              <span>WATCH</span>
              <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
