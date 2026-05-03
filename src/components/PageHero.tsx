import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedText } from "@/components/AnimatedText";

gsap.registerPlugin(ScrollTrigger);

export function PageHero({
  title,
  subtitle,
  imageUrl,
  videoUrl,
}: {
  title: string;
  subtitle: string;
  imageUrl: string;
  videoUrl?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLImageElement | HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (mediaRef.current) {
        gsap.to(mediaRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[60vh] lg:h-[80vh] bg-[#0c0a09] overflow-hidden flex items-end justify-center pb-24 border-b border-white/5"
    >
      <div className="absolute inset-0 z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/60 after:bg-gradient-to-t after:from-[#0c0a09] after:via-transparent after:to-black/40">
        {videoUrl ? (
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            src={videoUrl}
            poster={imageUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[150%] -top-[25%] absolute origin-center object-cover opacity-60 mix-blend-screen"
          />
        ) : (
          <img
            loading="lazy"
            ref={mediaRef as React.RefObject<HTMLImageElement>}
            src={imageUrl}
            alt={title}
            className="w-full h-[150%] -top-[25%] absolute origin-center object-cover opacity-60 mix-blend-screen"
          />
        )}
      </div>

      <div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="font-display text-5xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tighter text-white mb-8 uppercase">
          <AnimatedText text={title} delay={0.2} />
        </h1>
        <div className="font-sans text-xs md:text-sm text-moa-gold tracking-[0.4em] uppercase max-w-2xl mx-auto">
          <AnimatedText text={subtitle} delay={0.6} wordMode />
        </div>
      </div>
    </section>
  );
}
