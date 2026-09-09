import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
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

        {/* Center Play Action */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
          {/* White Circular Play Button */}
          <div className="w-16 h-16 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl group-hover:scale-105 group-hover:bg-white transition-all duration-300">
            <Play className="w-7 h-7 text-black fill-black ml-0.5" />
          </div>

          {/* Subdued Watch on Drive Pill */}
          <span className="mt-3.5 px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full font-mono text-xs font-bold uppercase tracking-wider text-neutral-200 border border-white/15 shadow-md group-hover:border-white/30 group-hover:text-white transition-colors">
            WATCH ON DRIVE
          </span>
        </div>

        {/* Bottom Quick Indicator */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between text-[11px] font-mono text-neutral-400 pointer-events-none">
          <span className="px-2.5 py-1 bg-black/80 rounded backdrop-blur-sm border border-white/10 text-neutral-300">
            CLICK TO STREAM
          </span>
          <span className="text-white font-semibold inline-flex items-center gap-1">
            <span>DRIVE</span>
            <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </a>
    </div>
  );
};
