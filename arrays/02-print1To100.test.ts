import { print1To100 } from "./02-print1To100";

test("displays the numbers from 1 to 100", () => {
  const log = jest.spyOn(console, "log").mockImplementation(() => {});

  print1To100();

  expect(log).toHaveBeenCalledTimes(100);
  expect(log).toHaveBeenNthCalledWith(1, 1);
  expect(log).toHaveBeenLastCalledWith(100);
});
