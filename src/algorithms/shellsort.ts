import less from "../utils/comparators/Less";

const shellsort = <T>(
  array: T[],
  comparator: (a: T, b: T) => boolean = less
) => {
  const gaps: number[] = [701, 301, 132, 57, 23, 10, 4, 1];
  let i: number;
  let j: number;

  for (const gap of gaps) {
    for (i = gap; i < array.length; i++) {
      const temp = array[i];

      for (j = i; j >= gap && comparator(temp, array[j - gap]); j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
};

export default shellsort;
