import { findRoutes } from "./14-findRoutes";

test("Finds all routes in a 2x2 matrix", () => {
  // [[S, 0],
  //  [0, E]];
  const m = 2;
  const n = 2;
  const start = [0, 0];
  const end = [1, 1];

  const routes = findRoutes(m, n, start, end);
  const expected = expect.arrayContaining([
    ["right", "down"],
    ["down", "right"],
  ]);

  expect(routes.length).toBe(2);
  expect(routes).toEqual(expected);
});

test("Finds all routes in a 3x3 matrix", () => {
  // [[S, 0, 0],
  //  [0, 0, 0],
  //  [0, 0, E]];
  const m = 3;
  const n = 3;
  const start = [0, 0];
  const end = [2, 2];

  const routes = findRoutes(m, n, start, end);
  const expected = expect.arrayContaining([
    ["right", "right", "down", "down"],
    ["right", "down", "right", "down"],
    ["right", "down", "down", "right"],
    ["down", "down", "right", "right"],
    ["down", "right", "down", "right"],
    ["down", "right", "right", "down"],
  ]);

  expect(routes.length).toBe(6);
  expect(routes).toEqual(expected);
});

test("Finds one single route to the right", () => {
  // [[0, 0, 0, 0, 0, 0],
  //  [0, 0, S, 0, 0, E],
  //  [0, 0, 0, 0, 0, 0]]
  const start = [1, 2];
  const end = [1, 5];
  const routes = findRoutes(3, 6, start, end);
  const expected = [["right", "right", "right"]];

  expect(routes).toEqual(expected);
});

test("Finds one single route downward", () => {
  // [[0, 0, 0, S],
  //  [0, 0, 0, 0],
  //  [0, 0, 0, 0],
  //  [0, 0, 0, 0],
  //  [0, 0, 0, E]]
  const start = [0, 3];
  const end = [4, 3];
  const routes = findRoutes(5, 4, start, end);
  const expected = [["down", "down", "down", "down"]];

  expect(routes).toEqual(expected);
});

test("No routes are found if end position is unreachable from start", () => {
  // [[0,0,0,0],
  //  [0,0,0,S],
  //  [0,0,0,0],
  //  [0,E,0,0]]
  const start = [1, 3];
  const end = [3, 1];
  const routes = findRoutes(4, 4, start, end);

  expect(routes).toEqual([]);
});

test("Throws error if start or end are outside of matrix bounds", () => {
  const m = 10;
  const n = 10;

  expect(() => findRoutes(m, n, [0, 20], [5, 5])).toThrow("start");
  expect(() => findRoutes(m, n, [15, 0], [9, 9])).toThrow("start");
  expect(() => findRoutes(m, n, [0, 0], [10, 20])).toThrow("end");
  expect(() => findRoutes(m, n, [0, 0], [10, 9])).toThrow("end");
});
