// Given an MxN matrix, if any element is zero, make that column and row all zeroes.
export function makeColRowZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let isFirstColZeroes = false;
  let ops = 0;

  // find all zeroes
  for (let m = 0; m < rows; m++) {
    if (matrix[m][0] === 0) {
      isFirstColZeroes = true;
    }
    for (let n = 0; n < cols; n++) {
      if (matrix[m][n] === 0) {
        // set the first element in this column and row to zero
        matrix[m][0] = 0;
        matrix[0][n] = 0;
      }
    }
  }

  // set elements in marked columns/rows to zero,
  // except those in the first ones
  for (let m = 1; m < rows; m++) {
    for (let n = 1; n < cols; n++) {
      if (matrix[m][0] === 0 || matrix[0][n] === 0) {
        matrix[m][n] = 0;
      }
    }
  }

  // set first column to zeroes?
  if (isFirstColZeroes) {
    for (let m = 0; m < rows; m++) {
      matrix[m][0] = 0;
    }
  }

  // set first row to zeroes?
  if (matrix[0][0] === 0) {
    for (let n = 0; n < cols; n++) {
      matrix[0][n] = 0;
    }
  }
}
