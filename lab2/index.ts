class TreeNode {
  value: number;
  height: number;
  left: TreeNode;
  right: TreeNode;
  constructor(val: number) {
    this.value = val;
    this.height = 0;
  }
}

class Tree {
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

  __isBalanced(root: TreeNode) {
    if (root == undefined) {
      return true;
    }
    const lh = this.getHeight(root.left);
    const rh = this.getHeight(root.right);
    return (
      Math.abs(rh - lh) <= 1 &&
      this.__isBalanced(root.left) &&
      this.__isBalanced(root.right)
    );
  }

  getBalance(node: TreeNode) {
    if (node == undefined) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  balanceStep() {
    this.__balanceStep(this.root);
  }

  __balanceStep(node: TreeNode) {
    if (node == undefined) {
      return;
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

const valueField = document.getElementById("value") as HTMLInputElement;
const nodesContainer = document.getElementById("tree") as HTMLDivElement;
const balanceDiv = document.getElementById("balance-status") as HTMLDivElement;
const tree = new Tree();
const button = document.getElementById("btn") as HTMLButtonElement;

valueField.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();

    button.click();
  }
});

function onSubmit() {
  const retrieved = valueField.value;
  valueField.value = "";
  if (retrieved != "") {
    const gotValue = parseInt(retrieved);
    if (isNaN(gotValue)) {
      alert("wrong input!");
      return;
    }
    tree.insert(gotValue);
    nodesContainer.innerHTML = "";
    RenderTree(tree.root, nodesContainer);
  } else alert("field is empty");
}

function RenderTree(node: TreeNode, DOMNode: HTMLDivElement) {
  var valueDiv = document.createElement("div") as HTMLDivElement;
  var ChildrenDiv = document.createElement("div") as HTMLDivElement;
  if (node == undefined) {
    valueDiv.innerHTML = "";
    DOMNode.appendChild(valueDiv);
    return;
  } else {
    valueDiv.innerHTML = node.value.toString();
  }
  valueDiv.classList.add("node-value");
  let leftChild = document.createElement("div") as HTMLDivElement;
  let rightChild = document.createElement("div") as HTMLDivElement;
  leftChild.classList.add("node-child");
  rightChild.classList.add("node-child");
  ChildrenDiv.classList.add("children-container");
  ChildrenDiv.appendChild(leftChild);
  ChildrenDiv.appendChild(rightChild);
  DOMNode.appendChild(valueDiv);
  DOMNode.appendChild(ChildrenDiv);
  RenderTree(node.left, ChildrenDiv.firstChild as HTMLDivElement);
  RenderTree(node.right, ChildrenDiv.lastChild as HTMLDivElement);
}

function balance() {}

for (const a of [15, 14, 0, 10, 8, 2, 26, 11, 4, 25, 3, 6, 28, 29, 16, 18]) {
  tree.insert(a);
}
RenderTree(tree.root, nodesContainer);
