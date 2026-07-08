'use client';

import Link from 'next/link';
import Image from 'next/image';
import { sendGAEvent } from '@next/third-parties/google';
import Reveal from '@/components/ui/Reveal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24 min-h-[100dvh] lg:min-h-screen flex items-center bg-[#050507]" id="hero">
      
      {/* Background — Blueprint AEC Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[55%] h-[55%] rounded-full bg-[radial-gradient(circle,var(--color-glow-subtle)_0%,transparent_65%)] blur-[100px]"></div>
        <div className="absolute top-[30%] -right-[5%] w-[45%] h-[45%] rounded-full bg-[radial-gradient(circle,rgba(34,72,163,0.02)_0%,transparent_65%)] blur-[120px]"></div>
      </div>
      {/* Blueprint grid — architectural crosshair pattern */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34,72,163,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34,72,163,0.03) 1px, transparent 1px),
            linear-gradient(to right, rgba(34,72,163,0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34,72,163,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '96px 96px, 96px 96px, 24px 24px, 24px 24px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, #000 20%, transparent 100%)'
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-8 items-center">
        
        {/* Left Content Area */}
        <div className="w-full max-w-[650px] lg:max-w-full relative">
          <Reveal>
            {/* Avatar & Title Row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10 ring-4 ring-brand/10 shadow-lg shrink-0">
                <Image src="/images/profile-photo.jpg" alt="Hossam Sabry" fill sizes="64px" className="object-cover" />
              </div>
              <div>
                <h2 className="text-[16px] font-bold text-white tracking-wide">Hossam Sabry</h2>
                <p className="text-[12px] text-text-2 font-semibold">BIM Structural Engineer</p>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={50}>
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 text-[11px] md:text-[13px] font-semibold tracking-wide text-text-1 mb-4 md:mb-5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(34,72,163,0.1)] hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_#4ade80]"></span>
              </span>
              Available for Opportunities <span className="text-white/30 mx-1">&bull;</span> Alexandria, Egypt
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            {/* Main Headline */}
            <h1 className="font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.03em] mb-4 text-white">
              Structural BIM &amp; <br className="hidden lg:block" />
              <span className="relative inline-block mt-1">
                <span className="absolute -inset-2 bg-brand/20 blur-3xl rounded-full"></span>
                <span
                  className="relative animate-gradient-text"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #3B63C9, #2248A3, #3B63C9)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  AEC Automation.
                </span>
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-[1.05rem] md:text-[1.15rem] text-text-2 leading-relaxed mb-5 md:mb-6 max-w-[90%] font-medium">
              BIM Structural Engineer specializing in 3D structural modeling, shop drawings, clash detection, and custom Revit API / Dynamo coding to automate technical office workflows.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-8">
              {/* Button-in-Button CTA */}
              <Link onClick={() => sendGAEvent('event', 'hero_cta_click', { button: 'explore_work' })} href="#work" className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden shadow-[0_0_40px_rgba(34,72,163,0.15)] hover:shadow-[0_0_60px_rgba(34,72,163,0.35)] hover:-translate-y-1">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand via-blue-400 to-brand opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center gap-2.5">
                  Explore My Work
                  {/* Nested icon circle — Button-in-Button */}
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </span>
              </Link>
              <Link 
                href="/#contact" 
                onClick={(e) => {
                  sendGAEvent('event', 'hero_cta_click', { button: 'get_in_touch' });
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '/#contact');
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-semibold text-text-1 hover:text-white bg-transparent border border-border-1 hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            {/* Key Stats - Professional Variant */}
            <div className="flex flex-wrap items-center gap-x-8 md:gap-x-12 gap-y-6 pt-6 border-t border-white/5">
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">2</span>
                <span className="text-sm text-text-2 font-medium">Technical Internships</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">5<span className="text-brand">+</span></span>
                <span className="text-sm text-text-2 font-medium">BIM &amp; RC Projects</span>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">2</span>
                <span className="text-sm text-text-2 font-medium">AEC Fellowships</span>
              </div>
            </div>
          </Reveal>
        </div>
        
        {/* Right Content - Visual Panel */}
        <div className="w-full relative mt-16 lg:mt-0 flex flex-col gap-6">
          <Reveal delay={300} className="relative z-10">
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-b from-brand/20 via-blue-500/10 to-transparent rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none"></div>
            
            {/* Premium Glassmorphic Card containing Revit Model Preview */}
            <div className="relative group bg-[#0A0A0C] border border-white/10 rounded-[2rem] p-5 lg:p-6 hover:bg-[#0F0F13] hover:border-brand/40 transition-all duration-500 shadow-2xl overflow-hidden">
              <div className="absolute -inset-px bg-gradient-to-b from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none"></div>

              {/* Title & Status */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-light font-bold">Revit Structural Modeling</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand/10 border border-brand/20 text-brand-light text-[9px] font-bold uppercase tracking-wider">
                  Active Model
                </span>
              </div>

              {/* Image Preview */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#121216] mb-4 shadow-inner">
                <Image 
                  src="/projects/revit-course/revit-course-01.png" 
                  alt="UAE HSC Tower Revit Model" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" 
                  priority
                  loading="eager"
                />
              </div>

              {/* BIM Model Specifications */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4 relative z-10">
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">UAE HSC</div>
                  <div className="text-[10px] text-text-3 font-semibold uppercase tracking-wider mt-1">Structure</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">12</div>
                  <div className="text-[10px] text-text-3 font-semibold uppercase tracking-wider mt-1">Slab Levels</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white tracking-tight">RC Core</div>
                  <div className="text-[10px] text-text-3 font-semibold uppercase tracking-wider mt-1">Framing System</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Laser line accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
    </section>
  );
}

