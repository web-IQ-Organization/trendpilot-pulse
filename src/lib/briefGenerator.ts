
export interface RawTrend {
  keyword: string;
  searchVolume?: number;
  changePercent?: number;
  source: 'google' | 'reddit' | 'tiktok' | 'manual';
  category?: string;
}

export interface TrendEntry {
  keyword: string;
  viralScore: number; // 0-100, calculated from changePercent + searchVolume
  category: string;
  why: string; // 1 sentence explaining why it matters for DTC
  action: string; // 1 sentence actionable recommendation
  source: string;
}

export interface TrendBrief {
  date: string; // ISO date
  headline: string; // "Top 5 Viral Movers for DTC Brands — [date]"
  topTrends: TrendEntry[]; // top 5 by viralScore
  categories: string[]; // unique categories represented
  urgentAlert?: string; // if any trend has viralScore > 85, flag it
  briefId: string; // uuid v4
}

const TEMPLATES: { [key: string]: { why: string; action: string } } = {
  beauty: {
    why: "This [keyword] trend in beauty signals a hot new product or technique — DTC cosmetic brands should pay attention.",
    action: "Consider launching a [keyword]-inspired product, a tutorial video series, or targeted ads showcasing its benefits this week."
  },
  wellness: {
    why: "The [keyword] trend indicates growing consumer focus on health and well-being — a prime opportunity for DTC wellness brands.",
    action: "Develop a [keyword]-infused product line, share educational content around its benefits, or partner with wellness influencers."
  },
  fitness: {
    why: "This [keyword] trend shows evolving preferences in exercise and active lifestyles — relevant for DTC fitness apparel and equipment.",
    action: "Introduce [keyword]-specific gear, create workout guides, or run a challenge promoting engagement and sales."
  },
  food: {
    why: "The [keyword] trend highlights new culinary interests or dietary shifts — perfect for DTC food and beverage companies.",
    action: "Experiment with [keyword] ingredients, launch a recipe contest, or offer meal kits featuring this trend."
  },
  fashion: {
    why: "This [keyword] aesthetic signals a shift in consumer style or seasonal demand — crucial for DTC apparel brands.",
    action: "Design a limited edition [keyword] collection, curate outfits featuring this trend, or collaborate with style influencers."
  },
  home: {
    why: "The [keyword] trend reflects changes in home decor, organization, or lifestyle — important for DTC home goods.",
    action: "Create [keyword]-themed home accessories, offer interior design tips, or promote sustainable home solutions."
  },
  tech: {
    why: "This [keyword] trend points to emerging gadgets or digital behaviors — valuable for DTC electronics and software.",
    action: "Innovate with [keyword] enabled products, demonstrate their ease of use, or target early adopters with exclusive offers."
  },
  pet: {
    why: "The [keyword] trend reveals new desires or concerns among pet owners — ideal for DTC pet supply businesses.",
    action: "Develop [keyword]-specific pet products, share animal care advice, or run a heartwarming campaign."
  },
  baby: {
    why: "This [keyword] trend focuses on infant care or parenting innovations — essential for DTC baby product brands.",
    action: "Introduce [keyword]-safe baby essentials, offer parenting hacks, or engage with new parent communities."
  },
  outdoor: {
    why: "The [keyword] trend signifies renewed interest in nature and adventure — a great fit for DTC outdoor gear companies.",
    action: "Launch durable [keyword] equipment, organize local adventure groups, or highlight eco-friendly practices."
  },
  generic: {
    why: "This [keyword] trend indicates growing consumer interest in [category] — DTC brands in this space should act now.",
    action: "Consider launching a [keyword]-themed product, content series, or paid ad targeting this keyword this week."
  }
};

export function generateBrief(trends: RawTrend[]): TrendBrief {
  const trendEntries: TrendEntry[] = trends.map(rawTrend => {
    let viralScore = 50;
    if (rawTrend.changePercent !== undefined) {
      viralScore += Math.min(rawTrend.changePercent / 2, 40);
    }
    if (rawTrend.searchVolume !== undefined && rawTrend.searchVolume > 100000) {
      viralScore += 10;
    }
    viralScore = Math.round(Math.max(0, Math.min(100, viralScore))); // Ensure score is between 0-100

    const category = rawTrend.category || 'generic';
    const template = TEMPLATES[category] || TEMPLATES.generic;
    const why = template.why.replace(/\[keyword\]/g, rawTrend.keyword).replace(/\[category\]/g, category);
    const action = template.action.replace(/\[keyword\]/g, rawTrend.keyword).replace(/\[category\]/g, category);

    return {
      keyword: rawTrend.keyword,
      viralScore,
      category: category,
      why,
      action,
      source: rawTrend.source,
    };
  });

  trendEntries.sort((a, b) => b.viralScore - a.viralScore);
  const topFiveTrends = trendEntries.slice(0, 5);

  const categories = Array.from(new Set(topFiveTrends.map(trend => trend.category)));

  const today = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);
  const isoDate = today.toISOString().split('T')[0];

  const headline = `Top 5 Viral Movers for DTC Brands — ${formattedDate}`;

  const urgentAlert = topFiveTrends.some(trend => trend.viralScore > 85)
    ? "URGENT ALERT: At least one trend is rapidly accelerating! Immediate action recommended."
    : undefined;

  const briefId = Date.now().toString(36); // Simple timestamp-based ID

  return {
    date: isoDate,
    headline,
    topTrends: topFiveTrends,
    categories,
    urgentAlert,
    briefId,
  };
}
