const NetworkMetric = ({ value, label, id }: { value: string, label: string, id: string }) => (
  <div className="flex flex-col group">
    <span className="text-moa-gold/30 text-[8px] font-mono tracking-widest mb-1 group-hover:text-moa-gold transition-colors">{id}</span>
    <span className="font-display text-5xl md:text-8xl text-white tracking-tighter group-hover:text-moa-gold transition-colors">{value}</span>
    <span className="text-[10px] text-white/20 font-bold uppercase tracking-[0.4em] mt-2 group-hover:text-white/40 transition-colors">{label}</span>
  </div>
);

export function MediaNetwork() {
  return (
    <section id="media" className="relative z-10 w-full bg-moa-black py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-moa-gold blur-[200px] animate-pulse rounded-full" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(212,175,55,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">

          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 group shadow-2xl">
              <div className="absolute inset-0 bg-moa-gold/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img loading="lazy"
                src="/images/moa_digital_media_network_1777708147838.png"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-moa-gold/10 to-transparent absolute -top-1/2 left-0 animate-scan" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-moa-black via-transparent to-transparent z-10" />

              <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-moa-gold/40 z-30" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-moa-gold/40 z-30" />

              <div className="absolute top-12 left-12 z-30 flex flex-col gap-2">
                <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-white/50 uppercase tracking-widest">Live_Feed: HUB_ROTUNDA_NORTH</span>
                </div>
                <div className="bg-moa-gold/90 px-3 py-1.5 rounded flex items-center gap-3">
                  <span className="text-[9px] font-mono text-black font-bold uppercase tracking-widest">Impression_Velocity: 14,282/HR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-moa-gold" />
              <span className="text-moa-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase">Digital Screens</span>
            </div>

            <h2 className="font-display text-6xl md:text-8xl text-white tracking-tighter leading-[0.8] mb-12 uppercase">
              Maximum <br /><span className="text-moa-gold italic">Impact.</span>
            </h2>

            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-12 border-l border-white/10 pl-8">
              Reach 40 million visitors instantly. With digital screens everywhere, you can run amazing campaigns and connect with shoppers right when they are ready to buy.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <NetworkMetric id="STR_NODE_01" value="250+" label="Digital Surfaces" />
              <NetworkMetric id="STR_NODE_02" value="3.2B" label="Impressions/YR" />
              <NetworkMetric id="STR_NODE_03" value="100%" label="Mall Coverage" />
              <NetworkMetric id="STR_NODE_04" value="82%" label="Brand Recall" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
