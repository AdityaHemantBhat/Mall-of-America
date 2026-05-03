import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function WhyMOA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const panels = gsap.utils.toArray(".engagement-panel");

    panels.forEach((panel: any) => {
      const content = panel.querySelector(".content-inner");

      gsap.fromTo(
        content,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        },
      );
    });
  }, []);

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative z-10 w-full bg-moa-black"
    >
      <div className="engagement-panel relative min-h-screen w-full flex items-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            src="/images/moa_cinematic_exterior_1777708068429.png"
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Scale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-moa-black via-moa-black/80 to-transparent" />
        </div>

        <div className="absolute top-20 right-20 hidden xl:flex flex-col items-end space-y-4 opacity-20">
          <div className="flex gap-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [10, 30, 10] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                className="w-1 bg-moa-gold"
              />
            ))}
          </div>
          <span className="text-[9px] font-mono text-white uppercase tracking-[0.3em]">
            Volume_Index: Critical
          </span>
        </div>

        <div className="content-inner relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <span className="text-moa-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-6 md:mb-8 block text-center md:text-left">
              01 / THE SCALE
            </span>
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.8] mb-8 md:mb-12 text-center md:text-left">
              Massive <br />
              <span className="text-moa-gold italic">Scale.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 mb-8 group cursor-default">
              <span className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-white transition-all group-hover:text-moa-gold">
                5.6
              </span>
              <span className="text-lg md:text-2xl text-white/40 font-light uppercase tracking-widest text-center md:text-left">
                Million SQ FT
              </span>
            </div>
            <p className="text-white/50 text-sm md:text-xl leading-relaxed font-light max-w-xl mx-auto md:mx-0 text-center md:text-left">
              The largest retail and entertainment destination in North America.
              It’s practically a city of its own, giving your brand the ultimate
              space to grow.
            </p>
          </div>
        </div>
      </div>

      <div className="engagement-panel relative min-h-screen w-full flex items-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            src="/images/moa_futuristic_rotunda_1777708083863.png"
            className="w-full h-full object-cover opacity-20"
            alt="Traffic"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-moa-black via-moa-black/80 to-transparent" />
        </div>

        <div className="absolute bottom-20 left-20 hidden xl:block opacity-20">
          <svg width="200" height="200" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeDasharray="283"
              initial={{ strokeDashoffset: 283 }}
              whileInView={{ strokeDashoffset: 70 }}
              transition={{ duration: 2, ease: "circOut" }}
            />
            <text
              x="50"
              y="55"
              fontSize="10"
              fill="white"
              textAnchor="middle"
              fontFamily="monospace"
            >
              SYNC_ATTENTION
            </text>
          </svg>
        </div>

        <div className="content-inner relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl ml-auto text-center md:text-right">
            <span className="text-moa-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-6 md:mb-8 block">
              02 / THE TRAFFIC
            </span>
            <h2 className="font-display text-5xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.8] mb-8 md:mb-12">
              Unmatched <br />
              <span className="text-moa-gold italic">Attention.</span>
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center md:items-baseline gap-4 mb-8 group cursor-default">
              <span className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] text-white transition-all group-hover:text-moa-gold">
                40
              </span>
              <span className="text-lg md:text-2xl text-white/40 font-light uppercase tracking-widest">
                Million Visitors
              </span>
            </div>
            <p className="text-white/50 text-sm md:text-xl leading-relaxed font-light max-w-xl ml-auto">
              More annual visitors than the Grand Canyon and Magic Kingdom
              combined. When you're here, the world is watching.
            </p>
          </div>
        </div>
      </div>

      <div className="engagement-panel relative min-h-screen w-full flex items-center overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img
            loading="lazy"
            src="/images/moa_luxury_retail_1777708099217.png"
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="Advantage"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-moa-black via-moa-black/90 to-transparent" />
        </div>

        <div className="absolute top-1/2 left-20 -translate-y-1/2 hidden xl:flex flex-col space-y-12 opacity-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-[10px] font-mono">
                0{i + 1}
              </div>
              <div className="w-64 h-px bg-white" />
            </div>
          ))}
        </div>

        <div className="content-inner relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center w-full">
          <span className="text-moa-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-6 md:mb-8 block">
            03 / THE EDGE
          </span>
          <h2 className="font-display text-5xl md:text-8xl lg:text-[12rem] text-white tracking-tighter leading-[0.75] mb-8 md:mb-12">
            The Tax <br />
            <span className="text-moa-gold italic">Advantage.</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-8 md:mb-12">
            <div className="text-center group cursor-default">
              <span className="font-display text-7xl sm:text-8xl md:text-[10rem] text-white block group-hover:text-moa-gold transition-colors">
                0%
              </span>
              <span className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-[0.3em]">
                Sales Tax
              </span>
            </div>
            <div className="hidden md:block w-px h-24 bg-white/10" />
            <div className="text-center group cursor-default">
              <span className="font-display text-7xl sm:text-8xl md:text-[10rem] text-white block group-hover:text-moa-gold transition-colors">
                $2B
              </span>
              <span className="text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-[0.3em]">
                Local Impact
              </span>
            </div>
          </div>
          <p className="text-white/50 text-sm md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            With absolutely no sales tax on clothing and shoes, shoppers are
            eager to spend, making every visit count.
          </p>
        </div>
      </div>
    </section>
  );
}
