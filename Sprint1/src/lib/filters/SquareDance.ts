function isPerfectSquare(n: number): boolean {
  const root = Math.round(Math.sqrt(n));
  return root * root === n;
}

function isPerfectCube(n: number): boolean {
  const root = Math.round(Math.cbrt(n));
  return root * root * root === n;
}

export function Square(x: number): number {
  let n = x;
  while (!isPerfectSquare(n) && !isPerfectCube(n)) {
    n++;
  }
  return n;
}

// Map over a sequence
export function Squares(xs: number[]): number[] {
  return xs.map(Square);
}