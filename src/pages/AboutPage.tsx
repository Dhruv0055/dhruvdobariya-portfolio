import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ServicesSection } from '../components/home/ServicesSection';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
      {/* Top Bio & Portrait Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait */}
        <div className="lg:col-span-5">
          <ScrollReveal direction="right">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 aspect-[4/5] shadow-2xl group">
              <img
                src={portfolioData.profileImage || "/dhruv-photo.jpg"}
                alt="Dhruv Dobariya - Video Editor"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="font-display font-bold text-xl text-white block">
                  {portfolioData.brandName}
                </span>
                <span className="text-xs font-mono text-neutral-400 block uppercase font-bold">
                  {portfolioData.profession}
                </span>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-1">
                  <Globe className="w-3.5 h-3.5 text-white" />
                  <span>{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Bio & Philosophy */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <ScrollReveal direction="down">
              <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase block mb-2 font-semibold">
                ABOUT DHRUV DOBARIYA
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight text-white leading-[1.12]">
                TURNING RAW FOOTAGE <br />
                <span className="text-neutral-400">
                  INTO IMPACT.
                </span>
              </h1>
            </ScrollReveal>
          </div>

          <div className="space-y-4">
            {portfolioData.bio.map((para, i) => (
              <ScrollReveal key={i} delay={0.1 * (i + 1)}>
                <p className="text-base sm:text-lg text-neutral-400 font-sans font-light leading-relaxed">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Core Values */}
          <ScrollReveal delay={0.4}>
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-white">
              <div className="flex items-center gap-2.5 p-3.5 bg-neutral-900/60 border border-white/10 rounded-xl hover:border-white/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Audience Retention Pacing</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 bg-neutral-900/60 border border-white/10 rounded-xl hover:border-white/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>DaVinci Resolve Color Science</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 bg-neutral-900/60 border border-white/10 rounded-xl hover:border-white/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Surgical Multi-Track Audio Mix</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 bg-neutral-900/60 border border-white/10 rounded-xl hover:border-white/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>24-48 Hour Turnaround Speeds</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Editing Philosophy */}
      <section className="bg-neutral-900/60 border border-white/10 rounded-2xl p-8 sm:p-12 md:p-16 space-y-8 shadow-2xl">
        <div className="space-y-2 max-w-2xl">
          <span className="font-mono text-xs text-neutral-400 tracking-widest uppercase font-semibold">
            THE EDITING PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase">
            WHY EDITING MATTERS MORE THAN GEAR.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-white/10 text-sm text-neutral-400 font-sans leading-relaxed">
          <div className="space-y-2">
            <span className="font-mono text-xs text-white block uppercase font-bold">
              01 / The First 3 Seconds
            </span>
            <p>
              In digital video, you don't have minutes to establish a mood. The hook, visual pattern interrupt, and opening audio cue must grab viewers instantly.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-white block uppercase font-bold">
              02 / Rhythm Over Flash
            </span>
            <p>
              Over-edited videos feel exhausting. Great editing is musical: knowing when to speed up the cut, when to let a quiet frame breathe, and when to drop the bass.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-white block uppercase font-bold">
              03 / Uncompromising Delivery
            </span>
            <p>
              Full color grading, matched sound design, custom subtitle graphics, and multi-format master exports in clean 4K/UHD without clipping.
            </p>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <ServicesSection />

      {/* Bottom CTA */}
      <section className="text-center py-16 space-y-6 border-t border-white/10">
        <h3 className="text-3xl sm:text-4xl font-display font-bold text-white">
          LET'S WORK TOGETHER.
        </h3>
        <p className="text-sm text-neutral-400 max-w-md mx-auto">
          Have raw footage ready to transform? Let's discuss your project scope directly on WhatsApp or Gmail.
        </p>
        <div className="pt-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-neutral-200 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl hover:scale-[1.02]"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
