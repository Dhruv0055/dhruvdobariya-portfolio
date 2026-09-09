import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, HardDrive } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 text-neutral-400 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand & Profession */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display font-extrabold text-xl md:text-2xl text-white tracking-wider hover:text-neutral-300 transition-colors">
                {portfolioData.brandName.toUpperCase()}
              </span>
            </Link>
            <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              {portfolioData.profession}
            </p>
            <p className="text-sm text-neutral-400 max-w-sm font-sans pt-2">
              Transforming raw footage into high-retention stories, commercial films, and visually compelling digital experiences.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>{portfolioData.contact.location}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono tracking-widest text-white uppercase font-semibold">
              SYSTEM ARCHIVES
            </span>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  All Video Edits
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-white transition-colors">
                  Editing Capabilities
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-white transition-colors">
                  Client Reviews & Results
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About & Tech Stack
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Connect on WhatsApp
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono tracking-widest text-white uppercase font-semibold">
              DIRECT CHANNELS
            </span>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <a
                  href={`https://wa.me/${portfolioData.contact.whatsappNumber}?text=Hi%20Dhruv,%20I'm%20interested%20in%20working%20with%20you%20on%20a%20video%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-xs font-mono text-neutral-500">WHATSAPP:</span>
                  <span className="text-white font-semibold">{portfolioData.contact.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.contact.email}&su=Video%20Editing%20Project%20Inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="text-xs font-mono text-neutral-500">GMAIL:</span>
                  <span className="text-white hover:underline">{portfolioData.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.masterDriveFolder || "https://drive.google.com/drive/folders/1-fAPohvDgHQ8tLt3TJAOscRYUVtHhLlL?usp=drive_link"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <HardDrive className="w-3.5 h-3.5 text-white" />
                  <span className="text-neutral-300 font-medium hover:text-white">Google Drive Master Archive</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {portfolioData.brandName}. SYSTEM ACTIVE.
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-white transition-colors p-2 -mr-2"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-white group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
