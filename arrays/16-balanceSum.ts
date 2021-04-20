// Given an array of numbers of length N, find the index
// of that array that balances the left and right sum.
// The value at index is included in the right sum.
// If no index is found, return -1.
export function balanceSum(array: number[]) {
  if (array.length < 2) {
    return -1;
  }

  let leftIndex = 1;
  let rightIndex = array.length - 2;
  let sum = array[0] - array[array.length - 1];

  while (leftIndex <= rightIndex) {
    if (sum < 0) {
      sum += array[leftIndex++];
    } else {
      sum -= array[rightIndex--];
    }
  }
  return sum === 0 ? rightIndex + 1 : -1;
}
