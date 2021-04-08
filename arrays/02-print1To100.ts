// Display the numbers from 1 to 100 without using loops/conditionals
export function print1To100(): void {
  let f: ((n: number) => void)[] = [];

  function print(n: number) {
    console.log(n);
    f[Math.floor(n / 100)](n + 1);
  }

  f = [print, () => {}];
  print(1);
}
