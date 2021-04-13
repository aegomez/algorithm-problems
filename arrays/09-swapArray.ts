// Given an array with values ranging from 0 to n-1,
// swap each array location with the value on the
// nth position with `a[a[n]]`.
export function swapArray(a: number[]): void {
  const n = a.length;
  for (let i = 0; i < n; i++) {
    let temp = a[i];
    a[i] = a[a[i]];
    a[temp] = temp;
  }
}
