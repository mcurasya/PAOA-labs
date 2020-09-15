export interface Sorter {
  swapsCount: number;
  comparesCount: number;
  sort(arr: number[]): number[];
  showStats(): void;
  toString(): string;
}

export class BubbleSorter implements Sorter {
  swapsCount: number;
  comparesCount: number;

  constructor() {
    this.swapsCount = 0;
    this.comparesCount = 0;
  }

  showStats(): void {
    console.table([
      {
        "amount of swaps": this.swapsCount,
        "amount of comparisons": this.comparesCount,
      },
    ]);
  }

  sort(arr: number[]): number[] {
    this.swapsCount = 0;
    this.comparesCount = 0;
    let result = arr.slice();
    let changed = true;
    for (let i = 0; i < result.length && changed; ++i) {
      changed = false;
      for (let j = 0; j < result.length - 1 - i; j++) {
        this.comparesCount++;
        if (result[j] > result[j + 1]) {
          changed = true;
          this.swapsCount++;
          const temp = result[j];
          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }
    return result;
  }
  
  toString() {
    return "Bubble sort";
  }
}

export class MergeSorter implements Sorter {
  swapsCount: number;
  comparesCount: number;

  constructor() {
    this.swapsCount = 0;
    this.comparesCount = 0;
  }

  showStats(): void {
    console.table([
      {
        "amount of swaps": this.swapsCount,
        "amount of comparisons": this.comparesCount,
      },
    ]);
  }

  sort(arr: number[]): number[] {
    throw new Error("Method not implemented.");
  }

  toString() {
    return "Merge sort";
  }
}

export class CountingSorter implements Sorter {
  swapsCount: number;
  comparesCount: number;

  constructor() {
    this.swapsCount = 0;
    this.comparesCount = 0;
  }

  showStats(): void {
    console.table([
      {
        "amount of swaps": this.swapsCount,
        "amount of comparisons": this.comparesCount,
      },
    ]);
  }

  sort(arr: number[]): number[] {
    throw new Error("Method not implemented.");
  }

  toString() {
    return "Counting sort";
  }
}
