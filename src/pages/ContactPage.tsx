import React from 'react';
import { Mail, MessageSquare, Globe, Clock, ArrowUpRight, HardDrive } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const ContactPage: React.FC = () => {
  const gmailDirectUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}&su=Video%20Editing%20Project%20Inquiry`;
  const whatsAppDirectUrl = `https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv,%20I%20saw%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20video%20editing%20project.`;

  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-8 sm:space-y-16">
      {/* Header */}
      <div className="space-y-3 sm:space-y-4 max-w-3xl">
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-neutral-900 border border-white/10 rounded-full text-[11px] sm:text-xs font-mono text-neutral-300">
            <span>DIRECT CONNECT</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.12]">
            LET'S CREATE <br />
            <span className="text-neutral-400">
              SOMETHING GREAT.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xs sm:text-lg md:text-xl text-neutral-400 font-sans font-light leading-relaxed">
            Ready to turn your raw footage into engaging, high-retention videos? Connect directly with Dhruv via WhatsApp or Gmail.
          </p>
        </ScrollReveal>
      </div>

      {/* Main Grid: Direct Channels - 2-column on mobile so both sit side-by-side */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-8 items-stretch">
        {/* WhatsApp Direct */}
        <ScrollReveal delay={0.1}>
          <a
            href={whatsAppDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-xl sm:rounded-2xl p-3.5 sm:p-10 flex flex-col justify-between space-y-3 sm:space-y-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="space-y-2 sm:space-y-4">
              <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-white/10 text-white flex items-center justify-center">
                <MessageSquare className="w-4 h-4 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="text-[9px] sm:text-xs font-mono text-neutral-400 font-semibold tracking-wider block uppercase">
                  FASTEST
                </span>
                <h2 className="text-sm sm:text-3xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors pt-0.5 sm:pt-1 truncate">
                  WhatsApp
                </h2>
              </div>
              <p className="text-[11px] sm:text-base text-neutral-400 font-sans leading-relaxed line-clamp-2 sm:line-clamp-none">
                Direct 1-on-1 chat at <strong className="text-white">{portfolioData.contact.whatsapp}</strong>.
              </p>
            </div>

            <div className="pt-2 sm:pt-6 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-xs font-mono text-white font-bold">
              <span className="truncate">OPEN CHAT</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
            </div>
          </a>
        </ScrollReveal>

        {/* Gmail Direct */}
        <ScrollReveal delay={0.2}>
          <a
            href={gmailDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-xl sm:rounded-2xl p-3.5 sm:p-10 flex flex-col justify-between space-y-3 sm:space-y-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="space-y-2 sm:space-y-4">
              <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-lg sm:rounded-2xl bg-white/10 text-white flex items-center justify-center">
                <Mail className="w-4 h-4 sm:w-7 sm:h-7" />
              </div>
              <div>
                <span className="text-[9px] sm:text-xs font-mono text-neutral-400 font-semibold tracking-wider block uppercase">
                  DIRECT EMAIL
                </span>
                <h2 className="text-sm sm:text-3xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors pt-0.5 sm:pt-1 truncate">
                  Direct Gmail
                </h2>
              </div>
              <p className="text-[11px] sm:text-base text-neutral-400 font-sans leading-relaxed line-clamp-2 sm:line-clamp-none">
                Write directly to <strong className="text-white">{portfolioData.contact.email}</strong>.
              </p>
            </div>

            <div className="pt-2 sm:pt-6 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-xs font-mono text-white font-bold">
              <span className="truncate">COMPOSE</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
            </div>
          </a>
        </ScrollReveal>
      </div>

      {/* Info Banner & Socials */}
      <div className="bg-neutral-900/60 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 shadow-xl">
        <div className="space-y-0.5 sm:space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-neutral-400">
            <Clock className="w-3.5 h-3.5 text-white" />
            <span>AVAILABILITY</span>
          </div>
          <span className="font-display font-bold text-sm sm:text-base text-white block">
            {portfolioData.contact.availability}
          </span>
          <span className="text-[10px] sm:text-xs text-neutral-500 font-sans block">Avg. response within 12 hours</span>
        </div>

        <div className="space-y-0.5 sm:space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-neutral-400">
            <Globe className="w-3.5 h-3.5 text-white" />
            <span>LOCATION & REMOTE</span>
          </div>
          <span className="font-display font-bold text-sm sm:text-base text-white block">
            {portfolioData.contact.location}
          </span>
          <span className="text-[10px] sm:text-xs text-neutral-500 font-sans block">Collaborating worldwide</span>
        </div>

        <div className="space-y-0.5 sm:space-y-1">
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-neutral-400">
            <HardDrive className="w-3.5 h-3.5 text-white" />
            <span>DRIVE FOLDER & ASSETS</span>
          </div>
          <a
            href={portfolioData.masterDriveFolder}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs font-mono text-white hover:underline flex items-center gap-1 pt-0.5 font-semibold"
          >
            <span>OPEN DRIVE FOLDER</span>
            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
