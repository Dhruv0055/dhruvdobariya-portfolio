import React from 'react';
import { Mail, MessageSquare, Globe, Clock, ArrowUpRight, HardDrive } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const ContactPage: React.FC = () => {
  const gmailDirectUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}&su=Video%20Editing%20Project%20Inquiry`;
  const whatsAppDirectUrl = `https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv,%20I%20saw%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20video%20editing%20project.`;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900 border border-white/10 rounded-full text-xs font-mono text-neutral-300">
            <span>DIRECT CONNECT</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-[0.95]">
            LET'S CREATE <br />
            <span className="text-neutral-400">
              SOMETHING GREAT.
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-base sm:text-lg md:text-xl text-neutral-400 font-sans font-light leading-relaxed">
            Ready to turn your raw footage into engaging, high-retention videos? Connect directly with Dhruv via WhatsApp or Gmail.
          </p>
        </ScrollReveal>
      </div>

      {/* Main Grid: Direct Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* WhatsApp Direct */}
        <ScrollReveal delay={0.1}>
          <a
            href={whatsAppDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-between space-y-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 font-semibold tracking-wider block uppercase">
                  FASTEST RESPONSE
                </span>
                <h2 className="text-3xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors pt-1">
                  WhatsApp Direct
                </h2>
              </div>
              <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
                Click here to start a direct 1-on-1 chat with Dhruv on WhatsApp at <strong className="text-white">{portfolioData.contact.whatsapp}</strong>. Best for quick project inquiries, turnarounds, and pricing.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white font-bold">
              <span>OPEN WHATSAPP NOW</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        </ScrollReveal>

        {/* Gmail Direct */}
        <ScrollReveal delay={0.2}>
          <a
            href={gmailDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-between space-y-8 transition-all duration-300 hover:shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-neutral-400 font-semibold tracking-wider block uppercase">
                  INQUIRIES & BRIEFS
                </span>
                <h2 className="text-3xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors pt-1">
                  Direct Gmail
                </h2>
              </div>
              <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
                Click here to write an email directly to <strong className="text-white">{portfolioData.contact.email}</strong>. Send Google Drive footage folders, reference links, and narrative scripts.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white font-bold">
              <span>COMPOSE IN GMAIL</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        </ScrollReveal>
      </div>

      {/* Info Banner & Socials */}
      <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Clock className="w-4 h-4 text-white" />
            <span>AVAILABILITY</span>
          </div>
          <span className="font-display font-bold text-base text-white block">
            {portfolioData.contact.availability}
          </span>
          <span className="text-xs text-neutral-500 font-sans block">Avg. response within 12 hours</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <Globe className="w-4 h-4 text-white" />
            <span>LOCATION & REMOTE</span>
          </div>
          <span className="font-display font-bold text-base text-white block">
            {portfolioData.contact.location}
          </span>
          <span className="text-xs text-neutral-500 font-sans block">Collaborating with creators worldwide</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <HardDrive className="w-4 h-4 text-white" />
            <span>DRIVE FOLDER & RAW ASSETS</span>
          </div>
          <a
            href={portfolioData.masterDriveFolder}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-white hover:underline flex items-center gap-1 pt-1 font-semibold"
          >
            <span>OPEN DRIVE FOLDER ARCHIVE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
