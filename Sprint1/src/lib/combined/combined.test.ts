import { describe, it, expect } from 'vitest';
import { combinedFilter } from './combined';

describe('combined (mine → peer)', () => {
  it('basic sequence', () => {
    const input = [1,2,4,5,6];
    const expected = [1,4,25,121,729];
    expect(combinedFilter(input)).toEqual(expected);
  });

  it('edge cases', () => {
    expect(combinedFilter([])).toEqual([]);
  });
});
