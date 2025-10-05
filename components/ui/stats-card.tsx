// Deprecated shim: StatsCard is now defined in components/misson.tsx
// This file re-exports the in-file implementation for backward compatibility.

import { StatsCard as _StatsCard, type StatItem } from "../misson";

export type { StatItem };
export const StatsCard = _StatsCard;
export default _StatsCard;
