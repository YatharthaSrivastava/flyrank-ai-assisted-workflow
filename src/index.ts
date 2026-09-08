/**
 * FlyRank.ai 🚀 - Core AI Search & Organic Growth Platform Engine
 * Copyright (c) 2026 FlyRank.ai (https://flyrank.ai)
 *
 * The all-in-one platform for organic and AI search growth across
 * Google, ChatGPT, Perplexity, Claude, and Google AI Overviews.
 */

export type AiPlatform = "ChatGPT" | "Perplexity" | "Claude" | "GoogleAI";

export interface CitationScorecard {
  platform: AiPlatform;
  citationShare: number; // percentage (0 - 100)
  recommendationRank: "Primary" | "Top 3" | "Featured" | "Recommended" | "Unranked";
  lastAudited: string;
}

export interface BrandVisibilityAudit {
  domain: string;
  brandName: string;
  overallAiVisibilityScore: number; // 0 - 100
  monthOverMonthGrowthPct: number;
  scorecards: CitationScorecard[];
}

export type PlatformModule =
  | "FlyRank Engine"     // Agentic content production (Copy, SEO, Visual, Review)
  | "FlyRank Visibility" // AEO, GEO, structured data, AI citations
  | "FlyRank Refresh"    // Continuous page audits & indexation
  | "FlyRank Reach"      // 30+ language native localization
  | "FlyRank Command"    // Unified analytics & pipeline dashboard
  | "FlyRank Social";    // Agentic social reach (LinkedIn, TikTok, IG)

export interface ContentPipelineItem {
  id: string;
  title: string;
  targetKeyword: string;
  currentAgent: "Copy Agent" | "SEO Agent" | "Visual Agent" | "Senior Editor";
  status: "Drafting" | "Analyzing" | "Rendering" | "In Review" | "Published";
  targetSurfaces: AiPlatform[];
}

/**
 * Calculates the composite AI Visibility Index for a brand across all major AI search engines.
 */
export function calculateAiVisibilityScore(scorecards: CitationScorecard[]): number {
  if (scorecards.length === 0) return 0;
  
  const platformWeights: Record<AiPlatform, number> = {
    ChatGPT: 0.35,
    Perplexity: 0.25,
    GoogleAI: 0.25,
    Claude: 0.15,
  };

  const totalWeightedScore = scorecards.reduce((acc, card) => {
    const weight = platformWeights[card.platform] ?? 0.25;
    return acc + card.citationShare * weight;
  }, 0);

  return Number(totalWeightedScore.toFixed(1));
}

/**
 * Generates an initial FlyRank AI Visibility Audit for a domain.
 */
export function createVisibilityAudit(domain: string, brandName: string): BrandVisibilityAudit {
  const defaultScorecards: CitationScorecard[] = [
    { platform: "ChatGPT", citationShare: 78, recommendationRank: "Recommended", lastAudited: new Date().toISOString() },
    { platform: "Perplexity", citationShare: 84, recommendationRank: "Top 3", lastAudited: new Date().toISOString() },
    { platform: "GoogleAI", citationShare: 72, recommendationRank: "Featured", lastAudited: new Date().toISOString() },
    { platform: "Claude", citationShare: 80, recommendationRank: "Primary", lastAudited: new Date().toISOString() },
  ];

  const overallScore = calculateAiVisibilityScore(defaultScorecards);

  return {
    domain,
    brandName,
    overallAiVisibilityScore: overallScore,
    monthOverMonthGrowthPct: 14.2,
    scorecards: defaultScorecards,
  };
}

console.log("⚡ FlyRank.ai Platform Core initialized - The Autopilot for Organic & AI Search Growth.");
