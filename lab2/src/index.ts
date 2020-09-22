import { Tree, TreeNode } from "./tree";
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
