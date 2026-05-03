import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const EventModal = ({
  isOpen,
  onClose,
  type,
}: {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-moa-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative z-10 bg-moa-gray w-full max-w-2xl rounded-2xl border border-white/10 p-8 lg:p-12 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-white pb-1"
            >
              CLOSE ✕
            </button>
            <h3 className="font-display text-4xl text-white mb-2">
              Request Information
            </h3>
            <p className="text-moa-gold text-sm tracking-widest uppercase mb-10">
              {type}
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-moa-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-moa-gold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-moa-gold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50">
                  Details / Preferred Date
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-moa-gold resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-moa-gold text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
          },
        );
      }

      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: cardsRef.current[0],
              start: "top 85%",
            },
          },
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const openModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative w-full bg-[#161616] py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-moa-gold opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={headerRef}
        className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10"
      >
        <h2 className="font-display font-light text-4xl lg:text-5xl text-white italic max-w-4xl mx-auto leading-tight">
          "40 million people walk through these doors every year.
          <br />
          <span className="text-moa-gold font-medium">
            Make sure they see you.
          </span>
          "
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 relative z-10">
        <div
          ref={(el) => {
            if (el) cardsRef.current[0] = el;
          }}
          className="bg-moa-black p-8 lg:p-12 border border-white/5 flex flex-col items-start group relative overflow-hidden text-left hover:bg-white/5 transition-colors"
        >
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-all duration-500 text-moa-gold rotate-[-45deg] group-hover:rotate-0 group-hover:scale-110">
            <ArrowRight size={24} />
          </div>
          <h3 className="font-display text-3xl text-white mb-4 pr-8">
            Live Events
          </h3>
          <p className="text-white/60 font-light mb-12 flex-grow">
            From global album drops to celebrity meet-and-greets, transform
            product launches into cultural moments in our Rotunda.
          </p>
          <MagneticButton
            onClick={() => openModal("Live Events")}
            className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center space-x-2 group-hover:text-moa-gold transition-colors"
          >
            <span>Book a Date</span>
            <ArrowRight size={14} />
          </MagneticButton>
        </div>

        <div
          ref={(el) => {
            if (el) cardsRef.current[1] = el;
          }}
          className="bg-moa-black p-8 lg:p-12 border border-white/5 flex flex-col items-start group relative overflow-hidden text-left hover:bg-white/5 transition-colors"
        >
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-all duration-500 text-moa-gold rotate-[-45deg] group-hover:rotate-0 group-hover:scale-110">
            <ArrowRight size={24} />
          </div>
          <h3 className="font-display text-3xl text-white mb-4 pr-8">
            Brand Activations
          </h3>
          <p className="text-white/60 font-light mb-12 flex-grow">
            Dominate the visual field with massive digital signage and premium
            pop-up build-outs strategically placed in high-flow corridors.
          </p>
          <MagneticButton
            onClick={() => openModal("Brand Activations")}
            className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center space-x-2 group-hover:text-moa-gold transition-colors"
          >
            <span>Request Sponsorship</span>
            <ArrowRight size={14} />
          </MagneticButton>
        </div>

        <div
          ref={(el) => {
            if (el) cardsRef.current[2] = el;
          }}
          className="bg-moa-black p-8 lg:p-12 border border-white/5 flex flex-col items-start group relative overflow-hidden text-left hover:bg-white/5 transition-colors"
        >
          <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-all duration-500 text-moa-gold rotate-[-45deg] group-hover:rotate-0 group-hover:scale-110">
            <ArrowRight size={24} />
          </div>
          <h3 className="font-display text-3xl text-white mb-4 pr-8">
            Conventions
          </h3>
          <p className="text-white/60 font-light mb-12 flex-grow">
            Leverage an unprecedented A/V capable Event Center designed for
            corporate keynotes and large-scale convention hosting.
          </p>
          <MagneticButton
            onClick={() => openModal("Conventions & Corporate")}
            className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center space-x-2 group-hover:text-moa-gold transition-colors"
          >
            <span>Download Event Kit</span>
            <ArrowRight size={14} />
          </MagneticButton>
        </div>
      </div>

      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </section>
  );
}
