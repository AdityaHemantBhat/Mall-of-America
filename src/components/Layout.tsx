import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { siteData } from "@/data/content";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { Noise } from "@/components/Noise";
import { MagneticButton } from "@/components/MagneticButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RequestMeetingModal } from "@/components/RequestMeetingModal";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { usePageTransition } from "@/components/PageTransition";

export function Layout({
  children,
  scrollLocked = false,
  hideNav = false,
}: {
  children: React.ReactNode;
  scrollLocked?: boolean;
  hideNav?: boolean;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null);
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);
  const location = useLocation();
  const { navigateWithTransition } = usePageTransition();
  const navigate = useNavigate();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    setLenisRef(lenis);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      const progressBar = document.getElementById("global-progress");
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef) {
      lenisRef.scrollTo(0, { immediate: true });
      lenisRef.start();
    }

    setMobileMenuOpen(false);

    const timeout = setTimeout(() => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.refresh(true);
        setTimeout(() => ScrollTrigger.refresh(), 500);
      });
    }, 200);
    return () => clearTimeout(timeout);
  }, [location.pathname, lenisRef]);

  useEffect(() => {
    if (lenisRef) {
      if (scrollLocked || meetingModalOpen) {
        lenisRef.stop();
      } else {
        lenisRef.start();
      }
    }
  }, [lenisRef, scrollLocked, meetingModalOpen]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        lenisRef?.scrollTo(href);
      }
    } else {
      navigateWithTransition(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Noise />
      <CustomCursor />
      <RequestMeetingModal
        isOpen={meetingModalOpen}
        onClose={() => setMeetingModalOpen(false)}
      />
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out border-b border-transparent py-6 px-6 lg:px-12",
          (isScrolled && !mobileMenuOpen)
            ? "bg-black/90 backdrop-blur-xl border-white/5 py-4"
            : "bg-transparent",
          hideNav && "opacity-0 pointer-events-none"
        )}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <button
            onClick={() => handleNavClick("/")}
            className={cn(
              "flex items-center space-x-4 group relative transition-opacity duration-300",
              mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >

            <div className="flex overflow-hidden">
              {"MALL OF AMERICA".split(" ").map((word, wordIdx) => (
                <div key={wordIdx} className="flex mr-3 last:mr-0">
                  {word.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + (wordIdx * 0.1) + (i * 0.01),
                        ease: [0.33, 1, 0.68, 1]
                      }}
                      style={{ willChange: "transform, opacity" }}
                      className={cn(
                        "font-display font-black text-xl md:text-2xl tracking-tighter uppercase inline-block leading-none transition-colors duration-500 text-white group-hover:text-moa-gold"
                      )}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-moa-gold origin-left"
            />
          </button>

          <div className="hidden xl:flex items-center space-x-10">
            {siteData.nav.map((item, i) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="group flex flex-col items-center"
              >
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 group-hover:text-white transition-colors">
                  {item.label}
                </span>
                <motion.div
                  className="h-px bg-moa-gold w-0 group-hover:w-full transition-all duration-300 mt-1"
                />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-8">
            <div className={cn(
              "hidden sm:block transition-opacity duration-300",
              mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            )}>
              <MagneticButton
                onClick={() => setMeetingModalOpen(true)}
                className="px-8 py-3 rounded-full bg-moa-gold text-black text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all shadow-[0_10px_20px_rgba(201,169,110,0.2)]"
              >
                Let's Talk
              </MagneticButton>
            </div>

            <button
              className="xl:hidden w-10 h-10 flex flex-col items-center justify-center z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col items-end space-y-1.5 transition-all duration-300">
                <span
                  className={cn(
                    "h-[1.5px] bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
                    mobileMenuOpen ? "w-6 rotate-45 translate-y-[2px] bg-moa-gold" : "w-6"
                  )}
                />
                <span
                  className={cn(
                    "h-[1.5px] bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
                    mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[2px] bg-moa-gold" : "w-4"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-[1px] bg-moa-gold/30 transition-all duration-300"
          id="global-progress"
          style={{ width: "0%" }}
        />
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.4 } }}
            className="fixed inset-0 z-[90] flex pointer-events-none"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.76, 0, 0.24, 1]
                }}
                className="flex-1 bg-moa-black border-r border-white/5 origin-top"
              />
            ))}

            <div className="absolute inset-0 z-10 pointer-events-auto overflow-y-auto overflow-x-hidden pt-32 pb-12 px-6 md:px-12 xl:px-24 flex flex-col xl:flex-row items-center xl:justify-between gap-16 xl:gap-0">
              <div className="flex flex-col space-y-6 md:space-y-8 w-full xl:w-auto items-center xl:items-start text-center xl:text-left">
                {siteData.nav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: 0.3 + i * 0.08, ease: "circOut" }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="group relative flex items-center font-display text-2xl sm:text-3xl md:text-4xl xl:text-8xl leading-tight text-white hover:text-moa-gold transition-colors"
                    >
                      <span className="hidden xl:block opacity-0 group-hover:opacity-100 transition-opacity absolute -left-12 text-xl font-sans text-moa-gold">0{i + 1}</span>
                      <span className="uppercase tracking-tighter">{item.label}</span>
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center xl:items-end space-y-12 xl:space-y-8 border-t xl:border-t-0 xl:border-l border-white/10 pt-8 xl:pt-0 xl:pl-12 w-full xl:w-auto"
              >
                <div className="flex flex-col items-center xl:items-end">
                  <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest mb-4">Connect</p>
                  <div className="flex gap-8 xl:flex-col xl:gap-2">
                    <p className="text-white text-xs md:text-sm hover:text-moa-gold cursor-pointer transition-colors">Instagram</p>
                    <p className="text-white text-xs md:text-sm hover:text-moa-gold cursor-pointer transition-colors">LinkedIn</p>
                    <p className="text-white text-xs md:text-sm hover:text-moa-gold cursor-pointer transition-colors">Twitter</p>
                  </div>
                </div>

                <div className="text-center xl:text-right">
                  <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest mb-2">Inquiries</p>
                  <p className="text-white text-sm md:text-lg font-medium break-all">leasing@mallofamerica.com</p>
                </div>

                <MagneticButton
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMeetingModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-12 py-6 bg-moa-gold text-black rounded-full text-xs font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform"
                >
                  Start a Project
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative overflow-x-hidden" style={{ visibility: "visible", opacity: 1 }}>
        {children}
      </main>

      <div className="fixed bottom-12 right-6 lg:right-12 z-40 hidden md:block">
        <BackgroundMusic />
      </div>

      {location.pathname === "/" && (
        <div className="fixed right-6 lg:right-12 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end space-y-8">
          {[
            { id: "hero", label: "01 / VISION" },
            { id: "overview", label: "02 / PERFORMANCE" },
            { id: "retail", label: "03 / RETAIL" },
            { id: "demographics", label: "04 / AUDIENCE" },
            { id: "experiences", label: "05 / ECOSYSTEM" },
            { id: "blueprint", label: "06 / STRATEGY" },
            { id: "media", label: "07 / AMPLIFICATION" },
            { id: "success", label: "08 / VALIDATION" },
            { id: "venues", label: "09 / INFRASTRUCTURE" },
            { id: "opportunity", label: "10 / OPPORTUNITY" }
          ].map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => lenisRef?.scrollTo(`#${slide.id}`)}
              className="group flex items-center space-x-4 outline-none"
            >
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/20 group-hover:text-moa-gold transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                {slide.label}
              </span>
              <div className="relative w-12 h-px bg-white/10 group-hover:bg-moa-gold transition-colors">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-inherit" />
              </div>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
