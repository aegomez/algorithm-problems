import { reverseBlocks } from "./11-reverseBlocks";

test("Reverses blocks where size is an odd number", () => {
  const array = [1, 2, 3, 4, 5, 6];
  reverseBlocks(array, 3);

  expect(array).toEqual([3, 2, 1, 6, 5, 4]);
});

test("Reverses blocks where size is an even number", () => {
  const array = [1, 2, 3, 4, 5, 6];
  reverseBlocks(array, 2);

  expect(array).toEqual([2, 1, 4, 3, 6, 5]);
});

test("Reverses elements that are not enough to make a full block", () => {
  const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  reverseBlocks(array, 4);

  expect(array).toEqual([30, 20, 10, 0, 70, 60, 50, 40, 100, 90, 80]);
});

test("Reverses the whole array if blockSize >= array.length", () => {
  const array = ["a", "b", "c", "d", "e"];
  reverseBlocks(array, 8);

  expect(array).toEqual(["e", "d", "c", "b", "a"]);
});

test("Returns the same array if blockSize < 2", () => {
  const array = [1, 2, 3, 4];

  reverseBlocks(array, 0);
  expect(array).toEqual([1, 2, 3, 4]);

  reverseBlocks(array, 1);
  expect(array).toEqual([1, 2, 3, 4]);
});
