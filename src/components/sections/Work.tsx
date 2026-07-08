'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';

interface GalleryImage {
  src: string;
  caption: string;
}

const galleries: Record<string, GalleryImage[]> = {
  'revit-structural': [
    { src: '/projects/revit-structural/revit-structural-3d-front.jpg', caption: '3D Isometric View - Front Angle' },
    { src: '/projects/revit-structural/revit-structural-3d-side.jpg', caption: '3D Isometric View - Side Angle' },
    { src: '/projects/revit-structural/revit-structural-elevation1.jpg', caption: 'Structural Elevation View 1' },
    { src: '/projects/revit-structural/revit-structural-elevation2.jpg', caption: 'Structural Elevation View 2' },
    { src: '/projects/revit-structural/revit-structural-section1.jpg', caption: 'Structural Section View 1' },
    { src: '/projects/revit-structural/revit-structural-section2.jpg', caption: 'Structural Section View 2' },
  ],
  'revit-course': [
    { src: '/projects/revit-course/revit-course-01.png', caption: 'UAE HSC Tower - 3D Render' },
    { src: '/projects/revit-course/revit-course-02.png', caption: 'UAE HSC Tower - Structural Framing Plan' },
    { src: '/projects/revit-course/revit-course-03.png', caption: 'UAE HSC Tower - Elevation View' },
    { src: '/projects/revit-course/revit-course-04.png', caption: 'UAE HSC Tower - Concrete Core Detail' },
    { src: '/projects/revit-course/revit-course-05.png', caption: 'UAE HSC Tower - Foundation Plan' },
    { src: '/projects/revit-course/revit-course-06.png', caption: 'UAE HSC Tower - Typical Column Schedule' },
    { src: '/projects/revit-course/revit-course-07.png', caption: 'UAE HSC Tower - 3D Skeleton Wireframe' },
    { src: '/projects/revit-course/revit-course-08.png', caption: 'UAE HSC Tower - 3D Structural Detail' },
  ]
};

