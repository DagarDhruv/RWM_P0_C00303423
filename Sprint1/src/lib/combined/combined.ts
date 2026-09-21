
import { Squares as mySquare } from '$lib/filters/SquareDance';

import { facts as peerFacts } from 'peer-filter-c00260441';

export function combinedFilter(xs: number[]): number[] {
  const afterMine = peerFacts(xs);
  return mySquare(afterMine);
}
