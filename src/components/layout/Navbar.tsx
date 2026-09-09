import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'WORK', path: '/work' },
    { name: 'SERVICES', path: '/#services' },
    { name: 'REVIEWS', path: '/#testimonials' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#0A0A0C]/90 backdrop-blur-md border-b border-white/10 shadow-xl'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-wider text-[#F4F4F5] group-hover:text-white transition-colors">
                DHRUV DOBARIYA
              </span>
              <span className="text-[10px] tracking-widest text-[#71717A] uppercase hidden sm:block font-mono">
                VIDEO EDITOR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isExternalOrAnchor = link.path.includes('#');
              const isActive = !isExternalOrAnchor && location.pathname === link.path;

              if (isExternalOrAnchor) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className="text-xs font-mono tracking-widest text-[#A1A1AA] hover:text-white transition-colors py-1 relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-300" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-mono tracking-widest transition-colors py-1 relative group ${
                    isActive ? 'text-white font-semibold' : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-white transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold tracking-wider text-black bg-white hover:bg-neutral-200 rounded-full transition-all duration-300 shadow-sm hover:scale-105"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F4F4F5] hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#0A0A0C]/98 backdrop-blur-2xl md:hidden pt-28 px-6 pb-10 flex flex-col justify-between"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
                NAVIGATION
              </span>
              <div className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display font-bold tracking-tight text-[#F4F4F5] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{portfolioData.contact.availability}</span>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest rounded-full transition-colors shadow-md"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
