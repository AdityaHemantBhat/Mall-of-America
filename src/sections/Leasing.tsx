import { motion } from "framer-motion";

const tiers = [
  {
    tier: "Flagship Retail",
    size: "5,000 – 20,000 sqft",
    term: "Long-term anchor lease",
    location: "Core Atrium",
    details:
      "Anchor-level positioning in the highest-traffic corridors of the mall. Built for brands that need space, visibility, and permanence. Foot traffic here is guaranteed — 40 million visitors a year walk past your front door.",
    features: [
      "High-traffic anchor placement",
      "Multi-level build-outs available",
      "Priority logistics portal",
      "Category exclusivity on request",
    ],
    highlight: true,
  },
  {
    tier: "Mid-Tier & Specialty",
    size: "1,000 – 4,500 sqft",
    term: "Flexible 3–7 year lease",
    location: "Luxury Corridor / East Wing",
    details:
      "Category-driven placement in curated zones. Co-tenancy is intentional — you're surrounded by brands that elevate yours. Ceiling heights, finishes, and adjacency are all part of the package.",
    features: [
      "Category-driven placement strategy",
      "Curated brand adjacency",
      "Flexible lease structures",
      "Custom storefront rights",
    ],
    highlight: false,
  },
  {
    tier: "Pop-Up & Experiential",
    size: "Turnkey spaces",
    term: "30–90 day activations",
    location: "Rotunda / High-Visibility Zones",
    details:
      "Move in Monday, open Friday. Short-term formats built for product drops, concept pilots, and experiential campaigns. Pre-wired for digital displays, built-in social amplification, and on-call production support.",
    features: [
      "Turnkey digital integration",
      "Social amplification kit",
      "On-call production crew",
      "High foot-traffic positioning",
    ],
    highlight: false,
  },
];

export function Leasing() {
  return (
    <section
      id="leasing"
      className="relative w-full bg-moa-black py-32 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">
            Leasing Matrix
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter uppercase leading-[0.85]">
            The <span className="text-moa-gold italic">Opportunity.</span>
          </h2>
          <p className="text-white/30 text-sm font-light mt-6 max-w-lg leading-relaxed">
            Flexible positioning for brands of every scale. Whether you're
            planting a permanent flag or running a 60-day activation, there's a
            structure built for it.
          </p>
        </div>

        <div className="space-y-5">
          {tiers.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 rounded-2xl border transition-colors duration-300 group ${
                item.highlight
                  ? "border-moa-gold bg-moa-gold/[0.04]"
                  : "border-white/5 bg-white/[0.02] hover:border-white/15"
              }`}
            >
              <div className="lg:col-span-3">
                {item.highlight && (
                  <span className="inline-block text-[8px] font-mono uppercase tracking-widest text-black bg-moa-gold px-2 py-1 rounded-full mb-3">
                    Best Value
                  </span>
                )}
                <h3 className="text-white font-display text-2xl md:text-3xl uppercase tracking-tight mb-2 group-hover:text-moa-gold transition-colors">
                  {item.tier}
                </h3>
                <div className="text-moa-gold font-mono text-[11px] tracking-widest uppercase mb-1">
                  {item.size}
                </div>
                <div className="text-white/25 text-[10px] font-mono uppercase tracking-wider">
                  {item.location}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="text-white/20 text-[9px] font-mono uppercase tracking-widest mb-3">
                  Overview
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="text-white/20 text-[9px] font-mono uppercase tracking-widest mb-4">
                  Included
                </div>
                <ul className="space-y-2.5 mb-6">
                  {item.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-white/40 text-sm"
                    >
                      <span className="w-3 h-px bg-moa-gold flex-shrink-0 mt-2.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="text-white/20 text-[10px] font-mono uppercase tracking-widest border-t border-white/5 pt-4">
                  Term: {item.term}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/5 pt-10 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <p className="text-white/20 text-sm font-light max-w-md leading-relaxed">
            Availability is limited by design. Reach out to our leasing team to
            check current inventory and discuss co-tenancy strategy.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-moa-gold text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white transition-all">
              Request Availability
            </button>
            <button className="px-8 py-4 border border-white/10 text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all">
              Download Kit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
