import { findOnes } from "./04-findOnes";

test("Finds two different groups", () => {
  const matrix = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1],
  ];
  const groups = findOnes(matrix);

  expect(groups).toEqual([3, 3]);
});

test("Finds three different groups", () => {
  const matrix = [
    [2, 1, 1, 1, 3],
    [1, 4, 4, 5, 1],
    [1, 6, 1, 5, 1],
    [1, 1, 1, 7, 8],
  ];
  const groups = findOnes(matrix);

  expect(groups).toEqual([3, 6, 2]);
});

test("Finds one single group", () => {
  const matrix = [
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 1],
    [0, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 0],
  ];
  const groups = findOnes(matrix);

  expect(groups).toEqual([17]);
});

test("No found groups returns an empty array", () => {
  const matrix = [
    [0, 0, 0],
    [0, 0, 0],
  ];
  const groups = findOnes(matrix);

  expect(groups).toEqual([]);
});

test("Finds groups in a row matrix", () => {
  const matrix = [[8, 1, 8, 1, 1]];
  const groups = findOnes(matrix);

  expect(groups).toEqual([1, 2]);
});

test("Finds groups in a column matrix", () => {
  const matrix = [[1], [1], [1], [0]];
  const groups = findOnes(matrix);

  expect(groups).toEqual([3]);
});
