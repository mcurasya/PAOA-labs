import { Sorter, BubbleSorter, MergeSorter, CountingSorter } from "./sorters";
import {
  GenerateForwardArray,
  GenerateRandomArray,
  GenerateReverseArray,
} from "./arrayGenerator";

function main() {
  console.log(new Date().toLocaleTimeString());
  const bs = new BubbleSorter();
  const ms = new MergeSorter();
  const cs = new CountingSorter();
  for (let sorter of [bs]) {
    console.log(sorter.toString());
    for (let size of [1000, 10000, 100000]) {
      console.log(size + " elements");
      console.log("forward array");
      sorter.sort(GenerateForwardArray(size));
      sorter.showStats();
      sorter.sort(GenerateRandomArray(size));
      console.log("random array");
      sorter.showStats();
      console.log("reverse array");
      sorter.sort(GenerateReverseArray(size));
      sorter.showStats();
    }
  }
  console.log(new Date().toLocaleTimeString());
}

main();
