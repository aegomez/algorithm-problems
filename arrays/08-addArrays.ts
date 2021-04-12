// Given two arrays of single-digit numbers, add them and
// produce the result in the same format as the inputs.
// Example: a = [9, 9], b = [1] so o = [1, 0, 0].
export function addArrays(arr1: number[], arr2: number[]): number[] {
  let k1 = arr1.length - 1;
  let k2 = arr2.length - 1;
  let i = Math.max(k1, k2);
  let sum = 0;
  let carry = 0;
  const o: number[] = Array(i + 1);

  for (; i >= 0; i--) {
    sum = (arr1[k1--] || 0) + (arr2[k2--] || 0) + carry;
    o[i] = sum % 10;
    carry = sum > 9 ? 1 : 0;
  }

  return carry ? [1].concat(o) : o;
}
