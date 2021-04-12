import { addArrays } from "./08-addArrays";

test("Adds two arrays and returns the result in the same format", () => {
  const arr1 = [9, 9, 9, 9];
  const arr2 = [1];
  const sum = addArrays(arr1, arr2);

  expect(sum).toEqual([1, 0, 0, 0, 0]);
});

test("Adds two arrays of the same length", () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, 8, 9, 0];
  const sum = addArrays(arr1, arr2);

  expect(sum).toEqual([8, 0, 2, 3, 5]);
});

test("Adds two arrays of different length", () => {
  const arr1 = [9];
  const arr2 = [1, 9, 9, 9];
  const sum = addArrays(arr1, arr2);

  expect(sum).toEqual([2, 0, 0, 8]);
});
