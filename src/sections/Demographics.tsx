import { motion } from "framer-motion";

const IntelligenceTile = ({ label, percentage, description, color, index }: { label: string, percentage: string, description: string, color: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative bg-zinc-900/40 border border-white/5 p-8 overflow-hidden hover:border-moa-gold/40 transition-all duration-500"
  >
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-moa-gold transition-colors" />
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-moa-gold transition-colors" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-moa-gold transition-colors" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-moa-gold transition-colors" />

    <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
      <span className="font-display text-[10rem] text-white italic leading-none">{percentage}</span>
    </div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-12">
        <div className="flex flex-col">
          <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] mb-1">Audience Segment 0{index + 1}</span>
          <h4 className="text-white font-display text-3xl uppercase tracking-tighter group-hover:text-moa-gold transition-colors">{label}</h4>
        </div>
        <div className="text-right">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-display text-5xl text-white block"
          >
            {percentage}
          </motion.span>
          <span className="text-[9px] font-mono text-moa-gold uppercase tracking-widest">Market Share</span>
        </div>
      </div>

      <p className="text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] leading-relaxed max-w-[280px] font-light">
        {description}
      </p>

      <div className="mt-8 relative w-full h-px bg-white/5 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "circOut", delay: index * 0.2 }}
          className="absolute inset-0 h-full w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        />
      </div>
    </div>
  </motion.div>
);

export function Demographics() {
  return (
    <section id="demographics" className="relative z-10 w-full bg-moa-black py-24 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-moa-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-6 md:mb-8 block">Our Audience</span>
              <h2 className="font-display text-5xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.8] mb-8 md:mb-12">
                Who You'll <br /><span className="text-moa-gold italic">Meet.</span>
              </h2>
              <p className="text-white/50 text-base md:text-xl font-light leading-relaxed max-w-xl mb-12 md:mb-16">
                Our visitors come from all over the world, ready to shop, dine, and explore. From local regulars to international travelers, you get access to everyone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 border-t border-white/10 pt-12">
                <div className="group">
                  <span className="text-white/20 text-[9px] md:text-[10px] font-mono block mb-2 uppercase tracking-widest group-hover:text-moa-gold transition-colors">Household Income</span>
                  <span className="text-white font-display text-5xl md:text-7xl block">$85K+</span>
                  <p className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-widest mt-2 md:mt-4">Above National Average</p>
                </div>
                <div className="group">
                  <span className="text-white/20 text-[9px] md:text-[10px] font-mono block mb-2 uppercase tracking-widest group-hover:text-moa-gold transition-colors">Average Dwell</span>
                  <span className="text-white font-display text-5xl md:text-7xl block">2.5H</span>
                  <p className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-widest mt-2 md:mt-4">Industry-Leading Engagement</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            <IntelligenceTile
              label="The Luxury Shopper"
              percentage="32%"
              description="People looking for premium brands and exclusive, high-end shopping experiences."
              color="#D4AF37"
              index={0}
            />
            <IntelligenceTile
              label="Global Travelers"
              percentage="24%"
              description="Tourists from around the world making Mall of America a must-visit destination on their trip."
              color="#FFFFFF"
              index={1}
            />
            <IntelligenceTile
              label="The Next Generation"
              percentage="41%"
              description="Young trendsetters who love discovering new brands and sharing their experiences online."
              color="#D4AF37"
              index={2}
            />
            <IntelligenceTile
              label="Business & Events"
              percentage="18%"
              description="Professionals and groups gathering for everything from corporate meetings to massive conventions."
              color="#FFFFFF"
              index={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

