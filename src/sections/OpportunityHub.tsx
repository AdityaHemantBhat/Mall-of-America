import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { usePageTransition } from "@/components/PageTransition";

const VerticalCard = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  href, 
  cta 
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  image: string; 
  href: string; 
  cta: string;
}) => {
  const { navigateWithTransition } = usePageTransition();
  
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative h-[600px] md:h-[800px] overflow-hidden rounded-3xl border border-white/5 bg-zinc-950 flex flex-col justify-end p-8 md:p-12"
    >
      <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
        <img src={image} className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" alt={title} loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
      </div>
      
      <div className="relative z-10">
        <span className="text-moa-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 block translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {subtitle}
        </span>
        <h3 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-none mb-6">
          {title}
        </h3>
        <p className="text-white/50 text-sm md:text-lg font-light leading-relaxed mb-12 max-w-sm translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
          {description}
        </p>
        
        <div className="flex gap-4">
          <MagneticButton
            onClick={() => navigateWithTransition(href)}
            className="px-8 py-4 bg-white text-black rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-moa-gold transition-colors"
          >
            Explore
          </MagneticButton>
          <MagneticButton
            onClick={() => {}}
            className="px-8 py-4 border border-white/10 text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/5 transition-colors"
          >
            {cta}
          </MagneticButton>
        </div>
      </div>
      
      <div className="absolute top-8 right-8 text-[9px] font-mono text-white/10 uppercase tracking-widest flex flex-col items-end">
        <span>Strategic Placement // {title.toUpperCase()}</span>
        <span>Booking Cycle: 2024-25</span>
      </div>
    </motion.div>
  );
};

export function OpportunityHub() {
  return (
    <section id="opportunity" className="relative z-10 w-full bg-moa-black py-40 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-display text-6xl md:text-[10rem] text-white tracking-tighter leading-[0.8] mb-8">
            Your <br/><span className="text-moa-gold italic">Opportunity.</span>
          </h2>
          <p className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.5em]">
            Find the perfect way to bring your brand to Mall of America.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VerticalCard 
            title="Lease."
            subtitle="Commercial Strategy"
            description="Find the perfect storefront and open up shop right alongside the biggest brands in the world."
            image="/images/moa_futuristic_rotunda_1777708083863.png"
            href="/retail-luxury"
            cta="Leasing Kit"
          />
          <VerticalCard 
            title="Activate."
            subtitle="Brand Activations"
            description="Launch pop-ups and campaigns that grab attention and get people talking about your brand."
            image="/images/moa_digital_media_network_1777708147838.png"
            href="/activations"
            cta="Media Kit"
          />
          <VerticalCard 
            title="Perform."
            subtitle="Global Stages"
            description="Host an unforgettable event or concert in one of our massive indoor spaces."
            image="/images/moa_global_stages_concert_1777708359401.png"
            href="/venues"
            cta="Venue Kit"
          />
        </div>
      </div>
    </section>
  );
}
