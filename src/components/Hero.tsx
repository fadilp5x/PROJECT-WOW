import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// Abstract 3D hero visual using pure CSS/SVG
function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" aria-hidden="true">
      {/* Outer glow atmosphere */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(205,242,43,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Large translucent black ribbon 1 */}
      <div
        className="float-anim absolute"
        style={{
          width: "340px",
          height: "120px",
          background: "linear-gradient(135deg, rgba(8,9,11,0.85) 0%, rgba(0,84,95,0.5) 100%)",
          borderRadius: "60px 20px 60px 20px",
          transform: "rotate(-15deg) translateX(-40px) translateY(-60px)",
          backdropFilter: "blur(2px)",
          border: "1px solid rgba(205,242,43,0.15)",
        }}
      />

      {/* Large translucent black ribbon 2 */}
      <div
        className="float-anim-reverse absolute"
        style={{
          width: "280px",
          height: "90px",
          background: "linear-gradient(225deg, rgba(8,9,11,0.7) 0%, rgba(0,84,95,0.3) 100%)",
          borderRadius: "30px 70px 30px 70px",
          transform: "rotate(20deg) translateX(60px) translateY(40px)",
          backdropFilter: "blur(2px)",
          border: "1px solid rgba(205,242,43,0.1)",
        }}
      />

      {/* Thin ribbon accent */}
      <div
        className="float-anim-slow absolute"
        style={{
          width: "400px",
          height: "40px",
          background: "linear-gradient(90deg, transparent, rgba(205,242,43,0.12), transparent)",
          borderRadius: "20px",
          transform: "rotate(-8deg) translateY(80px)",
          border: "1px solid rgba(205,242,43,0.08)",
        }}
      />

      {/* Central neon lime sphere */}
      <div
        className="pulse-lime absolute z-10"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #ECFFB6 0%, #CDF22B 40%, #A8D620 70%, #00545F 100%)",
          boxShadow: "0 0 60px rgba(205,242,43,0.5), 0 0 120px rgba(205,242,43,0.2), inset 0 0 40px rgba(255,255,255,0.3)",
        }}
      >
        {/* Sphere highlight */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "20%",
            width: "35%",
            height: "30%",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.4)",
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* Geometric frame — partial circle */}
      <svg
        className="float-anim-slow absolute"
        viewBox="0 0 320 320"
        fill="none"
        style={{ width: "320px", height: "320px" }}
      >
        <circle
          cx="160" cy="160" r="140"
          stroke="#CDF22B"
          strokeWidth="1"
          strokeDasharray="20 8"
          opacity="0.3"
        />
        <circle
          cx="160" cy="160" r="100"
          stroke="#00545F"
          strokeWidth="0.5"
          strokeDasharray="5 15"
          opacity="0.4"
        />
      </svg>

      {/* Data panel cards — floating */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-20"
        style={{
          top: "10%",
          right: "5%",
          background: "rgba(8,9,11,0.9)",
          border: "1px solid rgba(205,242,43,0.3)",
          borderRadius: "16px",
          padding: "14px 18px",
          backdropFilter: "blur(12px)",
          minWidth: "140px",
        }}
      >
        <div className="text-xs font-medium mb-1" style={{ color: "rgba(205,242,43,0.6)", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.08em" }}>TIME LOST</div>
        <div className="text-2xl font-bold font-display" style={{ color: "#CDF22B", fontFamily: "'Space Grotesk', sans-serif" }}>47 min</div>
        <div className="text-xs mt-1" style={{ color: "rgba(250,248,243,0.4)" }}>avg. daily queue</div>
      </motion.div>

      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute z-20"
        style={{
          bottom: "12%",
          left: "2%",
          background: "rgba(0,84,95,0.85)",
          border: "1px solid rgba(205,242,43,0.2)",
          borderRadius: "16px",
          padding: "14px 18px",
          backdropFilter: "blur(12px)",
          minWidth: "150px",
        }}
      >
        <div className="text-xs font-medium mb-1" style={{ color: "rgba(205,242,43,0.7)", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.08em" }}>PRIVACY SCORE</div>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold font-display" style={{ color: "#ECFFB6", fontFamily: "'Space Grotesk', sans-serif" }}>68%</div>
          <div className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(205,242,43,0.15)", color: "#CDF22B" }}>exposed</div>
        </div>
      </motion.div>

      {/* Small floating metadata dots */}
      {[
        { x: "15%", y: "30%", label: "GPS", delay: 0 },
        { x: "80%", y: "65%", label: "EXIF", delay: 0.5 },
        { x: "60%", y: "15%", label: "META", delay: 1 },
      ].map((dot) => (
        <motion.div
          key={dot.label}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 2.5 + dot.delay, repeat: Infinity, delay: dot.delay }}
          className="absolute z-20 flex items-center gap-1.5"
          style={{ left: dot.x, top: dot.y }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#CDF22B",
              boxShadow: "0 0 8px rgba(205,242,43,0.8)",
            }}
          />
          <span style={{ fontSize: "10px", color: "rgba(8,9,11,0.5)", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.1em", fontWeight: 600 }}>
            {dot.label}
          </span>
        </motion.div>
      ))}

      {/* Corner geometric accents */}
      <div
        className="absolute"
        style={{
          top: "5%",
          left: "5%",
          width: "50px",
          height: "50px",
          borderTop: "2px solid rgba(205,242,43,0.4)",
          borderLeft: "2px solid rgba(205,242,43,0.4)",
          borderRadius: "4px 0 0 0",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "5%",
          right: "5%",
          width: "50px",
          height: "50px",
          borderBottom: "2px solid rgba(0,84,95,0.5)",
          borderRight: "2px solid rgba(0,84,95,0.5)",
          borderRadius: "0 0 4px 0",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const visualX = useTransform(springX, [-1, 1], [-12, 12]);
  const visualY = useTransform(springY, [-1, 1], [-8, 8]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mouseX.set((e.clientX - cx) / (rect.width / 2));
      mouseY.set((e.clientY - cy) / (rect.height / 2));
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FAF8F3" }}
    >
      {/* Background gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(205,242,43,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 20% 80%, rgba(0,84,95,0.05) 0%, transparent 60%)
          `,
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(8,9,11,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,9,11,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[85vh]">

          {/* LEFT: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-col justify-center"
          >
            {/* Platform label */}
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{
                  background: "rgba(205,242,43,0.12)",
                  color: "#00545F",
                  fontFamily: "'Space Grotesk', sans-serif",
                  border: "1px solid rgba(205,242,43,0.3)",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#CDF22B",
                    display: "inline-block",
                    boxShadow: "0 0 8px rgba(205,242,43,0.8)",
                  }}
                />
                Resource Intelligence Platform
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display leading-none mb-6"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
              }}
            >
              <span
                className="block text-6xl md:text-7xl xl:text-8xl"
                style={{ color: "#08090B" }}
              >
                Make the
              </span>
              <span
                className="block text-6xl md:text-7xl xl:text-8xl"
                style={{
                  color: "#CDF22B",
                  textShadow: "0 0 60px rgba(205,242,43,0.3)",
                  WebkitTextStroke: "1px rgba(0,84,95,0.2)",
                }}
              >
                INVISIBLE
              </span>
              <span
                className="block text-6xl md:text-7xl xl:text-8xl"
                style={{ color: "#08090B" }}
              >
                VISIBLE.
              </span>
            </motion.h1>

            {/* Supporting paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              style={{ color: "rgba(8,9,11,0.6)", fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Time wasted. Effort unnoticed. Privacy exposed. Discover the hidden losses happening around you — and turn awareness into action.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <a
                href="#tools"
                onClick={(e) => { e.preventDefault(); document.querySelector("#tools")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 group"
                style={{
                  background: "#08090B",
                  color: "#CDF22B",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.01em",
                  boxShadow: "0 4px 24px rgba(8,9,11,0.15)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(8,9,11,0.15), 0 0 24px rgba(205,242,43,0.25)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(8,9,11,0.15)"; }}
              >
                Explore the Tools
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#problem"
                onClick={(e) => { e.preventDefault(); document.querySelector("#problem")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
                style={{
                  background: "transparent",
                  color: "#08090B",
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.01em",
                  border: "1.5px solid rgba(8,9,11,0.2)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#CDF22B"; (e.currentTarget as HTMLElement).style.background = "rgba(205,242,43,0.06)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(8,9,11,0.2)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                Discover Our Mission
              </a>
            </motion.div>

            {/* Trust statement */}
            <motion.div variants={itemVariants}>
              <p
                className="text-sm font-medium"
                style={{ color: "rgba(8,9,11,0.4)", fontFamily: "'Inter', sans-serif" }}
              >
                One platform.{" "}
                <span style={{ color: "rgba(0,84,95,0.7)" }}>Multiple perspectives.</span>{" "}
                Measurable impact.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: visualX, y: visualY }}
            className="relative h-[480px] lg:h-[580px]"
          >
            {/* Visual background card */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(236,255,182,0.3) 0%, rgba(205,242,43,0.08) 40%, rgba(0,84,95,0.08) 100%)",
                border: "1px solid rgba(205,242,43,0.2)",
                backdropFilter: "blur(4px)",
              }}
            />
            <HeroVisual />
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "rgba(8,9,11,0.3)", fontFamily: "'Space Grotesk', sans-serif" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: "1px",
              height: "32px",
              background: "linear-gradient(to bottom, rgba(205,242,43,0.6), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
