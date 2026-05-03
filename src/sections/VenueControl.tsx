import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const venues = [
  {
    name: "The Grand Rotunda",
    id: "UNIT_01",
    capacity: "5,000+",
    type: "CONCERT_HUB",
    specs: "360° Views | Heavy Rigging | Massive LED Screens",
    image: "/images/moa_futuristic_rotunda_1777708083863.png",
  },
  {
    name: "The Expo Center",
    id: "UNIT_02",
    capacity: "10,000+",
    type: "CONVENTION_GRID",
    specs: "50,000 SQ FT | Easy Drive-In Access | Fast Wi-Fi",
    image: "/images/moa_venue_expo_center_1777708446247.png",
  },
  {
    name: "Executive Suite",
    id: "UNIT_03",
    capacity: "500",
    type: "VIP_SECTOR",
    specs: "Floor-to-Ceiling Windows | Private Entry | Premium Catering",
    image: "/images/moa_venue_executive_suite_1777708464860.png",
  },
];

export function VenueControl() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="venues"
      className="relative z-10 w-full bg-moa-black py-40 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-moa-gold" />
              <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase">
                Venues
              </span>
            </div>

            <h2 className="font-display text-6xl md:text-8xl text-white tracking-tighter leading-[0.8] mb-12 uppercase">
              Event <br />
              <span className="text-moa-gold italic">Spaces.</span>
            </h2>

            <div className="space-y-4">
              {venues.map((v, i) => (
                <button
                  key={v.name}
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-full group text-left p-8 border transition-all duration-500 rounded-2xl flex justify-between items-center overflow-hidden relative",
                    active === i
                      ? "bg-white border-white text-black shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                      : "border-white/5 text-white/40 hover:border-white/20",
                  )}
                >
                  {active === i && (
                    <motion.div
                      layoutId="active-venue-bg"
                      className="absolute inset-0 bg-white z-0"
                    />
                  )}
                  <div className="relative z-10">
                    <span
                      className={cn(
                        "text-[9px] font-mono tracking-widest uppercase block mb-2",
                        active === i ? "text-black/50" : "text-moa-gold/40",
                      )}
                    >
                      {v.id} // {v.type}
                    </span>
                    <h3 className="font-display text-3xl tracking-tighter uppercase">
                      {v.name}
                    </h3>
                  </div>
                  <div
                    className={cn(
                      "relative z-10 text-xl font-display",
                      active === i ? "text-black" : "text-moa-gold",
                    )}
                  >
                    {v.capacity}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden relative group shadow-2xl border border-white/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={venues[active].image}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.4 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={venues[active].image}
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                  alt={venues[active].name}
                />
              </AnimatePresence>

              <div
                className="absolute inset-0 z-10 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-moa-black via-transparent to-transparent z-10" />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                <div className="bg-black/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-1.5 bg-moa-gold rounded-full animate-pulse" />
                    <span className="text-[9px] font-mono text-moa-gold uppercase tracking-[0.5em]">
                      Sector_Analysis: LIVE
                    </span>
                  </div>
                  <p className="text-white text-sm md:text-base font-mono tracking-wide mb-8 leading-relaxed">
                    {venues[active].specs}
                  </p>
                  <button className="px-10 py-4 bg-moa-gold text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                    Technical Inspection
                  </button>
                </div>
              </div>

              <div className="absolute top-8 right-8 z-20 hidden md:block">
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block text-right">
                  COORD_LAT: 44.8549° N
                </span>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest block text-right">
                  COORD_LONG: 93.2422° W
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
