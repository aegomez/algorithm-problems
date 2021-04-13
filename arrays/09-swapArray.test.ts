import { swapArray } from "./09-swapArray";

test("Swaps array locations within array n=4", () => {
  const array = [1, 2, 3, 0];
  swapArray(array);

  expect(array).toEqual([2, 1, 0, 3]);
});

test("Swaps array locations within array n=10", () => {
  const array = [7, 4, 1, 0, 2, 5, 8, 9, 6, 3];
  swapArray(array);

  expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
