// Given the start and end position of an MxN matrix,
// find all possible routes from start to end given
// the only valid movements of right or down.
export function findRoutes(
  m: number,
  n: number,
  start: number[],
  end: number[]
): string[][] {
  const [m0, n0] = start;
  const [m1, n1] = end;
  const routes: string[][] = [];

  function path(deltaM: number, deltaN: number, route: string[]): void {
    if (deltaM) {
      path(deltaM - 1, deltaN, [...route, "down"]);
    }
    if (deltaN) {
      path(deltaM, deltaN - 1, [...route, "right"]);
    }
    if (!deltaM && !deltaN) {
      routes.push(route);
    }
  }

  if (m0 >= m || n0 >= n) {
    throw new Error("start coordinates are out of bounds");
  }
  if (m1 >= m || n1 >= n) {
    throw new Error("end coordinates are out of bounds");
  }
  if (m1 >= m0 && n1 >= n0) {
    // end position is reachable from the start position
    path(m1 - m0, n1 - n0, []);
  }

  return routes;
}
