import { findLargestArea } from "./03-findLargestArea";

test("Finds greatest area 3x2", () => {
  const matrix = [
    [0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
  ];
  const area = findLargestArea(matrix);

  expect(area).toBe(6);
});

test("Finds greatest area 1x5", () => {
  const matrix = [
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1],
  ];
  const area = findLargestArea(matrix);

  expect(area).toBe(5);
});

test("Finds greatest area 2x5", () => {
  const matrix = [
    [1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];
  const area = findLargestArea(matrix);

  expect(area).toBe(10);
});

test("Finds area of a row matrix", () => {
  const matrix = [[1, 1, 0, 0, 1, 1, 1]];
  const area = findLargestArea(matrix);

  expect(area).toBe(3);
});

test("Finds area of a column matrix", () => {
  const matrix = [[1], [0], [1], [1]];
  const area = findLargestArea(matrix);

  expect(area).toBe(2);
});
