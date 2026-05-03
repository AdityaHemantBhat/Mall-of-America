import { siteData } from "@/data/content";
import { AnimatedText } from "@/components/AnimatedText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section ref={ref} className="relative w-full min-h-[70vh] bg-moa-black overflow-hidden flex flex-col pt-40 pb-0">
       <div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-moa-black/60 after:bg-gradient-to-t after:from-moa-black after:via-transparent after:to-moa-black/80">
        <motion.img
          src={siteData.footer.imageUrl}
          alt="Night View"
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-32 text-center flex-1 flex flex-col justify-center items-center">
         <h2 className="font-display text-5xl md:text-8xl text-white mb-16 italic font-light drop-shadow-2xl">
           <AnimatedText text="The center of American retail." delay={0.2} wordMode />
           <br/>
           <AnimatedText text="Make it yours." delay={0.6} wordMode />
         </h2>

         {isInView && (
           <motion.div 
             initial="hidden"
             animate="visible"
             variants={{
               hidden: {},
               visible: {
                 transition: { staggerChildren: 0.1, delayChildren: 1.5 }
               }
             }}
             className="flex flex-col md:flex-row items-center justify-center gap-4 md:space-x-4 w-full max-w-3xl"
           >
             {[
               { label: "Lease a Space", action: () => document.getElementById('leasing')?.scrollIntoView({ behavior: 'smooth' }) },
               { label: "Sponsor a Moment", action: () => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }) },
               { label: "Book an Event", action: () => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' }) }
             ].map((btn, i) => (
                <motion.button
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  onClick={btn.action}
                  className="w-full md:w-auto px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-colors"
                >
                  {btn.label}
                </motion.button>
             ))}
           </motion.div>
         )}
      </div>

      <div className="relative z-10 w-full border-t border-white/10 bg-moa-black/80 backdrop-blur-md py-10 px-6 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] uppercase font-bold tracking-widest gap-4">
            <div>&copy; {new Date().getFullYear()} Mall of America. Commercial Partnerships.</div>
            <div className="text-moa-gold text-xs tracking-[0.5em]">Executive Deck</div>
            <div className="flex space-x-6 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-moa-gold/30" />
              <span>Official Investor Briefing {new Date().getFullYear()}</span>
            </div>
          </div>
      </div>
    </section>
  );
}
