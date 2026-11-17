import React from "react";

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="page-container bg-[#FAF8F3]">
      {/* Editorial Hero */}
      <section className="py-20 md:py-32 border-b border-black/[0.07] relative overflow-hidden bg-grid">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#08090B] text-[#CDF22B] font-display mb-6 shadow-tactile-light">
            THE UNSEEN MANIFESTO
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-[#08090B] tracking-[-0.04em] leading-[0.92] mb-8">
            Not everything lost<br />
            <span className="text-[#CDF22B] bg-[#08090B] px-4 py-1 rounded-2xl inline-block shadow-tactile-dark transform -rotate-1">is visible.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#08090B]/80 font-body leading-relaxed max-w-3xl mx-auto font-light">
            UNSEEN was created to reveal the invisible losses that influence our everyday lives. We believe that understanding what goes unnoticed is the first step towards meaningful change.
          </p>
        </div>
      </section>

      {/* 01 & 02: Our Story and Our Mission */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#00545F] font-display block mb-2">01 // THE GENESIS</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#08090B] mb-6 tracking-tight">Our Story</h2>
            <div className="space-y-4 text-[#08090B]/70 leading-relaxed font-body text-base">
              <p>
                Modern life is filled with high-resolution dashboards for things that are easy to count: bank balances, social likes, and battery percentages. Yet the resources that truly shape human well-being disappear silently.
              </p>
              <p>
                We wait in queues without measuring the collective human hours extinguished. We agree to digital terms without understanding the personal identity markers surrendered. We collaborate in teams where the quietest contributors bear the heaviest loads unnoticed.
              </p>
              <p>
                UNSEEN was founded as an analytical antidote to this systemic blindness — turning intangible resource leaks into explicit, actionable clarity.
              </p>
            </div>
          </div>
          <div className="bg-[#08090B] text-[#FAF8F3] p-10 md:p-12 rounded-3xl border border-[#CDF22B]/30 shadow-tactile-dark">
            <span className="text-xs font-bold tracking-widest uppercase text-[#CDF22B] font-display block mb-2">02 // THE DIRECTIVE</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 tracking-tight">Our Mission</h2>
            <p className="text-white/80 text-lg leading-relaxed font-body mb-6">
              To make hidden resource losses <strong className="text-[#CDF22B] font-bold">understandable, measurable and actionable</strong> through intelligent analytical tools.
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/60 leading-relaxed font-mono">
              TARGET: Time friction, collaborative inequity, uninspected permissions, and embedded digital forensic trails.
            </div>
          </div>
        </div>
      </section>

      {/* 03: Our Vision */}
      <section className="py-20 md:py-28 bg-[#08090B] text-[#FAF8F3] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#CDF22B] font-display block mb-3">03 // THE HORIZON</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight mb-6">Our Vision</h2>
          <p className="text-xl md:text-2xl text-white/80 font-body leading-relaxed max-w-3xl mx-auto font-light mb-10">
            To build a world where individuals, educators, and organizations make better, more deliberate decisions through heightened awareness and uncompromising analytical transparency.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#CDF22B]/10 border border-[#CDF22B]/30 text-[#CDF22B] font-display font-bold text-sm">
            <span>Awareness</span> <span>→</span> <span>Measurement</span> <span>→</span> <span>Action</span>
          </div>
        </div>
      </section>

      {/* 04: What We Believe */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#00545F] font-display block mb-2">04 // FOUNDATIONAL PRINCIPLES</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#08090B] tracking-tight">What We Believe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light">
            <div className="text-[#CDF22B] font-display font-bold text-2xl mb-3">01</div>
            <h3 className="font-display font-bold text-xl text-[#08090B] mb-2">Awareness creates change.</h3>
            <p className="text-xs text-[#08090B]/70 leading-relaxed font-body">You cannot solve a leak you don't acknowledge. Illumination is the prerequisite of all reform.</p>
          </div>
          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light">
            <div className="text-[#00545F] font-display font-bold text-2xl mb-3">02</div>
            <h3 className="font-display font-bold text-xl text-[#08090B] mb-2">Data should create understanding.</h3>
            <p className="text-xs text-[#08090B]/70 leading-relaxed font-body">Analytical tools must simplify reality rather than generating cognitive fatigue and numerical clutter.</p>
          </div>
          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light">
            <div className="text-[#08090B] font-display font-bold text-2xl mb-3">03</div>
            <h3 className="font-display font-bold text-xl text-[#08090B] mb-2">Every contribution matters.</h3>
            <p className="text-xs text-[#08090B]/70 leading-relaxed font-body">Healthy collaboration honors all forms of participation without reducing humans to raw message counts.</p>
          </div>
          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light">
            <div className="text-[#FF4B4B] font-display font-bold text-2xl mb-3">04</div>
            <h3 className="font-display font-bold text-xl text-[#08090B] mb-2">Privacy deserves transparency.</h3>
            <p className="text-xs text-[#08090B]/70 leading-relaxed font-body">No user should surrender financial or biological coordinates in exchange for basic application utility.</p>
          </div>
          <div className="card-unseen p-8 rounded-3xl bg-white border border-[#08090B]/10 shadow-tactile-light md:col-span-2">
            <div className="text-[#CDF22B] font-display font-bold text-2xl mb-3">05</div>
            <h3 className="font-display font-bold text-xl text-[#08090B] mb-2">Resources deserve better management.</h3>
            <p className="text-xs text-[#08090B]/70 leading-relaxed font-body">Time and human energy are finite, non-renewable assets. Protecting them from invisible friction is a moral imperative.</p>
          </div>
        </div>
      </section>

      {/* 05: Next step */}
      <section className="py-20 bg-[#FAF8F3] border-t border-black/[0.07] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-xs font-bold tracking-widest uppercase text-[#00545F] font-display block mb-2">05 // OUR APPROACH</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#08090B] mb-6">Built to reveal what matters.</h2>
          <p className="text-base text-[#08090B]/70 leading-relaxed font-body mb-8">
            Explore our full suite of five analytical engines designed to bring these principles into practical daily operation.
          </p>
          <button onClick={() => onNavigate("/tools")} className="btn-tactile-lime inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold font-display">
            Explore the Intelligence Suite →
          </button>
        </div>
      </section>
    </div>
  );
};
export default About;
