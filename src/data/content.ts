export const siteData = {
  nav: [
    { label: "Home", href: "/" },
    { label: "The Vision", href: "/vision" },
    { label: "Retail & Luxury", href: "/retail-luxury" },
    { label: "Brand Activations", href: "/activations" },
    { label: "Global Stages", href: "/global-stages" },
  ],
  hero: {
    title: "AMERICA.",
    subtitle: "The world's premier retail and entertainment destination.",
    imageUrl: "/images/moa_cinematic_exterior_1777708068429.png",
  },
  pageHeroes: {
    vision: {
      title: "THE VISION.",
      subtitle: "5.6 Million Square Feet of Innovation.",
      imageUrl: "/images/moa_vision_thesis_machine.png",
      videoUrl: "https://player.vimeo.com/external/494252666.hd.mp4?s=34f0c97ccf726a97ff349a7c36a4f21d3f9828ed&profile_id=175"
    },
    retailLuxury: {
      title: "RETAIL & LUXURY.",
      subtitle: "520+ Stores. Infinite Possibilities.",
      imageUrl: "/images/moa_retail_jewelry_luxury_1777708389201.png",
      videoUrl: "https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=175"
    },
    activations: {
      title: "ACTIVATIONS.",
      subtitle: "Engaging 40 Million Annual Visitors.",
      imageUrl: "/images/moa_digital_media_network_1777708147838.png",
      videoUrl: "https://player.vimeo.com/external/434045526.hd.mp4?s=c27e904b50035043d0d62a9332e14bd1068bd6ea&profile_id=175"
    },
    globalStages: {
      title: "GLOBAL STAGES.",
      subtitle: "400+ Events Every Year.",
      imageUrl: "/images/moa_global_stages_concert_1777708359401.png",
      videoUrl: "https://player.vimeo.com/external/403623696.hd.mp4?s=d6304d9c73e16738c826c79a95782cb7b22f6e91&profile_id=175"
    }
  },
  stats: {
    annualVisitors: "40M+",
    squareFeet: "5.6M",
    economicImpact: "$2B",
    salesTax: "0%", // Clothing and shoes
    tenants: "520+",
    jobs: "11,000"
  },
  retail: [
    {
      category: "Luxury & Premium",
      title: "The Luxury Wing.",
      description: "Home to over 45 global luxury houses in a curated high-traffic environment with zero sales tax on clothing and shoes.",
      anchors: [
        { name: "Gucci", logo: "/gucci.svg" },
        { name: "Louis Vuitton", logo: "/louis-vuitton.svg" },
        { name: "Saint Laurent", logo: "/saint-laurent.svg" },
      ],
      image: "/images/moa_retail_jewelry_luxury_1777708389201.png"
    },
    {
      category: "Fashion & Apparel",
      title: "Unmatched Retail Scale.",
      description: "From global flagships to emerging specialty concepts, we deliver the highest retail volume in the region.",
      anchors: [
        { name: "Zara", logo: "/zara-logo.svg" },
        { name: "H&M", logo: "/h-m.svg" },
        { name: "Nordstrom", logo: "/nordstrom.svg" },

      ],
      image: "/images/moa_retail_fashion_flagship_1777708372710.png"
    },
    {
      category: "Technology",
      title: "The Future of Experience.",
      description: "Leading tech brands choose Mall of America for high-engagement, experiential flagship stores.",
      anchors: [
        { name: "Apple", logo: "/apple.svg" },
        { name: "Tesla", logo: "/tesla.svg" },
        { name: "Microsoft", logo: "/microsoft.svg" }

      ],
      image: "/images/moa_retail_tech_flagship_1777708405375.png"
    }
  ],
  luxuryWing: {
    headline: "The Midwest's Luxury Destination.",
    demographics: "40M+ Annual Visitors",
    quote: "Mall of America is one of the most visited destinations in the world, attracting tourists from every corner of the globe.",
    image: "/images/moa_luxury_retail_1777708099217.png"
  },
  dining: [
    { type: "Sophisticated", name: "Twin City Grill", desc: "A nostalgic touch of the Twin Cities' culinary history." },
    { type: "Immersive", name: "Rainforest Cafe", desc: "A tropical dining adventure for the whole family." },
    { type: "Modern", name: "Crave", desc: "Vibrant sushi and New American cuisine." },
    { type: "Casual", name: "Shake Shack", desc: "World-famous burgers and shakes." },
    { type: "Entertainment", name: "Margaritaville", desc: "Island-inspired flavors and atmosphere." }
  ],
  attractions: [
    { name: "Nickelodeon Universe", desc: "7 acres of indoor thrills. The nation's largest indoor theme park.", image: "/images/moa_nickelodeon_universe_cinematic_1777708115321.png" },
    { name: "SEA LIFE Aquarium", desc: "Minnesota's largest aquarium with a 300-foot underwater tunnel.", image: "/images/moa_aquarium_immersive_1777708130568.png" },
    { name: "FlyOver America", desc: "A breathtaking flight simulation over the USA's most iconic landscapes.", image: "/images/moa_cinematic_exterior_1777708068429.png" }
  ],
  leasing: [
    { tier: "Flagship Alpha", details: "Prime anchor positions in the Huntington Bank Rotunda and core atriums. 15,000 - 30,000 SQFT." },
    { tier: "Premium Boutique", details: "Curated co-tenancy in the Luxury Wing and North Wing. 3,000 - 7,000 SQFT." },
    { tier: "Innovation Lab", details: "Flexible short-term activations for brand pilots and product launches. 500 - 2,500 SQFT." }
  ],
  footer: {
    imageUrl: "/images/moa_footer_night_wide_1777708482034.png"
  }
};
