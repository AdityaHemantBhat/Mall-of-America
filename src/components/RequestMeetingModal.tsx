import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

export function RequestMeetingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />

          <motion.div 
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative w-full max-w-5xl bg-[#0c0a09] border border-white/10 flex flex-col md:flex-row overflow-hidden shadow-2xl"
          >
            <div className="hidden md:block md:w-[45%] relative border-r border-white/10">
               <img loading="lazy" src="/images/moa_venue_executive_suite_1777708464860.png" alt="Executive Suite" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-90" />
               
               <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-moa-gold/50" />
               <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-moa-gold/50" />
               
               <div className="absolute bottom-12 left-12">
                  <div className="text-moa-gold text-[10px] font-mono tracking-[0.2em] uppercase mb-2">Connect</div>
                  <div className="text-white font-display text-2xl uppercase tracking-widest">Private<br/>Briefing</div>
               </div>
            </div>

            <div className="flex-1 relative z-10 w-full p-8 md:p-16">
              <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-moa-gold opacity-5 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

              <span className="text-moa-gold text-[10px] font-mono uppercase tracking-[0.2em] mb-6 block flex items-center gap-4">
                <span className="w-8 h-px bg-moa-gold/50"></span>
                Direct Inquiry
              </span>
              
              <h2 className="font-display text-4xl lg:text-5xl text-white leading-[1.1] tracking-tighter uppercase mb-6">
                Let's Discuss <br/><span className="text-moa-gold italic">Opportunities.</span>
              </h2>
              
              <p className="text-white/40 text-sm font-light max-w-md mb-12 leading-relaxed">
                Connect with our leasing team to explore flagship spaces, experiential pop-ups, or massive brand activations. Tell us a bit about your brand, and we'll get back to you to schedule a private tour.
              </p>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="text" id="name" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-sm focus:outline-none focus:border-moa-gold transition-colors peer placeholder-transparent" placeholder="Your Name" />
                    <label htmlFor="name" className="absolute left-0 top-0 text-[10px] uppercase font-mono text-white/40 tracking-widest transition-all peer-focus:-translate-y-5 peer-focus:text-moa-gold peer-focus:text-[9px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-white/40">Your Name</label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="company" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-sm focus:outline-none focus:border-moa-gold transition-colors peer placeholder-transparent" placeholder="Company or Brand" />
                    <label htmlFor="company" className="absolute left-0 top-0 text-[10px] uppercase font-mono text-white/40 tracking-widest transition-all peer-focus:-translate-y-5 peer-focus:text-moa-gold peer-focus:text-[9px] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-white/40">Company or Brand</label>
                  </div>
                </div>

                <div className="relative group">
                  <select id="type" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-sm focus:outline-none focus:border-moa-gold transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected className="bg-[#0c0a09] text-white/40">What are you looking for?</option>
                    <option className="bg-[#0c0a09]">Flagship Retail Space</option>
                    <option className="bg-[#0c0a09]">Pop-Up & Experiential</option>
                    <option className="bg-[#0c0a09]">Restaurant / Dining</option>
                    <option className="bg-[#0c0a09]">Partnerships & Events</option>
                  </select>
                  <label htmlFor="type" className="absolute left-0 -top-5 text-[9px] uppercase font-mono text-moa-gold tracking-widest">Inquiry Type</label>
                  <div className="absolute right-0 top-1 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-moa-gold"/>
                    </svg>
                  </div>
                </div>
                
                <div className="pt-8 flex items-center justify-between border-t border-white/10 mt-8">
                  <button type="button" onClick={onClose} className="text-white/50 hover:text-white uppercase text-[10px] tracking-widest font-bold transition-colors">
                    Cancel
                  </button>
                  <MagneticButton className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-moa-gold transition-colors flex items-center gap-3">
                     Send Request
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </MagneticButton>
                </div>
              </form>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
