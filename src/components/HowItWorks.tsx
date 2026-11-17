import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    label: "COLLECT",
    title: "Bring your data",
    description: "Import your activities, files, conversations or information into UNSEEN for analysis.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="20" stroke="#CDF22B" strokeWidth="1.5" strokeDasharray="6 3" />
        <path d="M24 14 L24 34 M14 24 L34 24" stroke="#CDF22B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "ANALYSE",
    title: "Uncover patterns",
    description: "Intelligent systems identify hidden patterns, invisible losses and overlooked insights within your data.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M8 36 L18 22 L26 28 L36 14" stroke="#CDF22B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="12" r="4" fill="rgba(205,242,43,0.3)" stroke="#CDF22B" strokeWidth="1.5" />
        <circle cx="8" cy="36" r="3" fill="rgba(205,242,43,0.2)" stroke="#CDF22B" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "REVEAL",
    title: "Transform insights",
    description: "Complex information becomes clear, understandable visualizations that expose what was previously invisible.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <ellipse cx="24" cy="24" rx="18" ry="10" stroke="#CDF22B" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="6" fill="rgba(205,242,43,0.25)" stroke="#CDF22B" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="2.5" fill="#CDF22B" />
        <line x1="6" y1="24" x2="12" y2="24" stroke="#CDF22B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="36" y1="24" x2="42" y2="24" stroke="#CDF22B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    label: "IMPROVE",
    title: "Act with clarity",
    description: "Use those insights to make better decisions, reclaim what was lost and create meaningful change.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M12 32 L24 16 L36 32" stroke="#CDF22B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="38" r="4" fill="rgba(205,242,43,0.3)" stroke="#CDF22B" strokeWidth="1.5" />
        <line x1="24" y1="16" x2="24" y2="34" stroke="#CDF22B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="how"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#08090B" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 20% 50%, rgba(0,84,95,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 50%, rgba(205,242,43,0.05) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(205,242,43,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(205,242,43,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ background: "rgba(205,242,43,0.08)", color: "rgba(205,242,43,0.7)", fontFamily: "'Space Grotesk', sans-serif", border: "1px solid rgba(205,242,43,0.15)" }}
          >
            How It Works
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em", color: "#FAF8F3" }}
          >
            From invisible{" "}
            <span style={{ color: "#CDF22B" }}>to undeniable.</span>
          </h2>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 flex items-center px-16" aria-hidden="true">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 h-px origin-left"
              style={{
                background: "linear-gradient(90deg, #CDF22B, rgba(0,84,95,0.5), #CDF22B, rgba(0,84,95,0.3))",
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step node */}
                <div
                  className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: "rgba(205,242,43,0.08)",
                    border: "1px solid rgba(205,242,43,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(205,242,43,0.25)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(205,242,43,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(205,242,43,0.25)";
                  }}
                >
                  {step.icon}
                  {/* Step number badge */}
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#CDF22B", color: "#08090B", fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Label */}
                <span
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: "rgba(205,242,43,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.label}
                </span>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "#FAF8F3", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "rgba(250,248,243,0.4)" }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5 relative"
            >
              {/* Vertical line connector */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-9 top-20 bottom-0 w-px"
                  style={{ background: "linear-gradient(to bottom, rgba(205,242,43,0.3), transparent)" }}
                  aria-hidden="true"
                />
              )}

              {/* Node */}
              <div
                className="w-18 h-18 w-[72px] h-[72px] flex-shrink-0 rounded-full flex items-center justify-center relative z-10"
                style={{ background: "rgba(205,242,43,0.08)", border: "1px solid rgba(205,242,43,0.2)" }}
              >
                {step.icon}
              </div>

              {/* Content */}
              <div className="pb-10 pt-1 flex-1">
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "rgba(205,242,43,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.label}
                </span>
                <h3
                  className="text-lg font-bold mt-1 mb-2"
                  style={{ color: "#FAF8F3", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(250,248,243,0.4)" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
