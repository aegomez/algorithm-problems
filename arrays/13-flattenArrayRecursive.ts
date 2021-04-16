// Flatten an array, recursive implementation.
export function flattenArray(input: any): any[] {
  return Array.isArray(input)
    ? input.reduce<any[]>((arr, elem) => arr.concat(flattenArray(elem)), [])
    : [input];
}
