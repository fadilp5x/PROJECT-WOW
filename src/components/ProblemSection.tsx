import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    icon: "⏱",
    category: "TIME",
    title: "Minutes disappear while waiting.",
    description: "Every queue, every delay — time vanishes unnoticed. Collectively, it adds up to hours of invisible loss each week.",
    accent: "#CDF22B",
    bg: "rgba(205,242,43,0.06)",
    border: "rgba(205,242,43,0.2)",
  },
  {
    icon: "💪",
    category: "EFFORT",
    title: "Contributions go unnoticed.",
    description: "In collaborative work, some voices carry more weight than others. Without measurement, invisible effort stays invisible.",
    accent: "#CDF22B",
    bg: "rgba(0,84,95,0.06)",
    border: "rgba(0,84,95,0.2)",
  },
  {
    icon: "🔒",
    category: "PRIVACY",
    title: "Personal data gets exposed.",
    description: "Every app permission, every terms agreement — a trail of personal information shared without full understanding.",
    accent: "#CDF22B",
    bg: "rgba(205,242,43,0.06)",
    border: "rgba(205,242,43,0.2)",
  },
  {
    icon: "🎯",
    category: "OPPORTUNITY",
    title: "Productive hours get wasted.",
    description: "Unstructured time, untracked patterns — potential slips away before it's ever realized.",
    accent: "#CDF22B",
    bg: "rgba(0,84,95,0.06)",
    border: "rgba(0,84,95,0.2)",
  },
  {
    icon: "📷",
    category: "INFORMATION",
    title: "Hidden data travels with our files.",
    description: "Images carry metadata — location, device, timestamps — revealing more than the photo itself was meant to share.",
    accent: "#CDF22B",
    bg: "rgba(205,242,43,0.06)",
    border: "rgba(205,242,43,0.2)",
  },
];

function ProblemCard({ item, index }: { item: typeof problems[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="card-unseen group relative p-6 rounded-2xl cursor-default"
      style={{
        background: item.bg,
        border: `1px solid ${item.border}`,
      }}
      whileHover={{ y: -4 }}
    >
      {/* Category label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl" role="img" aria-hidden="true">{item.icon}</span>
        <span
          className="text-xs font-bold tracking-widest uppercase"
          style={{ color: "#00545F", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {item.category}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold mb-2 leading-tight"
        style={{ color: "#08090B", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "rgba(8,9,11,0.55)" }}>
        {item.description}
      </p>

      {/* Lime accent bar */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: "linear-gradient(90deg, #CDF22B, #00545F)" }}
      />
    </motion.div>
  );
}

export default function ProblemSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#FAF8F3" }}>
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,84,95,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ background: "rgba(0,84,95,0.08)", color: "#00545F", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Problem
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-5"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em", color: "#08090B" }}
          >
            What if you could see{" "}
            <span style={{ color: "#CDF22B", WebkitTextStroke: "1px rgba(0,84,95,0.3)" }}>
              what you're losing?
            </span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(8,9,11,0.55)", fontFamily: "'Inter', sans-serif" }}
          >
            Some of the biggest losses happen silently. We experience them every day, but rarely measure their true impact.
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((item, i) => (
            <ProblemCard key={item.category} item={item} index={i} />
          ))}

          {/* Large statement card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2 lg:col-span-3 p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: "#08090B",
              border: "1px solid rgba(205,242,43,0.15)",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(205,242,43,0.06) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: "rgba(205,242,43,0.6)", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  The invisible impact
                </p>
                <p
                  className="text-2xl md:text-3xl font-bold leading-tight max-w-xl"
                  style={{ color: "#FAF8F3", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em" }}
                >
                  Every day, we lose things we never notice.{" "}
                  <span style={{ color: "#CDF22B" }}>Time. Effort. Privacy. Opportunities.</span>{" "}
                  UNSEEN reveals what stays hidden.
                </p>
              </div>
              <a
                href="#tools"
                onClick={(e) => { e.preventDefault(); document.querySelector("#tools")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm flex-shrink-0 transition-all duration-300 hover:scale-105"
                style={{
                  background: "#CDF22B",
                  color: "#08090B",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(205,242,43,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                See What's Hidden →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
