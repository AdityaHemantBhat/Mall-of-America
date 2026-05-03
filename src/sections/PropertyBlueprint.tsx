import { motion } from "framer-motion";
import { useState } from "react";

const FloorLabel = ({ x, y, label, active, onHover }: { x: string, y: string, label: string, active: boolean, onHover: () => void }) => (
  <motion.g
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    onMouseEnter={onHover}
    className="cursor-pointer group"
  >
    <circle cx={x} cy={y} r="4" fill={active ? "#D4AF37" : "white"} className="transition-colors duration-300" />
    <motion.circle
      cx={x} cy={y} r="12"
      stroke="#D4AF37"
      strokeWidth="1"
      fill="none"
      initial={{ scale: 0 }}
      animate={active ? { scale: [1, 1.5, 1], opacity: [1, 0, 1] } : { scale: 0 }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
    <text x={x} y={parseFloat(y) - 15} textAnchor="middle" className={`text-[10px] font-mono uppercase tracking-widest ${active ? 'fill-moa-gold' : 'fill-white/20'} transition-colors duration-300`}>
      {label}
    </text>
  </motion.g>
);

export function PropertyBlueprint() {
  const [activeZone, setActiveZone] = useState("NORTH");

  const zones: Record<string, any> = {
    NORTH: { title: "Luxury & Fashion", desc: "Home to some of the world's best luxury stores and high-end fashion brands.", detail: "Level 1-2 Focus" },
    SOUTH: { title: "Experience & Tech", desc: "The place for the latest tech gadgets and interactive store experiences.", detail: "Level 1 Focus" },
    EAST: { title: "Entertainment", desc: "Where the fun happens, from Nickelodeon Universe to great dining spots.", detail: "Full Vertical Integration" },
    WEST: { title: "Lifestyle", desc: "A great mix of wellness, modern lifestyle brands, and relaxed dining.", detail: "Level 2-3 Focus" }
  };

  return (
    <section id="blueprint" className="relative z-10 w-full bg-zinc-950 py-24 md:py-40 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="absolute top-0 left-0 p-4 md:p-8 border-l border-moa-gold/20 opacity-40">
              <span className="text-[8px] md:text-[10px] font-mono text-moa-gold uppercase tracking-[0.4em]">LAYOUT</span>
            </div>

            <div className="py-12 md:py-0">
              <svg viewBox="0 0 800 600" className="w-full h-auto opacity-40 grayscale group">
                {/* Outer shell */}
                <motion.path
                  d="M200 100 L600 100 L700 300 L600 500 L200 500 L100 300 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <path d="M200 150 L600 150 M200 450 L600 450 M150 300 L650 300" stroke="white" strokeWidth="0.2" strokeDasharray="4 4" />

                <FloorLabel x="400" y="100" label="North Wing" active={activeZone === "NORTH"} onHover={() => setActiveZone("NORTH")} />
                <FloorLabel x="700" y="300" label="East Wing" active={activeZone === "EAST"} onHover={() => setActiveZone("EAST")} />
                <FloorLabel x="400" y="500" label="South Wing" active={activeZone === "SOUTH"} onHover={() => setActiveZone("SOUTH")} />
                <FloorLabel x="100" y="300" label="West Wing" active={activeZone === "WEST"} onHover={() => setActiveZone("WEST")} />

                <circle cx="400" cy="300" r="80" fill="none" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="8 8" />
                <text x="400" y="305" textAnchor="middle" fill="#D4AF37" className="text-[8px] font-mono uppercase tracking-[0.4em]">Core_Entertainment</text>
              </svg>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <span className="text-moa-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-6 md:mb-8 block">Property Map</span>
            <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter leading-[0.8] mb-8 md:mb-12 uppercase">
              Property <br /><span className="text-moa-gold italic">Layout.</span>
            </h2>

            <div className="bg-white/5 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-xl relative">
              <div className="absolute top-0 right-0 p-4 md:p-8 text-moa-gold/20 font-mono text-3xl md:text-4xl italic uppercase">0{activeZone === "NORTH" ? 1 : activeZone === "SOUTH" ? 2 : activeZone === "EAST" ? 3 : 4}</div>
              <h3 className="text-white font-display text-3xl md:text-4xl mb-4 md:mb-6 tracking-tighter uppercase">{zones[activeZone].title}</h3>
              <p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-8">
                {zones[activeZone].desc}
              </p>
              <div className="flex items-center gap-4 text-moa-gold text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-moa-gold rounded-full" />
                {zones[activeZone].detail}
              </div>
            </div>

            <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4">
              {Object.keys(zones).map(zone => (
                <button
                  key={zone}
                  onClick={() => setActiveZone(zone)}
                  className={`flex-1 sm:flex-none px-4 py-3 text-[8px] md:text-[9px] font-bold tracking-widest uppercase border transition-all ${activeZone === zone ? 'bg-moa-gold border-moa-gold text-black' : 'border-white/10 text-white/40 hover:border-white/20'}`}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
