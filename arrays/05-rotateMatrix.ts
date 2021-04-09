// Rotate a matrix of numbers by 90 deg
export function rotateMatrix(matrix: number[][]): void {
  const last = matrix.length - 1;
  const imax = matrix.length >> 1;
  const jmax = (matrix.length + 1) >> 1;

  for (let i = 0; i < imax; i++) {
    for (let j = 0; j < jmax; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[last - j][i];
      matrix[last - j][i] = matrix[last - i][last - j];
      matrix[last - i][last - j] = matrix[j][last - i];
      matrix[j][last - i] = temp;
    }
  }
}
