// Find the largest area formed by rectangles of 1's in a binary matrix.
export function findLargestArea(matrix: number[][]): number {
  if (!(matrix instanceof Array)) {
    throw new Error("Input is not valid");
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  // height = number or contiguous 1's in this column
  const colHeight = Array.from({ length: cols + 1 }, () => 0);
  let greatestArea = 0;

  // each row, compare current column's height with
  // columns to the left to get the largest rectangle
  for (let i = 0; i < rows; i++) {
    // index of the starting column of the previous
    // rectangle (height > current height)
    const stack = [-1];
    for (let j = 0; j <= cols; j++) {
      // update this column's height
      colHeight[j] = matrix[i][j] === 1 ? colHeight[j] + 1 : 0;

      // compare with left columns until we reach a
      // higher column, meanwhile, calculate the
      // areas of all possible rectangles to the left
      while (colHeight[j] < colHeight[stack[stack.length - 1]]) {
        // height of the first column inside the rectangle
        const h = colHeight[stack.pop()!];
        // column to the left of current - first column
        const w = j - 1 - stack[stack.length - 1];
        const area = h * w;
        if (area > greatestArea) {
          greatestArea = area;
        }
      }
      stack.push(j);
    }
  }
  return greatestArea;
}
