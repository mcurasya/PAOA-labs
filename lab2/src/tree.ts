export class TreeNode {
  value: number;
  height: number;
  left: TreeNode;
  right: TreeNode;
  constructor(val: number) {
    this.value = val;
    this.height = 0;
  }
}

export class Tree {
  root: TreeNode;
  constructor() {
    this.root = undefined;
  }

  insert(val: number) {
    this.root = this.__insert(val, this.root);
  }

  __insert(val: number, root: TreeNode): TreeNode {
    if (root == undefined) {
      return new TreeNode(val);
    } else if (val < root.value) {
      root.left = this.__insert(val, root.left);
    } else {
      root.right = this.__insert(val, root.right);
    }
    root.height =
      Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    return root;
  }

  getHeight(node: TreeNode) {
    if (node == undefined) {
      return 0;
    }
    return node.height;
  }

  isBalanced() {
    return this.__isBalanced(this.root);
  }

  __isBalanced(root: TreeNode): boolean {
    throw new Error("not yet implemented");
  }

  getBalance(node: TreeNode) {
    if (node == undefined) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  balanceStep() {}

  __balanceStep(node: TreeNode) {}

  leftRotate(node: TreeNode) {
    let y = node.right;
    let t2 = y.left;

    y.left = node;
    node.right = t2;
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
  }

  rightRotate(node: TreeNode) {
    let y = node.left;
    let t3 = y.right;

    y.right = node;
    node.left = t3;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
  }
}
