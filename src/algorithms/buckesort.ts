import quicksort from "./quicksort";

const bucketsort = (array: number[], bucketSize: number = 5): number[] => {
  const max: number = Math.max(...array);
  const min: number = Math.min(...array);

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;

  const buckets: any = [];
  for (let i = 0; i < bucketCount; ++i) {
    buckets[i] = [];
  }

  for (const element of array) {
    buckets[Math.floor((element - min) / bucketSize)].push(element);
  }

  for (const bucket of buckets) {
    if (bucket) {
      quicksort(bucket);
    }
  }

  return buckets.flat(Infinity);
};

export default bucketsort;
