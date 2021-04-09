// Merge two sorted arrays where one has
// enough space at the end for the other.
export function mergeArrays(largeArray: number[], smallArray: number[]): void {
  let s = smallArray.length - 1;
  let l2 = largeArray.length - 1;
  let l1 = l2 - smallArray.length;
  let fromSmall = false;

  // Merge all elements, starting from the largest one
  while (s >= 0) {
    // if true: insert element from smallArray,
    // else: move element within largeArray
    fromSmall = l1 < 0 || largeArray[l1] <= smallArray[s];

    largeArray[l2--] = fromSmall ? smallArray[s--] : largeArray[l1--];
  }
}
