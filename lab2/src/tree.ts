export class TreeNode {
  value: number;
  height: number;
  id: number;
  parent: TreeNode;
  left: TreeNode;
  right: TreeNode;
  constructor(val: number, id: number, parent: TreeNode) {
    this.value = val;
    this.height = 1;
    this.id = id;
    this.parent = parent;
  }
}

export class Tree {
  root: TreeNode;
  currentId: number;
  constructor() {
    this.root = undefined;
    this.currentId = 0;
  }

  insert(val: number, balance_tree = false) {
    this.root = this.__insert(val, this.root, balance_tree, undefined);
  }

  __insert(
    val: number,
    node: TreeNode,
    balance_tree = false,
    parentNode: TreeNode
  ): TreeNode {
    if (node == undefined) {
      return new TreeNode(val, this.currentId++, parentNode);
    } else if (val < node.value) {
      node.left = this.__insert(val, node.left, balance_tree, node);
    } else {
      node.right = this.__insert(val, node.right, balance_tree, node);
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
      this.updateParents();
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

  getNodeById(id: number): TreeNode {
    return this.__getNodeById(id, this.root);
  }

  __getNodeById(id: number, node: TreeNode): TreeNode {
    if (node == undefined) {
      return undefined;
    }
    if (node.id === id) {
      return node;
    }
    let leftSearch = this.__getNodeById(id, node.left);
    let rightSearch = this.__getNodeById(id, node.right);
    if (leftSearch != undefined) {
      return leftSearch;
    }
    if (rightSearch != undefined) {
      return rightSearch;
    }
    return undefined;
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

  updateParents() {
    this.root.parent = undefined;
    this.__updateParents(this.root);
  }

  __updateParents(node: TreeNode) {
    if (node.left != undefined) {
      node.left.parent = node;
      this.__updateParents(node.left);
    }
    if (node.right != undefined) {
      node.right.parent = node;
      this.__updateParents(node.right);
    }
  }

  leftRotate(node: TreeNode) {
    let y = node.right;
    if (y == undefined) {
      alert("cant rotate");
      return node;
    }
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
    if (y == undefined) {
      alert("cant rotate");
      return node;
    }
    let t3 = y.right;
    y.right = node;
    node.left = t3;

    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    return y;
  }
}
