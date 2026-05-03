import { useEffect, useRef } from "react";
import { siteData } from "@/data/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DOMAINS: Record<string, string> = {
  "Gucci": "gucci.com",
  "Louis Vuitton": "louisvuitton.com",
  "Balenciaga": "balenciaga.com",
  "Saint Laurent": "ysl.com",
  "Zara": "zara.com",
  "H&M": "hm.com",
  "Apple": "apple.com",
  "Tesla": "tesla.com",
  "Nike": "nike.com",
  "Microsoft": "microsoft.com",
  "Dyson": "dyson.com",
  "Off-White": "off---white.com",
  "Nordstrom": "nordstrom.com",
  "Aritzia": "aritzia.com",
  "Hermès": "hermes.com",
  "Tiffany & Co.": "tiffany.com",
  "Burberry": "burberry.com",
  "Samsung": "samsung.com"
};

export function RetailHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const bgsRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !scrollRef.current) return;

    const sections = panelsRef.current;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const windowWidth = window.innerWidth;
      const amountToScroll = windowWidth * (sections.length - 1);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${amountToScroll}`,
        pin: true,
        animation: gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
        }),
        scrub: 0.5,
        onUpdate: (self) => {
          gsap.set("#retail-progress", { scaleX: self.progress });
        }
      });

      bgsRef.current.forEach((bg, i) => {
        if (!bg) return;
        gsap.to(bg, {
          xPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${amountToScroll}`,
            scrub: true,
          }
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="retail" ref={sectionRef} className="relative w-full min-h-screen lg:h-screen bg-moa-black overflow-hidden flex items-center">
      <div className="absolute top-12 left-6 lg:left-12 z-30 pointer-events-none">
        <h2 className="font-display font-light text-xl lg:text-2xl text-white mix-blend-difference hidden md:block">The Retail Landscape</h2>
      </div>

      <div ref={scrollRef} className="flex flex-col lg:flex-row h-full lg:w-[400vw]">
        {siteData.retail.map((panel, idx) => (
          <div
            key={idx}
            ref={el => { if (el) panelsRef.current[idx] = el }}
            className="w-full lg:w-screen h-screen lg:h-full flex-shrink-0 relative flex items-center p-6 lg:p-24 lg:border-none"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="w-[150%] lg:w-[125%] h-full relative -left-[25%] lg:-left-[12.5%]">
                <img loading="lazy"
                  ref={el => { if (el) bgsRef.current[idx] = el }}
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover opacity-40 brightness-75 origin-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-moa-black via-moa-black/40 lg:via-transparent to-transparent lg:to-moa-black/30" />
            </div>

            <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="md:col-span-10 lg:col-span-7 backdrop-blur-md bg-black/40 p-8 lg:p-12 border border-white/5 rounded-2xl shadow-2xl">
                <div className="text-moa-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 md:mb-6">{panel.category}</div>
                <h3 className="font-display text-4xl md:text-6xl leading-[1.1] text-white mb-4 md:mb-6 font-light">
                  {panel.title}
                </h3>
                <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-8 md:mb-12 max-w-md">
                  {panel.description}
                </p>
                <div className="space-y-4 md:space-y-6 border-l border-moa-gold/40 pl-6">
                  <span className="block text-[9px] md:text-[10px] uppercase font-bold text-moa-gold tracking-[0.2em]">Notable Partners</span>
                  <div className="flex flex-wrap gap-4 md:gap-8 items-center">
                    {panel.anchors.map(anchor => {
                      const name = typeof anchor === 'string' ? anchor : anchor.name;
                      const localLogo = typeof anchor === 'string' ? null : anchor.logo;
                      const domain = DOMAINS[name] || `${name.toLowerCase().replace(/\s|&/g, "")}.com`;

                      return (
                        <div key={name} className="group/brand flex flex-col items-center gap-2">
                          <div className="w-12 h-12 md:w-20 md:h-20 bg-white/5 rounded-xl flex items-center justify-center p-3 border border-white/10 group-hover/brand:border-moa-gold group-hover/brand:bg-white/10 transition-all duration-500 shadow-xl">
                            <img loading="lazy"
                              src={localLogo || `https://logo.clearbit.com/${domain}`}
                              alt={name}
                              className="w-full h-full object-contain transition-all duration-500 mix-blend-color-burn"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-[8px] font-bold text-white/40 text-center">${name}</span>`;
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:block absolute bottom-12 left-12 right-12 h-[1px] bg-white/10 z-20 overflow-hidden rounded-full">
        <div className="h-full bg-moa-gold origin-left scale-x-0 rounded-full" id="retail-progress" />
      </div>
    </section>
  );
}
