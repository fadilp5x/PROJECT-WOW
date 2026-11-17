import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Animated particles canvas component
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const addParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(Math.random() * 1 + 0.5),
        life: 0,
        maxLife: 80 + Math.random() * 60,
        size: Math.random() * 2 + 0.5,
      });
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      if (frame % 4 === 0 && particles.length < 60) addParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life >= p.maxLife) { particles.splice(i, 1); continue; }
        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(205, 242, 43, ${alpha})`;
        ctx.fill();
      }

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            const alpha = (1 - dist / 80) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(205, 242, 43, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

// Animated data visualization lines
function DataViz() {
  return (
    <div className="relative h-32 md:h-48 w-full max-w-2xl mx-auto" aria-hidden="true">
      <svg viewBox="0 0 600 120" className="w-full h-full" fill="none">
        {/* Grid lines */}
        {[0, 30, 60, 90, 120].map((y) => (
          <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(205,242,43,0.06)" strokeWidth="1" />
        ))}

        {/* Data line 1 — main */}
        <motion.path
          d="M0,90 C50,80 100,40 150,50 C200,60 250,20 300,30 C350,40 400,70 450,55 C500,40 550,25 600,15"
          stroke="#CDF22B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Area fill */}
        <motion.path
          d="M0,90 C50,80 100,40 150,50 C200,60 250,20 300,30 C350,40 400,70 450,55 C500,40 550,25 600,15 L600,120 L0,120 Z"
          fill="url(#areaGrad)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Data line 2 — secondary */}
        <motion.path
          d="M0,110 C80,100 150,80 220,85 C290,90 350,60 420,70 C490,80 550,65 600,60"
          stroke="rgba(0,84,95,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6 4"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Data points */}
        {[
          { x: 150, y: 50 }, { x: 300, y: 30 }, { x: 450, y: 55 }, { x: 600, y: 15 },
        ].map((pt, i) => (
          <motion.circle
            key={i}
            cx={pt.x} cy={pt.y} r="4"
            fill="#08090B"
            stroke="#CDF22B"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 + i * 0.15 }}
          />
        ))}

        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CDF22B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#CDF22B" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "#08090B" }}
    >
      {/* Particle canvas */}
      <div className="absolute inset-0" aria-hidden="true">
        <ParticleCanvas />
      </div>

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,84,95,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 0%, rgba(205,242,43,0.03) 0%, transparent 50%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-3 py-1 rounded-full"
            style={{ background: "rgba(205,242,43,0.08)", color: "rgba(205,242,43,0.6)", fontFamily: "'Space Grotesk', sans-serif", border: "1px solid rgba(205,242,43,0.12)" }}
          >
            The Impact
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-none mb-5"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.04em", color: "#FAF8F3" }}
          >
            Awareness is the beginning{" "}
            <span style={{ color: "#CDF22B" }}>of change.</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(250,248,243,0.45)", fontFamily: "'Inter', sans-serif" }}
          >
            When we measure what was previously invisible, we gain the power to make informed decisions.
          </p>
        </motion.div>

        {/* Data visualization */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <DataViz />
        </motion.div>

        {/* Large statement */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block mb-12"
        >
          <div
            className="relative px-8 py-6 md:px-12 md:py-8 rounded-3xl"
            style={{
              background: "rgba(205,242,43,0.05)",
              border: "1px solid rgba(205,242,43,0.15)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-lime-400 rounded-tl-lg" style={{ borderColor: "#CDF22B" }} aria-hidden="true" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: "rgba(0,84,95,0.6)" }} aria-hidden="true" />

            <p
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.03em", color: "#FAF8F3" }}
            >
              Don't just experience the loss.{" "}
              <span
                style={{
                  color: "#CDF22B",
                  textShadow: "0 0 40px rgba(205,242,43,0.3)",
                }}
              >
                Understand it.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Three insight columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: "IDENTIFY", desc: "Find the invisible losses before they compound." },
            { label: "MEASURE", desc: "Quantify what was previously impossible to track." },
            { label: "ACT", desc: "Transform raw insight into meaningful change." },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(250,248,243,0.03)",
                border: "1px solid rgba(250,248,243,0.06)",
              }}
            >
              <div
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "#CDF22B", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.label}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(250,248,243,0.4)" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
