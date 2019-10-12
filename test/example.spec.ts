const sum = (a: number, b: number): number => a + b;

describe("example test suite", () => {
  test("sum(2, 2) should return 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
});
