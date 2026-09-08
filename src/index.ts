/**
 * FlyRank.ai - Enterprise Flight Search & Ranking Core Engine
 * Copyright (c) 2026 FlyRank.ai
 */

export interface FlightItinerary {
  id: string;
  airlineCode: string;
  airlineName: string;
  originIata: string;
  destinationIata: string;
  priceUsd: number;
  durationMinutes: number;
  stopCount: number;
  carbonKg: number;
}

export interface OptimizationWeights {
  price: number;
  duration: number;
  stops: number;
  carbon: number;
}

export const DEFAULT_FLYRANK_WEIGHTS: OptimizationWeights = {
  price: 0.4,
  duration: 0.3,
  stops: 0.2,
  carbon: 0.1,
};

/**
 * Computes the multi-objective FlyRank score for an itinerary.
 * Lower composite scores indicate higher ranking efficiency.
 */
export function calculateFlyRankScore(
  itinerary: FlightItinerary,
  weights: OptimizationWeights = DEFAULT_FLYRANK_WEIGHTS
): number {
  const normalizedPrice = itinerary.priceUsd / 100;
  const normalizedDuration = itinerary.durationMinutes / 60;
  const stopsPenalty = itinerary.stopCount * 2.5;
  const carbonPenalty = itinerary.carbonKg / 50;

  return (
    normalizedPrice * weights.price +
    normalizedDuration * weights.duration +
    stopsPenalty * weights.stops +
    carbonPenalty * weights.carbon
  );
}

/**
 * Sorts and ranks itineraries according to the FlyRank.ai multi-objective algorithm.
 */
export function rankItineraries(
  itineraries: FlightItinerary[],
  weights: OptimizationWeights = DEFAULT_FLYRANK_WEIGHTS
): FlightItinerary[] {
  return [...itineraries].sort(
    (a, b) => calculateFlyRankScore(a, weights) - calculateFlyRankScore(b, weights)
  );
}

console.log("✈️ FlyRank.ai Core Ranking Engine loaded successfully.");
