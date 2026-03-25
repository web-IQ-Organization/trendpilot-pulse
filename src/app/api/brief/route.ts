import { NextRequest, NextResponse } from 'next/server';
import { generateBrief, RawTrend, TrendBrief } from '@/lib/briefGenerator';

const sampleTrends: RawTrend[] = [
  { keyword: "adaptogen coffee", changePercent: 340, searchVolume: 85000, source: "google", category: "wellness" },
  { keyword: "butter board aesthetic", changePercent: 210, searchVolume: 120000, source: "tiktok", category: "food" },
  { keyword: "cloud pillow", changePercent: 180, searchVolume: 67000, source: "reddit", category: "home" },
  { keyword: "barefoot shoes", changePercent: 155, searchVolume: 95000, source: "google", category: "fitness" },
  { keyword: "snail mucin serum", changePercent: 290, searchVolume: 200000, source: "tiktok", category: "beauty" }
];

export async function GET(): Promise<NextResponse<TrendBrief>> {
  const brief = generateBrief(sampleTrends);
  return NextResponse.json(brief);
}

export async function POST(request: NextRequest): Promise<NextResponse<TrendBrief | { error: string }>> {
  try {
    const body: { trends: RawTrend[] } = await request.json();
    if (!body || !Array.isArray(body.trends)) {
      return NextResponse.json({ error: "Invalid request body. Expected { trends: RawTrend[] }." }, { status: 400 });
    }
    const brief = generateBrief(body.trends);
    return NextResponse.json(brief);
  } catch (error) {
    console.error("Error generating brief:", error);
    return NextResponse.json({ error: "Failed to generate brief." }, { status: 500 });
  }
}
