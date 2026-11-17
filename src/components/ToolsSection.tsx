import { motion } from "framer-motion";

// Tool card type
interface Tool {
  id: number;
  category: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  visual: React.ReactNode;
  dark?: boolean;
  featured?: boolean;
}

// Abstract visual components for each tool
function TimeVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      {/* Clock rings */}
      <svg viewBox="0 0 120 120" className="w-28 h-28 float-anim-slow" fill="none">
        <circle cx="60" cy="60" r="50" stroke="#CDF22B" strokeWidth="1" opacity="0.3" strokeDasharray="8 4" />
        <circle cx="60" cy="60" r="36" stroke="#00545F" strokeWidth="1.5" opacity="0.4" />
        <circle cx="60" cy="60" r="20" fill="rgba(205,242,43,0.15)" stroke="#CDF22B" strokeWidth="1" />
        {/* Hour hand */}
        <line x1="60" y1="60" x2="60" y2="34" stroke="#CDF22B" strokeWidth="2" strokeLinecap="round" />
        {/* Minute hand */}
        <line x1="60" y1="60" x2="80" y2="52" stroke="#08090B" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <circle cx="60" cy="60" r="3" fill="#CDF22B" />
        {/* Timeline dots */}
        <circle cx="60" cy="10" r="3" fill="#CDF22B" opacity="0.6" />
        <circle cx="110" cy="60" r="3" fill="#CDF22B" opacity="0.4" />
        <circle cx="60" cy="110" r="3" fill="#CDF22B" opacity="0.3" />
        <circle cx="10" cy="60" r="3" fill="#CDF22B" opacity="0.2" />
      </svg>
      {/* Flowing time lines */}
      <div className="absolute inset-0">
        {[20, 40, 60, 80].map((y) => (
          <div
            key={y}
            className="absolute left-0 right-0"
            style={{
              top: `${y}%`,
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(205,242,43,${0.1 + (y / 100) * 0.2}), transparent)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function StudentVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 120 90" className="w-32 h-24" fill="none">
        {/* Calendar grid */}
        <rect x="10" y="10" width="100" height="70" rx="8" fill="rgba(0,84,95,0.1)" stroke="rgba(0,84,95,0.3)" strokeWidth="1" />
        <line x1="10" y1="28" x2="110" y2="28" stroke="rgba(0,84,95,0.3)" strokeWidth="1" />
        {/* Day columns */}
        {[20, 35, 50, 65, 80, 95].map((x) => (
          <line key={x} x1={x} y1="28" x2={x} y2="80" stroke="rgba(0,84,95,0.1)" strokeWidth="0.5" />
        ))}
        {/* Activity bars */}
        <rect x="14" y="40" width="8" height="20" rx="2" fill="#CDF22B" opacity="0.7" />
        <rect x="29" y="50" width="8" height="10" rx="2" fill="#CDF22B" opacity="0.5" />
        <rect x="44" y="34" width="8" height="26" rx="2" fill="#CDF22B" opacity="0.9" />
        <rect x="59" y="44" width="8" height="16" rx="2" fill="#00545F" opacity="0.7" />
        <rect x="74" y="38" width="8" height="22" rx="2" fill="#CDF22B" opacity="0.8" />
        <rect x="89" y="55" width="8" height="5" rx="2" fill="#CDF22B" opacity="0.4" />
        {/* Header dots */}
        {["M","T","W","T","F","S"].map((_, i) => (
          <circle key={i} cx={18 + i * 15} cy="20" r="2" fill="rgba(0,84,95,0.5)" />
        ))}
      </svg>
    </div>
  );
}

function GroupVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 120 100" className="w-32 h-28" fill="none">
        {/* Nodes */}
        <circle cx="60" cy="50" r="12" fill="rgba(205,242,43,0.9)" />
        <circle cx="20" cy="25" r="8" fill="rgba(0,84,95,0.7)" />
        <circle cx="100" cy="25" r="8" fill="rgba(0,84,95,0.7)" />
        <circle cx="20" cy="75" r="8" fill="rgba(0,84,95,0.5)" />
        <circle cx="100" cy="75" r="8" fill="rgba(0,84,95,0.5)" />
        <circle cx="60" cy="90" r="6" fill="rgba(205,242,43,0.4)" />
        {/* Connections */}
        <line x1="60" y1="50" x2="20" y2="25" stroke="#CDF22B" strokeWidth="1" opacity="0.4" />
        <line x1="60" y1="50" x2="100" y2="25" stroke="#CDF22B" strokeWidth="1" opacity="0.4" />
        <line x1="60" y1="50" x2="20" y2="75" stroke="#00545F" strokeWidth="1" opacity="0.3" />
        <line x1="60" y1="50" x2="100" y2="75" stroke="#00545F" strokeWidth="1" opacity="0.3" />
        <line x1="60" y1="50" x2="60" y2="90" stroke="#CDF22B" strokeWidth="1" opacity="0.3" />
        {/* Chat bubbles */}
        <rect x="8" y="8" width="22" height="10" rx="5" fill="rgba(205,242,43,0.2)" stroke="#CDF22B" strokeWidth="0.5" />
        <rect x="88" y="8" width="22" height="10" rx="5" fill="rgba(0,84,95,0.2)" stroke="#00545F" strokeWidth="0.5" />
        {/* Dots inside bubbles */}
        {[13, 17, 21].map((x) => <circle key={x} cx={x} cy="13" r="1.5" fill="#CDF22B" opacity="0.7" />)}
        {[93, 97, 101].map((x) => <circle key={x} cx={x} cy="13" r="1.5" fill="#00545F" opacity="0.7" />)}
      </svg>
    </div>
  );
}

function PrivacyVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 110 110" className="w-28 h-28 float-anim" fill="none">
        {/* Shield */}
        <path d="M55 10 L90 25 L90 55 C90 75 55 100 55 100 C55 100 20 75 20 55 L20 25 Z"
          fill="rgba(0,84,95,0.1)" stroke="#00545F" strokeWidth="1.5" />
        {/* Lock icon */}
        <rect x="40" y="52" width="30" height="22" rx="4" fill="rgba(205,242,43,0.2)" stroke="#CDF22B" strokeWidth="1" />
        <path d="M45 52 L45 44 C45 37 65 37 65 44 L65 52" stroke="#CDF22B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="55" cy="63" r="4" fill="#CDF22B" />
        {/* Warning dots */}
        <circle cx="30" cy="20" r="3" fill="rgba(205,242,43,0.5)" />
        <circle cx="80" cy="80" r="3" fill="rgba(205,242,43,0.3)" />
        <circle cx="85" cy="30" r="2" fill="rgba(0,84,95,0.6)" />
      </svg>
    </div>
  );
}

function MetadataVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      <svg viewBox="0 0 120 100" className="w-32 h-24" fill="none">
        {/* Photo frame */}
        <rect x="10" y="10" width="70" height="55" rx="6" fill="rgba(8,9,11,0.08)" stroke="rgba(8,9,11,0.2)" strokeWidth="1" />
        {/* Mountain scene */}
        <polygon points="20,55 45,30 70,55" fill="rgba(0,84,95,0.3)" />
        <polygon points="35,55 55,38 75,55" fill="rgba(0,84,95,0.2)" />
        <circle cx="58" cy="22" r="6" fill="rgba(205,242,43,0.6)" />
        {/* Metadata panels */}
        <rect x="85" y="10" width="30" height="8" rx="3" fill="rgba(205,242,43,0.15)" stroke="#CDF22B" strokeWidth="0.5" />
        <rect x="85" y="22" width="30" height="8" rx="3" fill="rgba(205,242,43,0.1)" stroke="#CDF22B" strokeWidth="0.5" />
        <rect x="85" y="34" width="30" height="8" rx="3" fill="rgba(0,84,95,0.15)" stroke="#00545F" strokeWidth="0.5" />
        <rect x="85" y="46" width="30" height="8" rx="3" fill="rgba(0,84,95,0.1)" stroke="#00545F" strokeWidth="0.5" />
        {/* Text lines in panels */}
        {[14, 26, 38, 50].map((y, i) => (
          <line key={y} x1="88" y1={y} x2={100 + (i % 2) * 8} y2={y} stroke={i < 2 ? "#CDF22B" : "#00545F"} strokeWidth="1" opacity="0.6" />
        ))}
        {/* Location pin */}
        <circle cx="40" cy="75" r="6" fill="rgba(205,242,43,0.3)" stroke="#CDF22B" strokeWidth="1" />
        <line x1="40" y1="81" x2="40" y2="90" stroke="#CDF22B" strokeWidth="1" strokeLinecap="round" />
        <circle cx="40" cy="75" r="2" fill="#CDF22B" />
      </svg>
    </div>
  );
}

