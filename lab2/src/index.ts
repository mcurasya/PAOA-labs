import { Tree, TreeNode } from "./tree";
import { Heap } from "./heap";
const valueField = document.getElementById("value") as HTMLInputElement;
const nodesContainer = document.getElementById("tree") as HTMLDivElement;
const balanceDiv = document.getElementById("balance-status") as HTMLDivElement;
const balanceButton = document.getElementById("balance") as HTMLButtonElement;
const balanceDelayInput = document.getElementById(
  "balance-delay"
) as HTMLInputElement;
const button = document.getElementById("btn") as HTMLButtonElement;
const clearButton = document.getElementById("clear") as HTMLButtonElement;
const rotatorButton = document.getElementById(
  "rotate-balance"
) as HTMLButtonElement;
const heapButton = document.getElementById("build-heap") as HTMLButtonElement;
const restoreButton = document.getElementById(
  "restore-tree"
) as HTMLButtonElement;
const tree = new Tree();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function balanceTree() {
  let secs: number;
  if (balanceDelayInput.value != "") {
    secs = parseFloat(balanceDelayInput.value);
  } else {
    secs = 0;
  }
  if (secs === NaN) {
    alert("wrong time");
    return;
  }
  const values = tree.getSortedArray();
  nodesContainer.innerHTML = "";
  tree.root = undefined;
  for (const value of values) {
    tree.insert(value, true);
    nodesContainer.innerHTML = "";
    RenderTree(tree.root, nodesContainer);
    await sleep(Math.round(secs * 1000));
  }
}

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
  let valueDiv = document.createElement("div") as HTMLDivElement;
  let ChildrenDiv = document.createElement("div") as HTMLDivElement;
  if (node == undefined) {
    valueDiv.innerHTML = "";
    DOMNode.appendChild(valueDiv);
    return;
  }
  valueDiv.innerHTML = node.value.toString();
  valueDiv.oncontextmenu = (event) => {
    event.preventDefault();
    const clickedId = parseInt((event.target as HTMLDivElement).id);
    const foundNode = tree.getNodeById(clickedId);
    if (foundNode.parent == undefined) {
      tree.root = tree.rightRotate(tree.root);
    } else {
      if (foundNode.value < foundNode.parent.value) {
        foundNode.parent.left = tree.rightRotate(foundNode);
      } else {
        foundNode.parent.right = tree.rightRotate(foundNode);
      }
    }
    tree.updateParents();
    nodesContainer.innerHTML = "";
    RenderTree(tree.root, nodesContainer);
  };
  valueDiv.id = node.id.toString();
  valueDiv.onclick = (event) => {
    event.preventDefault();
    const clickedId = parseInt((event.target as HTMLDivElement).id);
    const foundNode = tree.getNodeById(clickedId);

    event.preventDefault();
    if (foundNode.parent == undefined) {
      tree.root = tree.leftRotate(tree.root);
    } else {
      if (foundNode.value < foundNode.parent.value) {
        foundNode.parent.left = tree.leftRotate(foundNode);
      } else {
        foundNode.parent.right = tree.leftRotate(foundNode);
      }
    }
    tree.updateParents();
    nodesContainer.innerHTML = "";
    RenderTree(tree.root, nodesContainer);
  };
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

button.addEventListener("click", onSubmit);
balanceButton.addEventListener("click", balanceTree);
valueField.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    button.click();
  }
});

balanceDelayInput.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    balanceButton.click();
  }
});

clearButton.addEventListener("click", () => {
  tree.root = undefined;

  nodesContainer.innerHTML = "";
  RenderTree(tree.root, nodesContainer);
});

async function findAndRotate(id: number, left: boolean) {
  let curr: TreeNode;

  curr = tree.getNodeById(id);
  if (left) {
    if (curr.parent == undefined) {
      tree.root = tree.leftRotate(tree.root);
    }
    if (curr.value < curr.parent.value) {
      curr.parent.left = tree.leftRotate(curr);
    } else {
      curr.parent.right = tree.leftRotate(curr);
    }
  } else {
    if (curr.parent == undefined) {
      tree.root = tree.rightRotate(tree.root);
    }
    if (curr.value < curr.parent.value) {
      curr.parent.left = tree.rightRotate(curr);
    } else {
      curr.parent.right = tree.rightRotate(curr);
    }
  }
  tree.updateParents();
  nodesContainer.innerHTML = "";
  RenderTree(tree.root, nodesContainer);
}

rotatorButton.onclick = async function (event) {
  let secs: number;
  if (balanceDelayInput.value != "") {
    secs = parseFloat(balanceDelayInput.value);
  } else {
    secs = 0;
  }
  if (secs === NaN) {
    alert("wrong time");
    return;
  }
  findAndRotate(2, true);
  await sleep(secs * 1000);
  findAndRotate(3, true);
  await sleep(secs * 1000);
  findAndRotate(1, false);
  await sleep(secs * 1000);
  findAndRotate(0, false);
  await sleep(secs * 1000);
  findAndRotate(3, false);
  await sleep(secs * 1000);
  findAndRotate(8, false);
  await sleep(secs * 1000);
  findAndRotate(5, true);
  await sleep(secs * 1000);
  findAndRotate(3, false);
  await sleep(secs * 1000);
  findAndRotate(14, true);
  await sleep(secs * 1000);
  findAndRotate(9, false);
  await sleep(secs * 1000);
  findAndRotate(6, false);
  await sleep(secs * 1000);
  findAndRotate(0, true);
  await sleep(secs * 1000);
};

heapButton.onclick = (event) => {
  const h = new Heap(startArr);
  nodesContainer.innerHTML = "";
  RenderTree(h.root, nodesContainer);
  console.log("sorted array is: " + h.heap_sort().toString());
};

restoreButton.onclick = (event) => {
  location.reload();
};

const startArr = [15, 14, 5, 10, 8, 2, 26, 11, 4, 25, 3, 6, 28, 29, 16, 18];

for (const a of startArr) {
  tree.insert(a);
}
RenderTree(tree.root, nodesContainer);
