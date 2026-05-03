const ExperienceCard = ({ title, desc, image, tag, span }: { title: string, desc: string, image: string, tag: string, span: string }) => (
  <div className={`${span} group relative overflow-hidden rounded-3xl bg-zinc-950 border border-white/5 min-h-[300px]`}>
    <img loading="lazy"
      src={image}
      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
      alt={title}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
    <div className="absolute top-8 left-8">
      <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-moa-gold bg-black/50 px-3 py-1 rounded-full border border-moa-gold/20">
        {tag}
      </span>
    </div>
    <div className="absolute bottom-8 left-8 right-8">
      <h3 className="font-display text-3xl md:text-5xl text-white mb-2 tracking-tighter uppercase">{title}</h3>
      <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest leading-relaxed max-w-sm">
        {desc}
      </p>
    </div>
  </div>
);

export function ExperienceEcosystem() {
  return (
    <section id="experiences" className="relative z-10 w-full bg-moa-black py-20 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-display text-6xl md:text-9xl text-white tracking-tighter leading-[0.8] mb-8">
            More Than <br /><span className="text-moa-gold italic">Shopping.</span>
          </h2>
          <p className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.5em]">
            A perfect mix of amazing food, great hotels, and world-class entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:auto-rows-[400px]">
          <ExperienceCard
            title="Nickelodeon Universe"
            tag="Entertainment"
            desc="7 acres of rides and thrills at the largest indoor theme park in North America."
            image="/images/moa_nickelodeon_universe_cinematic_1777708115321.png"
            span="md:col-span-8"
          />
          <ExperienceCard
            title="Luxury Stays"
            tag="Hospitality"
            desc="Beautiful hotels connected right to the mall for a perfect stay."
            image="/images/moa_hospitality_luxury_stay_1777708328260.png"
            span="md:col-span-4"
          />
          <ExperienceCard
            title="Gastronomy"
            tag="Dining"
            desc="Everything from quick bites to celebrity chef restaurants. There's something for everyone."
            image="/images/moa_gastronomy_fine_dining_1777708342915.png"
            span="md:col-span-4"
          />
          <ExperienceCard
            title="The Aquarium"
            tag="Discovery"
            desc="SEA LIFE Minnesota. An amazing underwater adventure right here in the mall."
            image="/images/moa_aquarium_immersive_1777708130568.png"
            span="md:col-span-8"
          />
        </div>
      </div>
    </section>
  );
}
