import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { getGoogleDriveThumbnail } from '../../utils/videoUtils';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'featured';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const driveLink = project.googleDriveUrl || project.videoUrl || '';
  const thumbnail = getGoogleDriveThumbnail(driveLink) || project.posterImage;

  return (
    <article 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white border border-[#0D0D0D]/15 hover:border-[#E63E26] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      {/* Vertical Media Container (9:16 Aspect Ratio) */}
      <a
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full aspect-[9/16] overflow-hidden bg-black flex items-center justify-center cursor-pointer group/media"
      >
        {/* Exact Video Frame Preview Thumbnail */}
        <img
          src={thumbnail}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-105 brightness-100' : 'brightness-90'
          }`}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = project.posterImage || 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1080&auto=format&fit=crop';
          }}
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-20 flex items-center gap-1 sm:gap-1.5 pointer-events-none">
          <span className="px-1.5 sm:px-2 py-0.5 bg-black/80 backdrop-blur-md rounded font-mono text-[9px] sm:text-[10px] font-black text-white border border-white/15">
            {project.number}
          </span>
          <span className="px-1.5 sm:px-2 py-0.5 bg-[#E63E26] rounded font-mono text-[8px] sm:text-[9px] font-bold tracking-wider uppercase text-white truncate max-w-[80px] sm:max-w-none">
            {project.category}
          </span>
        </div>

        {/* Center Play Action */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-2 sm:p-4">
          <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-white text-black flex items-center justify-center shadow-xl group-hover/media:scale-110 group-hover/media:bg-[#E63E26] group-hover/media:text-white transition-all duration-300">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
          </div>

          <span className="mt-2 px-2.5 sm:px-3 py-0.5 bg-black/80 backdrop-blur-md rounded-full font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white border border-white/15 shadow-md">
            WATCH ON DRIVE
          </span>
        </div>

        {/* Bottom Quick Overlay */}
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 z-20 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-neutral-300 pointer-events-none">
          <span className="px-1.5 py-0.5 bg-black/80 rounded backdrop-blur-sm border border-white/10">
            4K UHD
          </span>
          <span className="text-white font-semibold inline-flex items-center gap-1">
            <span>DRIVE</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>
      </a>

      {/* Content & Metadata Footer */}
      <div className="p-3.5 sm:p-5 flex flex-col justify-between space-y-2 sm:space-y-3 bg-white">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] sm:text-[10px] font-mono text-[#E63E26] uppercase font-bold tracking-wider">
              {project.category}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-[#76767D]">
              {project.year}
            </span>
          </div>

          <h3 className="text-xs sm:text-base font-display font-black text-[#0D0D0D] group-hover:text-[#E63E26] transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-[11px] sm:text-xs text-[#52525B] line-clamp-1 sm:line-clamp-2 leading-relaxed font-sans pt-0.5 sm:pt-1">
            {project.shortDescription}
          </p>
        </div>

        {/* Clean 1-Click Action */}
        <div className="pt-2 sm:pt-3 border-t border-[#0D0D0D]/10 flex items-center justify-between">
          <span className="text-[8px] sm:text-[9px] font-mono text-[#76767D] font-bold tracking-wider uppercase">
            MASTER 4K
          </span>

          {driveLink && (
            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold text-[#0D0D0D] hover:text-[#E63E26] transition-colors group/link"
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
