import { siteData } from "@/data/content";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TiltCard = ({ item }: { item: any }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full p-8 border border-white/5 bg-moa-gray-light/30 backdrop-blur-sm rounded-xl cursor-crosshair group hover:border-moa-gold/30 transition-colors"
    >
      <div style={{ transform: "translateZ(30px)" }}>
        <span className="block text-[10px] uppercase font-bold text-moa-gold tracking-[0.2em] mb-4">
          {item.type}
        </span>
        <h4 className="font-display text-2xl text-white mb-2">{item.name}</h4>
        <p className="text-sm font-light text-white/50">{item.desc}</p>
      </div>
    </motion.div>
  );
};

export function Dining() {
  const containerRef = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftImageRef.current) {
        gsap.to(leftImageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="dining"
      ref={containerRef}
      className="relative w-full min-h-screen bg-moa-black grid lg:grid-cols-2"
    >
      <div className="relative h-[50vh] lg:h-auto lg:sticky lg:top-0 lg:h-screen w-full overflow-hidden border-r border-white/5">
        <div className="absolute inset-0 z-10 bg-black/30" />
        <img
          loading="lazy"
          ref={leftImageRef}
          src="/images/moa_gastronomy_fine_dining_1777708342915.png"
          className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover"
          alt="Dining Experience"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none p-12">
          <h2 className="font-display text-6xl md:text-8xl text-white text-center italic drop-shadow-2xl">
            Taste <br />
            <span className="text-moa-gold">The Destination.</span>
          </h2>
        </div>
      </div>

      <div className="py-24 px-6 lg:px-16 flex flex-col justify-center">
        <div className="max-w-xl mx-auto w-full">
          <h3 className="text-3xl font-display text-white mb-6">
            Culinary Scale
          </h3>
          <p className="text-white/60 font-light leading-relaxed mb-16">
            Dining at Mall of America is not an amenity—it is an anchor
            category. We house over 50 restaurants ranging from fast-premium to
            elevated dining, moving millions of covers annually and capturing
            massive post-retail dwell time.
          </p>

          <div className="grid gap-6 perspective-1000">
            {siteData.dining.map((item, i) => (
              <TiltCard key={i} item={item} />
            ))}
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 text-center">
            <span className="font-display text-4xl text-white block mb-4">
              50+ Dining Concepts
            </span>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-moa-gold">
              Every Cuisine. Every Occasion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
