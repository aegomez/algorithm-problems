// Find groups of 1's in an MxN matrix.
export function findOnes(matrix: number[][]): number[] {
  if (!(matrix instanceof Array)) {
    throw new Error("Input is not valid");
  }
  const rows = matrix.length;
  const cols = matrix[0].length;
  const groups: number[] = [];
  // If a 1 is found, it and all the 1's adjacent
  // to it are queued to be visited until that
  // group has been completely expanded.
  const stack: [number, number][] = [];
  // Hashmap of cells that are already included in a group
  const visited: Record<string, boolean> = {};

  // Mark a cell as visited and push it into the stack
  function visit(i: number, j: number) {
    if (!visited[`${i},${j}`]) {
      visited[`${i},${j}`] = true;
      stack.push([i, j]);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (visited[`${i},${j}`]) {
        // This cell is already part of a group, skip it
        continue;
      }
      if (matrix[i][j] === 1) {
        // Start a new group
        visit(i, j);
        let groupSize = 0;

        // Visit all the 1's in this group
        while (stack.length) {
          let [m, n] = stack.pop()!;
          groupSize++;
          if (m > 0 && matrix[m - 1][n] === 1) {
            visit(m - 1, n);
          }
          if (m + 1 < rows && matrix[m + 1][n] === 1) {
            visit(m + 1, n);
          }
          if (n > 0 && matrix[m][n - 1] === 1) {
            visit(m, n - 1);
          }
          if (n + 1 < cols && matrix[m][n + 1] === 1) {
            visit(m, n + 1);
          }
        }
        // Add the count of 1's in this group to the result
        groups.push(groupSize);
      }
    }
  }
  return groups;
}
