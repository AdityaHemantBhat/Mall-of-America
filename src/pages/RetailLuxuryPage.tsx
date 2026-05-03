import { siteData } from "@/data/content";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";

const stats = [
  { label: "Annual Visitors", value: "40M+", note: "Year over year, consistently" },
  { label: "Sales Density", value: "$782 PSF", note: "Top 1% nationally" },
  { label: "Occupancy Rate", value: "98.4%", note: "Rarely any open slots" },
  { label: "Avg. Household Income", value: "$85K+", note: "Among our shopper base" },
];

const categories = [
  {
    id: "01",
    category: "Luxury & Premium",
    headline: "A Destination for the Discerning.",
    description:
      "Our luxury corridor hosts over 45 global houses in a curated environment designed around high net-worth shoppers. Co-tenancy here is deliberate — every neighbor was chosen. Foot traffic skews toward repeat visitors with intent to buy, not browse.",
    brands: ["Gucci", "Louis Vuitton", "Balenciaga", "Saint Laurent", "Tiffany & Co.", "Burberry"],
    metric: "Top 1% Global Sales Density",
  },
  {
    id: "02",
    category: "Fashion & Apparel",
    headline: "The Scale of Style.",
    description:
      "From global volume leaders to specialty concepts, the fashion floor at MoA moves more units per square foot than most flagship urban locations. Placement here gets your brand in front of 40 million annual visitors — people who came specifically to shop.",
    brands: ["Zara", "H&M", "Nordstrom", "Aritzia", "Madewell", "Banana Republic"],
    metric: "4.3H Average Dwell Time",
  },
  {
    id: "03",
    category: "Technology & Innovation",
    headline: "Pioneering the Modern Store.",
    description:
      "High-bandwidth, high-engagement retail concepts thrive here. Our tech corridor was purpose-built for experiential formats — large footprints, fast fiber, and an audience that actively seeks out hands-on product discovery.",
    brands: ["Apple", "Tesla", "Microsoft", "Dyson", "Samsung", "Sony"],
    metric: "Highest Demo Conversion Rate",
  },
  {
    id: "04",
    category: "Streetwear & Culture",
    headline: "Where Hype Meets Foot Traffic.",
    description:
      "Culture moves fast. Our streetwear zone was designed for brands that generate lines and live on social media. Drop events, limited releases, and collab launches all benefit from the built-in crowd — and the built-in camera roll that follows.",
    brands: ["Nike", "Adidas", "Supreme", "New Balance", "Under Armour", "Vans"],
    metric: "Highest Social Amplification Index",
  },
];

const leasingTiers = [
  {
    tier: "Flagship Alpha",
    size: "15,000 – 30,000 sqft",
    location: "Core Atrium",
    term: "Long-term anchor lease",
    highlight: true,
    details:
      "Prime anchor positioning at the center of 40M annual visitors. Multi-level build-outs available. Direct light rail access. Reserved logistics corridor. This is the highest-visibility real estate in American retail.",
    features: [
      "Multi-level kinetic facade capability",
      "Direct light rail passenger access",
      "Priority logistics and loading portal",
      "Dedicated broadcast infrastructure",
      "Category exclusivity on request",
    ],
  },
  {
    tier: "Premium Boutique",
    size: "3,000 – 7,000 sqft",
    location: "Luxury Corridor",
    term: "3–10 year lease",
    highlight: false,
    details:
      "Single-level boutique format positioned in the luxury wing. Elevated ceiling height, premium finishes, and intentional co-tenancy with globally recognized brands. Designed for retailers who sell an experience first.",
    features: [
      "Elevated ceiling height (up to 18ft)",
      "Curated co-tenancy selection",
      "High net-worth shopper adjacency",
      "Custom storefront design rights",
      "Dedicated VIP service corridor",
    ],
  },
  {
    tier: "Innovation Lab",
    size: "500 – 2,500 sqft",
    location: "Rotunda / East Wing",
    term: "30–90 day activations",
    highlight: false,
    details:
      "Turnkey spaces built for brands testing a concept, launching a product, or running a short-term activation. Comes pre-wired for digital displays, social shoots, and experiential formats. Move in Monday, open Friday.",
    features: [
      "Turnkey digital integration (displays + wifi)",
      "Short-term pilot lease terms",
      "Social media amplification kit included",
      "On-call production support team",
      "High foot-traffic placement guaranteed",
    ],
  },
];

