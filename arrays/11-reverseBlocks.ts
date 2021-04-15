// Reverse N sized blocks of an array.
export function reverseBlocks(array: any[], blockSize: number): void {
  if (blockSize < 2) {
    return;
  }

  const len = array.length;
  let halfBlockSize = blockSize >> 1; // blockSize / 2
  let lastIndex = 0;
  let temp = 0;

  for (let i = 0; i < len; i += blockSize) {
    // if the rest of the elements are not enough to make a full block
    if (len - i < blockSize) {
      blockSize = len - i;
      halfBlockSize = blockSize >> 1;
    }
    // get the position of the last element in the current block
    lastIndex = i + blockSize - 1;
    // reverse elements inside the block
    for (let j = 0; j < halfBlockSize; j++) {
      temp = array[i + j];
      array[i + j] = array[lastIndex - j];
      array[lastIndex - j] = temp;
    }
  }
}
