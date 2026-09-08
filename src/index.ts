/**
 * FlyRank Engine - Core Entry Point
 */

export interface FlightOption {
  id: string;
  airline: string;
  origin: string;
  destination: string;
  price: number;
  durationMinutes: number;
  stops: number;
  carbonKg: number;
}

export interface RankingWeights {
  priceWeight: number;
  durationWeight: number;
  stopsWeight: number;
  carbonWeight: number;
}

/**
 * Calculates a composite score for a flight option (lower score is better).
 */
export function scoreFlight(flight: FlightOption, weights: RankingWeights): number {
  const normalizedPrice = flight.price / 100;
  const normalizedDuration = flight.durationMinutes / 60;
  const stopsPenalty = flight.stops * 2.5;
  const carbonPenalty = flight.carbonKg / 50;

  return (
    normalizedPrice * weights.priceWeight +
    normalizedDuration * weights.durationWeight +
    stopsPenalty * weights.stopsWeight +
    carbonPenalty * weights.carbonWeight
  );
}

/**
 * Ranks flight options in ascending order of score (best to worst).
 */
export function rankFlights(flights: FlightOption[], weights: RankingWeights): FlightOption[] {
  return [...flights].sort((a, b) => scoreFlight(a, weights) - scoreFlight(b, weights));
}

console.log("✈️ FlyRank Core Engine initialized.");
