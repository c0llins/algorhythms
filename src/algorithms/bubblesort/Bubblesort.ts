import swapBSort from "../../utils/swap/SwapBubbleSort";
const bubblesort = (array: number[]): number[] => {
  array = array.slice();

  for (var i: number = 0; i < array.length; i++) {
    for (var j: number = 0; j < array.length - 1; j++) {
      swapBSort(array, i, j);
    }
  }
  return array;
};

export default bubblesort;
