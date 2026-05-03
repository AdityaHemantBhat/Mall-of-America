import { siteData } from "@/data/content";
import { AnimatedText } from "@/components/AnimatedText";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function LuxuryWing() {
   const containerRef = useRef<HTMLElement>(null);
   const imageRef = useRef<HTMLImageElement>(null);
   const textBlockRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         if (imageRef.current) {
            gsap.to(imageRef.current, {
               yPercent: 15,
               ease: "none",
               scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
               }
            });
         }

         if (textBlockRef.current) {
            gsap.fromTo(textBlockRef.current,
               { y: 50, opacity: 0 },
               { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: textBlockRef.current, start: "top 85%" } }
            );
         }
      }, containerRef);

      return () => ctx.revert();
   }, []);

   return (
      <section ref={containerRef} className="relative w-full bg-[#0c0a09] pt-32 pb-48 overflow-hidden border-t border-white/5">
         <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[70vh] opacity-20 blur-[140px] bg-moa-gold rounded-full pointer-events-none mix-blend-screen" />

         <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div ref={textBlockRef} className="lg:col-span-5 z-20 order-2 lg:order-1 pt-12 lg:pt-0">
               <span className="inline-block text-[10px] uppercase font-bold tracking-[0.3em] text-moa-gold mb-8 border-l-2 border-moa-gold pl-4 py-1">
                  The Elevated Experience
               </span>
               <h2 className="text-5xl md:text-7xl font-display font-light text-white leading-[1.1] mb-8 relative">
                  <AnimatedText text="A Destination" delay={0} /> <br />
                  <em className="text-moa-gold font-serif"><AnimatedText text="for the Discerning." delay={0.4} /></em>
               </h2>
               <p className="text-lg font-light text-white/70 leading-relaxed mb-10 max-w-sm">
                  Mall of America's luxury corridor is meticulously curated to deliver an elevated shopping experience. Featuring monolithic marble storefronts and dedicated white-glove concierge services.
               </p>
               <div className="flex flex-col gap-8 mb-12 border-t border-white/10 pt-8 max-w-sm">
                  <div>
                     <span className="block text-[10px] uppercase font-bold text-white/40 tracking-[0.2em] mb-2">Demographic Profile</span>
                     <div className="text-4xl font-display text-white">{siteData.luxuryWing.demographics}</div>
                  </div>
               </div>
               <MagneticButton className="px-8 py-4 rounded-full border border-moa-gold/60 text-moa-gold text-xs font-bold uppercase tracking-widest hover:bg-moa-gold hover:text-black transition-colors flex items-center gap-3">
                  <span>Inquire on Luxury</span>
               </MagneticButton>
            </div>

            <div className="lg:col-span-7 relative h-[60vh] lg:h-[90vh] w-full order-1 lg:order-2 group">
               <div className="absolute -bottom-8 lg:bottom-12 -left-6 lg:-left-16 w-[80%] max-w-md p-6 lg:p-8 bg-black/60 backdrop-blur-xl border border-white/10 z-30 transform -rotate-1 hover:rotate-0 transition-transform duration-500 rounded-lg shadow-2xl">
                  <p className="font-display italic text-lg lg:text-xl text-white/90 leading-relaxed">
                     "{siteData.luxuryWing.quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                     <div className="w-8 h-[1px] bg-moa-gold/50" />
                     <span className="text-[9px] uppercase tracking-widest text-moa-gold">Global Luxury Automaker</span>
                  </div>
               </div>

               <div className="w-full h-full overflow-hidden rounded-sm relative z-20">
                  <img loading="lazy"
                     ref={imageRef}
                     src={siteData.luxuryWing.image}
                     alt="Luxury Corridor"
                     className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover origin-center"
                     loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20 mix-blend-multiply" />
               </div>
            </div>
         </div>
      </section>
   );
}
