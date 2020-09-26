import { Tree, TreeNode } from "./tree";

export class Heap {
  arr: number[];
  root: TreeNode;
  size: number;
  constructor(arr: number[]) {
    this.size = arr.length;
    this.arr = arr.slice();
    this.build_heap();
    this.build_heap_tree();
  }

  heapify(i: number, size = this.size) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < size && this.arr[left] > this.arr[largest]) {
      largest = left;
    }
    if (right < size && this.arr[right] > this.arr[largest]) {
      largest = right;
    }
    if (i !== largest) {
      let temp = this.arr[i];
      this.arr[i] = this.arr[largest];
      this.arr[largest] = temp;
      this.heapify(largest, size);
    }
  }

  build_heap() {
    let middle = Math.ceil(this.size / 2) - 1;
    for (let i = middle; i >= 0; --i) {
      this.heapify(i);
    }
  }

  build_heap_tree() {
    this.root = new TreeNode(this.arr[0], 0);
    this.__build_heap_tree(this.root, 0);
  }

  __build_heap_tree(node: TreeNode, index: number) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    if (left < this.size) {
      node.left = new TreeNode(this.arr[left], left);
      this.__build_heap_tree(node.left, left);
    }

    if (right < this.size) {
      node.right = new TreeNode(this.arr[right], right);
      this.__build_heap_tree(node.right, right);
    }
  }

  heap_sort() {
    let copy = this.arr.slice();
    for (let i = this.size - 1; i >= 0; --i) {
      let temp = this.arr[i];
      this.arr[i] = this.arr[0];
      this.arr[0] = temp;
      this.heapify(0, i);
    }
    let copy2 = this.arr.slice();
    this.arr = copy;
    return copy2;
  }
}
