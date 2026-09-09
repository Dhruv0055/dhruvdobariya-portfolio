import React from 'react';
import { Mail, MessageSquare, ArrowUpRight, HardDrive } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';
import { InstagramIcon, LinkedinIcon } from '../ui/BrandIcons';

export const ContactCTA: React.FC = () => {
  const gmailDirectUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}&su=Video%20Editing%20Project%20Inquiry`;
  const whatsAppDirectUrl = `https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv,%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20collaborating%20on%20a%20video%20project.`;

  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <ScrollReveal direction="down">
            <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase block font-semibold">
              LET'S TALK
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase tracking-tight text-white leading-[0.95]">
              HAVE A PROJECT <br />
              <span className="text-neutral-400">
                IN MIND?
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-400 font-sans font-light leading-relaxed max-w-2xl mx-auto pt-2">
              Reach out directly on WhatsApp or Gmail to discuss your footage, editing style, deadlines, and pricing.
            </p>
          </ScrollReveal>
        </div>

        {/* Direct Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* WhatsApp Card */}
          <ScrollReveal delay={0.2}>
            <a
              href={whatsAppDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-2xl p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 font-semibold tracking-wider block uppercase">
                    INSTANT CHAT
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors">
                    Chat on WhatsApp
                  </h3>
                </div>
                <p className="text-sm text-neutral-400">
                  {portfolioData.contact.whatsapp} — Fast replies for video project scopes and availability.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white font-bold">
                <span>START WHATSAPP CHAT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          </ScrollReveal>

          {/* Direct Gmail Card */}
          <ScrollReveal delay={0.3}>
            <a
              href={gmailDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group h-full bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-2xl p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 font-semibold tracking-wider block uppercase">
                    DIRECT EMAIL
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-neutral-200 transition-colors">
                    Send a Direct Email
                  </h3>
                </div>
                <p className="text-sm text-neutral-400">
                  {portfolioData.contact.email} — Send footage links, references, and project briefs.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white font-bold">
                <span>OPEN IN GMAIL / WEB CLIENT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          </ScrollReveal>
        </div>

        {/* Secondary Channels & Master Vault */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {/* Google Drive Vault */}
            <a
              href={portfolioData.masterDriveFolder || "https://drive.google.com/drive/folders/1-fAPohvDgHQ8tLt3TJAOscRYUVtHhLlL?usp=drive_link"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-xl flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <HardDrive className="w-4 h-4 text-white" />
                <span className="text-xs font-mono text-white font-semibold">Drive Master Folder</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Instagram */}
            <a
              href={portfolioData.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-xl flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                <span className="text-xs font-mono text-white">Instagram</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
            </a>

            {/* LinkedIn */}
            <a
              href={portfolioData.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-neutral-900/60 border border-white/10 hover:border-white/30 rounded-xl flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                <span className="text-xs font-mono text-white">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
