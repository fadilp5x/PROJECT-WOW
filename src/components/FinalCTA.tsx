import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="cta"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#FAF8F3" }}
    >
      {/* Decorative gradient blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(205,242,43,0.15) 0%, rgba(0,84,95,0.08) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Decorative geometric shapes */}
      <div
        className="float-anim absolute top-10 right-10 w-24 h-24 rounded-full"
        style={{
          border: "1px solid rgba(205,242,43,0.25)",
          background: "radial-gradient(circle, rgba(205,242,43,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="float-anim-reverse absolute bottom-10 left-10 w-16 h-16 rounded-full"
        style={{
          border: "1px solid rgba(0,84,95,0.2)",
          background: "radial-gradient(circle, rgba(0,84,95,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-16 -translate-y-1/2 w-6 h-6 rounded-full pulse-lime"
        style={{ background: "#CDF22B", boxShadow: "0 0 20px rgba(205,242,43,0.5)" }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: "rgba(205,242,43,0.1)", color: "#00545F", fontFamily: "'Space Grotesk', sans-serif", border: "1px solid rgba(205,242,43,0.25)" }}
          >
            Get Started
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold leading-none mb-5"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "-0.04em",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "#08090B",
          }}
        >
          Ready to see what{" "}
          <span style={{ color: "#CDF22B", WebkitTextStroke: "1px rgba(0,84,95,0.2)" }}>others miss?</span>
        </motion.h2>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ color: "rgba(8,9,11,0.5)", fontFamily: "'Inter', sans-serif" }}
        >
          Explore a smarter way to understand the hidden losses around you.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#tools"
            onClick={(e) => { e.preventDefault(); document.querySelector("#tools")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-3 px-9 py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 group"
            style={{
              background: "#08090B",
              color: "#CDF22B",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.02em",
              boxShadow: "0 8px 32px rgba(8,9,11,0.12)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(8,9,11,0.15), 0 0 32px rgba(205,242,43,0.2)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(8,9,11,0.12)"; }}
          >
            Explore UNSEEN
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          <div
            className="hidden sm:flex items-center gap-2 text-sm"
            style={{ color: "rgba(8,9,11,0.35)", fontFamily: "'Inter', sans-serif" }}
          >
            <div
              style={{ width: "24px", height: "1px", background: "rgba(8,9,11,0.2)" }}
              aria-hidden="true"
            />
            <span>No account needed to explore</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-xs font-bold tracking-widest uppercase"
          style={{ color: "rgba(8,9,11,0.25)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Make the Invisible Visible
        </motion.p>
      </div>
    </section>
  );
}
