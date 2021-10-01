var inorderTraversal = function (root) {
  let node = root;
  const result = [];
  while (node) {
    if (!node.left) {
      result.push(node.val);
      node = node.right;
    } else {
      const pred = findPredecessor(node);
      if (pred.right === node) {
        pred.right = null;
        result.push(node.val);
        node = node.right;
      } else {
        pred.right = node;
        node = node.left;
      }
    }
  }
  return result;
};
function findPredecessor(root) {
  let node = root.left;
  while (node.right && node.right !== root) {
    node = node.right;
  }
  return node;
}
