import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Volume2, 
  VolumeX, 
  MessageSquare, 
  HardDrive, 
  ChevronLeft, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { getGoogleDriveThumbnail } from '../../utils/videoUtils';

interface CarouselItem {
  id: string;
  type: 'me' | 'video' | 'emblem';
  label: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  driveUrl?: string;
  image?: string;
  bgColor?: string;
}

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const dragStartX = useRef<number>(0);

  // Cards sequence: ME with Dhruv's photo in center, surrounded by project videos from Google Drive
  const carouselItems: CarouselItem[] = [
    {
      id: 'me',
      type: 'me',
      label: 'ME',
      badge: 'DVS X2X4',
      title: 'Dhruv Dobariya',
      subtitle: 'Freelance Video Editor',
      image: portfolioData.profileImage || '/dhruv-photo.jpg',
      driveUrl: portfolioData.masterDriveFolder
    },
    {
      id: 'project-commercial',
      type: 'video',
      label: '01 / COMMERCIAL',
      badge: '01',
      title: portfolioData.projects[0]?.title || 'Commercial Brand Film',
      subtitle: 'High-Impact Color & Sound Mix',
      videoUrl: portfolioData.projects[0]?.previewVideoUrl || '/commercial-video.mp4',
      driveUrl: portfolioData.projects[0]?.googleDriveUrl || portfolioData.masterDriveFolder,
      image: portfolioData.projects[0]?.posterImage || getGoogleDriveThumbnail(portfolioData.projects[0]?.googleDriveUrl)
    },
    {
      id: 'project-shortform',
      type: 'video',
      label: '02 / RETENTION',
      badge: '02',
      title: portfolioData.projects[1]?.title || 'Short-Form Viral Reel',
      subtitle: 'Retention-Engineered 9:16 Pacing',
      videoUrl: portfolioData.projects[1]?.previewVideoUrl || '/shortform-video.mp4',
      driveUrl: portfolioData.projects[1]?.googleDriveUrl || portfolioData.masterDriveFolder,
      image: portfolioData.projects[1]?.posterImage || getGoogleDriveThumbnail(portfolioData.projects[1]?.googleDriveUrl)
    },
    {
      id: 'project-cinematic',
      type: 'video',
      label: '03 / CINEMATIC',
      badge: '03',
      title: portfolioData.projects[2]?.title || 'Cinematic Campaign Edit',
      subtitle: 'Film Look Emulation',
      videoUrl: portfolioData.projects[2]?.previewVideoUrl || '/cinematic-video.mp4',
      driveUrl: portfolioData.projects[2]?.googleDriveUrl || portfolioData.masterDriveFolder,
      image: portfolioData.projects[2]?.posterImage || '/cinematic-thumb.jpg'
    },
    {
      id: 'project-ugc',
      type: 'video',
      label: '04 / UGC ADS',
      badge: '04',
      title: portfolioData.projects[3]?.title || 'UGC Direct Response',
      subtitle: 'High-Converting Performance',
      videoUrl: portfolioData.projects[3]?.previewVideoUrl || '/ugc-video.mp4',
      driveUrl: portfolioData.projects[3]?.googleDriveUrl || portfolioData.masterDriveFolder,
      image: portfolioData.projects[3]?.posterImage || getGoogleDriveThumbnail(portfolioData.projects[3]?.googleDriveUrl)
    }
  ];

  const total = carouselItems.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Continuous motion effect: automatically rotates left to right at medium speed
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      // Moves cards continuously from left to right across the 3D orbital arc
      handlePrev();
    }, 3200);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, total]);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const activeItem = carouselItems[activeIndex];

  return (
    <section className="relative min-h-screen bg-[#ECEBE8] text-[#0D0D0D] overflow-hidden flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 px-4 sm:px-6 md:px-12 select-none">
      {/* Precision Crosshairs in Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Crosshairs */}
        <span className="absolute top-28 left-6 sm:left-12 font-mono text-sm text-[#0D0D0D]/40 font-light">+</span>
        <span className="absolute top-28 left-1/4 hidden sm:block font-mono text-sm text-[#0D0D0D]/40 font-light">+</span>
        <span className="absolute top-28 left-2/4 font-mono text-sm text-[#0D0D0D]/40 font-light">+</span>
        <span className="absolute top-28 left-3/4 hidden sm:block font-mono text-sm text-[#0D0D0D]/40 font-light">+</span>
        <span className="absolute top-28 right-6 sm:right-12 font-mono text-sm text-[#0D0D0D]/40 font-light">+</span>

        {/* Mid Crosshairs */}
        <span className="absolute top-80 left-6 sm:left-12 font-mono text-sm text-[#0D0D0D]/40 font-light">+</span>
        <span className="absolute top-80 right-6 sm:right-12 font-mono text-sm text-[#0D0D0D]/40 font-light">+</span>

        {/* Bottom Crosshairs */}
        <span className="absolute bottom-16 left-6 sm:left-12 font-mono text-sm text-[#0D0D0D]/40 font-light">+</span>
        <span className="absolute bottom-16 right-6 sm:right-12 font-mono text-sm text-[#0D0D0D]/40 font-light">+</span>
      </div>

      {/* TOP HEADER ROW: "WELCOME TO MY" & EYE INSIGNIA */}
      <div className="max-w-6xl mx-auto w-full relative z-10 flex items-start justify-between">
        {/* Left: "WELCOME TO MY" */}
        <div className="text-left">
          <span className="font-mono text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#0D0D0D] uppercase block">
            WELCOME
          </span>
          <span className="font-mono text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#0D0D0D] uppercase block">
            TO MY
          </span>
        </div>

        {/* Right: Graphic Eye Emblem */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#0D0D0D]/30 flex items-center justify-center bg-transparent group hover:border-[#E63E26] transition-colors">
          <div className="relative flex items-center justify-center">
            {/* Crosshair accents around the eye */}
            <span className="absolute -top-1 font-mono text-[9px] text-[#0D0D0D] font-bold">✜</span>
            <Eye className="w-5 h-5 text-[#0D0D0D] group-hover:text-[#E63E26] transition-colors stroke-[2]" />
            <span className="absolute -bottom-1 font-mono text-[9px] text-[#0D0D0D] font-bold">✜</span>
          </div>
        </div>
      </div>

      {/* CENTER KINETIC TYPOGRAPHY WITH VERTICAL RED ACCENT BLOCK */}
      <div className="relative my-auto py-4 sm:py-6 max-w-5xl mx-auto w-full z-10 flex flex-col items-center justify-center">
        {/* Staggered Outline and Solid "PORTFOLIO" Typography Layers */}
        <div className="relative z-10 w-full text-center flex flex-col items-center justify-center">
          {/* Solid Crimson Vermilion Red Vertical Bar strictly behind PORTFOLIO letters */}
          <div className="absolute top-0 bottom-0 w-24 sm:w-32 md:w-40 bg-[#E63E26] z-0 rounded-sm pointer-events-none shadow-sm" />
          {/* Top Layer: Outline Echo Kinetic Wave */}
          <motion.div
            initial={{ opacity: 0.65, x: -15 }}
            animate={{ opacity: [0.6, 0.85, 0.6], x: [-24, 18, -24] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="font-display font-black text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tight uppercase leading-[0.85] text-stroke-black select-none pointer-events-none -mb-3 sm:-mb-6"
          >
            PORTFOLIO
          </motion.div>

          {/* Middle Layer: Bold Solid Black */}
          <h1 className="font-display font-black text-5xl sm:text-8xl md:text-9xl lg:text-[11.5rem] tracking-tight uppercase leading-[0.85] text-[#0D0D0D] select-none drop-shadow-sm">
            PORTFOLIO
          </h1>

          {/* Bottom Layer: Outline Echo Kinetic Wave */}
          <motion.div
            initial={{ opacity: 0.65, x: 15 }}
            animate={{ opacity: [0.6, 0.85, 0.6], x: [18, -24, 18] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="font-display font-black text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] tracking-tight uppercase leading-[0.85] text-stroke-black select-none pointer-events-none -mt-3 sm:-mt-6"
          >
            RTFOLIO
          </motion.div>
        </div>

        {/* METADATA ROW BELOW HEADLINE: "CUONG NGUYEN" / "DHRUV DOBARIYA" & "MULTIMEDIA DESIGNER" */}
        <div className="w-full flex items-center justify-between pt-4 sm:pt-6 relative z-10 px-2 sm:px-6">
          {/* Left Side: Name + Navigation Arrow */}
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={handlePrev}
              className="p-1 sm:p-2 rounded-full border border-[#0D0D0D]/20 hover:border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-all text-[#0D0D0D]"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="text-left">
              <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-[#0D0D0D] uppercase block">
                {portfolioData.brandName.toUpperCase()}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#0D0D0D]/60 tracking-wider uppercase block">
                DIRECTOR'S CUT
              </span>
            </div>
          </div>

          {/* Right Side: Role + Navigation Arrow */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="text-right">
              <span className="font-mono text-xs sm:text-sm font-black tracking-widest text-[#0D0D0D] uppercase block">
                FREELANCE VIDEO EDITOR
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#0D0D0D]/60 tracking-wider uppercase block">
                RETENTION & COMMERCIAL
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={handlePrev}
                className="p-1 sm:p-2 rounded-full border border-[#0D0D0D]/20 hover:border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-all text-[#0D0D0D]"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1 sm:p-2 rounded-full border border-[#0D0D0D]/20 hover:border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-all text-[#0D0D0D]"
                aria-label="Next card"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: THE FANNING RADIAL WHEEL CAROUSEL */}
      <div className="relative w-full max-w-5xl mx-auto z-20 pt-2 pb-4 flex flex-col items-center">
        {/* Radial Wheel Container */}
        <div 
          className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] flex items-center justify-center overflow-visible"
          style={{ perspective: 1200 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={(e) => {
            setIsDragging(true);
            dragStartX.current = e.clientX;
          }}
          onMouseMove={(e) => {
            if (!isDragging) return;
            const diff = e.clientX - dragStartX.current;
            if (diff > 50) {
              handlePrev();
              setIsDragging(false);
            } else if (diff < -50) {
              handleNext();
              setIsDragging(false);
            }
          }}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={(e) => {
            setIsDragging(true);
            dragStartX.current = e.touches[0].clientX;
          }}
          onTouchMove={(e) => {
            if (!isDragging) return;
            const diff = e.touches[0].clientX - dragStartX.current;
            if (diff > 50) {
              handlePrev();
              setIsDragging(false);
            } else if (diff < -50) {
              handleNext();
              setIsDragging(false);
            }
          }}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* THE ROTATING CIRCULAR DIAL WHEEL AT THE BOTTOM */}
          <div className="absolute -bottom-48 sm:-bottom-64 w-[380px] sm:w-[500px] md:w-[620px] aspect-square pointer-events-none flex items-center justify-center z-0">
            {/* Smoothly Rotating Wheel Track with Ticks */}
            <motion.div
              animate={{ rotate: -activeIndex * (360 / total) }}
              transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.8 }}
              className="w-full h-full relative flex items-center justify-center"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Outer dashed track */}
                <circle cx="200" cy="200" r="185" fill="none" stroke="#0D0D0D" strokeOpacity="0.3" strokeDasharray="4 6" strokeWidth="1.5" />
                {/* Middle thin ring */}
                <circle cx="200" cy="200" r="165" fill="none" stroke="#0D0D0D" strokeOpacity="0.15" strokeWidth="1" />
                {/* Inner ring */}
                <circle cx="200" cy="200" r="140" fill="none" stroke="#0D0D0D" strokeOpacity="0.08" strokeWidth="1" />
                {/* 36 Radial tick marks around dial */}
                {[...Array(36)].map((_, i) => {
                  const angle = (i * 10 * Math.PI) / 180;
                  const isMajor = i % 3 === 0;
                  const rInner = isMajor ? 170 : 177;
                  const rOuter = 185;
                  const x1 = 200 + rInner * Math.sin(angle);
                  const y1 = 200 - rInner * Math.cos(angle);
                  const x2 = 200 + rOuter * Math.sin(angle);
                  const y2 = 200 - rOuter * Math.cos(angle);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#0D0D0D"
                      strokeOpacity={isMajor ? 0.45 : 0.2}
                      strokeWidth={isMajor ? 1.5 : 1}
                    />
                  );
                })}
              </svg>
            </motion.div>

            {/* Stationary Dial Arrow pointing up at the active card */}
            <div className="absolute top-2 sm:top-4 flex flex-col items-center justify-center z-10 pointer-events-none">
              <span className="text-[#0D0D0D] text-xs font-black">▲</span>
              <span className="font-mono text-[11px] sm:text-xs font-black tracking-widest text-[#0D0D0D] uppercase mt-0.5">
                {activeItem.label}
              </span>
            </div>
          </div>

          {/* THE CARDS FANNING OUT ALONG THE 3D RADIAL ARC */}
          <div
            className="relative w-full h-full flex items-center justify-center transform-gpu"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {carouselItems.map((item, index) => {
              // Calculate offset relative to active card (-2, -1, 0, 1, 2)
              let offset = (index - activeIndex + total) % total;
              if (offset > total / 2) offset -= total;

              // Only show cards within visible window (-2 to +2)
              const isVisible = Math.abs(offset) <= 2;
              if (!isVisible) return null;

              const isCenter = offset === 0;

              // Refined 3D orbital arc geometry with clean horizontal spread
              const absOffset = Math.abs(offset);
              const sign = Math.sign(offset);
              const xTranslate = offset === 0 ? 0 : sign * (absOffset === 1 ? 215 : 395);
              const yTranslate = absOffset === 0 ? 0 : (absOffset === 1 ? 22 : 54);
              const rotation = offset * 11;
              const rotateY = -offset * 14; // Inward 3D tilt
              const scale = isCenter ? 1.06 : (absOffset === 1 ? 0.86 : 0.74);
              const zIndex = isCenter ? 30 : 20 - absOffset * 5;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    x: xTranslate,
                    y: isCenter ? [yTranslate, yTranslate - 6, yTranslate] : yTranslate,
                    rotate: rotation,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: isCenter ? 1 : 0.85 - Math.abs(offset) * 0.08
                  }}
                  transition={
                    isCenter
                      ? {
                          x: { type: 'spring', stiffness: 220, damping: 25 },
                          rotate: { type: 'spring', stiffness: 220, damping: 25 },
                          rotateY: { type: 'spring', stiffness: 220, damping: 25 },
                          scale: { type: 'spring', stiffness: 220, damping: 25 },
                          opacity: { duration: 0.3 },
                          y: {
                            duration: 3.5,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }
                        }
                      : {
                          type: 'spring',
                          stiffness: 220,
                          damping: 25
                        }
                  }
                  style={{ zIndex, transformStyle: 'preserve-3d' }}
                  className={`absolute w-[185px] sm:w-[230px] md:w-[250px] aspect-[9/14] sm:aspect-[9/13] rounded-2xl sm:rounded-3xl cursor-pointer overflow-hidden shadow-2xl transition-shadow ${
                    isCenter ? 'ring-2 ring-[#0D0D0D]/40 shadow-[0_20px_50px_rgba(0,0,0,0.25)]' : 'hover:brightness-105'
                  }`}
                >
                  {/* CARD TYPE 1: "ME" CARD (Author's Photo & Badge - Natural Color) */}
                  {item.type === 'me' && (
                    <div className="relative w-full h-full bg-[#18181B] text-white flex flex-col justify-between p-3.5 sm:p-5">
                      {/* Photo Background (Natural Full Color, No B&W) */}
                      <img
                        src={item.image}
                        alt="Dhruv Dobariya"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                      {/* Top Stamp Header */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold tracking-widest px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/20 text-white">
                          {item.badge}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#E63E26]" />
                      </div>

                      {/* Bottom Info */}
                      <div className="relative z-10 space-y-1">
                        <span className="text-[10px] font-mono tracking-wider text-[#D4D4D8] uppercase block">
                          CREATOR / EDITOR
                        </span>
                        <h3 className="font-display font-black text-base sm:text-lg text-white uppercase tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-neutral-300 font-sans line-clamp-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* CARD TYPE 2: VIDEO CARD (Autoplaying Dhruv's Actual Video Deliverables) */}
                  {item.type === 'video' && (
                    <div className="relative w-full h-full bg-[#0D0D0D] text-white flex flex-col justify-between p-3.5 sm:p-4 group/card">
                      {/* AUTOPLAYING VIDEO LOOP (DHRUV'S DIRECT VIDEOS) */}
                      <video
                        ref={(el) => {
                          if (el) {
                            el.muted = isMuted;
                            el.defaultMuted = true;
                            if (el.paused) {
                              el.play().catch(() => {});
                            }
                          }
                        }}
                        src={item.videoUrl}
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        poster={item.image}
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-95 group-hover/card:brightness-105 transition-all duration-500"
                      >
                        {item.videoUrl && <source src={item.videoUrl} type="video/mp4" />}
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40 pointer-events-none" />

                      {/* Card Top Badges */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-mono text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/20 text-white">
                          {item.badge}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-[#E63E26]" />
                      </div>

                      {/* Card Bottom Info & Drive Link */}
                      <div className="relative z-10 space-y-1">
                        <span className="text-[9px] font-mono tracking-wider text-neutral-400 uppercase block">
                          GOOGLE DRIVE PREVIEW
                        </span>
                        <h3 className="font-display font-bold text-xs sm:text-sm text-white uppercase truncate">
                          {item.title}
                        </h3>
                        <div className="pt-1 flex items-center justify-between text-[9px] font-mono text-neutral-300">
                          <span>STREAMING</span>
                          {item.driveUrl && (
                            <a
                              href={item.driveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-white hover:text-[#E63E26] inline-flex items-center gap-1 font-bold"
                            >
                              <span>DRIVE</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CONTROLS & DIRECT ACTIONS BAR BELOW THE WHEEL */}
        <div className="w-full max-w-2xl mt-4 sm:mt-6 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-t border-[#0D0D0D]/10 px-2 sm:px-4">
          {/* Audio Mute/Unmute Toggle */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0D0D0D]/20 hover:border-[#0D0D0D] bg-white text-[#0D0D0D] transition-colors font-bold text-[10px] sm:text-xs"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#E63E26]" />}
            <span>{isMuted ? 'UNMUTE AUDIO' : 'MUTED'}</span>
          </button>

          {/* Quick 1-Click WhatsApp Chat */}
          <a
            href={`https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20collaborate%20on%20a%20video%20project!`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0D0D0D] hover:bg-[#E63E26] text-white transition-all font-bold text-[10px] sm:text-xs shadow-sm hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CHAT ON WHATSAPP</span>
          </a>

          {/* Master Google Drive Folder Vault */}
          <a
            href={portfolioData.masterDriveFolder || "https://drive.google.com/drive/folders/1-fAPohvDgHQ8tLt3TJAOscRYUVtHhLlL?usp=drive_link"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#0D0D0D]/20 hover:border-[#0D0D0D] bg-white text-[#0D0D0D] hover:text-[#E63E26] transition-colors font-bold text-[10px] sm:text-xs"
          >
            <HardDrive className="w-3.5 h-3.5" />
            <span>4K DRIVE ARCHIVE</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
