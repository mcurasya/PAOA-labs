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
    throw new Error("Method not implemented.");
  }
  
  sort(arr: number[]): number[] {
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
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
    throw new Error("Method not implemented.");
  }
  
  sort(arr: number[]): number[] {
    throw new Error("Method not implemented.");
  }
}