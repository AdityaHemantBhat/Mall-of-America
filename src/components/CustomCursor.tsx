import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isInteractable = target.closest('button, a, input, [data-cursor-hover]');
      setIsHovered(!!isInteractable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden lg:block overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 border-[1px] border-moa-gold"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 40 : 16,
          height: isHovered ? 40 : 16,
          opacity: isVisible ? 1 : 0,
          borderRadius: isHovered ? "50%" : "0px", // Circle on hover
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.1)" : "transparent",
        }}
        animate={{
          rotate: isHovered ? 0 : 45, // Diamond to circle transition
        }}
        transition={{ type: "spring", ...springConfig }}
      >
        <motion.div 
          animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.8 : 1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-moa-gold" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-moa-gold" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-moa-gold" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-moa-gold" />
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-moa-gold rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
    </div>
  );
}
