import React from "react";
import { TOOLS_DATA } from "../data/tools";

interface ToolsProps {
  onNavigate: (path: string) => void;
}

export const Tools: React.FC<ToolsProps> = ({ onNavigate }) => {
  return (
    <div className="page-container bg-[#FAF8F3]">
      {/* Laboratory Hero */}
      <section className="py-16 md:py-24 border-b border-black/[0.08] relative overflow-hidden bg-grid" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#08090B] text-[#CDF22B] font-display mb-5 shadow-tactile-light">
            THE UNSEEN TOOLKIT // LABORATORY
          </span>
          <h1 className="font-display font-bold text-4xl md:text-7xl text-[#08090B] tracking-[-0.04em] leading-[0.95] mb-6">
            Discover what<br />
            <span className="text-[#CDF22B] bg-[#08090B] px-4 py-1 rounded-2xl inline-block shadow-tactile-dark transform -rotate-1">you've been missing.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#08090B]/75 font-body leading-relaxed max-w-2xl mx-auto mb-10">
            Five intelligent perspectives. One mission. Revealing the things that usually go unnoticed.
          </p>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white/80 p-2 rounded-2xl border border-[#08090B]/10 shadow-sm max-w-2xl mx-auto">
            {TOOLS_DATA.map((tool, idx) => (
              <a
                key={tool.id}
                href={`#${tool.id}`}
                className="tool-tab px-3.5 py-1.5 rounded-xl text-xs font-bold font-display text-[#08090B] hover:bg-[#CDF22B]/30 transition-colors"
              >
                0{idx + 1} // {tool.category.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Distinct Tool Presentations */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-24">
        
        {/* TOOL 01: Time Intelligence */}
        <section id="tool-time" className="scroll-mt-28 bg-white rounded-3xl border-2 border-[#08090B]/10 p-8 md:p-14 shadow-tactile-light">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00545F]/10 text-[#00545F] text-xs font-bold font-display mb-4">
                <span>CATEGORY 01</span> <span>//</span> <span>TIME ANALYSIS</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-[#08090B] tracking-tight leading-tight mb-4">
                "Time doesn't disappear.<br />
                <span className="text-[#CDF22B] bg-[#08090B] px-2 py-0.5 rounded-xl inline-block shadow-tactile-dark">It gets lost."</span>
              </h2>
              <p className="text-[#08090B]/70 leading-relaxed font-body text-base mb-6">
                Understand waiting time and delays in public queues. Reveal hidden friction, measure wasted collective hours, and identify concrete opportunities for infrastructural improvement.
              </p>
              <div className="space-y-3 mb-8 text-xs text-[#08090B]/80 font-mono">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> Aggregate wait-time decay analytics</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> Bottleneck friction point detection</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> Counterfactual productivity loss simulation</div>
              </div>
              <button className="btn-tactile-dark inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold font-display">
                Launch Time Intelligence →
              </button>
            </div>

            <div className="lg:col-span-6 bg-[#FAF8F3] rounded-2xl border border-[#08090B]/10 p-6 md:p-8">
              <div className="flex items-center justify-between text-xs font-bold font-display text-[#08090B]/50 mb-4">
                <span>LIVE QUEUE FLOW METRIC</span>
                <span className="text-[#FF4B4B] animate-pulse">● 32m Latency</span>
              </div>
              <div className="h-48 bg-white rounded-xl border border-[#08090B]/10 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-full border-2 border-[#08090B] flex items-center justify-center relative">
                    <div className="w-1 h-5 bg-[#08090B] absolute top-2 rounded" />
                    <div className="w-4 h-1 bg-[#CDF22B] absolute right-3 rounded" />
                    <div className="w-2 h-2 rounded-full bg-[#08090B]" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-display text-[#08090B]">02h 45m</div>
                    <div className="text-[10px] text-[#08090B]/50 font-display">Weekly Unseen Delay</div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[10px] font-bold text-[#08090B]/60 font-display flex justify-between">
                    <span>Physical Line Queue</span>
                    <span className="text-[#FF4B4B]">64% idle wait</span>
                  </div>
                  <div className="w-full bg-[#08090B]/10 h-3 rounded-full overflow-hidden flex">
                    <div className="bg-[#00545F] h-full w-[26%]" />
                    <div className="bg-[#FF4B4B] h-full w-[64%]" />
                    <div className="bg-[#CDF22B] h-full w-[10%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOOL 02: Student Time Tracker */}
        <section id="tool-student" className="scroll-mt-28 bg-[#08090B] text-[#FAF8F3] rounded-3xl border border-[#CDF22B]/30 p-8 md:p-14 shadow-tactile-dark">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CDF22B]/10 text-[#CDF22B] text-xs font-bold font-display mb-4">
                <span>CATEGORY 02</span> <span>//</span> <span>PRODUCTIVITY</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight mb-4">
                "Every hour<br />
                <span className="text-[#CDF22B]">tells a story."</span>
              </h2>
              <p className="text-white/70 leading-relaxed font-body text-base mb-6">
                Understand how students distribute their time, isolate fragmentation patterns, and discover structured opportunities to protect energy and master daily academic routines.
              </p>
              <div className="space-y-3 mb-8 text-xs text-white/80 font-mono">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> Deep cognitive flow vs. fragmentation auditing</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> Passive context-switching measurement</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> Personalized study routine synthesis</div>
              </div>
              <button className="btn-tactile-lime inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold font-display">
                Explore Student Tracker →
              </button>
            </div>

            <div className="lg:col-span-6 lg:order-1 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="text-xs font-bold font-display text-[#CDF22B] mb-4">HOURLY FOCUS DISTRIBUTION</div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-16 font-mono text-white/60">08:00</span>
                  <div className="flex-1 bg-[#CDF22B] h-6 rounded-lg text-[#08090B] font-bold px-3 flex items-center text-[10px]">Deep Math Flow (94%)</div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-16 font-mono text-white/60">11:30</span>
                  <div className="flex-1 bg-[#FF4B4B]/80 h-6 rounded-lg text-white font-bold px-3 flex items-center text-[10px]">Fragmented Multitasking Leak (22%)</div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-16 font-mono text-white/60">15:00</span>
                  <div className="flex-1 bg-[#00545F] h-6 rounded-lg text-white font-bold px-3 flex items-center text-[10px]">Research Synthesis (81%)</div>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl text-center text-xs text-white/60">
                Recoverable productive capacity: <strong className="text-[#CDF22B]">+3.4 hours/day</strong>
              </div>
            </div>
          </div>
        </section>

        {/* TOOL 03: Group Contribution */}
        <section id="tool-group" className="scroll-mt-28 bg-white rounded-3xl border border-[#08090B]/10 p-8 md:p-14 shadow-tactile-light">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00545F]/10 text-[#00545F] text-xs font-bold font-display mb-4">
                <span>CATEGORY 03</span> <span>//</span> <span>COLLABORATION INTELLIGENCE</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-[#08090B] tracking-tight leading-tight mb-4">
                "See the effort behind<br />
                <span className="text-[#CDF22B] bg-[#08090B] px-2 py-0.5 rounded-xl inline-block shadow-tactile-dark">every message."</span>
              </h2>
              <p className="text-[#08090B]/70 leading-relaxed font-body text-base mb-6">
                Upload exported group conversations and let AI analyze participation patterns, timeline involvement, and distribution balance across collaborative teams.
              </p>
              <div className="p-4 rounded-2xl bg-[#FAF8F3] border-l-4 border-[#00545F] text-xs text-[#08090B]/80 font-body leading-relaxed mb-8">
                <strong className="text-[#00545F] font-bold block mb-1">Ethical Analysis Notice:</strong>
                Message activity alone is an indicator of involvement, not definitive proof of effort, substantive quality, or true collaborative impact.
              </div>
              <button className="btn-tactile-dark inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold font-display">
                Explore Group Analyzer →
              </button>
            </div>

            <div className="lg:col-span-6 bg-[#FAF8F3] rounded-2xl border border-[#08090B]/10 p-6 md:p-8">
              <div className="text-xs font-bold font-display text-[#08090B]/60 mb-4">COLLABORATION DYNAMICS MAP</div>
              <div className="h-48 bg-white rounded-xl border border-[#08090B]/10 p-4 flex items-center justify-center relative">
                <div className="w-16 h-16 rounded-full bg-[#CDF22B] text-[#08090B] font-bold font-display flex items-center justify-center text-xs shadow-tactile-light z-10">Lead (42%)</div>
                <div className="w-10 h-10 rounded-full bg-[#00545F] text-white text-[10px] font-bold flex items-center justify-center absolute left-8 top-4">P1 (28%)</div>
                <div className="w-10 h-10 rounded-full bg-[#00545F] text-white text-[10px] font-bold flex items-center justify-center absolute right-8 top-6">P2 (18%)</div>
                <div className="w-8 h-8 rounded-full bg-[#FF4B4B]/80 text-white text-[9px] font-bold flex items-center justify-center absolute bottom-4">P3 (12%)</div>
              </div>
            </div>
          </div>
        </section>

        {/* TOOL 04: Privacy & Terms Analyzer */}
        <section id="tool-privacy" className="scroll-mt-28 bg-[#08090B] text-[#FAF8F3] rounded-3xl border border-[#CDF22B]/30 p-8 md:p-14 shadow-tactile-dark">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4B4B]/20 text-[#FF4B4B] text-xs font-bold font-display mb-4">
                <span>CATEGORY 04</span> <span>//</span> <span>DIGITAL PRIVACY</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-tight mb-4">
                "Before you agree,<br />
                <span className="text-[#CDF22B]">understand."</span>
              </h2>
              <p className="text-white/70 leading-relaxed font-body text-base mb-6">
                Understand app permissions and legal terms. Discover what personal information, financial identifiers, background sensors, and digital access an application actually requests.
              </p>
              <div className="space-y-3 mb-8 text-xs text-white/80 font-mono">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FF4B4B]" /> Precise Background Geolocation harvesting flags</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#FF4B4B]" /> Third-party data broker transmission mapping</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> Plain-language rights revocation guidance</div>
              </div>
              <button className="btn-tactile-lime inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold font-display">
                Explore Privacy Analyzer →
              </button>
            </div>

            <div className="lg:col-span-6 lg:order-1 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="text-xs font-bold font-display text-[#FF4B4B] mb-4">UNINSPECTED PERMISSION AUDIT</div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#FF4B4B]/10 border border-[#FF4B4B]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📍</span>
                    <div>
                      <div className="text-xs font-bold text-white font-display">Continuous GPS Tracking</div>
                      <div className="text-[10px] text-white/60">Active even when app is terminated</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FF4B4B] text-white">HIGH RISK</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">💳</span>
                    <div>
                      <div className="text-xs font-bold text-white font-display">Cross-App Financial Telemetry</div>
                      <div className="text-[10px] text-white/60">Third-party advertising identifier link</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FF4B4B] text-white">CRITICAL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOOL 05: Image Metadata Intelligence */}
        <section id="tool-metadata" className="scroll-mt-28 bg-white rounded-3xl border border-[#08090B]/10 p-8 md:p-14 shadow-tactile-light">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CDF22B] text-[#08090B] text-xs font-bold font-display mb-4">
                <span>CATEGORY 05</span> <span>//</span> <span>DIGITAL FORENSICS</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-[#08090B] tracking-tight leading-tight mb-4">
                "Your images have<br />
                <span className="text-[#CDF22B] bg-[#08090B] px-2 py-0.5 rounded-xl inline-block shadow-tactile-dark">hidden stories."</span>
              </h2>
              <p className="text-[#08090B]/70 leading-relaxed font-body text-base mb-6">
                Inspect image metadata to discover available capture devices, timestamps, and embedded GPS coordinates. Create a cleaned copy with sensitive metadata removed before sharing.
              </p>
              <div className="space-y-3 mb-8 text-xs text-[#08090B]/80 font-mono">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> EXIF, IPTC, and XMP tag parser</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> Embedded latitude/longitude map pinning</div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#CDF22B]" /> Zero-loss metadata stripping & sanitization</div>
              </div>
              <button className="btn-tactile-dark inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold font-display">
                Explore Metadata Analyzer →
              </button>
            </div>

            <div className="lg:col-span-6 bg-[#FAF8F3] rounded-2xl border border-[#08090B]/10 p-6 md:p-8">
              <div className="text-xs font-bold font-display text-[#08090B]/60 mb-4">METADATA AUDIT PREVIEW</div>
              <div className="bg-white rounded-xl border border-[#08090B]/10 p-5 font-mono text-xs space-y-2 text-[#08090B]/80">
                <div className="flex justify-between border-b border-black/5 pb-1">
                  <span className="text-[#08090B]/50">Device Make:</span>
                  <span className="font-bold">Apple iPhone 15 Pro</span>
                </div>
                <div className="flex justify-between border-b border-black/5 pb-1 text-[#FF4B4B] font-bold">
                  <span>GPS Coordinates:</span>
                  <span>37.7749° N, 122.4194° W</span>
                </div>
                <button className="w-full mt-3 py-2 rounded-lg bg-[#CDF22B] text-[#08090B] font-display font-bold text-xs shadow-sm">
                  Sanitize & Download Clean Copy
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
export default Tools;
