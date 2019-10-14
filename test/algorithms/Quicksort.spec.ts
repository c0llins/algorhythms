import quicksort from "../../src/algorithms/quicksort/Quicksort";

describe("quicksort test suite", () => {
  test("quicksort([3, 2, 1]) should result in [1, 2, 3]", () => {
    const array: number[] = [3, 2, 1];
    quicksort(array);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
  });

  test("quicksort([]) should do nothing", () => {
    const array: number[] = [];
    quicksort(array);
    expect(array.length).toBe(0);
  });

  test("quicksort([5, 2, 1, 3, 4]) should result in [1, 2, 3, 4, 5]", () => {
    const array: number[] = [5, 2, 1, 3, 4];
    quicksort(array);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
    expect(array[3]).toBe(4);
    expect(array[4]).toBe(5);
  });

  test("quicksort with custom comparator", () => {
    interface ITestObject {
      value: number;
    }
    const array: ITestObject[] = [{ value: 20 }, { value: 5 }, { value: 10 }];
    const comparator = (a: ITestObject, b: ITestObject): boolean =>
      a.value < b.value;
    quicksort(array, comparator);
    expect(array[0].value).toBe(5);
    expect(array[1].value).toBe(10);
    expect(array[2].value).toBe(20);
  });
});
