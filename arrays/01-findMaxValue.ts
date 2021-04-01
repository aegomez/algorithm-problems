// Return the max value of an array without using loops
export function findMaxValue(
  array: number[],
  index = 0,
  current = -Infinity
): number | undefined {
  if (index >= array.length) {
    return current;
  }
  let max = Math.max(array[index], current);
  return findMaxValue(array, index + 1, max);
}
