// Given an MxN matrix that is in ascending order both
// on rows and columns, create a search function.
export function searchMatrix(
  matrix: number[][],
  target: number
): number[] | null {
  const N = matrix[0].length;

  // start searching from the bottom-left position
  let i = matrix.length - 1;
  let j = 0;

  while (i >= 0 && j < N) {
    if (matrix[i][j] === target) {
      return [i, j];
    }
    if (matrix[i][j] > target) {
      // the rest of this row is greater than target
      i--;
    } else {
      // matrix[i][j] < target
      // the rest of this column is less than target
      j++;
    }
  }
  //target not found
  return null;
}
