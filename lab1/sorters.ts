export interface Sorter {
  swapsCount: number;
  comparesCount: number;
  used: boolean;
  sort(arr: number[]): number[];
  showStats(): void;
}

export class BubbleSorter implements Sorter {
  swapsCount: number;
  comparesCount: number;
  used: boolean;

  constructor() {
    this.swapsCount = 0;
    this.comparesCount = 0;
    this.used = false;
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
}

export class MergeSorter implements Sorter {
  swapsCount: number;
  comparesCount: number;
  used: boolean;

  constructor() {
    this.swapsCount = 0;
    this.comparesCount = 0;
    this.used = false;
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
}

export class CountingSorter implements Sorter {
  swapsCount: number;
  comparesCount: number;
  used: boolean;

  constructor() {
    this.swapsCount = 0;
    this.comparesCount = 0;
    this.used = false;
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
}