export function RetailLuxuryPage() {

  return (
    <div className="bg-moa-black min-h-screen">
      <PageHero {...siteData.pageHeroes.retailLuxury} />

      <section className="py-16 border-b border-white/5 bg-zinc-950">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/5">
            {stats.map((s, i) => (
              <div key={i} className="px-10 py-6 group">
                <div className="text-white/20 text-[9px] font-mono uppercase tracking-widest mb-3">{s.label}</div>
                <div className="text-white font-display text-4xl lg:text-5xl mb-2 group-hover:text-moa-gold transition-colors">
                  {s.value}
                </div>
                <div className="text-white/20 text-xs font-light">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">
              Tenant Ecosystem
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter uppercase leading-[0.85]">
              Who Sells Here <br />
              <span className="text-moa-gold italic">& Why It Works.</span>
            </h2>
          </div>

          <div className="space-y-0 divide-y divide-white/5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-14 group"
              >
                <div className="lg:col-span-1">
                  <span className="text-moa-gold font-mono text-sm">{cat.id}</span>
                </div>

                <div className="lg:col-span-3">
                  <div className="text-white/30 text-[10px] font-mono uppercase tracking-widest mb-2">{cat.category}</div>
                  <h3 className="text-white font-display text-2xl md:text-3xl uppercase tracking-tight leading-tight group-hover:text-moa-gold transition-colors">
                    {cat.headline}
                  </h3>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-white/40 text-sm leading-relaxed">{cat.description}</p>
                </div>

                <div className="lg:col-span-4">
                  <div className="text-moa-gold text-[9px] font-mono uppercase tracking-widest mb-4 opacity-60">{cat.metric}</div>
                  <div className="flex flex-wrap gap-2">
                    {cat.brands.map((b, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 border border-white/10 text-white/50 text-[10px] font-mono uppercase tracking-wider rounded-full group-hover:border-white/20 transition-colors"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 border-t border-white/5 bg-[#060606]">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-moa-gold text-[10px] font-mono tracking-[0.5em] uppercase mb-4 block">
              Inventory Portal
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter uppercase leading-[0.85]">
              Leasing <span className="text-moa-gold italic">Matrix.</span>
            </h2>
            <p className="text-white/30 text-sm font-light mt-6 max-w-lg leading-relaxed">
              Three distinct tier structures. Each built around a different kind of retail ambition. Whether you're planting a permanent flag or testing a concept for 60 days, there's a structure for it.
            </p>
          </div>

          <div className="leasing-table space-y-6">
            {leasingTiers.map((tier, i) => (
              <div
                key={i}
                className={`leasing-row grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 rounded-2xl border transition-all duration-300 ${
                  tier.highlight
                    ? "border-moa-gold bg-moa-gold/[0.04] shadow-[0_0_40px_rgba(212,175,55,0.04)]"
                    : "border-white/5 bg-white/[0.02] hover:border-white/15"
                }`}
              >
                <div className="lg:col-span-3">
                  {tier.highlight && (
                    <span className="inline-block text-[8px] font-mono uppercase tracking-widest text-black bg-moa-gold px-2 py-1 rounded-full mb-3">
                      Recommended
                    </span>
                  )}
                  <h3 className="text-white font-display text-3xl uppercase tracking-tight mb-2">{tier.tier}</h3>
                  <div className="text-moa-gold font-mono text-[11px] tracking-widest uppercase mb-1">{tier.size}</div>
                  <div className="text-white/25 text-[10px] font-mono uppercase tracking-wider">{tier.location}</div>
                </div>

                <div className="lg:col-span-5">
                  <div className="text-white/20 text-[9px] font-mono uppercase tracking-widest mb-3">About This Tier</div>
                  <p className="text-white/50 text-sm leading-relaxed">{tier.details}</p>
                </div>

                <div className="lg:col-span-4">
                  <div className="text-white/20 text-[9px] font-mono uppercase tracking-widest mb-4">What's Included</div>
                  <ul className="space-y-2.5">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/40 text-sm">
                        <span className="w-3 h-px bg-moa-gold flex-shrink-0 mt-2.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-white/20 text-[10px] font-mono uppercase tracking-widest border-t border-white/5 pt-4">
                    Term: {tier.term}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-moa-gold font-mono text-[10px] tracking-[0.5em] uppercase mb-8 block">
            Let's Talk
          </span>
          <h2 className="font-display text-5xl md:text-8xl text-white tracking-tighter uppercase mb-8">
            Claim Your <br />
            <span className="text-moa-gold italic">Position.</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-xl mx-auto mb-16 leading-relaxed">
            Availability at MoA is limited by design. Our team will walk you through current inventory, co-tenancy strategy, and what a lease here actually means for your brand's trajectory.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-moa-gold text-black text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.15)]">
              Request Availability
            </button>
            <button className="px-12 py-5 border border-white/20 text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all">
              Download Leasing Deck
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
