import { describe, it, expect } from 'vitest';
import { Squares } from '../lib/filters/SquareDance';

describe('Square filter', () => {
  it('square a sequence', () => {
    const input = [4,3,5,16,17,35];
    const expected = [ 4,4,8,16,25,25];
    expect(Squares(input)).toEqual(expected);
  });
});
