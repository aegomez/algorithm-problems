import { findMaxValue } from "./01-findMaxValue";

test("gets max value of an 100 element array", () => {
  const array = Array.from({ length: 100 }, (v, k) => k);
  const max = findMaxValue(array);

  expect(max).toBe(99);
});

test("gets max value of an 1000 element array", () => {
  const array = Array.from({ length: 1000 }, (v, k) => 0 - k);
  const max = findMaxValue(array);

  expect(max).toBe(0);
});

test("a single element array returns that element", () => {
  const array = [5];
  const max = findMaxValue(array);

  expect(max).toBe(5);
});

test("an empty array returns negative infinity", () => {
  const array: number[] = [];
  const max = findMaxValue(array);

  expect(max).toBe(-Infinity);
});
