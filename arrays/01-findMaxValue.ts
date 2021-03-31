// Return the max value of an array without using loops
export function findMaxValue(array: number[], index = 0): number {
  if (index < array.length) {
    return Math.max(array[index], findMaxValue(array, index + 1));
  }
  return -Infinity;
}
