import { useEffect, useRef } from "react";
import { siteData } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane, TrainFront, Route, Hotel, ShieldCheck, Target, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const strategicAssets = [
  {
    id: "ASSET_01",
    value: "40M+",
    label: "Annual Volume",
    desc: "Captive audience exceeding the combined visitor volume of the Grand Canyon and Magic Kingdom.",
    icon: Target
  },
  {
    id: "ASSET_02",
    value: "5.6M",
    label: "Total Area",
    desc: "North America's largest retail and entertainment complex, engineered for infinite brand scaling.",
    icon: Zap
  },
  {
    id: "ASSET_03",
    value: "$2.2B",
    label: "Fiscal Impact",
    desc: "A primary economic engine driving regional employment and global tourism commerce.",
    icon: ShieldCheck
  }
];

const infrastructureMatrix = [
  { icon: Plane, label: "MSP Transit", value: "12 MIN", detail: "Direct Link to Intl Hub" },
  { icon: TrainFront, label: "Light Rail", value: "ON-SITE", detail: "Blue Line Terminus" },
  { icon: Hotel, label: "Hospitality", value: "3,000+", detail: "Connected Room Keys" },
  { icon: Route, label: "Catchment", value: "30M", detail: "1-Day Drive Radius" }
];

export function VisionPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".reveal-container",
          start: "top 80%"
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-moa-black min-h-screen selection:bg-moa-gold selection:text-black">
      <PageHero {...siteData.pageHeroes.vision} />

      <section className="relative py-24 md:py-40 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-moa-gold" />
                  <span className="text-moa-gold text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase">Strategic Thesis</span>
                </div>

                <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter leading-[0.8] mb-12 uppercase">
                  Not a Mall. <br />
                  <span className="text-moa-gold italic">A Machine.</span>
                </h2>

                <p className="text-white/50 text-base md:text-xl font-light leading-relaxed mb-12 border-l border-white/10 pl-8">
                  Mall of America is a self-contained economic ecosystem. We have redefined the boundaries of retail, creating a high-density environment where brands don't just exist—they dominate.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-white/20 text-[9px] font-mono block mb-2 uppercase tracking-widest">System_Status</span>
                    <span className="text-moa-gold text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-moa-gold animate-pulse" />
                      Live Ecosystem
                    </span>
                  </div>
                  <div>
                    <span className="text-white/20 text-[9px] font-mono block mb-2 uppercase tracking-widest">Protocol_ID</span>
                    <span className="text-white/60 text-xs font-bold uppercase tracking-widest">MOA_VISION_2025</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative group overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-moa-gold/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img loading="lazy"
                  src="/images/moa_vision_thesis_machine.png"
                  className="w-full aspect-video md:aspect-[16/7] object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="Property Architecture"
                />
                {/* Corner Brackets */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-moa-gold z-20" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-moa-gold z-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-[#040404] reveal-container">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">Deployment_Scale</span>
            <h2 className="font-display text-4xl md:text-6xl text-white tracking-tighter uppercase">The Competitive <span className="text-moa-gold italic">Advantage.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {strategicAssets.map((asset, i) => (
              <div key={i} className="reveal-item bg-moa-black p-12 relative group hover:bg-zinc-900/50 transition-colors duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <asset.icon size={120} />
                </div>
                <span className="text-moa-gold/40 text-[9px] font-mono mb-8 block">{asset.id}</span>
                <div className="text-6xl lg:text-8xl font-display text-white mb-6 tracking-tighter group-hover:text-moa-gold transition-colors">
                  {asset.value}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-[0.2em] mb-4">
                  {asset.label}
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {asset.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-moa-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 border-t border-white/5 bg-moa-black">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-8 block">Logistics_Network</span>
              <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter leading-[0.8] mb-12 uppercase">
                Seamless <br />
                <span className="text-moa-gold italic">Integration.</span>
              </h2>
              <p className="text-white/50 text-base md:text-xl font-light leading-relaxed mb-12 max-w-xl">
                Strategically positioned at the nexus of international air travel and regional high-speed transit, Mall of America is the most accessible commercial destination in North America.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {infrastructureMatrix.map((item, i) => (
                <div key={i} className="p-8 border border-white/5 bg-zinc-900/20 rounded-2xl group hover:border-moa-gold/30 transition-all">
                  <item.icon className="text-moa-gold mb-6 group-hover:scale-110 transition-transform" size={24} />
                  <div className="text-white/20 text-[9px] font-mono uppercase tracking-widest mb-2">{item.label}</div>
                  <div className="text-white text-3xl font-display mb-1">{item.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-zinc-950 border-t border-white/5 relative">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(212,175,55,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter uppercase mb-12">
              Ready to <br /><span className="text-moa-gold italic">Partner?</span>
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16">
              Connect with our strategic partnership team to integrate your brand into the most high-performance retail environment in the world.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-moa-gold text-black text-xs font-bold tracking-[0.3em] uppercase hover:bg-white transition-all rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Secure Meeting
              </button>
              <button className="px-12 py-5 border border-white/20 text-white text-xs font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all rounded-full">
                Download Briefing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
