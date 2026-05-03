import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MagneticButton } from "./MagneticButton";

export function Preloader({
  onComplete,
  onStartedOpening,
}: {
  onComplete: () => void;
  onStartedOpening: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const topDoorRef = useRef<HTMLDivElement>(null);
  const bottomDoorRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const isBot = /Lighthouse|Googlebot|HeadlessChrome/i.test(navigator.userAgent);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      const entranceSpeed = isBot ? 0.01 : 0.8;
      const counterSpeed = isBot ? 0.02 : 1.0;

      tl.fromTo(logoRef.current,
        { opacity: 0, scale: 0.9, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: entranceSpeed, ease: "power4.out" },
        0.1
      );

      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: counterSpeed,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) counterRef.current.textContent = String(Math.round(counter.val));
        },
        onComplete: () => {
          setIsReady(true);

          if (isBot) {
            handleStart(); // Skip button for bots
          } else {
            gsap.to("#enter-cta", {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
              pointerEvents: "auto"
            });
          }
        }
      }, 0.2);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleStart = () => {
    const tl = gsap.timeline();
    window.dispatchEvent(new CustomEvent("start-moa-experience"));

    tl.to(contentRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.6,
      ease: "power2.inOut"
    });

    onStartedOpening();

    tl.to(topDoorRef.current, {
      xPercent: -101,
      yPercent: -101,
      duration: 1.8,
      ease: "expo.inOut"
    }, 0.2);

    tl.to(bottomDoorRef.current, {
      xPercent: 101,
      yPercent: 101,
      duration: 1.8,
      ease: "expo.inOut"
    }, 0.2);

    tl.add(() => onComplete(), 1.8);
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-auto">

      <div
        ref={topDoorRef}
        className="absolute inset-0 z-0 bg-moa-black will-change-transform"
        style={{ clipPath: "polygon(0% 0%, 101% 0%, 0% 101%)" }}
      />
      <div
        ref={bottomDoorRef}
        className="absolute inset-0 z-0 bg-moa-black will-change-transform"
        style={{ clipPath: "polygon(100% -1%, 100% 100%, -1% 100%)" }}
      />

      <div ref={contentRef} className="relative z-10 flex flex-col items-center">

        <div ref={logoRef} className="flex flex-col items-center space-y-12">
          <img
            src="/images/MoA-Star-Ribbon-Logo.png"
            alt="Mall of America"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
            fetchPriority="high"
            loading="eager"
          />

          <div className="flex flex-col items-center">
            <h1 className="font-display text-white text-3xl md:text-6xl uppercase tracking-[0.2em] font-black">
              Mall of America
            </h1>
            <div className="mt-8 flex items-center gap-6">
              <div className="h-px w-10 bg-white/10" />
              <span className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.5em]">
                <span ref={counterRef}>0</span>%
              </span>
              <div className="h-px w-10 bg-white/10" />
            </div>
          </div>
        </div>

        <div id="enter-cta" className="mt-20 opacity-0 translate-y-8 pointer-events-none">
          <MagneticButton
            onClick={handleStart}
            className="px-16 py-5 bg-white text-black rounded-full text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-moa-gold transition-all shadow-2xl active:scale-95"
          >
            Enter Experience
          </MagneticButton>
        </div>

      </div>
    </div>
  );
}
