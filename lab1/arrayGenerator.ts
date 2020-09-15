export function GenerateForwardArray(size: number): number[] {
  let res: number[] = Array<number>(size);
  for (let index = 0; index < size; index++) {
    res[index] = index;
  }
  return res;
}

export function GenerateReverseArray(size: number): number[] {
  let res: number[] = Array<number>(size);
  for (let index = 0; index < size; index++) {
    res[index] = size - 1 - index;
  }
  return res;
}

export function GenerateRandomArray(size: number): number[] {
  let res: number[] = Array<number>(size);
  for (let index = 0; index < size; index++) {
    res[index] = Math.floor(Math.random() * size);
  }
  return res;
}
