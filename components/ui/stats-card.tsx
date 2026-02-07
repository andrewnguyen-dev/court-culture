// Deprecated shim: StatsCard is now defined in components/mission.tsx
// This file re-exports the in-file implementation for backward compatibility.

import { StatsCard as _StatsCard, type StatItem } from "../mission";

export type { StatItem };
export const StatsCard = _StatsCard;
export default _StatsCard;
