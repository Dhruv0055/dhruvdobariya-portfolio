import React from 'react';
import { ExternalLink, HardDrive } from 'lucide-react';
import { parseVideoSource, getGoogleDriveThumbnail } from '../../utils/videoUtils';

interface VideoPlayerProps {
  videoUrl?: string;
  previewVideoUrl?: string;
  googleDriveUrl?: string;
  posterImage?: string;
  title?: string;
  sourceType?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  aspectRatio?: 'video' | 'vertical' | 'square' | 'wide';
  className?: string;
  showDriveCta?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  googleDriveUrl,
  posterImage,
  title = 'Video Player',
  aspectRatio = 'video',
  className = '',
  showDriveCta = true,
}) => {
  const parsed = parseVideoSource(videoUrl || googleDriveUrl);
  const targetDriveLink = googleDriveUrl || videoUrl || 'https://drive.google.com/file/d/1DFAgevx05WhHTuQozoFQXDK58xCvvz4W/view?usp=drive_link';
  const resolvedPoster = posterImage || getGoogleDriveThumbnail(googleDriveUrl || videoUrl);

  const ratioClass = {
    video: 'aspect-video', // 16:9
    vertical: 'aspect-[9/16]', // 9:16 vertical
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
  }[aspectRatio];

  const isYouTubeOrVimeo = parsed.type === 'youtube' || parsed.type === 'vimeo';

  if (isYouTubeOrVimeo) {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-black border border-white/10 ${ratioClass} ${className} shadow-2xl`}>
        <iframe
          src={parsed.embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="w-full h-full border-0 absolute inset-0 bg-black"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-xl bg-black border border-white/10 ${ratioClass} ${className} shadow-2xl group`}>
      {/* Visual Poster Cover */}
      <a
        href={targetDriveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-full block cursor-pointer"
      >
        <img
          src={resolvedPoster}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop';
          }}
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

        {/* Top Floating Badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-black/85 backdrop-blur-md rounded-full font-mono text-[10px] font-bold text-white border border-white/15">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>4K MASTER SHOWREEL</span>
          </div>
        </div>

        {/* Center Glowing Play Action */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
          <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-emerald-400 group-hover:bg-emerald-300 text-black flex items-center justify-center shadow-[0_0_35px_rgba(52,211,153,0.7)] group-hover:scale-110 transition-all duration-300">
            <HardDrive className="w-8 sm:w-10 h-8 sm:h-10 text-black fill-current" />
          </div>
          <span className="mt-4 px-4 py-1.5 bg-black/90 backdrop-blur-md rounded-full font-mono text-xs font-bold uppercase tracking-wider text-emerald-300 border border-emerald-400/60 shadow-xl group-hover:text-white transition-colors">
            WATCH FULL 4K ON DRIVE
          </span>
        </div>

        {/* Bottom Audio Wave / Quality Indicator */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-[11px] font-mono text-[#A1A1AA] pointer-events-none">
          <span className="px-2.5 py-1 bg-black/80 rounded backdrop-blur-sm border border-white/10">
            CLICK TO STREAM MASTER
          </span>
          <span className="text-emerald-400 font-semibold inline-flex items-center gap-1">
            <span>UNCOMPRESSED 4K</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </a>

      {/* Top Floating Drive Direct Link */}
      {showDriveCta && (
        <div className="absolute top-3 right-3 z-20 pointer-events-auto">
          <a
            href={targetDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/90 hover:bg-emerald-400 text-white hover:text-black text-xs font-mono font-bold rounded-lg border border-emerald-400/60 hover:border-emerald-300 transition-all backdrop-blur-md shadow-[0_0_15px_rgba(52,211,153,0.3)] hover:scale-105"
          >
            <HardDrive className="w-3.5 h-3.5 text-emerald-400 group-hover:text-black" />
            <span>OPEN 4K DRIVE</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}
    </div>
  );
};
