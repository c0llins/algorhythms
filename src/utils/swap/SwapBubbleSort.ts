const swapBSort = <T>(array: T[], i: number, j: number) => {
  if (array[j] > array[j + 1]) {
    let swap = array[j];
    array[j] = array[j + 1];
    array[j + 1] = swap;
  }
};

export default swapBSort;
