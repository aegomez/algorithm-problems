// Flatten an array, iterative implementation.
export function flattenArray(array: any[]): any[] {
  const output: any[] = [];
  const stack = [array];

  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      for (let i = next.length - 1; i >= 0; i--) {
        stack.push(next[i]);
      }
    } else {
      output.push(next);
    }
  }

  return output;
}
