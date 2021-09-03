function findPredecessor(root) {
  if (!root.left) return root;
  let cur = root.left;
  while (cur.right && cur.right !== root) cur = cur.right;
  return cur;
}

//This is Post Order :children before node( L ,R , N)
var postorderTraversal = function (root) {
  // Making our tree left subtree of a dummy Node
  const dummyRoot = new TreeNode(0, root);
  //Think of P as the current node
  let p = dummyRoot;
  let first;
  let middle;
  let last;
  const result = [];
  while (p !== null) {
    if (p.left === null) {
      p = p.right;
    } else {
      //  p has a left child => it also has a predeccessor
      // make p as right child predeccessor of p

      const pred = findPredecessor(p);
      if (pred.right === null) {
        // predeccessor found for first time
        // modify the tree
        pred.right = p;
        p = p.left;
      } else {
        // predeccessor found second time
        // reverse the right references in chain from pred to p
        first = p;
        middle = p.left;
        while (middle != p) {
          last = middle.right;
          middle.right = first;
          first = middle;
          middle = last;
        }
        // visit the nodes from pred to p
        // again reverse the right references from pred to p
        first = p;
        middle = pred;
        while (middle != p) {
          result.push(middle.val);
          last = middle.right;
          middle.right = first;
          first = middle;
          middle = last;
        }
        // remove the pred to node reference to restore the tree structure
        pred.right = null;
        p = p.right;
      }
    }
  }
  return result;
};
