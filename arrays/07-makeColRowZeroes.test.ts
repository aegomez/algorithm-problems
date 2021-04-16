import { makeColRowZeroes } from "./07-makeColRowZeroes";

test("Makes one column and one row all zeroes", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0],
  ];
  makeColRowZeroes(matrix);

  expect(matrix).toEqual([
    [1, 2, 0],
    [4, 5, 0],
    [0, 0, 0],
  ]);
});

test("Makes multiple colums and rows all zeroes", () => {
  const matrix = [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1],
  ];
  makeColRowZeroes(matrix);

  expect(matrix).toEqual([
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],
  ]);
});

test("Makes first column and row all zeroes", () => {
  const matrix = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  makeColRowZeroes(matrix);

  expect(matrix).toEqual([
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, 1],
  ]);
});
