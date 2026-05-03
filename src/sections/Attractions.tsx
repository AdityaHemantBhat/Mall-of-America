import { useRef, useEffect } from "react";
import { siteData } from "@/data/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const AttractionCard = ({ item, index }: { item: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!cardRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1
          }
        }
      );

      gsap.fromTo(bgRef.current,
        { yPercent: -20 },
        {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden mb-8 last:mb-0">
      <img loading="lazy"
        ref={bgRef}
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-[140%] object-cover object-center z-0 origin-center"
        loading="lazy"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-moa-black/90 via-moa-black/20 to-transparent" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 lg:p-16">
        <div className="max-w-3xl">
          <span className="text-moa-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">0{index + 1}</span>
          <h3 className="font-display text-4xl lg:text-7xl text-white mb-6 leading-none">{item.name}</h3>
          <p className="text-lg lg:text-2xl text-white/80 font-light">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export function Attractions() {
  return (
    <section id="entertainment" className="relative w-full bg-moa-black pt-32 pb-48">
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h2 className="font-display text-4xl lg:text-7xl text-white mb-8">
          The Only Mall on Earth<br />with a Roller Coaster Inside.
        </h2>
        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
          Retail draws a crowd. Entertainment creates a destination. Our immersive footprint guarantees an unprecedented multi-hour dwell time.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {siteData.attractions.map((item, i) => (
          <AttractionCard key={i} item={item} index={i} />
        ))}
      </div>

      <div className="text-center mt-32 px-6">
        <h3 className="font-display text-4xl md:text-5xl text-white italic">
          These aren't amenities.<br />
          <span className="text-moa-gold">They're the reason people come.</span>
        </h3>
      </div>
    </section>
  );
}
