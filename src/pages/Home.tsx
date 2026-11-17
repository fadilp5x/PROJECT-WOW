import React from "react";

interface HomeProps {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="page-container">
      {/* A. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center bg-grid overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 55% at 85% 25%, rgba(205, 242, 43, 0.12) 0%, transparent 60%), radial-gradient(ellipse 55% 55% at 15% 75%, rgba(0, 84, 95, 0.08) 0%, transparent 60%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="reveal mb-5">
                <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase font-display bg-[#08090B] text-[#CDF22B] shadow-tactile-light">
                  <span className="w-2 h-2 rounded-full bg-[#CDF22B] shadow-[0_0_8px_#CDF22B]" />
                  RESOURCE INTELLIGENCE PLATFORM
                </span>
              </div>

              <h1 className="reveal delay-1 font-display font-bold leading-[0.92] tracking-[-0.04em] text-[#08090B] mb-6" style={{ fontSize: "clamp(3rem, 7.5vw, 6.2rem)" }}>
                Make the<br />
                <span className="text-[#CDF22B] bg-[#08090B] px-3 py-1 rounded-2xl inline-block shadow-tactile-dark transform -rotate-1 hover:rotate-0 transition-transform">INVISIBLE</span><br />
                VISIBLE.
              </h1>

              <p className="reveal delay-2 text-lg md:text-xl text-[#08090B]/70 leading-relaxed max-w-xl mb-8 font-body">
                Time wasted. Effort unnoticed. Privacy exposed. Discover the hidden losses happening around you — and turn awareness into action.
              </p>

              <div className="reveal delay-3 flex flex-wrap items-center gap-4 mb-9">
                <button onClick={() => onNavigate("/tools")} className="btn-tactile-lime inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold font-display text-base">
                  Explore Our Tools
                  <span className="text-lg">→</span>
                </button>
                <button onClick={() => onNavigate("/about")} className="btn-tactile-secondary inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold font-display text-base">
                  Discover Our Mission
                </button>
              </div>

              <div className="reveal delay-4 flex items-center gap-3 text-xs md:text-sm font-semibold text-[#08090B]/50 font-display">
                <div className="w-3 h-3 rounded-full bg-[#CDF22B] border border-[#08090B]" />
                <span>One platform. <strong className="text-[#00545F] font-bold">Multiple perspectives.</strong> Measurable impact.</span>
              </div>
            </div>

            {/* Right: 3D Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[430px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#CDF22B]/20 via-[#00545F]/10 to-transparent blur-3xl opacity-80 animate-pulse-glow" />

                <svg viewBox="0 0 460 460" fill="none" className="w-full h-full relative z-10 drop-shadow-2xl">
                  <defs>
                    <radialGradient id="homeSphereGrad" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                      <stop offset="25%" stopColor="#D6FB00" />
                      <stop offset="65%" stopColor="#CDF22B" />
                      <stop offset="90%" stopColor="#80A500" />
                      <stop offset="100%" stopColor="#00545F" />
                    </radialGradient>
                    <linearGradient id="homeRibbonFront" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1A1C20" />
                      <stop offset="40%" stopColor="#08090B" />
                      <stop offset="85%" stopColor="#021E18" />
                      <stop offset="100%" stopColor="#CDF22B" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="homeRibbonBack" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#08090B" />
                      <stop offset="60%" stopColor="#14161A" />
                      <stop offset="100%" stopColor="#00545F" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>

                  <circle cx="230" cy="230" r="195" stroke="#CDF22B" strokeWidth="1.2" strokeDasharray="12 16" opacity="0.45" className="animate-spin-slow origin-center" />
                  <circle cx="230" cy="230" r="160" stroke="#00545F" strokeWidth="0.75" strokeDasharray="6 20" opacity="0.35" />

                  <path d="M 60 210 C 60 120, 160 80, 270 90 C 370 100, 420 180, 390 280 C 365 360, 260 410, 160 380 C 90 360, 60 290, 60 210 Z"
                        fill="url(#homeRibbonBack)" stroke="#08090B" strokeWidth="2" opacity="0.95" />

                  <circle cx="230" cy="230" r="76" fill="url(#homeSphereGrad)" />

                  <path d="M 120 130 C 180 180, 230 220, 330 200 C 400 185, 410 270, 350 330 C 280 400, 170 380, 130 310 C 100 250, 160 190, 260 170 C 330 155, 340 100, 270 90 C 200 80, 140 100, 120 130 Z"
                        fill="url(#homeRibbonFront)" stroke="#CDF22B" strokeWidth="1.5" strokeOpacity="0.4" />

                  <rect x="170" y="210" width="160" height="24" rx="12" fill="#FFFFFF" fillOpacity="0.25" transform="rotate(-25 170 210)" />
                </svg>

                <div className="animate-float absolute top-4 right-2 bg-[#08090B]/90 backdrop-blur-md text-[#FAF8F3] border border-[#CDF22B]/30 rounded-2xl p-4 shadow-tactile-dark z-20 min-w-[145px]">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#CDF22B]/80 font-display">Time Lost</span>
                    <span className="w-2 h-2 rounded-full bg-[#CDF22B] animate-ping" />
                  </div>
                  <div className="text-2xl font-bold font-display text-[#CDF22B]">47 min</div>
                  <div className="text-[10px] text-white/50 mt-0.5">unnoticed daily wait</div>
                </div>

                <div className="animate-float-r absolute bottom-6 left-0 bg-[#00545F]/90 backdrop-blur-md text-[#FAF8F3] border border-[#CDF22B]/30 rounded-2xl p-4 shadow-tactile-dark z-20 min-w-[155px]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#ECFFB6] font-display mb-1">Privacy Exposure</div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-display text-white">68%</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#CDF22B] text-[#08090B] font-bold">Unchecked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. THE PROBLEM */}
      <section className="py-20 md:py-28 bg-[#FAF8F3] border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#00545F]/10 text-[#00545F] font-display mb-3">
              THE SILENT REALITY
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-[#08090B] tracking-tight mb-4">
              What if you could see <span className="text-[#CDF22B] bg-[#08090B] px-2 py-0.5 rounded-xl inline-block shadow-tactile-dark">what you're losing?</span>
            </h2>
            <p className="text-[#08090B]/70 leading-relaxed font-body">
              Some of the biggest losses happen silently. We experience them every day, but rarely measure their true impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: "⏱", cat: "TIME", title: "Minutes Disappear", desc: "Public queues and uncalculated friction quietly steal productive daily hours." },
              { icon: "⚡", cat: "EFFORT", title: "Contributions Overlooked", desc: "Quiet individual dedication remains unacknowledged in group dynamics." },
              { icon: "🔒", cat: "PRIVACY", title: "Personal Data Exposed", desc: "Unread terms and broad permissions quietly trade your digital sovereignty." },
              { icon: "🎯", cat: "OPPORTUNITY", title: "Hours Wasted", desc: "Students and creators lose peak focus cycles to untracked routine drift." },
              { icon: "📷", cat: "INFORMATION", title: "Hidden Metadata", desc: "Images travel with embedded GPS coordinates and device fingerprints." },
            ].map((p, idx) => (
              <div key={idx} className="card-unseen bg-white p-6 rounded-3xl border border-[#08090B]/10 shadow-tactile-light hover:border-[#CDF22B]">
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="text-xs font-bold text-[#00545F] font-display mb-1">{p.cat}</div>
                <h3 className="font-display font-bold text-base text-[#08090B] mb-2">{p.title}</h3>
                <p className="text-xs text-[#08090B]/65 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. FEATURED TOOLS */}
      <section className="py-20 md:py-28 bg-[#FAF8F3] border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[#CDF22B] text-[#08090B] font-display mb-3 shadow-tactile-light">
                INTELLIGENCE SUITE
              </span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-[#08090B] tracking-tight">
                Five tools designed to <span className="text-[#CDF22B] bg-[#08090B] px-2 py-0.5 rounded-xl inline-block shadow-tactile-dark">reveal the unseen.</span>
              </h2>
            </div>
            <button onClick={() => onNavigate("/tools")} className="btn-tactile-dark inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold font-display self-start md:self-auto">
              View All Tools →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="card-unseen bg-white rounded-3xl border border-[#08090B]/10 p-7 shadow-tactile-light hover:border-[#CDF22B] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00545F] font-display px-2.5 py-1 rounded-full bg-[#00545F]/10 inline-block mb-4">Time Analysis</span>
                <h3 className="font-display font-bold text-xl text-[#08090B] mb-2">Time Intelligence</h3>
                <p className="text-xs text-[#08090B]/70 leading-relaxed mb-6">Understand delays, wait-time friction, and lost hours in public queues.</p>
              </div>
              <button onClick={() => onNavigate("/tools#tool-time")} className="text-xs font-bold text-[#08090B] hover:text-[#00545F] font-display text-left">Explore Tool →</button>
            </div>

            <div className="card-unseen bg-[#08090B] text-[#FAF8F3] rounded-3xl border border-[#CDF22B]/30 p-7 shadow-tactile-dark flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#CDF22B] font-display px-2.5 py-1 rounded-full bg-[#CDF22B]/10 inline-block mb-4">Productivity</span>
                <h3 className="font-display font-bold text-xl text-white mb-2">Student Time Tracker</h3>
                <p className="text-xs text-white/70 leading-relaxed mb-6">Analyze daily student routines and turn unproductive habits into deep focus.</p>
              </div>
              <button onClick={() => onNavigate("/tools#tool-student")} className="text-xs font-bold text-[#CDF22B] hover:underline font-display text-left">Explore Tool →</button>
            </div>

            <div className="card-unseen bg-white rounded-3xl border border-[#08090B]/10 p-7 shadow-tactile-light hover:border-[#CDF22B] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00545F] font-display px-2.5 py-1 rounded-full bg-[#00545F]/10 inline-block mb-4">Collaboration</span>
                <h3 className="font-display font-bold text-xl text-[#08090B] mb-2">Group Contribution</h3>
                <p className="text-xs text-[#08090B]/70 leading-relaxed mb-6">Analyze message distribution and participation patterns objectively.</p>
              </div>
              <button onClick={() => onNavigate("/tools#tool-group")} className="text-xs font-bold text-[#08090B] hover:text-[#00545F] font-display text-left">Explore Tool →</button>
            </div>
          </div>
        </div>
      </section>

      {/* D. HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-[#08090B] text-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#CDF22B] font-display mb-2 block">METHODOLOGY</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
              From invisible <span className="text-[#CDF22B]">to undeniable.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", step: "COLLECT", desc: "Bring your data, activities or information securely." },
              { num: "02", step: "ANALYSE", desc: "Let intelligent systems identify hidden friction and leaks." },
              { num: "03", step: "REVEAL", desc: "Transform complex parameters into visual clarity." },
              { num: "04", step: "IMPROVE", desc: "Use verifiable insights to make smarter, sharper decisions." },
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#CDF22B] text-[#08090B] font-display font-bold text-lg flex items-center justify-center mx-auto mb-4">{s.num}</div>
                <h3 className="font-display font-bold text-base mb-1 text-white">{s.step}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. FINAL CTA */}
      <section className="py-24 bg-[#FAF8F3] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#08090B] tracking-tight mb-5">
            Ready to see what <span className="text-[#CDF22B] bg-[#08090B] px-3 py-0.5 rounded-2xl inline-block shadow-tactile-dark">others miss?</span>
          </h2>
          <p className="text-lg text-[#08090B]/70 mb-8 max-w-xl mx-auto font-body">
            Explore a smarter way to understand the hidden losses around you.
          </p>
          <button onClick={() => onNavigate("/tools")} className="btn-tactile-lime inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-base font-bold font-display">
            Explore the Tools Directory →
          </button>
        </div>
      </section>
    </div>
  );
};
export default Home;
