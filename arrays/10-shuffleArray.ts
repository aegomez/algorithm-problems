// Shuffle an array.
// (Fisher-Yates shuffle)
export function shuffleArray(array: any[]): void {
  const n = array.length - 1;
  let random = 0;
  let temp = 0;

  for (let i = 0; i <= n; i++) {
    random = Math.round(Math.random() * (n - i));
    temp = array[random];
    array[random] = array[n - i];
    array[n - i] = temp;
  }
}