const tools: Tool[] = [
  {
    id: 1,
    category: "TIME ANALYSIS",
    title: "Where did your time go?",
    description: "Understand time lost in public queues and waiting spaces. Reveal delays, measure wasted hours and identify opportunities for improvement.",
    cta: "Explore Time Intelligence",
    href: "#tool-time",
    visual: <TimeVisual />,
    featured: true,
    dark: false,
  },
  {
    id: 2,
    category: "PRODUCTIVITY",
    title: "Make every hour count.",
    description: "Understand how students distribute their time, identify unproductive patterns and discover opportunities to improve daily routines.",
    cta: "Explore Student Tracker",
    href: "#tool-student",
    visual: <StudentVisual />,
    dark: true,
  },
  {
    id: 3,
    category: "COLLABORATION INTELLIGENCE",
    title: "See the effort behind every message.",
    description: "Upload exported group conversations and let AI analyse participation patterns. Note: message activity is an indicator, not definitive proof of effort or impact.",
    cta: "Explore Group Analyzer",
    href: "#tool-group",
    visual: <GroupVisual />,
    dark: false,
  },
  {
    id: 4,
    category: "DIGITAL PRIVACY",
    title: "What did you agree to without reading?",
    description: "Understand app permissions and terms and conditions. Discover what personal information, financial details and digital access an application requests.",
    cta: "Explore Privacy Analyzer",
    href: "#tool-privacy",
    visual: <PrivacyVisual />,
    dark: true,
  },
  {
    id: 5,
    category: "DIGITAL FORENSICS",
    title: "Your images reveal more than you think.",
    description: "Inspect image metadata to discover capture device, timestamps and embedded GPS coordinates. Create a cleaned copy with sensitive metadata removed.",
    cta: "Explore Metadata Analyzer",
    href: "#tool-metadata",
    visual: <MetadataVisual />,
    dark: false,
  },
];

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  const isDark = tool.dark;
  const isFeatured = tool.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`card-unseen group relative rounded-3xl overflow-hidden flex flex-col ${isFeatured ? "lg:col-span-2 lg:row-span-2" : ""}`}
      style={{
        background: isDark ? "#08090B" : "#FAF8F3",
        border: isDark
          ? "1px solid rgba(205,242,43,0.12)"
          : "1px solid rgba(8,9,11,0.08)",
        minHeight: isFeatured ? "420px" : "280px",
      }}
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(205,242,43,0.05) 0%, transparent 70%)"
            : "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(0,84,95,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Visual area */}
      <div
        className="relative flex-shrink-0"
        style={{
          height: isFeatured ? "220px" : "140px",
          background: isDark
            ? "rgba(255,255,255,0.02)"
            : "rgba(205,242,43,0.05)",
          borderBottom: isDark
            ? "1px solid rgba(205,242,43,0.08)"
            : "1px solid rgba(8,9,11,0.06)",
        }}
      >
        {tool.visual}

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: isDark ? "rgba(205,242,43,0.1)" : "rgba(0,84,95,0.08)",
              color: isDark ? "#CDF22B" : "#00545F",
              fontFamily: "'Space Grotesk', sans-serif",
              border: isDark ? "1px solid rgba(205,242,43,0.2)" : "1px solid rgba(0,84,95,0.15)",
            }}
          >
            {tool.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 md:p-7">
        <h3
          className="font-bold leading-tight mb-3 flex-shrink-0"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.025em",
            color: isDark ? "#FAF8F3" : "#08090B",
            fontSize: isFeatured ? "1.4rem" : "1.1rem",
          }}
        >
          {tool.title}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: isDark ? "rgba(250,248,243,0.5)" : "rgba(8,9,11,0.5)" }}
        >
          {tool.description}
        </p>

        {/* CTA */}
        <a
          href={tool.href}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/link"
          style={{
            color: isDark ? "#CDF22B" : "#00545F",
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {tool.cta}
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </a>
      </div>

      {/* Bottom lime accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        style={{ background: "linear-gradient(90deg, #CDF22B, #00545F)" }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export default function ToolsSection() {
  return (
    <section id="tools" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#FAF8F3" }}>
      {/* Section separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(205,242,43,0.3), rgba(0,84,95,0.2), transparent)" }}
        aria-hidden="true"
      />

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(8,9,11,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(8,9,11,0.02) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16"
        >
          <div className="max-w-xl">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ background: "rgba(205,242,43,0.1)", color: "#00545F", fontFamily: "'Space Grotesk', sans-serif", border: "1px solid rgba(205,242,43,0.2)" }}
            >
              Intelligence Tools
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em", color: "#08090B" }}
            >
              Five ways to reveal{" "}
              <span style={{ color: "#CDF22B", WebkitTextStroke: "1px rgba(0,84,95,0.2)" }}>the unseen.</span>
            </h2>
            <p style={{ color: "rgba(8,9,11,0.5)", fontFamily: "'Inter', sans-serif" }}>
              Intelligent tools designed to uncover the things that usually go unnoticed.
            </p>
          </div>
        </motion.div>

        {/* Asymmetric editorial tool grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-min">
          {/* Featured card — spans 2 cols on lg */}
          <ToolCard tool={tools[0]} index={0} />

          {/* Supporting cards */}
          <ToolCard tool={tools[1]} index={1} />
          <ToolCard tool={tools[2]} index={2} />
          <ToolCard tool={tools[3]} index={3} />
          <ToolCard tool={tools[4]} index={4} />
        </div>
      </div>
    </section>
  );
}
