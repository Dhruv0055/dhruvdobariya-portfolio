import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { getGoogleDriveThumbnail } from '../../utils/videoUtils';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'featured';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const driveLink = project.googleDriveUrl || project.videoUrl || '';
  const thumbnail = project.posterImage || getGoogleDriveThumbnail(driveLink);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video || !project.previewVideoUrl) return;

    // Use IntersectionObserver so only visible cards actively decode & render video frames
    // This maintains hardware acceleration and ensures silky-smooth 60fps scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '160px 80px 160px 80px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [project.previewVideoUrl]);

  return (
    <article 
      ref={containerRef}
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
            ref={videoRef}
            src={project.previewVideoUrl}
            loop
            muted
            playsInline
            preload="metadata"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/25 pointer-events-none" />

        {/* Center Play Action: Subtle & Only Appears on Hover */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <Play className="w-5 h-5 fill-current ml-0.5 text-black" />
          </div>
        </div>

        {/* Seamless Bottom Overlay with Title & Description - Clean without numbers or orange badges */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20 flex flex-col justify-end pointer-events-none">
          <div className="flex items-center justify-between text-[10px] font-mono font-medium text-white/50 mb-1">
            <span>{project.year}</span>
          </div>

          <h3 className="text-sm sm:text-base font-display font-black text-white group-hover:text-white/80 transition-colors line-clamp-1 drop-shadow-sm">
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
