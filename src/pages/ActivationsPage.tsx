import { useEffect, useRef } from "react";
import { siteData } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Smartphone, Mail, PlaneTakeoff, Clock, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);
const deploymentMetrics = [
  { metric: "40M+", label: "Annual Impressions", icon: Eye },
  { metric: "2.1M", label: "Social Reach", icon: Smartphone },
  { metric: "850K", label: "Brand Signals", icon: Mail },
  { metric: "33%", label: "Out-of-State", icon: PlaneTakeoff },
  { metric: "4.3H", label: "Average Dwell", icon: Clock },
  { metric: "$782", label: "Sales PSF", icon: CreditCard },
];

const sponsorshipMatrix = [
  {
    name: "Platinum Tier",
    id: "Tier 01",
    tagline: "Total Property Dominance",
    features: [
      "Naming rights: The Grand Rotunda",
      "Full digital synchronized takeover",
      "Bespoke branded VIP lounge",
      "Premier placement: 200+ annual events",
    ],
    highlight: true,
  },
  {
    name: "Gold Tier",
    id: "Tier 02",
    tagline: "High-Density Presence",
    features: [
      "Branded high-traffic zones",
      "30+ digital screen network",
      "4 seasonal activation cycles",
      "Dedicated account intelligence",
    ],
    highlight: false,
  },
  {
    name: "Campaign Partner",
    id: "Tier 03",
    tagline: "Precision Engagement",
    features: [
      "30–90 day pop-up deployment",
      "10-screen digital support",
      "Social amplification package",
      "On-site technical support",
    ],
    highlight: false,
  },
];

const briefings = [
  {
    brand: "Samsung Galaxy",
    result: "1.2M IMPRESSIONS",
    desc: "Tech playground in West Rotunda with AR integration and live DJ sets.",
    image: "/images/moa_retail_tech_flagship_1777708405375.png",
  },
  {
    brand: "Nike SNKRS",
    result: "SOLD OUT < 4H",
    desc: "Interactive customization station and elite athlete engagement session.",
    image: "/images/moa_retail_fashion_flagship_1777708372710.png",
  },
  {
    brand: "Coca-Cola",
    result: "3.8M SOCIAL REACH",
    desc: "Holiday village takeover with massive sampling and high-fidelity photo ops.",
    image: "/images/moa_digital_media_network_1777708147838.png",
  },
  {
    brand: "Disney+ Premiere",
    result: "GLOBAL TRENDING #1",
    desc: "Immersive park-wide takeover with character encounters and AR scavenger hunts.",
    image: "/images/moa_nickelodeon_universe_cinematic_1777708115321.png",
  },
];

export function ActivationsPage() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".briefing-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".briefing-grid",
          start: "top 80%"
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-moa-black min-h-screen">
      <PageHero {...siteData.pageHeroes.activations} />

      {/* Engagement Metrics */}
      <section className="py-24 md:py-40 bg-moa-black relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-8 block">Audience Insight</span>
              <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter leading-[0.8] mb-12 uppercase">
                Global <br />
                <span className="text-moa-gold italic">Reach.</span>
              </h2>
              <p className="text-white/50 text-base md:text-xl font-light leading-relaxed max-w-xl">
                Every sponsorship is engineered for maximum conversion. We provide brands with unfiltered access to 40 million affluent visitors spending an average of 4.3 hours per visit.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {deploymentMetrics.map((item, i) => (
                <div key={i} className="p-8 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors group">
                  <item.icon className="text-moa-gold opacity-30 group-hover:opacity-100 transition-opacity mb-6" size={20} />
                  <div className="text-white text-3xl font-display mb-1">{item.metric}</div>
                  <div className="text-[9px] text-white/20 font-mono uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 border-t border-white/5 bg-[#060606]">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-6 block">Sponsorship Architecture</span>
            <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter uppercase">
              Partnership <span className="text-moa-gold italic">Levels.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsorshipMatrix.map((t, i) => (
              <div
                key={i}
                className={cn(
                  "p-10 lg:p-12 border rounded-3xl flex flex-col transition-all duration-500",
                  t.highlight ? "border-moa-gold bg-moa-gold/5 shadow-[0_0_40px_rgba(212,175,55,0.05)]" : "border-white/5 bg-zinc-900/20 hover:border-white/20"
                )}
              >
                <div className="text-moa-gold font-mono text-[10px] tracking-widest uppercase mb-4">{t.id}</div>
                <h3 className="text-white font-display text-4xl mb-2 uppercase">{t.name}</h3>
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-12">{t.tagline}</p>
                <ul className="space-y-6 mb-16 flex-1">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-4 text-white/50 text-sm font-light leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-moa-gold flex-shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={cn(
                  "w-full py-5 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-all",
                  t.highlight ? "bg-moa-gold text-black hover:bg-white" : "border border-white/10 text-white hover:bg-white hover:text-black"
                )}>
                  Analyze Potential
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-moa-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-moa-gold" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-moa-gold" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-moa-gold" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-moa-gold" />
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">Case Studies</span>
              <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter uppercase leading-none">
                Proven <span className="text-moa-gold italic">Impact.</span>
              </h2>
            </div>
            <div className="bg-moa-gold/10 border border-moa-gold/20 px-6 py-4 rounded-sm flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-moa-gold animate-pulse" />
              <span className="text-[10px] font-mono text-moa-gold tracking-widest uppercase">Verified Results</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {briefings.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative grid md:grid-cols-12 items-center p-8 md:p-12 bg-zinc-900/10 border border-white/5 hover:bg-zinc-900/40 hover:border-moa-gold/30 transition-all duration-500"
              >
                <div className="md:col-span-1 mb-6 md:mb-0">
                  <span className="text-moa-gold/30 font-mono text-[10px] group-hover:text-moa-gold transition-colors">0{i + 1}</span>
                </div>

                <div className="md:col-span-4 mb-6 md:mb-0">
                  <h3 className="text-white font-display text-3xl md:text-5xl uppercase mb-2 group-hover:text-moa-gold transition-colors">{c.brand}</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-moa-gold/40" />
                    <span className="text-moa-gold text-xs font-mono tracking-[0.2em] font-bold uppercase">{c.result}</span>
                  </div>
                </div>

                <div className="md:col-span-5 mb-8 md:mb-0">
                  <p className="text-white/40 text-sm md:text-base font-light leading-relaxed group-hover:text-white/70 transition-colors max-w-md">
                    {c.desc}
                  </p>
                </div>

                <div className="md:col-span-2 flex justify-end">
                  <div className="flex flex-col items-end">
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <div key={j} className={cn("w-3 h-1 rounded-full", j < 4 ? "bg-moa-gold" : "bg-white/10")} />
                      ))}
                    </div>
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Growth Performance</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-px bg-moa-gold group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center">
             <div className="text-[9px] font-mono text-white/10 uppercase tracking-[1em] mb-8">Next Steps</div>
            <div className="w-px h-24 bg-gradient-to-b from-moa-gold/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-48 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
            src="https://player.vimeo.com/external/494252666.hd.mp4?s=34f0c97ccf726a97ff349a7c36a4f21d3f9828ed&profile_id=175"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-moa-black via-moa-black/80 to-moa-black" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-9xl text-white tracking-tighter uppercase mb-12">
            Secure Your <br /><span className="text-moa-gold italic">Partnership.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16">
            Contact our strategic partnership desk to build a high-performance campaign at the most visited destination in North America.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-moa-gold text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              Contact Partnership Desk
            </button>
            <button className="px-12 py-5 border border-white/20 text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all">
              Download Media Deck
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
