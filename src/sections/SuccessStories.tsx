import { motion } from "framer-motion";
import { useState } from "react";

const quotes = [
  {
    brand: "Nike",
    quote: "Our store at Mall of America isn't just retail; it's a true experience. The amount of foot traffic we see here every single day is absolutely incredible.",
    author: "Global Retail Director",
    logo: "https://logo.clearbit.com/nike.com"
  },
  {
    brand: "Apple",
    quote: "This is where technology meets everyday life. Mall of America gives us the massive, diverse audience we need to showcase our latest innovations.",
    author: "Head of Real Estate",
    logo: "https://logo.clearbit.com/apple.com"
  },
  {
    brand: "Gucci",
    quote: "You won't find another place like this in North America. It brings together a level of premium shoppers that you usually only see in the world's top fashion capitals.",
    author: "VP of Retail Operations",
    logo: "/gucci.svg"
  }
];

export function SuccessStories() {
  const [active, setActive] = useState(0);

  return (
    <section id="success" className="relative z-10 w-full bg-zinc-950 py-40 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-moa-gold text-xs font-bold tracking-[0.5em] uppercase mb-8 block">Global Validation</span>
          <h2 className="font-display text-6xl md:text-9xl text-white tracking-tighter leading-[0.8] mb-12 uppercase">
            Proven <br/><span className="text-moa-gold italic">Success.</span>
          </h2>
        </div>

        <div className="relative min-h-[500px] flex items-center justify-center">
          {quotes.map((q, i) => (
            <motion.div
              key={q.brand}
              initial={{ opacity: 0, x: 100 }}
              animate={active === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center ${active === i ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                 <img loading="lazy" src={q.logo} className="w-[500px] mix-blend-color-burn" alt="" />
              </div>
              
              <div className="relative z-10 max-w-4xl px-6">
                <img loading="lazy" src={q.logo} className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-12 mix-blend-color-burn" alt={q.brand} />
                <h3 className="font-display text-3xl md:text-5xl text-white leading-tight italic mb-8">
                  "{q.quote}"
                </h3>
                <div className="w-12 h-px bg-moa-gold mx-auto mb-8" />
                <p className="text-moa-gold text-[10px] font-bold tracking-[0.4em] uppercase">{q.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-8">
          {quotes.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActive(i)}
              className={`w-12 h-1 transition-all duration-500 ${active === i ? 'bg-moa-gold w-24' : 'bg-white/10 hover:bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
