import Reveal from '@/components/ui/Reveal';
import SpotlightCard from '@/components/ui/SpotlightCard';

export default function Experience() {
  return (
    <section className="relative py-32 bg-[#050507] overflow-hidden" id="experience">
      
      {/* Background removed for cleaner obsidian look */}

      {/* Subtle Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[40%] right-[5%] w-[40%] h-[40%] rounded-full bg-[radial-gradient(circle,var(--color-glow-subtle)_0%,transparent_60%)] blur-[100px]"></div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 w-full relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-2 font-bold">Background</span>
          </div>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight mb-16 text-white">
            Experience
          </h2>
        </Reveal>
        
        <div className="relative pl-10 md:pl-12 max-w-[700px]">
          {/* Glowing Vertical Line */}
          <div className="absolute left-0 top-3 bottom-0 w-px bg-gradient-to-b from-brand via-white/10 to-transparent"></div>

          {/* Internship 1 */}
          <div className="relative pb-16">
            <Reveal delay={100}>
              {/* Glowing Dot with Pulse */}
              <div className="absolute -left-[45px] md:-left-[53px] top-1.5 flex items-center justify-center w-[11px] h-[11px]">
                <div className="absolute w-[22px] h-[22px] rounded-full bg-brand/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <div className="relative w-full h-full rounded-full bg-brand shadow-[0_0_12px_rgba(34,72,163,0.8)] border-2 border-[#050507]"></div>
              </div>
              
              <SpotlightCard className="rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
                <div className="group bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 lg:p-8 hover:bg-[#0F0F13] hover:border-brand/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">Technical Office & Site Intern</h3>
                      <p className="text-[14px] text-text-2 font-medium">GLOBAL ENERGY FOR INVESTMENT & INDUSTRY</p>
                    </div>
                    <span className="self-start shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      May 2026 — Jul 2026
                    </span>
                  </div>
                  <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                    Worked on the Al Burouj Project (one villa unit of 40 in the development). Prepared structural shop drawings and quantity take-offs/BOQs from Revit and AutoCAD BIM models. Reviewed structural drawings against BIM standards and design workflows, flagging discrepancies before they reached the field. Prepared RFIs and submittals, and participated in site inspections to monitor structural execution.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Revit Structural</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">AutoCAD</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Shop Drawings</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">BOQ</span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Internship 2 */}
          <div className="relative pb-16">
            <Reveal delay={150}>
              {/* Subtle Dot */}
              <div className="absolute -left-[43px] md:-left-[51px] top-1.5 w-[7px] h-[7px] rounded-full bg-white/20 border-2 border-[#050507]"></div>
              
              <SpotlightCard className="rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
                <div className="group bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 lg:p-8 hover:bg-[#0F0F13] hover:border-brand/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">Technical Office Intern</h3>
                      <p className="text-[14px] text-text-2 font-medium">Aqar Masr Developments – Anakaji Project</p>
                    </div>
                    <span className="self-start shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      Jul 2024 — Sep 2024
                    </span>
                  </div>
                  <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                    Worked on the Anakaji commercial compound project in the New Capital (10 building clusters, 800 units). Developed and updated structural BIM models in Revit, reviewed clash detection reports, and coordinated conflict resolutions with MEP and architectural teams. Prepared BOQs, structural shop drawings, and quantity take-offs using Revit, AutoCAD, and Excel.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Revit</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Clash Detection</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">MEP Coordination</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Quantity Surveying</span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Training 1 */}
          <div className="relative pb-16">
            <Reveal delay={200}>
              {/* Subtle Dot */}
              <div className="absolute -left-[43px] md:-left-[51px] top-1.5 w-[7px] h-[7px] rounded-full bg-white/20 border-2 border-[#050507]"></div>
              
              <SpotlightCard className="rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
                <div className="group bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 lg:p-8 hover:bg-[#0F0F13] hover:border-brand/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">BIM Automation Program</h3>
                      <p className="text-[14px] text-text-2 font-medium">Information Technology Institute (ITI)</p>
                    </div>
                    <span className="self-start shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      Professional Training
                    </span>
                  </div>
                  <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                    Specialized study of BIM authoring tools and APIs for engineering workflows. Built solid programming foundations in C#, object-oriented programming (OOP), and MVVM to write custom scripts for Revit and AutoCAD APIs, covering database fundamentals and xBIM for structured data workflows.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Revit API</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Dynamo</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">AutoCAD API</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">C# / OOP</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">xBIM</span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Training 2 */}
          <div className="relative pb-16">
            <Reveal delay={250}>
              {/* Subtle Dot */}
              <div className="absolute -left-[43px] md:-left-[51px] top-1.5 w-[7px] h-[7px] rounded-full bg-white/20 border-2 border-[#050507]"></div>
              
              <SpotlightCard className="rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
                <div className="group bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 lg:p-8 hover:bg-[#0F0F13] hover:border-brand/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">Full Stack .NET Developer</h3>
                      <p className="text-[14px] text-text-2 font-medium">Digital Egypt Pioneers Initiative (DEPI)</p>
                    </div>
                    <span className="self-start shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      DEPI Training
                    </span>
                  </div>
                  <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                    Built deep foundations in C# programming and object-oriented architecture, directly applicable to Revit API plugin development. Created full-stack web applications using ASP.NET Core MVC and SQL Server, and practiced Git version control, unit testing, and collaborative team delivery.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">C# / OOP</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">ASP.NET Core</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">SQL Server</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Git / Testing</span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Education */}
          <div className="relative pb-6">
            <Reveal delay={300}>
              {/* Subtle Dot */}
              <div className="absolute -left-[43px] md:-left-[51px] top-1.5 w-[7px] h-[7px] rounded-full bg-white/20 border-2 border-[#050507]"></div>
              
              <SpotlightCard className="rounded-[1.5rem]" spotlightColor="rgba(34,72,163,0.15)">
                <div className="group bg-[#0A0A0C] border border-white/5 rounded-[1.5rem] p-6 lg:p-8 hover:bg-[#0F0F13] hover:border-brand/30 transition-all duration-500 shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors duration-300">B.Sc. in Civil Engineering</h3>
                      <p className="text-[14px] text-text-2 font-medium">Alexandria University | Alexandria, Egypt</p>
                    </div>
                    <span className="self-start shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      Sep 2019 — Jul 2025
                    </span>
                  </div>
                  <p className="text-[14px] text-text-3 leading-relaxed mb-6">
                    Graduated with a focus on Structural Engineering. Graduation Project: <strong>Structural Behavior & Material Properties Resistance of Concrete</strong> (Grade: <strong>Excellent</strong>). Tested structural performance under varying loads, evaluated strength/durability changes from admixtures, and completed full structural quantity surveying for a 10-floor residential building.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Structural Behavior</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Concrete Resistance</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-mono text-text-2 group-hover:border-brand/20 group-hover:text-text-1 transition-all duration-300">Quantity Surveying</span>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
