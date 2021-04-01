// Display the numbers from 1 to 100 without using loops/conditionals
export function print1To100(n = 1): boolean {
  return n > 100 || (console.log(n), print1To100(n + 1));
}
