import React, { useState } from 'react';
import { Play } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { getGoogleDriveThumbnail } from '../../utils/videoUtils';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'featured';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const driveLink = project.googleDriveUrl || project.videoUrl || '';
  const thumbnail = project.posterImage || getGoogleDriveThumbnail(driveLink);

  return (
    <article 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-black"
    >
      {/* Clickable Full-Bleed Link to Google Drive Master */}
      <a
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 w-full h-full block"
      >
        {/* Exact Video Frame Preview Thumbnail OR Actual Video Stream */}
        {project.previewVideoUrl ? (
          <video
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.defaultMuted = true;
                if (el.paused) {
                  el.play().catch(() => {});
                }
              }
            }}
            src={project.previewVideoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={thumbnail}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-105 brightness-105' : 'brightness-95'
            }`}
          >
            <source src={project.previewVideoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={thumbnail}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'scale-105 brightness-105' : 'brightness-95'
            }`}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = project.posterImage || 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1080&auto=format&fit=crop';
            }}
          />
        )}

        {/* Cinematic Gradient Overlays: subtle at top, smooth at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 pointer-events-none">
          <span className="px-2 py-0.5 bg-black/70 backdrop-blur-md rounded-md font-mono text-[9px] sm:text-[10px] font-black text-white border border-white/20">
            {project.number}
          </span>
          <span className="px-2 py-0.5 bg-[#E63E26] rounded-md font-mono text-[8px] sm:text-[9px] font-bold tracking-wider uppercase text-white truncate">
            {project.category}
          </span>
        </div>

        {/* Center Play Action: Subtle & Only Appears on Hover */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <Play className="w-5 h-5 fill-current ml-0.5 text-black" />
          </div>
        </div>

        {/* Seamless Bottom Overlay with Title & Description - No Outer White Box */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20 flex flex-col justify-end pointer-events-none">
          <div className="flex items-center justify-between text-[10px] font-mono text-[#E63E26] font-bold mb-1">
            <span>{project.category}</span>
            <span className="text-white/60">{project.year}</span>
          </div>

          <h3 className="text-sm sm:text-base font-display font-black text-white group-hover:text-[#E63E26] transition-colors line-clamp-1 drop-shadow-sm">
            {project.title}
          </h3>

          <p className="text-[11px] sm:text-xs text-neutral-300 line-clamp-1 leading-snug font-sans pt-1">
            {project.shortDescription}
          </p>
        </div>
      </a>
    </article>
  );
};
