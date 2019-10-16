import { assert } from "chai";

export default function testWithReturnWithoutComparatorSortingAlgorithm(
  name: string,
  algorithm: any
) {
  describe(`${name} test suite`, () => {
    it(`${name}([3, 2, 1]) should result in [1, 2, 3]`, () => {
      const array: number[] = algorithm([3, 2, 1]);
      assert.equal(array[0], 1);
      assert.equal(array[1], 2);
      assert.equal(array[2], 3);
    });

    it(`${name}([]) should do nothing`, () => {
      const array: number[] = algorithm([]);
      assert.equal(array.length, 0);
    });

    it(`${name}([5, 2, 1, 3, 4]) should result in [1, 2, 3, 4, 5]`, () => {
      const array: number[] = algorithm([5, 2, 1, 3, 4]);
      assert.equal(array[0], 1);
      assert.equal(array[1], 2);
      assert.equal(array[2], 3);
      assert.equal(array[3], 4);
      assert.equal(array[4], 5);
    });

    it(`${name}[1, 2, 3, 4, 5] should result in [1, 2, 3, 4, 5]`, () => {
      const array: number[] = algorithm([1, 2, 3, 4, 5]);
      assert.equal(array[0], 1);
      assert.equal(array[1], 2);
      assert.equal(array[2], 3);
      assert.equal(array[3], 4);
      assert.equal(array[4], 5);
    });

    it(`${name}([1]) should result in [1]`, () => {
      const array: number[] = algorithm([1]);
      assert.equal(array.length, 1);
      assert.equal(array[0], 1);
    });

    it(`${name}[1, 0] should result in [0, 1]`, () => {
      const array: number[] = algorithm([1, 0]);
      assert.equal(array[0], 0);
      assert.equal(array[1], 1);
    });
  });
}
