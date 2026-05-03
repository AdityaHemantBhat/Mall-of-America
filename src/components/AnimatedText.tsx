import { motion, useAnimation, useInView, cubicBezier } from "framer-motion";
import { useEffect, useRef, memo } from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordMode?: boolean;
}

export const AnimatedText = memo(
  ({ text, className, delay = 0, wordMode = false }: SplitTextProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
    const controls = useAnimation();

    const shouldWordMode = wordMode || text.length > 40;

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    const words = text.split(" ");

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: shouldWordMode ? 0.05 : 0.02,
          delayChildren: delay,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: cubicBezier(0.2, 0.65, 0.3, 0.9) },
        style: { willChange: "transform, opacity" },
      },
    };

    if (shouldWordMode) {
      return (
        <motion.span
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={cn("inline-block", className)}
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
              <motion.span variants={itemVariants} className="inline-block">
                {word}
              </motion.span>
            </span>
          ))}
        </motion.span>
      );
    }

    return (
      <motion.span
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className={cn("inline-block", className)}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden whitespace-nowrap mr-[0.25em]"
          >
            {word.split("").map((char, j) => (
              <motion.span
                key={j}
                variants={itemVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    );
  },
);
