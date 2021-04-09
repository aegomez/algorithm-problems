import { mergeArrays } from "./06-mergeArrays";

test("Merges two arrays of different size", () => {
  const arr1 = [2, 4, 6, 8].concat(Array(5));
  const arr2 = [1, 3, 5, 7, 9];

  mergeArrays(arr1, arr2);

  expect(arr1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Inserts all elements from small at the end of large", () => {
  const large = [10, 20, 30, 40].concat(Array(3));
  const small = [100, 200, 300];

  mergeArrays(large, small);

  expect(large).toEqual([10, 20, 30, 40, 100, 200, 300]);
});

test("Inserts all elements from small at the start of large", () => {
  const large = [11, 12, 13, 14].concat(Array(6));
  const small = [0, 0, 1, 1, 2, 2];

  mergeArrays(large, small);

  expect(large).toEqual([0, 0, 1, 1, 2, 2, 11, 12, 13, 14]);
});
