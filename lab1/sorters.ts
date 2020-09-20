interface Sorter {
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
    this.swapsCount = 0;
    this.comparesCount = 0;
    return this.__merge_sort(arr.slice());
  }

  __merge_sort(vals: number[]): number[] {
    if (vals.length > 1) {
      const middle = Math.floor(vals.length / 2);
      let left_subarr = vals.slice(0, middle);
      let right_subarr = vals.slice(middle, vals.length);
      left_subarr = this.__merge_sort(left_subarr);
      right_subarr = this.__merge_sort(right_subarr);
      vals = [];

      while (left_subarr.length > 0 && right_subarr.length > 0) {
        this.comparesCount++;
        if (left_subarr[0] < right_subarr[0]) {
          this.swapsCount++;
          vals.push(left_subarr.shift());
        } else {
          this.swapsCount++;
          vals.push(right_subarr.shift());
        }
      }

      vals = vals.concat(left_subarr);
      this.swapsCount += left_subarr.length;
      vals = vals.concat(right_subarr);
      this.swapsCount += right_subarr.length;
    }
    return vals;
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
        "amount of copies": this.swapsCount,
        "amount of comparisons": this.comparesCount,
      },
    ]);
  }

  sort(arr: number[]): number[] {
    this.swapsCount = 0;
    let counter = Array<number>(Math.max(...arr) + 1);
    let result: number[] = [];
    for (let i = 0; i < counter.length; i++) {
      counter[i] = 0;
    }

    for (const elem of arr) {
      counter[elem]++;
    }
    counter.forEach((val: number, index: number) => {
      this.swapsCount += val;
      for (let i = 0; i < val; ++i) {
        result.push(index);
      }
    });
    return result;
  }

  toString() {
    return "Counting sort";
  }
}
