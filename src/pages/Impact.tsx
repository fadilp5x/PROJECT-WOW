import React from "react";

interface ImpactProps {
  onNavigate: (path: string) => void;
}

export const Impact: React.FC<ImpactProps> = ({ onNavigate }) => {
  return (
    <div className="page-container bg-[#FAF8F3]">
      {/* Impact Hero */}
      <section className="py-20 md:py-32 border-b border-black/[0.07] bg-grid text-center">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#00545F] text-[#FAF8F3] font-display mb-6">
            PURPOSE & MEASURABLE OUTCOMES
          </span>
          <h1 className="font-display font-bold text-4xl md:text-7xl text-[#08090B] tracking-[-0.04em] leading-[0.95] mb-6">
            Small invisible losses.<br />
            <span className="text-[#CDF22B] bg-[#08090B] px-4 py-1 rounded-2xl inline-block shadow-tactile-dark transform -rotate-1">Bigger consequences.</span>
          </h1>
          <p className="text-xl text-[#08090B]/70 font-body leading-relaxed max-w-2xl mx-auto">
            Understanding hidden resource loss helps us make smarter decisions about time, effort, privacy and information.
          </p>
        </div>
      </section>

      {/* 5 Impact Areas Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light">
            <span className="text-xs font-bold font-display uppercase tracking-wider text-[#00545F] block mb-2">AREA 01</span>
            <h3 className="font-display font-bold text-2xl text-[#08090B] mb-4">Time Awareness</h3>
            <div className="space-y-4 text-xs text-[#08090B]/70 leading-relaxed font-body">
              <p><strong>The Problem:</strong> Waiting rooms, delayed systems, and line queues absorb minutes that quietly add up to days of unrecovered human capability.</p>
              <p><strong>What UNSEEN Reveals:</strong> Empirical queue flow logs, aggregated delay friction, and operational bottlenecks.</p>
              <p><strong>The Improvement:</strong> Streamlined scheduling, queue redesign, and reclaiming high-value productive windows.</p>
            </div>
          </div>

          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light">
            <span className="text-xs font-bold font-display uppercase tracking-wider text-[#00545F] block mb-2">AREA 02</span>
            <h3 className="font-display font-bold text-2xl text-[#08090B] mb-4">Student Productivity</h3>
            <div className="space-y-4 text-xs text-[#08090B]/70 leading-relaxed font-body">
              <p><strong>The Problem:</strong> Fragmentation and untracked passive drift degrade deep learning without students realizing where the hours vanished.</p>
              <p><strong>What UNSEEN Reveals:</strong> Continuous hourly focus distribution, context-switch penalties, and peak retention windows.</p>
              <p><strong>The Improvement:</strong> Intentional study architectures that reduce burnout while expanding academic mastery.</p>
            </div>
          </div>

          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light">
            <span className="text-xs font-bold font-display uppercase tracking-wider text-[#00545F] block mb-2">AREA 03</span>
            <h3 className="font-display font-bold text-2xl text-[#08090B] mb-4">Collaborative Equity</h3>
            <div className="space-y-4 text-xs text-[#08090B]/70 leading-relaxed font-body">
              <p><strong>The Problem:</strong> Group work frequently rewards performative noise over structural contribution, exhausting essential contributors.</p>
              <p><strong>What UNSEEN Reveals:</strong> Participation streams, task completion timelines, and communication balance indicators.</p>
              <p><strong>The Improvement:</strong> Balanced task delegation, empathetic leadership, and fair recognition of quiet effort.</p>
            </div>
          </div>

          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light">
            <span className="text-xs font-bold font-display uppercase tracking-wider text-[#FF4B4B] block mb-2">AREA 04</span>
            <h3 className="font-display font-bold text-2xl text-[#08090B] mb-4">Digital Privacy Awareness</h3>
            <div className="space-y-4 text-xs text-[#08090B]/70 leading-relaxed font-body">
              <p><strong>The Problem:</strong> Default terms and hidden clauses systematically strip users of their personal telemetry and financial markers.</p>
              <p><strong>What UNSEEN Reveals:</strong> Translated permission scopes, background tracker links, and data broker transfer routes.</p>
              <p><strong>The Improvement:</strong> Proactive permission revocation and informed digital autonomy.</p>
            </div>
          </div>

          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light md:col-span-2">
            <span className="text-xs font-bold font-display uppercase tracking-wider text-[#08090B] block mb-2">AREA 05</span>
            <h3 className="font-display font-bold text-2xl text-[#08090B] mb-4">Information Protection & Digital Forensics</h3>
            <div className="grid md:grid-cols-3 gap-4 text-xs text-[#08090B]/70 leading-relaxed font-body">
              <div>
                <strong className="block text-[#08090B] mb-1">The Problem:</strong>
                Casual photo uploads broadcast private residential coordinates, travel patterns, and device serial numbers to unknown recipients.
              </div>
              <div>
                <strong className="block text-[#08090B] mb-1">What UNSEEN Reveals:</strong>
                Raw EXIF, GPS, and timestamp payloads embedded invisibly inside multimedia files.
              </div>
              <div>
                <strong className="block text-[#08090B] mb-1">The Improvement:</strong>
                Automated pre-share sanitization, ensuring shared files tell only the story intended by the creator.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Directive */}
      <section className="py-24 bg-[#08090B] text-[#FAF8F3] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#CDF22B] font-display block mb-4">CORE DIRECTIVE</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight leading-tight mb-8">
            "Visibility is the first step<br />
            <span className="text-[#CDF22B]">towards change."</span>
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto font-body mb-10 leading-relaxed">
            When you measure the invisible, you gain the clarity needed to protect what matters.
          </p>
          <button onClick={() => onNavigate("/tools")} className="btn-tactile-lime inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold font-display">
            Put Intelligence to Work →
          </button>
        </div>
      </section>
    </div>
  );
};
export default Impact;
