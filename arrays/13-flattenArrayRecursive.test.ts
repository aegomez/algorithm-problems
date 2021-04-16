import { flattenArray } from "./13-flattenArrayRecursive";

test("Flattens an array", () => {
  const arr = [1, [2, [3, [[4]]]]];
  const flat = flattenArray(arr);

  expect(flat).toStrictEqual([1, 2, 3, 4]);
});

test("Flattens a deeply nested array", () => {
  const arr = [[[[100]]], [[[[200]]]], [[[[[300]]]]]];
  const flat = flattenArray(arr);

  expect(flat).toStrictEqual([100, 200, 300]);
});
