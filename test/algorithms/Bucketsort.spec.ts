import bucketsort from "../../src/algorithms/bucketsort/Bucketsort";

describe("bucketsort test suite", () => {
  test("bucketsort([3, 2, 1]) should result in [1, 2, 3]", () => {
    const array: number[] = bucketsort([3, 2, 1]);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
  });

  test("bucketsort([]) should do nothing", () => {
    const array: number[] = bucketsort([]);
    expect(array.length).toBe(0);
  });

  test("bucketsort([5, 2, 1, 3, 4]) should result in [1, 2, 3, 4, 5]", () => {
    const array: number[] = bucketsort([5, 2, 1, 3, 4]);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);
    expect(array[3]).toBe(4);
    expect(array[4]).toBe(5);
  });

  test("bucketsort([1]) should result in [1]", () => {
    const array: number[] = bucketsort([1]);
    expect(array.length).toBe(1);
    expect(array[0]).toBe(1);
  });

  test("bucketsort[1, 0] should result in [0, 1]", () => {
    const array: number[] = bucketsort([1, 0]);
    expect(array[0]).toBe(0);
    expect(array[1]).toBe(1);
  });
});