export default function Work() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (key: string) => {
    setActiveGallery(key);
    setCurrentIndex(0);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeGallery) return;
    setCurrentIndex((prev) => (prev === 0 ? galleries[activeGallery].length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeGallery) return;
    setCurrentIndex((prev) => (prev === galleries[activeGallery].length - 1 ? 0 : prev + 1));
  };

  const selectThumb = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const galleryImages = activeGallery ? galleries[activeGallery] : [];

  return (
    <section className="py-24 bg-[#050507] relative overflow-hidden" id="work">
      {/* Background Deep Glow & Noise */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-glow-subtle)] blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      ></div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-text-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
              Selected Work
            </div>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight mb-4 text-white">
              Selected{' '}
              <span
                className="animate-gradient-text"
                style={{
                  backgroundImage: 'linear-gradient(to right, #3B63C9, #2248A3, #3B63C9)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                }}
              >
                Projects
              </span>
            </h2>
            <p className="text-[1.1rem] text-text-2 max-w-2xl font-medium leading-relaxed">
              Showcasing structural modeling, drawing templates, baseline scheduling, and custom engineering automation systems.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(400px,auto)]">
          
          {/* Card 1: UAE HSC Tower - Revit Course Project */}
          <Reveal className="col-span-1 md:col-span-8 h-full">
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
              <div 
                onClick={() => openGallery('revit-course')} 
                className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-8 hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row gap-8 relative overflow-hidden shadow-2xl cursor-pointer"
              >
                <div className="absolute -inset-px bg-gradient-to-b from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] pointer-events-none"></div>

                <div className="flex-1 flex flex-col relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-light font-bold">Revit Structural &middot; BIM Modeling</span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-all duration-300 group-hover:scale-110">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 group-hover:text-brand-light transition-colors">UAE HSC Tower Project</h3>
                  <p className="text-[0.95rem] text-text-2 leading-relaxed mb-6 font-medium">
                    A complex high-rise structural tower modeled in Autodesk Revit. Highlights multi-story structural framing systems, structural core modeling, level constraints, foundation detailing, and professional BIM documentation templates.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 mt-auto">
                    <div>
                      <div className="text-xl font-bold text-white">8 Technical</div>
                      <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em]">Views Loaded</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">High-Rise</div>
                      <div className="text-[10px] text-text-3 font-bold uppercase tracking-[0.15em]">Tower Scope</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 relative min-h-[220px] md:min-h-0 rounded-2xl overflow-hidden border border-white/5 bg-[#121216]">
                  <Image src="/projects/revit-course/revit-course-01.png" alt="UAE HSC Tower structural rendering" fill sizes="(max-width: 768px) 100vw, 50vw" quality={90} className="object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 animate-in fade-in" />
                  <div className="absolute bottom-3 right-3 bg-black/75 border border-white/10 rounded-md px-2 py-1 text-[10px] font-mono text-white flex items-center gap-1.5">
                    <span>📷 8 Photos</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 2: Revit Structural Model - RC Frame */}
          <Reveal className="col-span-1 md:col-span-4 h-full" delay={100}>
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
              <div 
                onClick={() => openGallery('revit-structural')} 
                className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 flex flex-col relative overflow-hidden hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 shadow-2xl cursor-pointer"
              >
                <div className="absolute -inset-px bg-gradient-to-b from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-light font-bold">5-Story RC Frame &middot; Revit</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors">RC Frame Model</h3>
                <p className="text-[0.9rem] text-text-2 leading-relaxed mb-6 font-medium">
                  Detailed 5-story reinforced concrete frame structure modeled in Autodesk Revit, featuring foundational systems, beams, columns, level elevations, and section details.
                </p>

                <div className="relative h-[180px] mt-auto rounded-xl overflow-hidden border border-white/5 bg-[#121216]">
                  <Image src="/projects/revit-structural/revit-structural-3d-front.jpg" alt="RC Frame model rendering" fill sizes="(max-width: 768px) 100vw, 30vw" quality={90} className="object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute bottom-3 right-3 bg-black/75 border border-white/10 rounded-md px-2 py-1 text-[10px] font-mono text-white">
                    📷 6 Views
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Card 3: BIM Automation Tool */}
          <Reveal className="col-span-1 md:col-span-7 h-full" delay={150}>
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
              <a href="/case-studies/bim-automation-tool.html" className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 flex flex-col relative overflow-hidden hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 shadow-2xl">
                <div className="absolute -inset-px bg-gradient-to-b from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-light font-bold">Revit API &middot; C# &middot; WPF</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors">BIM Automation Exporter</h3>
                <p className="text-[0.9rem] text-text-2 leading-relaxed mb-6 font-medium">
                  Custom Revit API add-in built during automation training. Replaces tedious manual export workflows with single-click batch sheet exports to DWG with automated naming structures and schedule extractions.
                </p>

                <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4 mt-auto mb-2">
                  <div>
                    <div className="text-lg font-bold text-white">~65%</div>
                    <div className="text-[9px] text-text-3 font-bold uppercase tracking-wider">Time Saved</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">500+</div>
                    <div className="text-[9px] text-text-3 font-bold uppercase tracking-wider">Sheets Exported</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">C#</div>
                    <div className="text-[9px] text-text-3 font-bold uppercase tracking-wider">Revit API</div>
                  </div>
                </div>
              </a>
            </SpotlightCard>
          </Reveal>

          {/* Card 4: Dynamo Script Library */}
          <Reveal className="col-span-1 md:col-span-5 h-full" delay={200}>
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(250, 204, 21, 0.15)">
              <a href="/case-studies/dynamo-scripts.html" className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 flex flex-col relative overflow-hidden hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 shadow-2xl">
                <div className="absolute -inset-px bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-yellow-400 font-bold">Dynamo &middot; Python</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">Dynamo Script Library</h3>
                <p className="text-[0.9rem] text-text-2 leading-relaxed mb-6 font-medium">
                  Collection of modular Dynamo script tools for Revit. Automates repetitive room numbering, sheet configuration setup, and key parameters audit checks using Python nodes.
                </p>

                <div className="relative h-[150px] mt-auto rounded-xl overflow-hidden border border-white/5 bg-[#121216]">
                  <Image src="/images/dynamo-hero.png" alt="Dynamo visual programming workspace" fill sizes="(max-width: 768px) 100vw, 30vw" quality={90} className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
              </a>
            </SpotlightCard>
          </Reveal>

          {/* Card 5: Primavera P6 Project */}
          <Reveal className="col-span-1 md:col-span-5 h-full" delay={250}>
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
              <a 
                href="/docs/pm4.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 flex flex-col relative overflow-hidden hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute -inset-px bg-gradient-to-b from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-light font-bold">Primavera P6 &middot; Project Controls</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </div>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors">Primavera Scheduling</h3>
                <p className="text-[0.9rem] text-text-2 leading-relaxed mb-6 font-medium">
                  Detailed baseline schedule generation and progress tracking documentation for construction projects, outlining milestones, resource tracking, and critical path analysis.
                </p>

                <div className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-xs font-semibold text-text-2 mt-auto hover:bg-white/[0.08] transition-colors">
                  <span className="text-brand-light text-lg">📄</span>
                  <div>
                    <div className="text-white font-bold text-[11px]">PM4_Schedule_Controls.pdf</div>
                    <div className="text-[9px] text-text-3 font-mono">Open PDF in new tab</div>
                  </div>
                </div>
              </a>
            </SpotlightCard>
          </Reveal>

          {/* Card 6: Graduation Project - Concrete Properties */}
          <Reveal className="col-span-1 md:col-span-7 h-full" delay={300}>
            <SpotlightCard className="h-full rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
              <div className="group h-full bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 flex flex-col relative overflow-hidden hover:bg-[#0F0F13] hover:border-white/10 hover:-translate-y-1 transition-all duration-500 shadow-2xl">
                <div className="absolute -inset-px bg-gradient-to-b from-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-light font-bold">Research &middot; Alexandria University</span>
                  <span className="self-start shrink-0 text-[9px] font-mono font-bold uppercase tracking-wider text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded">
                    Grade: Excellent
                  </span>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors">Concrete Properties & QS Project</h3>
                <p className="text-[0.9rem] text-text-2 leading-relaxed mb-6 font-medium">
                  Tested concrete structural behavior under heavy loads and environmental conditions. Analyzed strength and durability gains with modern chemical admixtures. In addition, completed structural quantity surveying for a 10-floor residential structure.
                </p>

                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 mt-auto">
                  <div>
                    <div className="text-lg font-bold text-white">Concrete Testing</div>
                    <div className="text-[9px] text-text-3 font-bold uppercase tracking-wider">Physical Lab & Analysis</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">10-Story Building</div>
                    <div className="text-[9px] text-text-3 font-bold uppercase tracking-wider">Quantity Surveying</div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

        </div>

        {/* Post-section CTA */}
        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="text-text-3 text-sm font-medium">Interested in working together?</p>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-white border border-white/10 bg-white/5 hover:border-brand/50 hover:bg-brand/10 hover:shadow-[0_0_30px_rgba(34,72,163,0.3)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Let&apos;s Work Together
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          </div>
        </Reveal>
      </div>

      {/* REACT LIGHTBOX GALLERY MODAL */}
      {activeGallery && (
        <div 
          className="fixed inset-0 z-50 bg-[#050507]/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-6 cursor-default"
          onClick={() => setActiveGallery(null)}
        >
          <div 
            className="bg-[#0A0A0C] border border-white/10 rounded-[1.5rem] p-6 max-w-[900px] w-full relative overflow-hidden flex flex-col gap-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-colors z-20 text-xl font-bold cursor-pointer"
              onClick={() => setActiveGallery(null)}
            >
              &times;
            </button>

            <h3 className="font-heading text-lg font-bold text-white border-b border-white/5 pb-3">
              {activeGallery === 'revit-course' ? 'UAE HSC Tower - Revit Structural Views' : '5-Story RC Frame - Revit Views'}
            </h3>

            {/* Main Active Image View */}
            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center">
              <Image 
                src={galleryImages[currentIndex].src} 
                alt={galleryImages[currentIndex].caption} 
                fill 
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-contain" 
                priority
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer text-lg"
              >
                &#8249;
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer text-lg"
              >
                &#8250;
              </button>
            </div>

            {/* Caption Text */}
            <div className="text-center text-text-2 text-sm py-1 font-medium bg-white/[0.02] border border-white/5 rounded-md">
              {galleryImages[currentIndex].caption}
            </div>

            {/* Thumbnails Row */}
            <div className="flex gap-2 overflow-x-auto py-2 px-1 max-w-full justify-start md:justify-center border-t border-white/5">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={(e) => selectThumb(e, idx)}
                  className={`relative w-16 md:w-20 aspect-[16/10] rounded-md overflow-hidden border-2 cursor-pointer transition-colors shrink-0 ${idx === currentIndex ? 'border-brand' : 'border-white/10 hover:border-white/30'}`}
                >
                  <Image src={img.src} alt="Thumbnail view" fill sizes="80px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
