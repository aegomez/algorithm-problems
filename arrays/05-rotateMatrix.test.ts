import { rotateMatrix } from "./05-rotateMatrix";

test("Rotates a 3x3 matrix 90 deg", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  rotateMatrix(matrix);

  expect(matrix).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ]);
});

test("Rotates a 4x4 matrix", () => {
  const matrix = [
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [1, 0, 0, 1],
  ];
  rotateMatrix(matrix);

  expect(matrix).toEqual([
    [1, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
  ]);
});

test("Rotates a 7x7 matrix", () => {
  const matrix = [
    [7, 6, 5, 4, 3, 2, 1],
    [6, 5, 4, 3, 2, 1, 7],
    [5, 4, 3, 2, 1, 7, 6],
    [4, 3, 2, 1, 7, 6, 5],
    [3, 2, 1, 7, 6, 5, 4],
    [2, 1, 7, 6, 5, 4, 3],
    [1, 7, 6, 5, 4, 3, 2],
  ];
  rotateMatrix(matrix);

  expect(matrix).toEqual([
    [1, 2, 3, 4, 5, 6, 7],
    [7, 1, 2, 3, 4, 5, 6],
    [6, 7, 1, 2, 3, 4, 5],
    [5, 6, 7, 1, 2, 3, 4],
    [4, 5, 6, 7, 1, 2, 3],
    [3, 4, 5, 6, 7, 1, 2],
    [2, 3, 4, 5, 6, 7, 1],
  ]);
});
