import less from "../utils/comparators/Less";

const quicksortImpl = <T>(
  array: T[],
  start: number,
  end: number,
  comparator: (a: T, b: T) => boolean
): void => {
  if (start >= end) {
    return;
  }

  let pivotIndex: number = start;
  for (let i = start; i < end; ++i) {
    if (comparator(array[i], array[end])) {
      [array[pivotIndex], array[i]] = [array[i], array[pivotIndex]];
      ++pivotIndex;
    }
  }

  [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];

  quicksortImpl(array, start, pivotIndex - 1, comparator);
  quicksortImpl(array, pivotIndex + 1, end, comparator);
};

const quicksort = <T>(
  array: T[],
  comparator: (a: T, b: T) => boolean = less
): void => {
  quicksortImpl(array, 0, array.length - 1, comparator);
};

export default quicksort;
