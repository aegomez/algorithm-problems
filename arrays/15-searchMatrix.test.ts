import { searchMatrix } from "./15-searchMatrix";

test("Finds element in a matrix", () => {
  const matrix = [
    [1, 2, 3, 4],
    [3, 6, 9, 12],
    [5, 10, 15, 20],
    [7, 14, 21, 28],
  ];
  const target = 20;
  const position = searchMatrix(matrix, target);

  expect(position).toEqual([2, 3]);
});

test("Finds element in a matrix (worst case)", () => {
  const matrix = [
    [10, 15, 20, 25, 30, 35, 40],
    [14, 21, 28, 35, 42, 49, 56],
    [22, 33, 44, 55, 66, 77, 88],
    [26, 39, 52, 65, 78, 91, 104],
    [34, 51, 68, 85, 102, 119, 136],
  ];
  const target = 40;
  const position = searchMatrix(matrix, target);

  expect(position).toEqual([0, 6]);
});

test("Returns null if element is not found", () => {
  const matrix = [
    [1, 2, 3, 4],
    [3, 6, 9, 12],
    [5, 10, 15, 20],
    [7, 14, 21, 28],
  ];
  const target = 100;
  const position = searchMatrix(matrix, target);

  expect(position).toBe(null);
});
