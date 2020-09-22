export class TreeNode {
  value: number;
  height: number;
  left: TreeNode;
  right: TreeNode;
  constructor(val: number) {
    this.value = val;
    this.height = 1;
  }
}

export class Tree {
  root: TreeNode;
  constructor() {
    this.root = undefined;
  }

  insert(val: number, balance_tree = false) {
    this.root = this.__insert(val, this.root, balance_tree);
  }

  __insert(val: number, node: TreeNode, balance_tree = false): TreeNode {
    if (node == undefined) {
      return new TreeNode(val);
    } else if (val < node.value) {
      node.left = this.__insert(val, node.left, balance_tree);
    } else {
      node.right = this.__insert(val, node.right, balance_tree);
    }
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    if (balance_tree) {
      const balance = this.getBalance(node);
      if (balance > 1 && val < node.left.value) {
        return this.rightRotate(node);
      }
      if (balance < -1 && val > node.right.value) {
        return this.leftRotate(node);
      }
      if (balance > 1 && val > node.left.value) {
        node.left = this.leftRotate(node);
        return this.rightRotate(node);
      }
      if (balance < -1 && val < node.right.value) {
        node.right = this.rightRotate(node);
        return this.leftRotate(node);
      }
    }
    return node;
  }

  getHeight(node: TreeNode) {
    if (node == undefined) {
      return 0;
    }
    return node.height;
  }

  getBalance(node: TreeNode) {
    if (node == undefined) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  getSortedArray() {
    return this.__getSortedArray(this.root);
  }

  __getSortedArray(root: TreeNode): number[] {
    if (root == undefined) {
      return [];
    } else {
      return this.__getSortedArray(root.left).concat(
        [root.value],
        this.__getSortedArray(root.right)
      );
    }
  }

  leftRotate(node: TreeNode) {
    let y = node.right;
    let t2 = y.left;

    y.left = node;
    node.right = t2;
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    return y;
  }

  rightRotate(node: TreeNode) {
    let y = node.left;
    let t3 = y.right;

    y.right = node;
    node.left = t3;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    return y;
  }
}
