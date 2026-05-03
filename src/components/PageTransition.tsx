import { createContext, useContext, useRef, useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

interface TransitionContextType {
  navigateWithTransition: (to: string) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateWithTransition: () => { },
  isTransitioning: false,
});

export const usePageTransition = () => useContext(TransitionContext);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const overlayRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathLengthRef = useRef(0);

  useEffect(() => {
    if (svgPathRef.current) {
      const len = svgPathRef.current.getTotalLength();
      pathLengthRef.current = len;
      // Initial state: path fully hidden
      gsap.set(svgPathRef.current, {
        strokeDasharray: len,
        strokeDashoffset: len,
        strokeWidth: 2,
      });
    }
  }, []);

  useEffect(() => {
    if (!isTransitioning && overlayRef.current) {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [location.pathname, isTransitioning]);

  const navigateWithTransition = useCallback((to: string) => {
    if (to === location.pathname || isTransitioning) return;

    setIsTransitioning(true);
    const len = pathLengthRef.current;
    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    })
    .to(svgPathRef.current, {
      strokeDashoffset: 0,
      strokeWidth: 300,
      duration: 1.5,
      ease: "power2.inOut",
    }, 0)
    .add(() => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach(st => st.kill(true));
      });
      window.scrollTo(0, 0);
      setTimeout(() => {
        navigate(to);
      }, 50);
    })
    .to(svgPathRef.current, {
      strokeDashoffset: -len,
      strokeWidth: 2,
      duration: 1.5,
      ease: "power2.inOut",
    })
    .to(overlayRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    }, "-=0.5") // Overlay fades out during the last 0.5s of the enter animation
    .add(() => {
      setIsTransitioning(false);
      // Reset for next transition
      gsap.set(svgPathRef.current, {
        strokeDashoffset: len,
        strokeWidth: 2
      });
    });

  }, [navigate, location.pathname, isTransitioning]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, isTransitioning }}>
      <div
        ref={overlayRef}
        className="fixed inset-0 pointer-events-none flex items-center justify-center opacity-0 bg-transparent"
        style={{ zIndex: 9999 }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1316 664"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ transform: "scale(1.3)" }}
        >
          <path
            ref={svgPathRef}
            d="M13.4746 291.27C13.4746 291.27 100.646 -18.6724 255.617 16.8418C410.588 52.356 61.0296 431.197 233.017 546.326C431.659 679.299 444.494 21.0125 652.73 100.784C860.967 180.556 468.663 430.709 617.216 546.326C765.769 661.944 819.097 48.2722 988.501 120.156C1174.21 198.957 809.424 543.841 988.501 636.726C1189.37 740.915 1301.67 149.213 1301.67 149.213"
            stroke="#C9A96E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {children}
    </TransitionContext.Provider>
  );
}
