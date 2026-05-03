import { useEffect, useRef } from "react";
import { AnimatedText } from "@/components/AnimatedText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      }
    });

    tl.fromTo(contentRef.current,
      { scale: 1, opacity: 1 },
      { scale: 0.8, opacity: 0, y: -100, ease: "power2.inOut" }
    );

    gsap.to(videoRef.current, {
      y: 150,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => { });
      }
    };

    window.addEventListener("start-moa-experience", playVideo);
    return () => window.removeEventListener("start-moa-experience", playVideo);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative z-0 w-full h-screen bg-moa-black overflow-hidden select-none"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="w-full h-full object-cover scale-110 opacity-60 grayscale-[0.2]"
        >
          <source src="/videos/Mall_of_America.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-moa-black via-moa-black/40 to-black/60" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none pt-16 pb-4 px-4 md:pt-19 md:pb-8 md:px-8">
        <div className="h-full border border-white/10 rounded-sm relative">
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-moa-gold" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-moa-gold" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-moa-gold" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-moa-gold" />
        </div>
      </div>

      <div
        ref={contentRef}
        className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-moa-gold text-xs font-bold tracking-[0.6em] uppercase">The Center of Everything</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black uppercase text-white font-display tracking-tighter leading-[0.8] mb-8 md:mb-12 drop-shadow-2xl">
          <AnimatedText text="MALL OF" delay={0.4} />
          <br />
          <span className="text-moa-gold italic">
            <AnimatedText text="AMERICA." delay={0.6} />
          </span>
        </h1>

        <div className="max-w-xs md:max-w-2xl overflow-hidden">
          <div className="text-[10px] sm:text-sm md:text-xl text-white/60 font-light tracking-[0.2em] md:tracking-widest uppercase leading-relaxed">
            <AnimatedText
              text="Not just a shopping center. It's a place where people connect, brands come alive, and unforgettable memories are made."
              wordMode
              delay={1.2}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-8 md:bottom-16 flex flex-col items-center group cursor-pointer"
        >
          <div className="text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase mb-2 md:mb-4 group-hover:text-moa-gold transition-colors">
            Start the Journey
          </div>
          <div className="w-px h-10 md:h-16 bg-gradient-to-b from-moa-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
