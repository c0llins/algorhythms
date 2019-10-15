import testNoReturnWithComparatorSortingAlgorithm from "./without-return-with-comparator";
import testWithReturnWithoutComparatorSortingAlgorithm from "./with-return-without-comparator";
import bucketsort from "../../src/algorithms/buckesort";
import shellsort from "../../src/algorithms/shellsort";
import quicksort from "../../src/algorithms/quicksort";

testNoReturnWithComparatorSortingAlgorithm("quicksort", quicksort);
testNoReturnWithComparatorSortingAlgorithm("shellsort", shellsort);

testWithReturnWithoutComparatorSortingAlgorithm("buckesort", bucketsort);
