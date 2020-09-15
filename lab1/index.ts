import { Sorter, BubbleSorter, MergeSorter, CountingSorter } from "./sorters";
import { GenerateForwardArray, GenerateRandomArray, GenerateReverseArray } from "./arrayGenerator";

function main() {
  const bs = new BubbleSorter();
  const generated = GenerateReverseArray(1000);
  console.log(generated);
  const sorted = bs.sort(generated);
  console.log(sorted);
  bs.showStats();
}

main();
