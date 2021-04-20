import { balanceSum } from "./16-balanceSum";

test("Finds the index in an array with an even number of elements", () => {
  const numbers = [10, 20, 30, 40, 50, 60, 100, 110];
  const index = balanceSum(numbers);

  // index position is the start of the right side
  expect(index).toBe(6);
});

test("Finds the index in an array with an odd number of elements", () => {
  const numbers = [1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5];
  const index = balanceSum(numbers);

  expect(index).toBe(5);
});

test("If all elements are zero, just the first one is assigned to the left side", () => {
  const index1 = balanceSum([0, 0, 0, 0]);
  const index2 = balanceSum([0, 0, 0, 0, 0]);

  expect(index1).toBe(1);
  expect(index2).toBe(1);
});

test("Returns -1 if an index is not found", () => {
  const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const a2 = [-1, -2, -3, 100, 200, 1000];

  expect(balanceSum(a1)).toBe(-1);
  expect(balanceSum(a2)).toBe(-1);
});

test("An array with less that two elements cant have two sides", () => {
  expect(balanceSum([10])).toBe(-1);
  expect(balanceSum([])).toBe(-1);
});
