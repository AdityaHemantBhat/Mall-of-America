import { useEffect } from "react";
import { siteData } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/sections/Footer";
import { motion, cubicBezier } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const venues = [
  {
    id: "01",
    name: "The Grand Rotunda",
    tagline: "Where the crowd becomes the spectacle.",
    capacity: "5,000+",
    sqft: "12,000 sqft",
    description:
      "Five floors of uninterrupted sightlines wrapping around a central stage. The Rotunda was built for moments that don't have a second take — product launches, world tour stops, live broadcasts. Every seat feels like front row.",
    specs: [
      "360° multi-level sightlines",
      "40-ton overhead rigging capacity",
      "Integrated 4K LED matrix",
      "Broadcast-ready fiber infrastructure",
    ],
  },
  {
    id: "02",
    name: "The Expo Center",
    tagline: "50,000 square feet of controlled chaos.",
    capacity: "10,000+",
    sqft: "50,000 sqft",
    description:
      "Column-free. Drive-in accessible. Divisible into four independent halls or opened up into one massive floor. The Expo Center is the backbone of every large-scale activation we've hosted — from CES-adjacent tech summits to full fashion week buildouts.",
    specs: [
      "Column-free span architecture",
      "Drive-in semi-truck loading dock",
      "Splits into 4 configurable halls",
      "High-bandwidth mesh network grid",
    ],
  },
];

const history = [
  {
    name: "Post Malone",
    type: "Live Concert",
    attendance: "5,000+",
    note: "Sold out in 38 minutes. Production crew of 200. Zero technical failures across a 3-hour set.",
  },
  {
    name: "Doja Cat",
    type: "Album Launch",
    attendance: "4,500+",
    note: "First major retail-integrated album drop in the US. Live stream peaked at 1.2M concurrent viewers.",
  },
  {
    name: "Fashion Week Midwest",
    type: "Cultural Ops",
    attendance: "8,000+",
    note: "12 runway shows across 4 days. 60+ designers. National press coverage for 3 consecutive years.",
  },
  {
    name: "CES Midwest Summit",
    type: "Tech Conference",
    attendance: "12,000+",
    note: "Largest technology gathering in the region. 340 exhibitors. Keynotes streamed to 89 countries.",
  },
  {
    name: "Deep Sea Immersive",
    type: "Virtual Launch",
    attendance: "3,000+",
    note: "Full venue transformation in 72 hours. Mixed-reality experience produced entirely in-house.",
  },
  {
    name: "Grand Gala",
    type: "VIP Reception",
    attendance: "2,500+",
    note: "Annual flagship event. Black-tie, invite-only. Average guest spend 4x the regional hospitality benchmark.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  }),
};

export function GlobalStagesPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".history-row", {
        opacity: 0,
        y: 20,
        stagger: 0.07,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ".history-table", start: "top 80%" },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-moa-black min-h-screen">
      <PageHero {...siteData.pageHeroes.globalStages} />

      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">
              Performance Spaces
            </span>
            <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter uppercase leading-[0.85]">
              High-Impact <br />
              <span className="text-moa-gold italic">Environments.</span>
            </h2>
          </div>

          <div className="space-y-40">
            {venues.map((v, i) => (
              <motion.div
                key={v.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                custom={0}
                variants={fade}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <span className="text-moa-gold font-mono text-[11px] tracking-widest uppercase mb-4 block">
                    Space {v.id}
                  </span>
                  <h3 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tighter mb-4 leading-none">
                    {v.name}
                  </h3>
                  <p className="text-white/40 text-base italic mb-8">
                    {v.tagline}
                  </p>

                  <div className="flex gap-12 mb-10 border-t border-white/5 pt-8">
                    <div>
                      <div className="text-white text-3xl font-display mb-1">
                        {v.capacity}
                      </div>
                      <div className="text-white/20 text-[9px] font-mono uppercase tracking-widest">
                        Capacity
                      </div>
                    </div>
                    <div>
                      <div className="text-white text-3xl font-display mb-1">
                        {v.sqft}
                      </div>
                      <div className="text-white/20 text-[9px] font-mono uppercase tracking-widest">
                        Floor Area
                      </div>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-10">
                    {v.description}
                  </p>

                  <ul className="space-y-3">
                    {v.specs.map((s, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-4 text-white/30 text-sm"
                      >
                        <span className="w-4 h-px bg-moa-gold shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`border border-white/5 rounded-2xl p-10 bg-white/2 ${i % 2 !== 0 ? "lg:order-1" : ""}`}
                >
                  <div className="space-y-6">
                    <div className="text-moa-gold font-mono text-[10px] tracking-widest uppercase mb-6 opacity-60">
                      Technical Overview
                    </div>
                    {v.specs.map((s, j) => (
                      <div
                        key={j}
                        className="border-b border-white/5 pb-5 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-moa-gold font-mono text-xs mt-0.5">
                            {String(j + 1).padStart(2, "0")}.
                          </span>
                          <span className="text-white/60 text-sm leading-relaxed">
                            {s}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 border-t border-white/5 bg-[#040404]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">
                Portfolio of Success
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-white tracking-tighter uppercase leading-none">
                Event <span className="text-moa-gold italic">History.</span>
              </h2>
            </div>
            <p className="text-white/30 text-sm font-light max-w-sm leading-relaxed">
              Every event below ran on our infrastructure. We don't chase
              headlines — we build the stage they're made on.
            </p>
          </div>

          <div className="history-table">
            <div className="grid grid-cols-12 gap-4 text-[9px] font-mono tracking-widest uppercase text-white/20 border-b border-white/5 pb-4 mb-2">
              <span className="col-span-1">#</span>
              <span className="col-span-3">Event</span>
              <span className="col-span-2">Type</span>
              <span className="col-span-1">Attendance</span>
              <span className="col-span-5">Notes</span>
            </div>

            {history.map((evt, i) => (
              <div
                key={i}
                className="history-row grid grid-cols-12 gap-4 items-start py-7 border-b border-white/4 group hover:bg-white/2 transition-colors rounded-lg px-1 -mx-1"
              >
                <span className="col-span-1 text-moa-gold font-mono text-[11px] mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-3">
                  <p className="text-white font-display text-xl uppercase tracking-tight leading-none group-hover:text-moa-gold transition-colors">
                    {evt.name}
                  </p>
                </div>
                <div className="col-span-2">
                  <span className="text-white/30 text-xs font-mono uppercase tracking-wider">
                    {evt.type}
                  </span>
                </div>
                <div className="col-span-1">
                  <span className="text-white/60 text-sm font-light">
                    {evt.attendance}
                  </span>
                </div>
                <div className="col-span-5">
                  <p className="text-white/30 text-sm font-light leading-relaxed group-hover:text-white/50 transition-colors">
                    {evt.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-moa-gold font-mono text-[10px] tracking-[0.5em] uppercase mb-8 block">
            Ready when you are
          </span>
          <h2 className="font-display text-5xl md:text-9xl text-white tracking-tighter uppercase mb-8">
            Host an <br />
            <span className="text-moa-gold italic">Event.</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-xl mx-auto mb-16 leading-relaxed">
            From an intimate 500-person product drop to a full-scale expo for
            12,000 — our production crew handles the details so you can focus on
            the moment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-moa-gold text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              Check Availability
            </button>
            <button className="px-12 py-5 border border-white/20 text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all">
              Venue Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
