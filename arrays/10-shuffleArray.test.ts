import { shuffleArray } from "./10-shuffleArray";

test("Shuffles an array of numbers", () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  const copy = array.slice();
  shuffleArray(copy);

  // has the same number of elements
  expect(copy.length).toBe(array.length);
  // includes all the original elements
  expect(copy).toEqual(expect.arrayContaining(array));
  // elements are not in the same order
  expect(copy).not.toEqual(array);
});

test("Shuffles an array of strings", () => {
  const array = ["A", "B", "C", "D"];
  const copy = array.slice();
  shuffleArray(copy);

  // has the same number of elements
  expect(copy.length).toBe(array.length);
  // includes all the original elements
  expect(copy).toEqual(expect.arrayContaining(array));
  // elements are not in the same order
  expect(copy).not.toEqual(array);
});
