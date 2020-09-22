import { Tree, TreeNode } from "./tree";
const valueField = document.getElementById("value") as HTMLInputElement;
const nodesContainer = document.getElementById("tree") as HTMLDivElement;
const balanceDiv = document.getElementById("balance-status") as HTMLDivElement;
const balanceButton = document.getElementById("balance") as HTMLButtonElement;
const balanceDelayInput = document.getElementById(
  "balance-delay"
) as HTMLInputElement;
const button = document.getElementById("btn") as HTMLButtonElement;
const clearButton = document.getElementById("clear") as HTMLButtonElement;
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

for (const a of [15, 14, 0, 10, 8, 2, 26, 11, 4, 25, 3, 6, 28, 29, 16, 18]) {
  tree.insert(a);
}
RenderTree(tree.root, nodesContainer);
